import React from 'react';
import { Download, ArrowRight, Award, TrendingUp } from 'lucide-react';
import { personalInfo, techStack, experiences } from '../mock';
import NetworkCanvas from '../components/NetworkCanvas';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    alert('CV download feature - Connect to backend later');
  };

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #1F2937 1px, transparent 1px), linear-gradient(to bottom, #1F2937 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div
                className="inline-block px-4 py-2 border mb-8"
                style={{
                  borderColor: '#67E8F9',
                  background: 'rgba(103, 232, 249, 0.05)',
                }}
              >
                <span
                  className="font-mono text-xs tracking-wider uppercase"
                  style={{ color: '#67E8F9' }}
                >
                  Data Analyst & BI Consultant
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ color: '#F9FAFB' }}
              >
                {personalInfo.tagline}
              </h1>

              <p
                className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{ color: '#9CA3AF' }}
              >
                {personalInfo.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 border transition-all duration-200 flex items-center gap-2 group"
                  style={{
                    background: '#67E8F9',
                    borderColor: '#67E8F9',
                    color: '#0A0E1A',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 24px rgba(103, 232, 249, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Download size={18} />
                  <span className="font-mono text-sm tracking-wider uppercase">
                    Download CV
                  </span>
                </button>

                <button
                  onClick={() => navigate('/projects')}
                  className="px-6 py-3 border transition-all duration-200 flex items-center gap-2 group"
                  style={{
                    borderColor: '#1F2937',
                    color: '#F9FAFB',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#67E8F9';
                    e.currentTarget.style.boxShadow =
                      '0 0 16px rgba(103, 232, 249, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1F2937';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="font-mono text-sm tracking-wider uppercase">
                    View Projects
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Right: Network Visualization */}
            <div className="relative h-[500px]">
              <div
                className="absolute inset-0 border"
                style={{
                  borderColor: '#1F2937',
                  background: 'rgba(15, 20, 25, 0.5)',
                }}
              >
                <NetworkCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y" style={{ borderColor: '#1F2937' }}>
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-12 whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-6 py-3 border"
                style={{
                  borderColor: '#1F2937',
                  background: 'rgba(15, 20, 25, 0.8)',
                }}
              >
                <div
                  className="w-2 h-2"
                  style={{ background: '#67E8F9' }}
                />
                <span
                  className="font-mono text-sm tracking-wider"
                  style={{ color: '#F9FAFB' }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div
              className="font-mono text-xs tracking-wider uppercase mb-4"
              style={{ color: '#67E8F9' }}
            >
              Experience Roadmap
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#F9FAFB' }}
            >
              Professional Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ background: '#1F2937' }}
            />

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-24 pb-16 last:pb-0">
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-2 w-5 h-5 border-2"
                  style={{
                    background: '#0A0E1A',
                    borderColor: '#67E8F9',
                    boxShadow: '0 0 12px rgba(103, 232, 249, 0.5)',
                  }}
                />

                {/* Content card */}
                <div
                  className="border p-6 transition-all duration-300 hover:translate-x-2"
                  style={{
                    borderColor: '#1F2937',
                    background: '#151B26',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#67E8F9';
                    e.currentTarget.style.boxShadow =
                      '0 4px 24px rgba(103, 232, 249, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1F2937';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="font-mono text-xs tracking-wider uppercase mb-2"
                        style={{ color: '#67E8F9' }}
                      >
                        {exp.year} • {exp.type}
                      </div>
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{ color: '#F9FAFB' }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="text-lg"
                        style={{ color: '#9CA3AF' }}
                      >
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                        style={{ color: '#9CA3AF' }}
                      >
                        <div
                          className="w-1.5 h-1.5 mt-2"
                          style={{ background: '#67E8F9' }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center gap-2 font-mono text-sm"
                    style={{ color: '#67E8F9' }}
                  >
                    <TrendingUp size={16} />
                    {exp.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-t" style={{ borderColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="font-mono text-xs tracking-wider uppercase mb-4"
                style={{ color: '#67E8F9' }}
              >
                Engineering Meets Data
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#F9FAFB' }}
              >
                Analytical Rigor,
                <br />
                Business Impact
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#9CA3AF' }}
              >
                {personalInfo.bio}
              </p>
            </div>

            <div
              className="border p-8"
              style={{
                borderColor: '#1F2937',
                background: '#151B26',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Award size={32} style={{ color: '#67E8F9' }} />
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: '#F9FAFB' }}
                  >
                    Education
                  </h3>
                  <p style={{ color: '#9CA3AF' }}>
                    {personalInfo.education}
                  </p>
                </div>
              </div>

              <div
                className="border-t pt-6"
                style={{ borderColor: '#1F2937' }}
              >
                <div
                  className="font-mono text-sm tracking-wider uppercase mb-3"
                  style={{ color: '#67E8F9' }}
                >
                  Core Competencies
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Business Intelligence',
                    'Data Analytics',
                    'LLM Integration',
                    'ETL Pipelines',
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 border text-sm text-center"
                      style={{
                        borderColor: '#1F2937',
                        color: '#9CA3AF',
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;