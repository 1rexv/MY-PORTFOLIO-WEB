import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
    <section className="hero-section" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers children horizontally
        justifyContent: 'center', // Centers children vertically
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center', // Centers text alignment
        position: 'relative',
        overflow: 'hidden',
        background: '#0f172a' // Solid dark base
    }}>
        {/* Animated Mesh Gradient Background */}
        <div 
            className="animated-mesh-gradient"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                opacity: 0.4,
            }}
        />

        {/* Content Container */}
        <div style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Ensures inner items like <p> are centered
        }}>
            <motion.h1 
                style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    marginBottom: '0.5rem',
                    color: '#f1f5f9',
                    textShadow: '0 0 30px rgba(129, 140, 248, 0.8)',
                    fontWeight: '700',
                    letterSpacing: '-0.02em',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Reem Al-Rawahi
            </motion.h1>

            <h2 style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.75rem',
                marginBottom: '1.5rem',
                fontWeight: '600'
            }}>
                Software Engineer
            </h2>

            {/* Paragraph Centered */}
            <p style={{ 
                maxWidth: '650px', 
                margin: '0 auto 2.5rem auto', // "auto" on left/right centers it
                color: 'rgba(255, 255, 255, 0.7)', 
                lineHeight: '1.8',
                fontSize: '1.1rem'
            }}>
                I am a Software Engineering graduate with hands-on experience in web and mobile development.
                I build clean, scalable applications using React, Flutter, and Firebase, and I am actively
                seeking a junior software engineering role where I can contribute and grow.
            </p>

            {/* Buttons Centered */}
            <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                justifyContent: 'center', // Centers buttons horizontally
                width: '100%' 
            }}>
                <motion.a
                    href="#projects"
                    style={{
                        padding: '0.8rem 2rem',
                        backgroundColor: '#818cf8',
                        color: '#0f172a',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                        boxShadow: '0 4px 14px rgba(129, 140, 248, 0.3)',
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: '#a5b4fc' }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Projects
                </motion.a>

                <motion.a
                    href="#contact"
                    style={{
                        padding: '0.8rem 2rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#818cf8',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                    }}
                    whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me
                </motion.a>
            </div>
        </div>

        {/* Scroll Animation Hint */}
        <motion.div 
            style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                x: '-50%', // Centers the hint
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                zIndex: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
            <motion.span 
                style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Scroll Down
            </motion.span>
            <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
            </motion.svg>
        </motion.div>

        <style>{`
            @keyframes meshMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animated-mesh-gradient {
                background: radial-gradient(at 0% 0%, rgba(129, 140, 248, 0.3) 0px, transparent 50%),
                            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
                            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, rgba(129, 140, 248, 0.3) 0px, transparent 50%);
                background-size: 200% 200%;
                animation: meshMove 15s ease infinite;
            }
        `}</style>
    </section>
);

export default Hero;