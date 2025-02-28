import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, FileText, Scale, Copyright, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Impressum() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Impressum</h1>
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
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Angaben gemäß § 5 TMG:</h2>
              </div>
              <p className="text-muted-foreground">
                Pascal Giesmann<br />
                Am Brunnen 3<br />
                30900 Wedemark<br />
                Deutschland
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
                  <Link className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Kontakt:</h2>
              </div>
              <p className="text-muted-foreground">
                Telefon: <a href="tel:+4915731925046" className="text-blue-600 dark:text-blue-400 hover:underline">+49 (0) 157 31925046</a><br />
                E-Mail: <a href="mailto:Giesmann@ReGraphic.de" className="text-blue-600 dark:text-blue-400 hover:underline">Giesmann@ReGraphic.de</a><br />
                Website: <a href="https://www.ReGraphic.de" className="text-blue-600 dark:text-blue-400 hover:underline">www.ReGraphic.de</a>
              </p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 mr-4 shrink-0">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Vertretungsberechtigter Geschäftsführer:</h2>
              </div>
              <p className="text-muted-foreground">Pascal Giesmann</p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 mr-4 shrink-0">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:</h2>
              </div>
              <p className="text-muted-foreground">70 452 388 160</p>
            </motion.section>

            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-rose-600 mr-4 shrink-0">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Haftungsausschluss:</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Haftung für Inhalte</h3>
                  <p className="text-muted-foreground">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
                    überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                    Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist 
                    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Haftung für Links</h3>
                  <p className="text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
                    diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder 
                    Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten 
                    Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Urheberrecht</h3>
                  <p className="text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
                    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                    Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Inhalte umgehend entfernen.
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
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 mr-4 shrink-0">
                  <Copyright className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Streitschlichtung</h2>
              </div>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>. 
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor 
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}