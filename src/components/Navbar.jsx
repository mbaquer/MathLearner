import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#333',
      color: 'white',
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      padding: 0,
      margin: 0,
    },
    navItem: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '1rem',
      transition: 'color 0.3s',
    },
    navItemHover: {
      color: '#f0a500',
    }
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>MathLearner</h1>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navItem}>Home</Link></li>
        <li><Link to="/topics" style={styles.navItem}>Topics</Link></li>
        <li><Link to="/profile" style={styles.navItem}>Profile</Link></li>
        <li><Link to="/login" style={styles.navItem}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
