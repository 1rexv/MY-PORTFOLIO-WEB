import React from 'react';
import { motion } from 'framer-motion';
import { Github, Figma } from 'lucide-react';
import { projects as projectsData } from '../data/projects';

const sectionStyle = {
  width: '100%',
  padding: '3rem 1rem',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: '2rem',
  color: '#818cf8',
  textAlign: 'center',
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  boxShadow: '0 0 20px rgba(129, 140, 248, 0.1), 0 8px 32px rgba(0, 0, 0, 0.37)',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const cardHoverStyle = {
  transform: 'translateY(-8px)',
  borderColor: 'rgba(129, 140, 248, 0.4)',
  boxShadow: '0 0 30px rgba(129, 140, 248, 0.2), 0 12px 40px rgba(0, 0, 0, 0.5)',
};

const cardTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#f1f5f9',
  textAlign: 'center',
};

const cardDescStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.95rem',
  marginBottom: '1rem',
  flexGrow: 1,
  lineHeight: '1.6',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const stackListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1rem',
};

const stackItemStyle = {
  background: 'rgba(129, 140, 248, 0.15)',
  color: '#a5b4fc',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  padding: '0.375rem 0.875rem',
  fontWeight: 500,
  fontFamily: "'Fira Code', 'Courier New', monospace",
  border: '1px solid rgba(129, 140, 248, 0.2)',
  display: 'inline-block',
  whiteSpace: 'nowrap',
};

const buttonContainerStyle = {
  marginTop: 'auto',
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap',
};

const Projects = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <motion.section
      id="projects"
      style={sectionStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h2
        style={titleStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projects
      </motion.h2>
      <div 
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          rowGap: '4.5rem',
          justifyContent: 'center',
        }}
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            style={{
              ...cardStyle,
              ...(hoveredCard === idx ? cardHoverStyle : {}),
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h3 style={cardTitleStyle}>{project.title}</h3>
              <p style={cardDescStyle}>{project.description}</p>
              <div style={stackListStyle}>
                {project.tech?.map((tech, i) => (
                  <span key={i} style={stackItemStyle} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div style={buttonContainerStyle}>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(129, 140, 248, 0.1)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#818cf8',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  background: 'rgba(129, 140, 248, 0.2)',
                  borderColor: 'rgba(129, 140, 248, 0.5)',
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                GitHub
              </motion.a>
              {project.figma && (
                <motion.a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on Figma`}
                  style={{
                    flex: 1,
                    minWidth: '120px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#f1f5f9',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Figma size={18} />
                  Figma
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
