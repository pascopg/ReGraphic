import React from 'react';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  ShieldCheck,
  Bot,
  Mic,
  Workflow
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, accentColor }) => {
  return (
    <Card className="p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${accentColor} transition-all duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export function ServicesSection() {
  const services = [
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "Webdesign",
      description: "Maßgeschneiderte Designs, die deine Marke perfekt repräsentieren und deine Besucher begeistern.",
      accentColor: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Webentwicklung",
      description: "Moderne, schnelle und responsive Websites mit den neuesten Technologien für optimale Performance.",
      accentColor: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Responsive Design",
      description: "Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop-Computer.",
      accentColor: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "KI-Chatbots",
      description: "Integration intelligenter Chatbots, die durch meine Erfahrung bei Giesmann AI (Giesmann-ai.de) entwickelt werden.",
      accentColor: "bg-gradient-to-br from-indigo-500 to-blue-600"
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "Voice Agents",
      description: "Entwicklung von sprachgesteuerten Assistenten, die die Interaktion mit deiner Website revolutionieren.",
      accentColor: "bg-gradient-to-br from-violet-500 to-indigo-600"
    },
    {
      icon: <Workflow className="h-6 w-6 text-white" />,
      title: "Automated Workflows",
      description: "Implementierung automatisierter Arbeitsabläufe, die deine Geschäftsprozesse optimieren und effizienter gestalten.",
      accentColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "SEO-Optimierung",
      description: "Optimierung deiner Website für Suchmaschinen, damit potenzielle Kunden dich leichter finden können.",
      accentColor: "bg-gradient-to-br from-orange-500 to-amber-600"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Performance",
      description: "Schnelle Ladezeiten und optimierte Leistung für ein besseres Nutzererlebnis und bessere Rankings.",
      accentColor: "bg-gradient-to-br from-red-500 to-rose-600"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Wartung & Support",
      description: "Regelmäßige Updates, Sicherheitspatches und technischer Support für deine Website.",
      accentColor: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="leistungen" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meine Leistungen</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ich biete umfassende Webdesign- und Entwicklungsdienstleistungen, die auf deine individuellen Bedürfnisse zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              accentColor={service.accentColor}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-100 dark:border-blue-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">KI-Expertise von Giesmann AI</h3>
              <p className="text-muted-foreground mb-4">
                Durch meine Erfahrung bei <a href="https://giesmann-ai.de" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Giesmann AI</a> biete ich fortschrittliche KI-Lösungen für dein Unternehmen:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</span>
                  <span>Maßgeschneiderte KI-Chatbots für verbesserten Kundenservice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</span>
                  <span>Intelligente Voice Agents für natürliche Sprachinteraktionen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</span>
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
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Hast du Fragen zu meinen Leistungen oder möchtest du ein individuelles Angebot erhalten?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={scrollToContact}>
            Kontaktiere mich
          </Button>
        </div>
      </div>
    </section>
  );
}