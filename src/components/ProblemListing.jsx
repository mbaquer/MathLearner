// src/components/ProblemListing.jsx
import React, { useState, useEffect } from 'react';

const ProblemListing = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Example API endpoint
    fetch('/api/problems')
      .then(response => response.json())
      .then(data => setProblems(data))
      .catch(error => console.error('Error fetching problems:', error));
  }, []);

  return (
    <div className="problem-listing">
      <h2>Available Problems</h2>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>{problem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemListing;