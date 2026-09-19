import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, GraduationCap, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { DEMO_STUDENTS } from '../data/coeData';
import type { AuthUser } from '../types';

interface Props {
  type: 'student' | 'faculty' | 'admin';
  onClose: () => void;
}

const CONFIGS = {
  student: {
    title: 'Student Portal Login',
    icon: GraduationCap,
    accentClass: 'border-t-kit-navy',
    btnClass: 'btn-primary',
    demoFields: { reg: '731821104001', pass: '2003-05-14' },
  },
  faculty: {
    title: 'Faculty / Invigilator Portal',
    icon: BookOpen,
    accentClass: 'border-t-kit-gold',
    btnClass: 'btn-gold',
    demoFields: { reg: 'KIT-FAC-104', pass: 'faculty@kit' },
  },
  admin: {
    title: 'COE Admin Login',
    icon: ShieldCheck,
    accentClass: 'border-t-kit-crimson',
    btnClass: 'btn-danger',
    demoFields: { reg: 'admin@kitech.edu.in', pass: 'admin2026' },
  },
};

export default function LoginModal({ type, onClose }: Props) {
  const cfg = CONFIGS[type];
  const Icon = cfg.icon;
  const [regVal, setRegVal] = useState('');
  const [passVal, setPassVal] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleDemo = () => {
    setRegVal(cfg.demoFields.reg);
    setPassVal(cfg.demoFields.pass);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!regVal.trim() || !passVal) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      if (type === 'admin') {
        const response = await fetch('http://localhost:3001/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: regVal, password: passVal }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Invalid credentials');
        }

        // Store JWT token securely
        localStorage.setItem('adminToken', data.token);

        login({ id: data.user.id, name: 'COE Admin', role: data.user.role, email: data.user.email });
        onClose();
        navigate('/admin');
      } else {
        // Fallback for students and faculty
        setTimeout(() => {
          let userData: AuthUser;
          if (type === 'student') {
            const student = DEMO_STUDENTS[regVal] || DEMO_STUDENTS['731821104001'];
            userData = { id: student.registerNo, name: student.name, role: 'STUDENT', registerNo: student.registerNo };
            login(userData);
            onClose();
            navigate('/student');
          } else if (type === 'faculty') {
            userData = { id: regVal, name: 'Dr. P. Ramesh', role: 'FACULTY', staffId: regVal };
            login(userData);
            onClose();
            navigate('/faculty');
          }
          setLoading(false);
        }, 600);
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check credentials.');
      setLoading(false);
    } finally {
      if (type === 'admin') {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm z-[2000] flex items-center justify-center p-5 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className={`bg-white rounded-2xl w-full max-w-md shadow-kit-xl overflow-hidden border-t-4 ${cfg.accentClass}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-kit-bg-alt border-b border-kit-border">
          <h2 id="modal-title" className="flex items-center gap-2 text-lg font-bold text-kit-navy">
            <Icon size={18} /> {cfg.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-kit-muted hover:text-kit-crimson transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label htmlFor="modal-id" className="form-label">
              {type === 'student' ? 'Register Number' : type === 'faculty' ? 'Faculty Staff ID' : 'Admin Email'} *
            </label>
            <input
              id="modal-id"
              type={type === 'admin' ? 'email' : 'text'}
              required
              value={regVal}
              onChange={e => setRegVal(e.target.value)}
              placeholder={cfg.demoFields.reg}
              className="form-input"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="modal-pass" className="form-label">
              {type === 'student' ? 'Password / Date of Birth' : 'Password'} *
            </label>
            <input
              id="modal-pass"
              type="password"
              required
              value={passVal}
              onChange={e => setPassVal(e.target.value)}
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          {error && (
            <p className="text-kit-crimson text-sm font-semibold bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ⚠ {error}
            </p>
          )}

          <div className="flex gap-2 pt-2">
            <button type="submit" disabled={loading} className={`${cfg.btnClass} flex-1`}>
              {loading ? 'Authenticating…' : 'Sign In'}
            </button>
            <button type="button" onClick={handleDemo} className="btn-outline flex items-center gap-1.5 whitespace-nowrap">
              <Zap size={13} /> Demo Fill
            </button>
          </div>

          <p className="text-xs text-kit-muted text-center pt-1">
            🔒 Demo authentication only — no real credentials stored.
          </p>
        </form>
      </div>
    </div>
  );
}
