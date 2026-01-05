import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  return (
    <footer
      className="border-t py-12"
      style={{
        background: '#0A0E1A',
        borderColor: '#1F2937',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Name */}
          <div>
            <div
              className="font-mono text-sm tracking-wider uppercase"
              style={{
                color: '#67E8F9',
                letterSpacing: '0.1em',
              }}
            >
              {personalInfo.initials}
            </div>
            <div
              className="mt-2 text-xs"
              style={{ color: '#9CA3AF' }}
            >
              Data Analyst & BI Consultant
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2"
              style={{
                background: '#67E8F9',
                boxShadow: '0 0 8px rgba(103, 232, 249, 0.6)',
              }}
            />
            <span
              className="font-mono text-xs tracking-wider uppercase"
              style={{ color: '#67E8F9' }}
            >
              {personalInfo.status}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border transition-all duration-200"
              style={{
                borderColor: '#1F2937',
                color: '#9CA3AF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#67E8F9';
                e.currentTarget.style.color = '#67E8F9';
                e.currentTarget.style.boxShadow =
                  '0 0 12px rgba(103, 232, 249, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F2937';
                e.currentTarget.style.color = '#9CA3AF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border transition-all duration-200"
              style={{
                borderColor: '#1F2937',
                color: '#9CA3AF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#67E8F9';
                e.currentTarget.style.color = '#67E8F9';
                e.currentTarget.style.boxShadow =
                  '0 0 12px rgba(103, 232, 249, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F2937';
                e.currentTarget.style.color = '#9CA3AF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="p-2 border transition-all duration-200"
              style={{
                borderColor: '#1F2937',
                color: '#9CA3AF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#67E8F9';
                e.currentTarget.style.color = '#67E8F9';
                e.currentTarget.style.boxShadow =
                  '0 0 12px rgba(103, 232, 249, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F2937';
                e.currentTarget.style.color = '#9CA3AF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-8 text-center text-xs border-t"
          style={{
            color: '#6B7280',
            borderColor: '#1F2937',
          }}
        >
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;