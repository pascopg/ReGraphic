import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für deine Nachricht. Ich werde mich so schnell wie möglich bei dir melden.",
    });
  };

  return (
    <section id="kontakt" className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Kontakt</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hast du Fragen oder möchtest du ein Projekt besprechen? Kontaktiere mich gerne - ich freue mich auf deine Nachricht!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Linke Seite - Kontaktformular */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mr-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Schreib mir eine Nachricht</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Dein Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="deine@email.de" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input id="subject" placeholder="Worum geht es?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Wie kann ich dir helfen?" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" /> Nachricht senden
              </Button>
            </form>
          </motion.div>
          
          {/* Rechte Seite - Kontaktinformationen */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 mr-4 shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">E-Mail</h4>
                    <a 
                      href="mailto:giesmann@regraphic.de" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      giesmann@regraphic.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mr-4 shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telefon</h4>
                    <a 
                      href="tel:+4915731925046" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +49 157 3192 5046
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-100 dark:border-purple-900 p-8">
              <h3 className="text-xl font-bold mb-4">Kostenloses Erstgespräch</h3>
              <p className="text-muted-foreground mb-6">
                Ich biete ein kostenloses 30-minütiges Erstgespräch an, um deine Anforderungen zu besprechen und zu sehen, wie ich dir am besten helfen kann.
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                Termin vereinbaren
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
     </section>
  );
}