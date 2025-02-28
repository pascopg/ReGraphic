import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Bot, 
  Mic, 
  Workflow, 
  Search, 
  Palette, 
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutMeSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ueber-mich" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Über Mich</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lerne mich kennen und erfahre mehr über meine Expertise im Bereich Webdesign, Entwicklung und KI-Integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Linke Seite - Bild und persönliche Info */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative mb-8 w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
              <img 
                src="https://i.postimg.cc/DzH7wg5T/4jt-CHj-T7lz-ABh96is2jsl-16278e1b5b434401a1e6e9168ab6c2be.png" 
                alt="Pascal Giesmann" 
                className="relative z-10 rounded-2xl w-full h-auto object-cover shadow-xl"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Pascal Giesmann</h3>
              <p className="text-lg text-muted-foreground mb-4">Webdesigner & KI-Experte</p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Webdesign</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">UX/UI</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm">KI-Integration</span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Chatbots</span>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={scrollToContact}>
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Rechte Seite - Über mich Text */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6">Mein Hintergrund</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mr-4 shrink-0">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Akademischer Hintergrund</h4>
                  <p className="text-muted-foreground">
                    Im Studium des Internationalen Informationsmanagements habe ich fundierte Kenntnisse in Webdesign, User Experience, Mensch-Maschine-Interaktion und SEO erworben.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mr-4 shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">KI-Expertise</h4>
                  <p className="text-muted-foreground">
                    Bei <a href="https://giesmann-ai.de" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">Giesmann AI <ExternalLink className="h-3 w-3 ml-1" /></a> habe ich wertvolle Erfahrungen in der Integration von KI-Chatbots, der Entwicklung von Voice Agents und der Automatisierung von Workflows gesammelt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 mr-4 shrink-0">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Ganzheitlicher Ansatz</h4>
                  <p className="text-muted-foreground">
                    Mein Ziel ist es, nicht nur visuell ansprechende Websites zu gestalten, sondern ganzheitliche digitale Erlebnisse zu schaffen, die Nutzer begeistern und Unternehmen voranbringen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* KI-Expertise Highlight */}
        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-100 dark:border-blue-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">KI-Beratung für dein Unternehmen</h3>
              <p className="text-muted-foreground mb-4">
                Durch meine Erfahrung bei <a href="https://giesmann-ai.de" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">Giesmann AI <ExternalLink className="h-3 w-3 ml-1" /></a> biete ich dir eine umfassende Beratung zur Integration von KI-Lösungen in dein Unternehmen:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 mr-3 shrink-0">
                    <Bot className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Maßgeschneiderte KI-Chatbots für verbesserten Kundenservice</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 mr-3 shrink-0">
                    <Mic className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Intelligente Voice Agents für natürliche Sprachinteraktionen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 mr-3 shrink-0">
                    <Workflow className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Automatisierte Workflows zur Effizienzsteigerung deiner Geschäftsprozesse</span>
                </li>
              </ul>
            </div>
            <div className="shrink-0">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" onClick={scrollToContact}>
                KI-Beratung anfragen
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* CTA-Bereich */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-4">Lass uns zusammenarbeiten</h3>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Hast du Fragen zu meinen Leistungen oder möchtest du mehr über meine Arbeit erfahren? Ich freue mich auf deine Nachricht!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={scrollToContact}>
            Kontakt aufnehmen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}