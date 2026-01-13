import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Star, 
  Calendar,
  CheckCircle,
  ChevronDown,
  Rocket,
  Users,
  Building2,
  Sparkles,
  Mail
} from "lucide-react";
import GlamroLogo from "./icons/GlamroLogo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WaitlistLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    userType: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.city && formData.userType) {
      console.log("Waitlist signup:", formData);
      setIsSubmitted(true);
    }
  };

  const features = [
    {
      icon: MapPin,
      title: "Trova Vicino",
      description: "Scopri i migliori barbieri e saloni nella tua zona all'istante"
    },
    {
      icon: Calendar,
      title: "Prenota Subito",
      description: "Prenota appuntamenti in pochi secondi, senza telefonate"
    },
    {
      icon: Clock,
      title: "Risparmia Tempo",
      description: "Niente più code, arrivi all'orario prenotato"
    },
    {
      icon: Star,
      title: "Recensioni Verificate",
      description: "Valutazioni reali da clienti reali per aiutarti a scegliere"
    }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2026",
      title: "Lancio Beta Privata",
      description: "Accesso anticipato per i membri della lista d'attesa nelle città selezionate",
      icon: Rocket,
      status: "upcoming"
    },
    {
      quarter: "Q2 2026",
      title: "Lancio Pubblico",
      description: "Accesso aperto per clienti e professionisti in tutta Italia",
      icon: Users,
      status: "planned"
    },
    {
      quarter: "Q3 2026",
      title: "Espansione Partner",
      description: "Integrazione di saloni, barbieri e professionisti della bellezza",
      icon: Building2,
      status: "planned"
    },
    {
      quarter: "Q4 2026",
      title: "Funzionalità Premium",
      description: "Prenotazioni avanzate, premi fedeltà e raccomandazioni AI",
      icon: Sparkles,
      status: "planned"
    }
  ];

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm flex flex-col items-center text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-3">
            Sei nella lista!
          </h1>
          <p className="text-muted-foreground mb-8">
            Ti avviseremo non appena Glamro sarà disponibile a {formData.city}.
          </p>
          <GlamroLogo className="w-16 h-16 text-muted-foreground opacity-50" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          <GlamroLogo className="w-24 h-24 text-foreground mb-8 animate-fade-in" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight animate-fade-in">
            Il Tuo Taglio Perfetto,<br />Ad Un Solo Tap
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md animate-fade-in">
            Il modo più intelligente per prenotare barbieri e parrucchieri.
            Trova, prenota e paga — tutto dal tuo telefono.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg btn-press text-lg animate-fade-in"
          >
            Unisciti alla lista d'attesa
          </button>

          <p className="text-muted-foreground text-sm mt-4 animate-fade-in">
            Sii il primo a sapere quando lanceremo
          </p>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToForm}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground btn-press"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Perché Glamro?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Stiamo costruendo il futuro degli appuntamenti di bellezza
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-muted p-6 rounded-lg flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Roadmap Section */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Roadmap
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Cosa arriverà nel 2026
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Unisciti a noi nel rivoluzionare l'industria della bellezza
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {roadmapItems.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card p-6 rounded-xl border border-border inline-block w-full md:max-w-sm">
                      <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                        {item.quarter}
                      </span>
                      <h3 className="text-foreground font-semibold text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="px-6 py-20 bg-card">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ottieni l'Accesso Anticipato
            </h2>
            <p className="text-muted-foreground">
              Sii il primo a provare Glamro nella tua città
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Indirizzo Email
              </label>
              <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
                <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="email"
                  placeholder="tua@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Numero di Cellulare
              </label>
              <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
                <span className="text-lg mr-2">🇮🇹</span>
                <span className="text-foreground font-medium mr-3">+39</span>
                <input
                  type="tel"
                  placeholder="Numero di cellulare"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {/* City Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Città
              </label>
              <input
                type="text"
                placeholder="La tua città"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-muted text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* User Type Select */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Sei un...
              </label>
              <Select
                value={formData.userType}
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
              >
                <SelectTrigger className="w-full bg-muted border-0 text-foreground h-12 rounded-lg focus:ring-2 focus:ring-foreground/20">
                  <SelectValue placeholder="Seleziona il tuo profilo" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="client">Cliente</SelectItem>
                  <SelectItem value="independent">Indipendente</SelectItem>
                  <SelectItem value="salon">Salone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone || !formData.city || !formData.userType}
              className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg btn-press disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              Unisciti alla lista d'attesa
            </button>
          </form>

          <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
            Iscrivendoti, accetti di ricevere aggiornamenti su Glamro tramite chiamate, WhatsApp, SMS e email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-background border-t border-border">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <GlamroLogo className="w-10 h-10 text-foreground mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2026 Glamro. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistLanding;
