import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

const sectionStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '3rem 1rem',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: '2rem',
  color: '#818cf8',
  textAlign: 'center'
};

const categoryStyle = {
  marginBottom: '2rem'
};

const categoryTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 500,
  marginBottom: '1rem',
  color: '#f1f5f9',
};

const skillsListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem'
};

const skillItemStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  fontWeight: 500,
  fontSize: '1rem',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
};

const Skills = () => (
  <motion.section
    id="skills"
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
      Skills
    </motion.h2>
    {skillsData.map((category, catIdx) => (
      <motion.div
        key={category.category}
        style={categoryStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: catIdx * 0.1 + 0.3 }}
      >
        <motion.h3
          style={categoryTitleStyle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {category.category}
        </motion.h3>
        <div style={skillsListStyle}>
          {category.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              style={skillItemStyle}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (catIdx * 0.05) + (idx * 0.05) }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.section>
);

export default Skills;
