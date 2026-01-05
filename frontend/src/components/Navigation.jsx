import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../mock';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
      }}
    >
      <div
        className="px-8 py-4 border transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(15, 20, 25, 0.95)'
            : 'rgba(15, 20, 25, 0.8)',
          borderColor: scrolled ? '#67E8F9' : '#1F2937',
          boxShadow: scrolled
            ? '0 0 20px rgba(103, 232, 249, 0.2)'
            : 'none',
        }}
      >
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="font-mono text-sm tracking-wider uppercase transition-all duration-200"
            style={{
              color: '#67E8F9',
              fontSize: '14px',
              letterSpacing: '0.1em',
            }}
          >
            {personalInfo.initials}
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-mono text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                color: isActive('/') ? '#67E8F9' : '#9CA3AF',
                fontSize: '11px',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#67E8F9')}
              onMouseLeave={(e) =>
                (e.target.style.color = isActive('/') ? '#67E8F9' : '#9CA3AF')
              }
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="font-mono text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                color: isActive('/projects') ? '#67E8F9' : '#9CA3AF',
                fontSize: '11px',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#67E8F9')}
              onMouseLeave={(e) =>
                (e.target.style.color = isActive('/projects')
                  ? '#67E8F9'
                  : '#9CA3AF')
              }
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;