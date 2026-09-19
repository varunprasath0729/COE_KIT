import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy-loaded pages for code splitting + better Lighthouse score
const HomePage         = lazy(() => import('./pages/HomePage'));
const AboutPage        = lazy(() => import('./pages/AboutPage'));
const ExaminationsPage = lazy(() => import('./pages/ExaminationsPage'));
const TimetablePage    = lazy(() => import('./pages/TimetablePage'));
const NotificationsPage= lazy(() => import('./pages/NotificationsPage'));
const ResultsPage      = lazy(() => import('./pages/ResultsPage'));
const DownloadsPage    = lazy(() => import('./pages/DownloadsPage'));
const RegulationsPage  = lazy(() => import('./pages/RegulationsPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'));
const StudentDashboard = lazy(() => import('./portals/StudentDashboard'));
const FacultyDashboard = lazy(() => import('./portals/FacultyDashboard'));
const AdminPanel       = lazy(() => import('./portals/AdminPanel'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-64" role="status" aria-label="Loading page">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-kit-navy border-t-kit-gold rounded-full animate-spin mx-auto mb-3" />
        <p className="text-kit-muted text-sm">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                {/* Public routes */}
                <Route path="/"              element={<HomePage />} />
                <Route path="/about"         element={<AboutPage />} />
                <Route path="/examinations"  element={<ExaminationsPage />} />
                <Route path="/timetable"     element={<TimetablePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/results"       element={<ResultsPage />} />
                <Route path="/downloads"     element={<DownloadsPage />} />
                <Route path="/regulations"   element={<RegulationsPage />} />
                <Route path="/contact"       element={<ContactPage />} />

                {/* Protected role-based dashboards */}
                <Route path="/student" element={
                  <ProtectedRoute role="STUDENT">
                    <StudentDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/faculty" element={
                  <ProtectedRoute role="FACULTY">
                    <FacultyDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin" element={
                  <ProtectedRoute role="COE_ADMIN">
                    <AdminPanel />
                  </ProtectedRoute>
                } />

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}
