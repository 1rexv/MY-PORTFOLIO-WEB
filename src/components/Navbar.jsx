import React from 'react';

const navLinks = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Contact", to: "#contact" },
];

const handleSmoothScroll = (e, to) => {
  e.preventDefault();
  const element = document.querySelector(to);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => (
  <nav style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2rem',
    background: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
    position: 'sticky',
    top: 0,
    zIndex: 50
  }}>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }}>
      {navLinks.map(link => (
        <li key={link.to}>
          <a
            href={link.to}
            onClick={e => handleSmoothScroll(e, link.to)}
            style={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#27303b',
              textDecoration: 'none',
              padding: '0.25rem 0',
              position: 'relative',
              transition: 'color 0.2s'
            }}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    <style>
      {`
        @media (max-width: 640px) {
          nav {
            padding: 1rem;
          }
          nav ul {
            gap: 1rem;
            font-size: 0.95rem;
          }
        }
        nav a:hover {
          color: #6366F1;
        }
      `}
    </style>
  </nav>
);

export default Navbar;
