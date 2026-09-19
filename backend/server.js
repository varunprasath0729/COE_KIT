const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = 'coe_kit_super_secret_key_2026';

// Middleware
app.use(cors());
app.use(express.json());

// Global connection pool
let pool;

async function initializeDatabase() {
  try {
    // 1. Connect without database to create it if it doesn't exist
    const initialConn = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '', // <--- PUT YOUR MYSQL PASSWORD HERE IF YOU HAVE ONE
      port: 3306
    });

    console.log('Connected to MySQL server.');
    await initialConn.query('CREATE DATABASE IF NOT EXISTS coe_kit_db;');
    console.log('Database coe_kit_db is ready.');
    await initialConn.end();

    // 2. Create the actual connection pool using the database
    pool = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: '', // <--- PUT YOUR MYSQL PASSWORD HERE IF YOU HAVE ONE
      database: 'coe_kit_db',
      port: 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // 3. Create tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificate_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        department VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        semester VARCHAR(50) NOT NULL,
        certificates TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'COE_ADMIN',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 4. Seed default admin if none exist
    const [rows] = await pool.query('SELECT COUNT(*) as count FROM admins');
    if (rows[0].count === 0) {
      const defaultPassword = 'admin2026';
      const saltRounds = 10;
      const hash = await bcrypt.hash(defaultPassword, saltRounds);
      await pool.query('INSERT INTO admins (email, password_hash) VALUES (?, ?)', ['admin@kitech.edu.in', hash]);
      console.log('Default admin seeded.');
    }

  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}

initializeDatabase();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.status(401).json({ error: 'Authentication token required.' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
    req.user = user;
    next();
  });
};

// API Endpoints

// POST admin login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM admins WHERE email = ?', [email]);
    const admin = rows[0];

    if (!admin) return res.status(401).json({ error: 'Invalid email or password.' });

    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) return res.status(401).json({ error: 'Invalid email or password.' });

    // Generate JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: admin.id, email: admin.email, role: admin.role }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// GET endpoint to fetch all requests (PROTECTED)
app.get('/api/request-certificate', authenticateToken, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM certificate_requests ORDER BY created_at DESC');
    res.json({
      message: 'success',
      data: rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST endpoint to handle form submission (Public)
app.post('/api/request-certificate', async (req, res) => {
  const { name, department, email, semester, certificates } = req.body;

  if (!name || !department || !email || !semester || !certificates) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const sql = `
      INSERT INTO certificate_requests (name, department, email, semester, certificates) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [name, department, email, semester, JSON.stringify(certificates)];
    
    const [result] = await pool.query(sql, params);
    
    res.status(201).json({
      message: 'Certificate request submitted successfully.',
      id: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Secure server is running on http://localhost:${PORT}`);
});
