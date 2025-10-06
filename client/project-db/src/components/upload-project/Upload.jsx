import React, { useState } from 'react';

const stages = [
  'STAGE 1: Topic Generation',
  'STAGE 2: Chapter One – Introduction',
  'STAGE 3: Chapter Two – Literature Review',
  'STAGE 4: Chapter Three – Research Methodology',
  'STAGE 5: Chapter Four – Data Presentation and Analysis',
  'STAGE 6: Chapter Five – Summary, Conclusion, and Recommendations',
  'Final Touches',
];

const Upload = () => {
  const [selectedStage, setSelectedStage] = useState('');
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleStageChange = (e) => setSelectedStage(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleNotesChange = (e) => setNotes(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!selectedStage || !file) {
      setError('Please select a stage and choose a file.');
      return;
    }

    // Simulate upload
    setTimeout(() => {
      setSuccess('Project uploaded successfully!');
      setFile(null);
      setSelectedStage('');
      setNotes('');
    }, 1200);
  };

  return (
    <div className="upload-container" style={{
      maxWidth: 480,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(44,62,80,0.07)',
      padding: 32
    }}>
      <h2 style={{marginBottom: 24}}>Upload Project Stage</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 18}}>
          <label htmlFor="stage" style={{fontWeight: 500}}>Select Stage</label>
          <select
            id="stage"
            value={selectedStage}
            onChange={handleStageChange}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: 6,
              border: '1px solid #ccc',
              marginTop: 6
            }}
            required
          >
            <option value="">-- Choose Stage --</option>
            {stages.map((stage, idx) => (
              <option key={idx} value={stage}>{stage}</option>
            ))}
          </select>
        </div>
        <div style={{marginBottom: 18}}>
          <label htmlFor="file" style={{fontWeight: 500}}>Select File</label>
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{display: 'block', marginTop: 6}}
            required
          />
        </div>
        <div style={{marginBottom: 18}}>
          <label htmlFor="notes" style={{fontWeight: 500}}>Notes (optional)</label>
          <textarea
            id="notes"
            value={notes}
            onChange={handleNotesChange}
            rows={3}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: 6,
              border: '1px solid #ccc',
              marginTop: 6,
              resize: 'vertical'
            }}
            placeholder="Any additional information..."
          />
        </div>
        {error && <div style={{color: '#e74c3c', marginBottom: 12}}>{error}</div>}
        {success && <div style={{color: '#27ae60', marginBottom: 12}}>{success}</div>}
        <button
          type="submit"
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
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
