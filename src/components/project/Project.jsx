import React, { useEffect, useState } from 'react';
import './project.css'; // Create and style this CSS file for a modern UI

// Example project data for each research stage
const dummyProjects = [
  {
    id: 1,
    title: 'STAGE 1: Topic Generation',
    status: 'finished',
    approved: true,
    plagiarism: 'pass',
    submittedAt: '2024-05-10',
    approvedAt: '2024-05-12',
  },
  {
    id: 2,
    title: 'STAGE 2: Chapter One – Introduction',
    status: 'finished',
    approved: true,
    plagiarism: 'pass',
    submittedAt: '2024-05-15',
    approvedAt: '2024-05-17',
  },
  {
    id: 3,
    title: 'STAGE 3: Chapter Two – Literature Review',
    status: 'in review',
    approved: false,
    plagiarism: 'pending',
    submittedAt: '2024-06-01',
    approvedAt: '',
  },
  {
    id: 4,
    title: 'STAGE 4: Chapter Three – Research Methodology',
    status: 'pending',
    approved: false,
    plagiarism: 'pending',
    submittedAt: '',
    approvedAt: '',
  },
  {
    id: 5,
    title: 'STAGE 5: Chapter Four – Data Presentation and Analysis',
    status: 'pending',
    approved: false,
    plagiarism: 'pending',
    submittedAt: '',
    approvedAt: '',
  },
  {
    id: 6,
    title: 'STAGE 6: Chapter Five – Summary, Conclusion, and Recommendations',
    status: 'pending',
    approved: false,
    plagiarism: 'pending',
    submittedAt: '',
    approvedAt: '',
  },
  {
    id: 7,
    title: 'Final Touches',
    status: 'pending',
    approved: false,
    plagiarism: 'pending',
    submittedAt: '',
    approvedAt: '',
  },
];

const statusColors = {
  finished: '#27ae60',
  'in review': '#f39c12',
  failed: '#e74c3c',
  pending: '#95a5a6',
};

const plagiarismColors = {
  pass: '#27ae60',
  fail: '#e74c3c',
  pending: '#95a5a6',
};

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace with API call to fetch user's projects
    setProjects(dummyProjects);
  }, []);

  return (
    <div className="user-projects modern-ui">
      <h2 className="project-title">Your Project Stages</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="project-table-wrapper">
          <table className="project-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Status</th>
                <th>Approved</th>
                <th>Plagiarism</th>
                <th>Submitted At</th>
                <th>Approved At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj.id}>
                  <td>{proj.title}</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        background: statusColors[proj.status] || '#bdc3c7',
                        color: '#fff',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontWeight: 500,
                        fontSize: '0.95em',
                      }}
                    >
                      {proj.status.charAt(0).toUpperCase() + proj.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`approved-badge ${proj.approved ? 'approved' : 'not-approved'}`}
                    >
                      {proj.approved ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>
                    <span
                      className="plagiarism-badge"
                      style={{
                        background: plagiarismColors[proj.plagiarism] || '#bdc3c7',
                        color: '#fff',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontWeight: 500,
                        fontSize: '0.95em',
                      }}
                    >
                      {proj.plagiarism.charAt(0).toUpperCase() + proj.plagiarism.slice(1)}
                    </span>
                  </td>
                  <td>{proj.submittedAt || <span style={{ color: '#aaa' }}>--</span>}</td>
                  <td>{proj.approvedAt || <span style={{ color: '#aaa' }}>--</span>}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => alert(`Viewing details for: ${proj.title}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Project;
