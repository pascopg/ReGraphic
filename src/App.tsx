import { HeroScrollDemo } from './components/HeroScrollDemo';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { WebDesignDevSection } from './components/WebDesignDevSection';
import { AboutMeSection } from './components/AboutMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroScrollDemo />
        <WebDesignDevSection />
        <ServicesSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;