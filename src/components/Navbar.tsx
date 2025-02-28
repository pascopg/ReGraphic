import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  // Function to check which section is currently in view
  const checkActiveSection = () => {
    const sections = [
      { id: 'home', element: document.getElementById('hero') },
      { id: 'leistungen', element: document.getElementById('leistungen') },
      { id: 'ueber-mich', element: document.getElementById('ueber-mich') },
      { id: 'kontakt', element: document.getElementById('kontakt') }
    ];

    // Get current scroll position
    const scrollPosition = window.scrollY + 100; // Adding offset to improve detection

    // Find the section that is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element) {
        const offsetTop = section.element.offsetTop;
        if (scrollPosition >= offsetTop) {
          setActiveSection(section.id);
          return;
        }
      }
    }

    // Default to home if no section is active
    setActiveSection('home');
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', checkActiveSection);
    
    // Initial check
    checkActiveSection();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        delay: 0.3 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          variants={logoVariants}
        >
          <Palette className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">ReGraphic</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a 
            href="#" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === 'home' ? 'text-primary' : ''
            }`}
            custom={0}
            variants={navItemVariants}
          >
            Startseite
            {activeSection === 'home' && (
              <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
            )}
          </motion.a>
          <motion.a 
            href="#leistungen" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === 'leistungen' ? 'text-primary' : ''
            }`}
            custom={1}
            variants={navItemVariants}
          >
            Leistungen
            {activeSection === 'leistungen' && (
              <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
            )}
          </motion.a>
          <motion.a 
            href="#ueber-mich" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === 'ueber-mich' ? 'text-primary' : ''
            }`}
            custom={2}
            variants={navItemVariants}
          >
            Über mich
            {activeSection === 'ueber-mich' && (
              <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
            )}
          </motion.a>
          <motion.a 
            href="#kontakt" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === 'kontakt' ? 'text-primary' : ''
            }`}
            custom={3}
            variants={navItemVariants}
          >
            Kontakt
            {activeSection === 'kontakt' && (
              <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
            )}
          </motion.a>
        </nav>
        
        <motion.div 
          className="flex items-center space-x-4"
          variants={buttonVariants}
        >
          <Button 
            size="sm" 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })} 
            className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Anfrage
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}