import React from 'react';
import { Palette, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ReGraphic</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Kreative Webdesign-Lösungen für dein Unternehmen. Individuell, modern und effektiv.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:giesmann@regraphic.de" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+4915731925046" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telefon"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Leistungen</a>
              </li>
              <li>
                <a href="#webdesign-entwicklung" className="text-muted-foreground hover:text-primary transition-colors">Webdesign & Entwicklung</a>
              </li>
              <li>
                <a href="#ueber-mich" className="text-muted-foreground hover:text-primary transition-colors">Über mich</a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Webdesign</a>
              </li>
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Webentwicklung</a>
              </li>
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">KI-Chatbots</a>
              </li>
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Voice Agents</a>
              </li>
              <li>
                <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">SEO-Optimierung</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a 
                  href="mailto:giesmann@regraphic.de" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  giesmann@regraphic.de
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <a 
                  href="tel:+4915731925046" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +49 157 3192 5046
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button 
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="w-full"
              >
                Nachricht senden
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} ReGraphic. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <a href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}