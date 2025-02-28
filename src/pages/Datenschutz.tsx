import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Shield, Eye, UserCheck, BarChart, Lock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Datenschutz() {
  const navigate = useNavigate();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Button>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="space-y-10">
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mr-4 shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Datenschutz auf einen Blick</h2>
              </div>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mr-4 shrink-0">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Datenerfassung auf unserer Website</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im 
                Impressum dieser Website.
              </p>
              
              <div className="space-y-6">
                <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                  <h3 className="text-xl font-medium mb-3">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-muted-foreground">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, beispielsweise durch das Kontaktformular. 
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem 
                    technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
                
                <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                  <h3 className="text-xl font-medium mb-3">Wofür nutzen wir Ihre Daten?</h3>
                  <p className="text-muted-foreground">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten 
                    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 mr-4 shrink-0">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Ihre Rechte</h2>
              </div>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
                zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im 
                Impressum angegebenen Adresse an uns wenden.
              </p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 mr-4 shrink-0">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Analyse-Tools und Tools von Drittanbietern</h2>
              </div>
              <p className="text-muted-foreground">
                Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit 
                Cookies und sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das 
                Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
              </p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-rose-600 mr-4 shrink-0">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Datensicherheit</h2>
              </div>
              <p className="text-muted-foreground">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche 
                Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder den unbefugten Zugriff Dritter zu schützen.
              </p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 mr-4 shrink-0">
                  <RefreshCw className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Aktualität und Änderung dieser Datenschutzerklärung</h2>
              </div>
              <p className="text-muted-foreground">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2025. Durch die Weiterentwicklung unserer 
                Website oder aufgrund geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig werden, diese 
                Datenschutzerklärung zu ändern.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}