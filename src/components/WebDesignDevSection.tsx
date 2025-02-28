import React from 'react';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Layers, 
  Zap, 
  Monitor,
  Figma,
  PenTool,
  Globe
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function WebDesignDevSection() {
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
    <section id="webdesign-entwicklung" className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Webdesign & Entwicklung</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der kreativen Konzeption bis zur technischen Umsetzung - ich biete dir den kompletten Service aus einer Hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Linke Seite - Webdesign */}
          <motion.div 
            className="rounded-2xl overflow-hidden border border-border bg-card p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mr-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Webdesign</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Ich gestalte einzigartige, ansprechende Designs, die deine Marke perfekt repräsentieren und deine Besucher begeistern. Jedes Design wird individuell auf deine Bedürfnisse zugeschnitten.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 mr-3 shrink-0">
                  <PenTool className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">Intuitive Benutzeroberflächen mit optimaler User Experience</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 mr-3 shrink-0">
                  <Figma className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Prototyping</h4>
                  <p className="text-sm text-muted-foreground">Interaktive Prototypen zur Visualisierung des Endprodukts</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 mr-3 shrink-0">
                  <Smartphone className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">Perfekte Darstellung auf allen Geräten</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 mr-3 shrink-0">
                  <Monitor className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Branding</h4>
                  <p className="text-sm text-muted-foreground">Konsistente visuelle Identität für deine Marke</p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={scrollToContact}>
                Designberatung anfragen
              </Button>
            </div>
          </motion.div>
          
          {/* Rechte Seite - Webentwicklung */}
          <motion.div 
            className="rounded-2xl overflow-hidden border border-border bg-card p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 mr-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Webentwicklung</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Ich entwickle moderne, schnelle und responsive Websites mit den neuesten Technologien für optimale Performance und Benutzerfreundlichkeit. Jede Lösung wird nach höchsten Standards umgesetzt.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-100 dark:bg-cyan-900/30 mr-3 shrink-0">
                  <Globe className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Frontend</h4>
                  <p className="text-sm text-muted-foreground">Moderne Frameworks wie React, Vue.js und mehr</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 mr-3 shrink-0">
                  <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Backend</h4>
                  <p className="text-sm text-muted-foreground">Robuste Lösungen mit Node.js, PHP und Datenbanken</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-100 dark:bg-green-900/30 mr-3 shrink-0">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Performance</h4>
                  <p className="text-sm text-muted-foreground">Optimierte Ladezeiten und Serverleistung</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 mr-3 shrink-0">
                  <Smartphone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">PWA</h4>
                  <p className="text-sm text-muted-foreground">Progressive Web Apps für App-ähnliche Erlebnisse</p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white" onClick={scrollToContact}>
                Entwicklungsberatung anfragen
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Prozess-Bereich */}
        <motion.div 
          className="mt-20 p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-100/50 dark:border-blue-900/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Mein Arbeitsprozess</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h4 className="font-bold mb-2">Konzeption</h4>
              <p className="text-sm text-muted-foreground">Analyse deiner Anforderungen und Erstellung eines maßgeschneiderten Konzepts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h4 className="font-bold mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">Erstellung von Wireframes und finalen Designs nach deinen Vorstellungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h4 className="font-bold mb-2">Entwicklung</h4>
              <p className="text-sm text-muted-foreground">Umsetzung des Designs in funktionalen Code mit modernsten Technologien</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h4 className="font-bold mb-2">Launch</h4>
              <p className="text-sm text-muted-foreground">Veröffentlichung deiner Website und kontinuierliche Betreuung</p>
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
          <h3 className="text-2xl font-bold mb-4">Bereit für dein nächstes Webprojekt?</h3>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Lass uns gemeinsam deine Vision in die Realität umsetzen. Von der ersten Idee bis zum fertigen Produkt - ich begleite dich auf dem gesamten Weg.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={scrollToContact}>
            Kostenloses Erstgespräch vereinbaren
          </Button>
        </motion.div>
      </div>
    </section>
  );
}