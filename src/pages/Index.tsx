import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductSections from '@/components/ProductSections';
import FooterSections from '@/components/FooterSections';

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [showCreditForm, setShowCreditForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCreditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setShowCreditForm(false);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Карта будет готова в течение 3 дней",
    });
    setShowCardForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection />
      <ProductSections
        showCreditForm={showCreditForm}
        showCardForm={showCardForm}
        setShowCreditForm={setShowCreditForm}
        setShowCardForm={setShowCardForm}
        handleCreditSubmit={handleCreditSubmit}
        handleCardSubmit={handleCardSubmit}
      />
      <FooterSections />
    </div>
  );
}
