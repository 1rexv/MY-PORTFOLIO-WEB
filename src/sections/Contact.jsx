import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '90646116',
      href: 'tel:+96890646116',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ralrawahi064@gmail.com',
      href: 'mailto:ralrawahi064@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alawabi, Bawshar',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reem-alrawahi-35758b35a/',
      brandColor: '#0077b5',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/1rexv',
      brandColor: '#ffffff',
    },
  ];

  return (
    <motion.section
      id="contact"
      style={{
        width: '100%',
        padding: '5rem 1rem',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-grid">
        {/* Left Column - Large Heading */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
          }}>
            Let's Work Together
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.7',
            maxWidth: '500px',
          }}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contactInfo.map((item, idx) => {
            const IconComponent = item.icon;
            const content = (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s ease',
                  cursor: item.href ? 'pointer' : 'default',
                  boxShadow: '0 0 20px rgba(129, 140, 248, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  if (item.href) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(129, 140, 248, 0.3)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(129, 140, 248, 0.2), 0 8px 24px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.href) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(129, 140, 248, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                <div style={{
                  color: '#818cf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '2.5rem',
                }}>
                  <IconComponent size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#f1f5f9',
                    fontWeight: 500,
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {content}
              </a>
            ) : (
              content
            );
          })}

          {/* Social Buttons Row */}
          <motion.div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '0.5rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    color: '#818cf8',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    background: social.brandColor,
                    borderColor: social.brandColor,
                    color: '#ffffff',
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
  