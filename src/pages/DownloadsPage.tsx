import { useState } from 'react';
import type { FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';

// Certificate options – can be expanded or fetched dynamically
const CERTIFICATE_OPTIONS = [
  'Character Certificate',
  'Transcript',
  'Provisional Mark Sheet',
  'Pass Certificate',
  'Leaving Certificate',
];

export default function DownloadsPage() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckbox = (cert: string) => {
    setSelectedCerts(prev =>
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedCerts.length === 0) {
      alert('Please select at least one certificate type.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/request-certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          department,
          email,
          semester: year,
          certificates: selectedCerts
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err.message || 'An error occurred while submitting the request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Download Request Submitted – COE (KIT)</title>
          <meta name="description" content="Your certificate download request has been received." />
        </Helmet>
        <div className="max-w-2xl mx-auto py-12 px-5">
          <h1 className="text-2xl font-bold text-kit-navy mb-4">Request Submitted</h1>
          <p className="mb-2">Thank you, <strong>{name}</strong>. Your request for the following certificate(s) has been recorded:</p>
          <ul className="list-disc list-inside mb-4">
            {selectedCerts.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
          <p className="text-sm text-kit-muted">
            You will receive the documents at <a href={`mailto:${email}`} className="text-kit-gold hover:underline">{email}</a> shortly.
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Student Certificate Request – COE (KIT)</title>
        <meta name="description" content="Request certificates by filling out the form below." />
      </Helmet>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 flex items-center justify-center gap-3 max-w-2xl mx-auto mt-6">
          <FileText size={20} />
          <span className="font-bold">{error}</span>
        </div>
      )}
      <div className="max-w-2xl mx-auto py-12 px-5">
        <h1 className="text-2xl font-extrabold text-kit-navy mb-6">Request Certificates</h1>
        <form onSubmit={handleSubmit} className="grid gap-5">
          {/* Student Name */}
          <div>
            <label htmlFor="stud-name" className="block text-sm font-medium text-kit-muted mb-1">Student Name</label>
            <input
              id="stud-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-input w-full"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-kit-muted mb-1">Department</label>
            <select
              id="department"
              value={department}
              onChange={e => setDepartment(e.target.value)}
              className="form-input w-full"
              required
            >
              <option value="" disabled>Select department</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">Electronics & Communication Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-kit-muted mb-1">Year</label>
            <select
              id="year"
              value={year}
              onChange={e => setYear(e.target.value)}
              className="form-input w-full"
              required
            >
              <option value="" disabled>Select year</option>
              <option value="First">First Year</option>
              <option value="Second">Second Year</option>
              <option value="Third">Third Year</option>
              <option value="Fourth">Fourth Year</option>
            </select>
          </div>

          {/* Institution Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-kit-muted mb-1">Institution Email ID</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-input w-full"
              placeholder="you@kit.edu"
              required
            />
          </div>

          {/* Certificate selection */}
          <fieldset className="border border-kit-gold p-4 rounded-md">
            <legend className="text-sm font-medium text-kit-gold px-2">Select Certificate(s)</legend>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {CERTIFICATE_OPTIONS.map(cert => (
                <label key={cert} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCerts.includes(cert)}
                    onChange={() => handleCheckbox(cert)}
                    className="form-checkbox h-4 w-4 text-kit-gold border-kit-gold"
                  />
                  <span className="ml-2 text-kit-muted">{cert}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="btn-primary self-start">
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
}
