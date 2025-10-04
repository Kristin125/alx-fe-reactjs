import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '1rem', backgroundColor: '#1a1a1a' }}>
      <Link to="/" style={{ color: 'inherit', fontWeight: 500 }}>Home</Link>
      <Link to="/about" style={{ color: 'inherit', fontWeight: 500 }}>About</Link>
      <Link to="/services" style={{ color: 'inherit', fontWeight: 500 }}>Services</Link>
      <Link to="/contact" style={{ color: 'inherit', fontWeight: 500 }}>Contact</Link>
    </nav>
  );
}

export default Navbar;


