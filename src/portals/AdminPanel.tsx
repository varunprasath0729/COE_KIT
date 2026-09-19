import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, FileText, Calendar, User, Mail, Shield } from 'lucide-react';

interface CertificateRequest {
  id: number;
  name: string;
  department: string;
  email: string;
  semester: string;
  certificates: string;
  created_at: string;
}

export default function AdminPanel() {
  const [requests, setRequests] = useState<CertificateRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Authentication required. Please log in as an Admin.');
      }

      const response = await fetch('http://localhost:3001/api/request-certificate', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
           // Token is invalid/expired, clear it
           localStorage.removeItem('adminToken');
        }
        throw new Error(data.error || 'Failed to fetch certificate requests');
      }
      
      setRequests(data.data);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const parseCertificates = (certsString: string) => {
    try {
      const certs = JSON.parse(certsString);
      return Array.isArray(certs) ? certs.join(', ') : certsString;
    } catch {
      return certsString;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <Helmet>
        <title>Admin Panel | COE Portal</title>
      </Helmet>

      {/* Header */}
      <div className="bg-gradient-to-r from-kit-navy to-[#004080] rounded-2xl p-8 mb-8 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <Shield size={24} className="text-kit-gold" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold mb-1 tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-300 text-sm">COE Certificate Request Management</p>
          </div>
        </div>
        <button 
          onClick={fetchRequests}
          disabled={loading}
          className="bg-kit-gold text-kit-navy px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-8 flex items-center gap-3">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-kit-sm border border-kit-border overflow-hidden">
        <div className="bg-slate-50 border-b border-kit-border p-5 flex items-center gap-3">
          <Database size={20} className="text-kit-navy" />
          <h2 className="text-kit-navy font-bold text-lg">Recent Certificate Requests</h2>
          <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
            {requests.length} Total
          </span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-kit-muted">
            <div className="inline-block w-8 h-8 border-4 border-kit-gold border-t-transparent rounded-full animate-spin mb-4" />
            <p>Loading database records...</p>
          </div>
        ) : requests.length === 0 ? (
          <div className="p-12 text-center text-kit-muted">
            <p>No certificate requests found in the database.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white border-b border-kit-border">
                  <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase">ID</th>
                  <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase">Student Info</th>
                  <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase">Requested Certificates</th>
                  <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase">Date Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kit-border/50">
                {requests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 align-top">
                      <span className="text-xs font-bold text-slate-400">#{req.id}</span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="font-bold text-kit-navy mb-1 flex items-center gap-2">
                        <User size={14} className="text-kit-muted" />
                        {req.name} 
                        <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded ml-1">
                          Sem {req.semester}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mb-1">Dep: {req.department}</div>
                      <div className="text-xs text-blue-600 flex items-center gap-1">
                        <Mail size={12} /> {req.email}
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <FileText size={16} className="text-kit-gold shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-kit-body">
                          {parseCertificates(req.certificates)}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg inline-flex">
                        <Calendar size={14} />
                        {formatDate(req.created_at)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
