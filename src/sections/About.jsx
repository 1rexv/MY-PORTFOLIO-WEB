import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Layout, Brain, Globe } from 'lucide-react';

const About = () => {
    // Shared glassmorphism style for centered cards
    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '1.5rem',
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(129, 140, 248, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <motion.section 
            id="about" 
            style={{ 
                padding: '5rem 2rem', 
                color: '#f8fafc',
                position: 'relative',
                overflow: 'hidden',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Animated background gradient */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
                animation: 'pulse 8s ease-in-out infinite',
                pointerEvents: 'none',
            }} />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.h2 
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ 
                        fontSize: '2.5rem', 
                        textAlign: 'center', 
                        marginBottom: '3rem',
                        background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 20px rgba(129, 140, 248, 0.3))',
                    }}
                >
                    Professional Dashboard
                </motion.h2>

                {/* Top Row: Education & GPA */}
                <motion.div 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '2rem',
                        marginBottom: '4rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Education Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ 
                            y: -12, 
                            scale: 1.03,
                            borderColor: 'rgba(129, 140, 248, 0.5)',
                            boxShadow: '0 0 40px rgba(129, 140, 248, 0.3), 0 12px 48px rgba(0, 0, 0, 0.4)',
                        }}
                        style={cardStyle}
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.1, 1.1, 1.1, 1],
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            <GraduationCap size={40} color="#818cf8" style={{ marginBottom: '1.5rem' }} />
                        </motion.div>
                        <h3 style={{ color: '#818cf8', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600' }}>Education</h3>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Bachelor of Software Engineering</h4>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>University of Technology and Applied Sciences</p>
                    </motion.div>

                    {/* GPA Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ 
                            y: -12, 
                            scale: 1.03,
                            borderColor: 'rgba(192, 132, 252, 0.5)',
                            boxShadow: '0 0 40px rgba(192, 132, 252, 0.3), 0 12px 48px rgba(0, 0, 0, 0.4)',
                        }}
                        style={{
                            ...cardStyle,
                            background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%)',
                        }}
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, 15, -15, 15, 0],
                                scale: [1, 1.15, 1.15, 1.15, 1],
                            }}
                            transition={{ 
                                duration: 2.5, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            <Award size={40} color="#c084fc" style={{ marginBottom: '1.5rem' }} />
                        </motion.div>
                        <h3 style={{ color: '#c084fc', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600' }}>Academic Standing</h3>
                        <motion.div 
                            style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1' }}
                            animate={{ 
                                scale: [1, 1.1, 1],
                                textShadow: [
                                    '0 0 0px rgba(192, 132, 252, 0)',
                                    '0 0 20px rgba(192, 132, 252, 0.5)',
                                    '0 0 0px rgba(192, 132, 252, 0)',
                                ],
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: 'easeInOut',
                            }}
                        >
                            3.1
                        </motion.div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.5rem', fontSize: '1rem' }}>GPA</p>
                    </motion.div>
                </motion.div>

                {/* Technical Arsenal Grid */}
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ 
                        textAlign: 'center', 
                        fontSize: '1.75rem', 
                        marginBottom: '2rem', 
                        fontWeight: '600',
                        background: 'linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Technical Arsenal
                </motion.h3>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                    gap: '1.5rem' 
                }}>
                    <SkillCard 
                        index={0}
                        icon={<Code color="#818cf8" />} 
                        title="Programming" 
                        skills={['Python', 'Java', 'JavaScript', 'PHP', 'SQL', 'PL/SQL', 'HTML', 'CSS', 'Flutter']} 
                    />
                    <SkillCard 
                        index={1}
                        icon={<Layout color="#60a5fa" />} 
                        title="Tools & Frameworks" 
                        skills={['UI/UX Design', 'Git', 'Networking (Cisco)', 'Figma']} 
                    />
                    <SkillCard 
                        index={2}
                        icon={<Brain color="#c084fc" />} 
                        title="Concepts" 
                        skills={['Software Engineering Principles', 'Machine Learning', 'Data Science', 'AI']} 
                    />
                    <SkillCard 
                        index={3}
                        icon={<Globe color="#34d399" />} 
                        title="Languages" 
                        skills={['Arabic', 'English']} 
                    />
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </motion.section>
    );
};

const SkillCard = ({ icon, title, skills, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
            duration: 0.5, 
            delay: 0.6 + (index * 0.1),
            ease: 'easeOut',
        }}
        whileHover={{ 
            y: -8,
            scale: 1.02,
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(129, 140, 248, 0.3)',
            boxShadow: '0 0 30px rgba(129, 140, 248, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
        style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 0 20px rgba(129, 140, 248, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
        }}
    >
        <motion.div 
            style={{ marginBottom: '1rem' }}
            whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ duration: 0.5 }}
        >
            {icon}
        </motion.div>
        <h4 style={{ 
            marginBottom: '1rem', 
            fontWeight: '600',
            fontSize: '1.1rem',
            color: '#818cf8',
        }}>
            {title}
        </h4>
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            justifyContent: 'center',
        }}>
            {skills.map((skill, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) + (idx * 0.05) }}
                    whileHover={{ 
                        scale: 1.1,
                        background: 'rgba(129, 140, 248, 0.25)',
                        borderColor: 'rgba(129, 140, 248, 0.4)',
                    }}
                    style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(129, 140, 248, 0.15)',
                        border: '1px solid rgba(129, 140, 248, 0.2)',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        color: '#a5b4fc',
                        fontFamily: "'Fira Code', 'Courier New', monospace",
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                    }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

export default About;