import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Check, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          backgroundColor: '#15151a',
          border: '1px solid rgba(160, 42, 34, 0.4)',
          borderRadius: '20px',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(160, 42, 34, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            padding: '18px 28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(21, 21, 26, 0.95)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: 800, color: '#ffffff', fontSize: '18px', fontFamily: 'var(--font-heading)' }}>
              Sunil Kumar
            </span>
            <span className="pill-tag red" style={{ fontSize: '10px' }}>
              Full Stack Developer Resume
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn btn-outline btn-sm"
              style={{ padding: '6px 14px', fontSize: '12px', gap: '6px' }}
            >
              <Printer size={13} />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: 'none',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div
          style={{
            padding: '36px',
            overflowY: 'auto',
            color: 'var(--color-text-silver)',
            fontFamily: 'var(--font-primary)',
            fontSize: '13.5px',
            lineHeight: 1.6,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
              Sunil Kumar
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', color: 'var(--color-text-muted)', fontSize: '12px' }}>
              <span>📍 Sarita Vihar, Delhi, India</span>
              <span>📞 +91 7827598401</span>
              <span>✉️ sunilkumar25@navgurukul.org</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', color: 'var(--color-primary)', fontSize: '12px', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
              <a href="https://github.com/sunilkumar25kush" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                github.com/sunilkumar25kush
              </a>
              <a href="https://linkedin.com/in/sunil-kumar" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                linkedin.com/in/sunil-kumar
              </a>
              <span style={{ color: '#10B981' }}>Open to Relocation · Remote</span>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-label)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', borderBottom: '1px solid rgba(160, 42, 34, 0.3)', paddingBottom: '4px', marginBottom: '10px' }}>
              Summary
            </h3>
            <p>
              Full Stack Developer specializing in the MERN stack with hands-on experience building scalable web applications and AI-powered solutions. Proficient in JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and Google Gemini API. Built and deployed 5+ production-ready projects, including AI Resume Builder, AI Interviewer, Real-Time Chat Application, and AI-Driven Digital Growth Platform. Writing clean, maintainable code, solving real-world problems, and continuously learning modern web technologies.
            </p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-label)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', borderBottom: '1px solid rgba(160, 42, 34, 0.3)', paddingBottom: '4px', marginBottom: '10px' }}>
              Experience
            </h3>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '15px' }}>
                  Trivotours
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  August 2026 – September 2026
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-accent)', fontSize: '13px', marginBottom: '8px' }}>
                <span>Software Development Engineer (SDE)</span>
                <span>Remote</span>
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Developed and deployed 4+ responsive landing pages, improving mobile usability and creating consistent user experiences across desktop and mobile devices.</li>
                <li>Designed and launched a company blog section, enabling the marketing team to publish and manage articles independently and reducing reliance on developer support.</li>
                <li>Integrated Cloudinary image uploads and delivery, optimizing image handling and reducing page load time by 75%.</li>
                <li>Integrated Razorpay payment gateway to support secure online transactions, enabling end-to-end payment processing for the platform.</li>
                <li>Identified, debugged, and resolved 17+ frontend and functional issues, improving platform reliability and reducing recurring errors by 50%.</li>
                <li>Optimized frontend performance for mobile devices, improving Lighthouse performance from 45 to 94 and reducing Largest Contentful Paint from 1900ms to 200ms.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-label)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', borderBottom: '1px solid rgba(160, 42, 34, 0.3)', paddingBottom: '4px', marginBottom: '10px' }}>
              Projects
            </h3>

            {/* AI Interviewer */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>
                  AI Interviewer | <span style={{ fontWeight: 400, color: 'var(--color-text-light)', fontStyle: 'italic' }}>MERN Stack, Google Gemini API, Speech Recognition, Text-to-Speech</span>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  March 2026
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Developed a full-stack AI interview platform using the MERN stack and Gemini API, generating role-specific questions and contextual follow-ups in real time.</li>
                <li>Integrated speech recognition and text-to-speech to enable voice-based interviews, achieving interaction latency below 2 seconds.</li>
                <li>Automated interview evaluation across communication, technical knowledge, and confidence, delivering structured candidate feedback within seconds.</li>
              </ul>
            </div>

            {/* AI Resume Builder */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>
                  AI Resume Builder | <span style={{ fontWeight: 400, color: 'var(--color-text-light)', fontStyle: 'italic' }}>MERN Stack, Google Gemini API, JWT, MongoDB, Tailwind CSS</span>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  April 2026
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Built an AI-powered resume generator with 5+ professional templates, converting user input into ATS-oriented resumes and reducing manual formatting effort.</li>
                <li>Implemented live resume previews and PDF generation, allowing users to review and export resumes without manually formatting documents.</li>
                <li>Implemented JWT authentication and MongoDB-backed profile storage, enabling users to manage and regenerate resumes across sessions.</li>
                <li>Improved AI generation reliability through structured input validation and backend error handling, reducing failed generation requests by 30%.</li>
              </ul>
            </div>

            {/* Real-Time Chat */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>
                  Real-Time Chat Application | <span style={{ fontWeight: 400, color: 'var(--color-text-light)', fontStyle: 'italic' }}>MERN Stack, Socket.IO, JWT, MongoDB, Cloudinary</span>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  September 2025
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Developed a real-time messaging application using Socket.IO, supporting bidirectional communication with sub-second message delivery under tested conditions.</li>
                <li>Implemented JWT authentication and MongoDB message persistence to maintain secure sessions and preserve chat history across reconnections.</li>
                <li>Integrated Cloudinary for image and file sharing, using automated image optimization to improve media delivery efficiency.</li>
              </ul>
            </div>

            {/* AI Chatbot Application */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>
                  AI Chatbot Application | <span style={{ fontWeight: 400, color: 'var(--color-text-light)', fontStyle: 'italic' }}>Node.js, Express.js, Google Gemini API</span>
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  April 2026
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Integrated Google Gemini API with a Node.js and Express.js backend to support multi-turn conversations, with average response times below 3 seconds under tested conditions.</li>
                <li>Created 5+ reusable API handler functions with structured error handling to manage common API failures and improve backend maintainability.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-label)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', borderBottom: '1px solid rgba(160, 42, 34, 0.3)', paddingBottom: '4px', marginBottom: '10px' }}>
              Education
            </h3>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ color: '#ffffff' }}>NavGurukul</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>July 2025 – Present</span>
              </div>
              <div style={{ color: 'var(--color-text-silver)' }}>Full Stack Web Development Program (Pursuing)</div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ color: '#ffffff' }}>RK Sarvodaya Boys Senior Secondary School</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>May 2023 – March 2025</span>
              </div>
              <div style={{ color: 'var(--color-text-silver)' }}>Higher Secondary Certificate (HSC)</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-label)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', borderBottom: '1px solid rgba(160, 42, 34, 0.3)', paddingBottom: '4px', marginBottom: '10px' }}>
              Technical Skills & Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong style={{ color: '#ffffff' }}>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, CSS Flexbox/Grid, DOM Manipulation, Async/Await</div>
              <div><strong style={{ color: '#ffffff' }}>Backend:</strong> Node.js, Express.js, REST API Development, MongoDB, Mongoose, Socket.IO</div>
              <div><strong style={{ color: '#ffffff' }}>AI & APIs:</strong> Google Gemini API, OpenAI API, OpenWeatherMap API, Prompt Engineering, API Integration</div>
              <div><strong style={{ color: '#ffffff' }}>Dev Tools:</strong> Git, GitHub, VS Code, Vercel, Netlify</div>
              <div><strong style={{ color: '#ffffff' }}>IT & Systems:</strong> Windows Server Administration, Linux (Ubuntu), Network Troubleshooting, Hardware Configuration</div>
              <div><strong style={{ color: '#ffffff' }}>Languages:</strong> Hindi (Native) — English (Intermediate: technical documentation, code review, written communication)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
