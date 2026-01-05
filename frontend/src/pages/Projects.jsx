import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, X } from 'lucide-react';
import { projects, categories } from '../mock';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="font-mono text-xs tracking-wider uppercase mb-4"
            style={{ color: '#67E8F9' }}
          >
            Selected Work
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#F9FAFB' }}
          >
            Portfolio
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl"
            style={{ color: '#9CA3AF' }}
          >
            A showcase of data solutions spanning Business Intelligence, AI/LLM
            integration, and data engineering pipelines.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2.5 border transition-all duration-200"
                style={{
                  borderColor:
                    selectedCategory === category ? '#67E8F9' : '#1F2937',
                  background:
                    selectedCategory === category
                      ? 'rgba(103, 232, 249, 0.1)'
                      : 'transparent',
                  color: selectedCategory === category ? '#67E8F9' : '#9CA3AF',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = '#67E8F9';
                    e.currentTarget.style.color = '#67E8F9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = '#1F2937';
                    e.currentTarget.style.color = '#9CA3AF';
                  }
                }}
              >
                <span className="font-mono text-xs tracking-wider uppercase">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border group cursor-pointer transition-all duration-300"
                style={{
                  borderColor: '#1F2937',
                  background: '#151B26',
                }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#67E8F9';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(103, 232, 249, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1F2937';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 backdrop-blur-sm"
                      style={{
                        background: 'rgba(103, 232, 249, 0.2)',
                        border: '1px solid #67E8F9',
                      }}
                    >
                      <span
                        className="font-mono text-xs tracking-wider uppercase"
                        style={{ color: '#67E8F9' }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div
                    className="font-mono text-xs tracking-wider uppercase mb-3"
                    style={{ color: '#67E8F9' }}
                  >
                    {project.category}
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: '#F9FAFB' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm mb-4 leading-relaxed line-clamp-3"
                    style={{ color: '#9CA3AF' }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono"
                        style={{
                          background: 'rgba(103, 232, 249, 0.05)',
                          color: '#67E8F9',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div
                    className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase"
                    style={{ color: '#67E8F9' }}
                  >
                    <span>Read Case Study</span>
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(10, 14, 26, 0.95)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full border relative"
            style={{
              background: '#151B26',
              borderColor: '#67E8F9',
              boxShadow: '0 0 40px rgba(103, 232, 249, 0.3)',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 border transition-all duration-200 z-10"
              style={{
                background: '#0A0E1A',
                borderColor: '#1F2937',
                color: '#9CA3AF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#67E8F9';
                e.currentTarget.style.color = '#67E8F9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F2937';
                e.currentTarget.style.color = '#9CA3AF';
              }}
            >
              <X size={20} />
            </button>

            {/* Project Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div
                className="font-mono text-xs tracking-wider uppercase mb-3"
                style={{ color: '#67E8F9' }}
              >
                {selectedProject.category}
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#F9FAFB' }}
              >
                {selectedProject.title}
              </h2>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#9CA3AF' }}
              >
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="mb-8">
                <div
                  className="font-mono text-xs tracking-wider uppercase mb-3"
                  style={{ color: '#67E8F9' }}
                >
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 border font-mono text-sm"
                      style={{
                        borderColor: '#1F2937',
                        color: '#9CA3AF',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-8">
                <div
                  className="font-mono text-xs tracking-wider uppercase mb-3"
                  style={{ color: '#67E8F9' }}
                >
                  Key Metrics & Impact
                </div>
                <div className="space-y-3">
                  {selectedProject.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 border"
                      style={{
                        borderColor: '#1F2937',
                        background: 'rgba(103, 232, 249, 0.03)',
                      }}
                    >
                      <TrendingUp size={20} style={{ color: '#67E8F9' }} />
                      <span style={{ color: '#9CA3AF' }}>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-3 border transition-all duration-200 flex items-center gap-2"
                  style={{
                    background: '#67E8F9',
                    borderColor: '#67E8F9',
                    color: '#0A0E1A',
                  }}
                  onClick={() => alert('View Live Demo - Feature placeholder')}
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
                  <ExternalLink size={18} />
                  <span className="font-mono text-sm tracking-wider uppercase">
                    View Live Demo
                  </span>
                </button>

                <button
                  className="px-6 py-3 border transition-all duration-200 flex items-center gap-2"
                  style={{
                    borderColor: '#1F2937',
                    color: '#F9FAFB',
                  }}
                  onClick={() => alert('View on GitHub - Feature placeholder')}
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
                  <Github size={18} />
                  <span className="font-mono text-sm tracking-wider uppercase">
                    View on GitHub
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
