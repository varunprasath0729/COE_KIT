import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <Helmet>
        <title>Page Not Found | COE Portal</title>
      </Helmet>
      <div className="bg-white rounded-2xl p-8 shadow-kit-sm border border-kit-border text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-kit-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-kit-navy mb-4">Page Not Found</h2>
        <p className="text-kit-body mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <NavLink to="/" className="btn-primary">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}
