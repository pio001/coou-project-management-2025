import React, { useState } from 'react';

const PlagCheck = () => {
  const [file, setFile] = useState(null);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!file) {
      setError('Please select a file to check.');
      return;
    }

    setChecking(true);

    // Simulate plagiarism check
    setTimeout(() => {
      // Random result for demo
      const percent = Math.floor(Math.random() * 40) + 60; // 60-99%
      const passed = percent < 80 ? false : true;
      setResult({
        percent,
        passed,
        message: passed
          ? 'No significant plagiarism detected.'
          : 'High similarity detected. Please review your work.',
      });
      setChecking(false);
    }, 2000);
  };

  return (
    <div className="plagiarism-check-container" style={{
      maxWidth: 480,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(44,62,80,0.07)',
      padding: 32
    }}>
      <h2 style={{marginBottom: 24}}>Plagiarism Check</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 18}}>
          <label htmlFor="plag-file" style={{fontWeight: 500}}>Select File</label>
          <input
            id="plag-file"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{display: 'block', marginTop: 6}}
            required
          />
        </div>
        {error && <div style={{color: '#e74c3c', marginBottom: 12}}>{error}</div>}
        <button
          type="submit"
          disabled={checking}
          style={{
            background: '#2980ef',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 28px',
            fontSize: '1em',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          {checking ? 'Checking...' : 'Check Plagiarism'}
        </button>
      </form>
      {result && (
        <div style={{
          marginTop: 24,
          padding: 18,
          borderRadius: 8,
          background: result.passed ? '#eafaf1' : '#faeaea',
          color: result.passed ? '#27ae60' : '#e74c3c',
          fontWeight: 500,
          textAlign: 'center'
        }}>
          <div style={{fontSize: '1.2em', marginBottom: 8}}>
            Similarity: <b>{result.percent}%</b>
          </div>
          <div>{result.message}</div>
        </div>
      )}
    </div>
  );
};

export default PlagCheck;
