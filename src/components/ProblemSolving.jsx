// src/components/ProblemSolving.jsx
import React, { useState } from 'react';

const ProblemSolving = ({ problem }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === problem.correctAnswer) {
      setFeedback('Correct! Well done.');
    } else {
      setFeedback('Try again.');
    }
  };

  return (
    <div className="problem-solving">
      <h3>{problem.title}</h3>
      <p>{problem.description}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default ProblemSolving;