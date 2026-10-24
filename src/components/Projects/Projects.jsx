import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Mic, ArrowUpRight, X, Camera, Mountain, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from '../Icons/Icons';
import './Projects.css';

function ProjectCardItem({ project, idx, onSelectSpecs }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isReversed = idx % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`project-reveal-item ${isRevealed ? 'revealed' : ''}`}
    >
      <div className={`project-card ${isReversed ? 'layout-reversed' : ''}`}>
        {/* Text & Actions Column */}
        <div className="project-text-col">
          {/* Top Badges & Project Number */}
          <div className="project-top-bar">
            <div className="project-actions-row">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-btn"
                  title="View on GitHub"
                >
                  <GithubIcon size={17} />
                </a>
              )}

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-live-site"
              >
                <span className="live-site-triangle">▲</span>
                <span>LIVE SITE</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <span className="project-number-badge">
              {project.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="project-title">{project.title}</h3>

          {/* Description */}
          <p className="project-desc">{project.description}</p>

          {/* Tech Tags Pills */}
          <div className="project-tags-row">
            {project.tags.map(tag => (
              <span key={tag} className="project-tech-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* Engineering Specs Button */}
          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={() => onSelectSpecs(project)}
              className="btn-specs"
            >
              <span>View Engineering Specs</span>
              <ArrowUpRight size={13} style={{ color: 'var(--color-primary)' }} />
            </button>
          </div>
        </div>

        {/* Browser Mockup Column */}
        <div className="project-preview-col">
          <div className="mockup-window">
            {/* Mac Traffic Lights & Bar */}
            <div className="mockup-header">
              <div className="mac-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="mockup-url-bar">
                https://{project.id}.dev
              </div>
            </div>

            {/* Mockup Canvas Screen */}
            <div className="mockup-canvas">
              {project.previewType === 'voice' && (
                <div className="canvas-voice">
                  <div className="voice-mic-glow">
                    <Mic size={26} style={{ color: '#ffffff' }} />
                  </div>
                  <div className="voice-title">Voice Interaction Stream</div>
                  <div className="voice-sub">● Sub-2s Latency · Gemini AI Realtime</div>
                  <div className="voice-bars">
                    {[16, 28, 42, 22, 38, 54, 30, 48, 20, 36, 18, 44, 26, 14].map((h, i) => (
                      <span
                        key={i}
                        style={{
                          height: `${h}px`,
                          backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : '#ff5f56',
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.previewType === 'resume' && (
                <div className="canvas-resume">
                  <div className="resume-card-preview">
                    <div className="resume-row-head">
                      <span>ATS Optimization Score</span>
                      <span style={{ color: '#22c55e', fontWeight: 800 }}>98/100</span>
                    </div>
                    <div className="resume-progress-bar">
                      <div className="progress-fill" />
                    </div>
                    <div className="resume-tags">
                      <span className="pill-tag red" style={{ fontSize: '10px' }}>PDF Export</span>
                      <span className="pill-tag" style={{ fontSize: '10px' }}>5 Templates</span>
                    </div>
                  </div>
                </div>
              )}

              {project.previewType === 'chat' && (
                <div className="canvas-chat">
                  <div className="chat-window-inner">
                    <div className="chat-header-row">
                      <div className="chat-user-badge">
                        <span className="chat-status-dot" />
                        <span>Real-Time Room #dev</span>
                      </div>
                      <span className="chat-ping-pill">⚡ Socket.IO Active</span>
                    </div>
                    <div className="chat-bubble-stream">
                      <div className="chat-bubble user">Hey! Testing Socket.IO bidirectional stream 🚀</div>
                      <div className="chat-bubble reply">Delivered in 120ms with Cloudinary media CDN ready!</div>
                    </div>
                  </div>
                </div>
              )}

              {project.previewType === 'chatbot' && (
                <div className="canvas-chatbot">
                  <div className="bot-card-inner">
                    <div className="bot-header-row">
                      <div className="bot-avatar-glow">AI</div>
                      <div>
                        <div className="bot-name">Gemini Assistant</div>
                        <div className="bot-status">● Ready · Multi-Turn Context</div>
                      </div>
                    </div>
                    <div className="bot-prompt-box">
                      <span className="bot-query">"Optimize backend latency..."</span>
                    </div>
                    <div className="bot-response-box">
                      <span className="bot-text">Streaming response via Gemini API with structured error handling...</span>
                    </div>
                  </div>
                </div>
              )}

              {project.previewType === 'portfolio' && (
                <div className="canvas-portfolio">
                  <div className="canvas-badge">ECHO —</div>
                  <div className="canvas-hero-text">
                    Crafting<span style={{ color: 'var(--color-primary)' }}>.</span>
                  </div>
                  <div className="canvas-sub">SEAMLESS DIGITAL EXPERIENCES</div>
                </div>
              )}

              {project.previewType === 'camera' && (
                <div className="canvas-camera">
                  <div className="camera-wireframe-box">
                    <Camera size={56} strokeWidth={1} style={{ color: '#ffffff' }} />
                  </div>
                  <div className="camera-text">JULIAN VANCE</div>
                </div>
              )}

              {project.previewType === 'studio' && (
                <div className="canvas-studio">
                  <div className="studio-brand">ECHO</div>
                  <div className="studio-tagline">
                    BEYOND DESIGN<br />BUILT TO MATTER
                  </div>
                  <div className="studio-sub">
                    We craft brands, websites, and digital experiences designed with purpose, clarity, and impact
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerRevealed, setHeaderRevealed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'ai-interviewer',
      number: '01 / 05',
      title: 'AI Interviewer Platform',
      description:
        'A full-stack voice-interactive interview platform engineered with MERN and Google Gemini API — built for real-time speech interaction, sub-2s latency, and automated evaluation.',
      points: [
        'Developed full-stack AI interview platform using MERN stack and Gemini API, generating role-specific questions and contextual follow-ups in real time.',
        'Integrated speech recognition and text-to-speech to enable voice-based interviews, achieving interaction latency below 2 seconds.',
        'Automated interview evaluation across communication, technical knowledge, and confidence, delivering structured candidate feedback within seconds.',
      ],
      tags: ['MERN STACK', 'GEMINI API', 'VOICE AI', 'WEBSOCKETS'],
      demoUrl: 'https://github.com/sunilkumar25kush',
      githubUrl: 'https://github.com/sunilkumar25kush',
      previewType: 'voice',
    },
    {
      id: 'ai-resume-builder',
      number: '02 / 05',
      title: 'AI Resume Builder & ATS Generator',
      description:
        'An intelligent ATS-oriented resume generator with 5+ professional templates, live document previews, instant PDF export, and MongoDB-backed profile persistence.',
      points: [
        'Built an AI-powered resume generator with 5+ professional templates, converting user input into ATS-oriented resumes and reducing formatting effort.',
        'Implemented live resume previews and PDF generation, allowing users to review and export resumes without manual formatting.',
        'Implemented JWT authentication and MongoDB-backed profile storage, enabling users to manage and regenerate resumes across sessions.',
        'Improved AI generation reliability through structured input validation and backend error handling, reducing failed generation requests by 30%.',
      ],
      tags: ['MERN STACK', 'GEMINI API', 'JWT AUTH', 'MONGODB', 'TAILWIND CSS'],
      demoUrl: 'https://github.com/sunilkumar25kush',
      githubUrl: 'https://github.com/sunilkumar25kush',
      previewType: 'resume',
    },
    {
      id: 'realtime-chat',
      number: '03 / 05',
      title: 'Real-Time Chat Application',
      description:
        'A high-performance bidirectional messaging application built using Socket.IO and MERN stack — featuring sub-second message delivery, JWT authentication, and Cloudinary media sharing.',
      points: [
        'Developed a real-time messaging application using Socket.IO, supporting bidirectional communication with sub-second message delivery under tested conditions.',
        'Implemented JWT authentication and MongoDB message persistence to maintain secure sessions and preserve chat history across reconnections.',
        'Integrated Cloudinary for image and file sharing, using automated image optimization to improve media delivery efficiency.',
      ],
      tags: ['SOCKET.IO', 'REACT', 'NODE.JS', 'MONGODB', 'CLOUDINARY'],
      demoUrl: 'https://github.com/sunilkumar25kush',
      githubUrl: 'https://github.com/sunilkumar25kush',
      previewType: 'chat',
    },
    {
      id: 'ai-chatbot',
      number: '04 / 05',
      title: 'AI Chatbot Application',
      description:
        'An intelligent multi-turn conversational AI platform powered by Node.js, Express.js, and Google Gemini API — engineered with resilient API handler pipelines and sub-3s response time.',
      points: [
        'Integrated Google Gemini API with a Node.js and Express.js backend to support multi-turn conversations, with average response times below 3 seconds.',
        'Created 5+ reusable API handler functions with structured error handling to manage common API failures and improve backend maintainability.',
        'Designed lightweight frontend interface with markdown parsing and conversational memory context.',
      ],
      tags: ['NODE.JS', 'EXPRESS.JS', 'GEMINI API', 'REST APIS'],
      demoUrl: 'https://github.com/sunilkumar25kush',
      githubUrl: 'https://github.com/sunilkumar25kush',
      previewType: 'chatbot',
    },
    {
      id: 'portfolio-website',
      number: '05 / 05',
      title: 'Portfolio Website',
      description:
        'A personal portfolio crafted to showcase skills, projects, and creative work — built for speed, smooth animations, and a bold visual identity.',
      points: [
        'Interactive TextPressure variable typography engine responding to mouse proximity and velocity.',
        'Smooth scroll-driven philosophy expansion with zero layout thrashing.',
        'Engineered with modern React, Vite, and hardware-accelerated CSS animations.',
      ],
      tags: ['REACT', 'THREE.JS', 'TAILWIND', 'GSAP'],
      demoUrl: '#',
      githubUrl: 'https://github.com/sunilkumar25kush',
      previewType: 'portfolio',
    },
  ];

  return (
    <section id="projects" className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-36 bg-black z-10 overflow-hidden section projects-section" style={{ backgroundColor: '#000000', paddingTop: 'clamp(48px, 10vh, 120px)', paddingBottom: 'clamp(64px, 14vh, 144px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        {/* Header with bottom-to-top animation matching Menu */}
        <div
          ref={headerRef}
          className={`projects-header-reveal ${headerRevealed ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{ overflow: 'hidden', display: 'inline-block', marginBottom: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                display: 'inline-block',
              }}
            >
              • FEATURED WORK
            </span>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 6vw, 68px)',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                margin: '0 0 16px 0',
              }}
            >
              SELECTED PROJECTS
            </h2>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <p
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: 'clamp(11px, 1.3vw, 13px)',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)',
                maxWidth: '860px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              FROM VOICE AI AND ATS RESUME ENGINES TO REAL-TIME WEBSOCKET SYSTEMS — CRAFTED WITH MOTION, PURPOSE, AND PRECISION.
            </p>
          </div>
        </div>

        {/* Project Showcase Cards with Bottom-to-Top Animation Matching Menu */}
        <div className="projects-showcase-list">
          {projects.map((project, idx) => (
            <ProjectCardItem
              key={project.id}
              project={project}
              idx={idx}
              onSelectSpecs={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Engineering Specs Modal */}
      {selectedProject && (
        <div className="specs-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="specs-modal-card" onClick={e => e.stopPropagation()}>
            <div className="specs-modal-header">
              <div>
                <span className="pill-tag red" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  {selectedProject.number}
                </span>
                <h3 className="specs-modal-title">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="specs-modal-close">
                <X size={18} />
              </button>
            </div>

            <p className="specs-modal-desc">{selectedProject.description}</p>

            <div className="specs-modal-bullets">
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>
                Engineering Highlights & Architecture
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedProject.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#d1d1d6', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
                style={{ padding: '10px 20px', borderRadius: '9999px', fontSize: '13px' }}
              >
                <span>View GitHub Repo</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-outline btn-sm"
                style={{ padding: '10px 18px', borderRadius: '9999px', fontSize: '13px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
