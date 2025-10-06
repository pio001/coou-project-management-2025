import React from 'react';
import './intergrity-policy.css'

const IntegrityPolicy = () => {
  return (
    <div className="integrity-container">
      <h1 className="integrity-title">Academic Integrity Policy</h1>
      
      <div className="integrity-section">
        <h2>Our Commitment</h2>
        <p>We are committed to maintaining the highest standards of academic integrity and ethical conduct in all research and academic work.</p>
      </div>

      <div className="integrity-section">
        <h2>Key Principles</h2>
        <ul className="integrity-list">
          <li>
            <h3>Plagiarism Prevention</h3>
            <p>All work must be original or properly cited. Our plagiarism detection system helps ensure academic honesty.</p>
          </li>
          <li>
            <h3>Data Integrity</h3>
            <p>Research data must be accurate, verifiable, and properly documented.</p>
          </li>
          <li>
            <h3>Collaboration Guidelines</h3>
            <p>Group work must clearly indicate individual contributions and acknowledge all participants.</p>
          </li>
        </ul>
      </div>

      <div className="integrity-section">
        <h2>Violations & Consequences</h2>
        <div className="integrity-alert">
          <p>Violations of academic integrity may result in:</p>
          <ul>
            <li>Project rejection</li>
            <li>Grade penalties</li>
            <li>Academic probation</li>
            <li>Suspension or expulsion in severe cases</li>
          </ul>
        </div>
      </div>

      <div className="integrity-footer">
        <p>By using this platform, you agree to uphold these academic integrity standards.</p>
      </div>
    </div>
  );
};

export default IntegrityPolicy;