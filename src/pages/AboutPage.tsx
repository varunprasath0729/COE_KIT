import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <Helmet>
        <title>About COE | COE Portal — Kangeyam Institute of Technology</title>
      </Helmet>
      <div className="bg-white rounded-2xl p-8 shadow-kit-sm border border-kit-border text-center min-h-[40vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold text-kit-navy mb-4">About COE</h1>
        <p className="text-kit-body max-w-2xl">
          Content for the Office of the Controller of Examinations will be updated soon.
        </p>
      </div>
    </div>
  );
}
