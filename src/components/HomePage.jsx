// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="intro-section">
        <h1>Welcome to MathLearner</h1>
        <p>Your go-to platform for learning and practicing math.</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </header>

      <section className="featured-topics">
        <h2>Featured Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Pre-Algebra</h3>
            <p>Basic arithmetic, integers, factors, and more.</p>
            <a href="/topics/pre-algebra" className="link-button">Explore</a>
          </div>
          <div className="topic-card">
            <h3>Algebra</h3>
            <p>Equations, inequalities, and functions.</p>
            <a href="/topics/algebra" className="link-button">Explore</a>
          </div>
          <div className="topic-card">
            <h3>Calculus</h3>
            <p>Limits, derivatives, and integrals.</p>
            <a href="/topics/calculus" className="link-button">Explore</a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          MathLearner is dedicated to providing high-quality math education for
          students of all levels. Whether you're just starting or looking to
          master calculus, we have the resources you need.
        </p>
      </section>
    </div>
  );
};

export default HomePage;