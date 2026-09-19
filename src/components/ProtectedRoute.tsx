import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../types';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  role: UserRole;
  redirectTo?: string;
}

export default function ProtectedRoute({ children, role, redirectTo = '/' }: Props) {
  const { user } = useAuth();
  if (!user || user.role !== role) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
}
