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
  Mail,
  Globe,
  Lock,
  ShoppingCart
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "./Footer";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

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

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      userType: ""
    });
    setIsSubmitted(false);
  };

  const features = [
    {
      icon: Sparkles,
      title: "Un nouvo standard",
      description: "Prenotare servizi beauty e wellness diventa immediato, come ordinare un ride o un delivery."
    },
    {
      icon: Globe,
      title: "Un ecosistema, non solo prenotazioni",
      description: "Glamro connette professionisti, clienti e servizi in un’unica esperienza digitale."
    },
    {
      icon: MapPin,
      title: "La bellezza si muove con te",
      description: "A casa, in hotel, in ufficio. Il beauty non è più legato a un luogo."
    },
    {
      icon: Lock,
      title: "Professionisti selezionati e pagamenti digitalizzati",
      description: "Qualità, sicurezza, tracciabilità e fiducia al centro di tutto."
    }
  ];

  const roadmapItems = [
    {
      quarter: "15 Marzo 2026",
      title: "Lancio Beta Privata",
      description: "Accesso anticipato per i primi membri della waiting list nelle Marche e in Puglia",
      icon: Rocket,
      status: "upcoming"
    },
    {
      quarter: "1 Maggio 2026",
      title: "Lancio Ufficiale",
      description: "App disponibile su App Store e Google Play in tutta Italia",
      icon: Users,
      status: "planned"
    },
    {
      quarter: "Settembre 2026",
      title: "Apertura e-commerce Glamro",
      description: "Merchandising, prodotti beauty professionali e ottimizzazione della piattaforma",
      icon: ShoppingCart,
      status: "planned"
    },
    /*{
      quarter: "Q4 2026",
      title: "Funzionalità Premium",
      description: "Prenotazioni avanzate, premi fedeltà e raccomandazioni AI",
      icon: Sparkles,
      status: "planned"
    }*/
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
          <button
            onClick={clearForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg btn-press text-lg"
          >
            Torna alla lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          <img className={"w-1/2 text-foreground mb-8 animate-fade-in"} alt="Glamro Logo" src={"assets/image/logo.png"}/>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight animate-fade-in">
            La tua bellezza,<br />ad un solo tap
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md animate-fade-in">
            Il mondo del beauty & wellness sta cambiando.
            Unisciti anche tu alla rivoluzione iscrivendoti alla waiting list.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg btn-press text-lg animate-fade-in"
          >
            Unisciti alla waiting list
          </button>

          <p className="text-muted-foreground text-sm mt-4 animate-fade-in">
            Diventa il primo a sapere quando lanceremo
          </p>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToForm}
          className="absolute bottom-8 text-muted-foreground btn-press hover:animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-4xl mx-auto mb-16">
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            La nostra visione
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-justify">
            Glamro nasce per cambiare il modo in cui vivi la cura di te.<br />
            Niente più attese, telefonate o stress.<br />
            Scopri, prenota e vivi i migliori servizi beauty e wellness nella tua città, in pochi secondi.<br />
            <br />
            Il mondo del beauty & wellness è rimasto fermo per troppo tempo:<br />
            appuntamenti persi, telefonate infinite, attese e poca trasparenza.<br />
            <br />
            Glamro nasce per ribaltare tutto questo.<br />
            Vogliamo portare la bellezza nella vita reale delle persone: semplice, veloce, accessibile.<br />
            <br />
            Un ecosistema che connette persone e professionisti in modo intelligente.<br />
            La tua bellezza, finalmente, a un solo tap.
          </p>
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
              Diventa il primo a provare Glamro nella tua città
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
                  pattern="[0-9]{10}"
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
              Unisciti alla waiting list
            </button>
          </form>

          <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
            Iscrivendoti, accetti di ricevere aggiornamenti su Glamro tramite chiamate, WhatsApp, SMS e email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WaitlistLanding;
