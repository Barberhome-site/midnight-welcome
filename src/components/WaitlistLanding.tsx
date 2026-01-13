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
      title: "Find Nearby",
      description: "Discover top-rated barbers and salons in your area instantly"
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Schedule appointments in seconds, no calls needed"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "No more waiting in queues, arrive at your scheduled time"
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Real ratings from real customers to help you choose"
    }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2026",
      title: "Private Beta Launch",
      description: "Early access for waitlist members in select cities",
      icon: Rocket,
      status: "upcoming"
    },
    {
      quarter: "Q2 2026",
      title: "Public Launch",
      description: "Open access for clients and professionals nationwide",
      icon: Users,
      status: "planned"
    },
    {
      quarter: "Q3 2026",
      title: "Partner Expansion",
      description: "Onboarding salons, barbershops, and beauty professionals",
      icon: Building2,
      status: "planned"
    },
    {
      quarter: "Q4 2026",
      title: "Premium Features",
      description: "Advanced booking, loyalty rewards, and AI recommendations",
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
            You're on the list!
          </h1>
          <p className="text-muted-foreground mb-8">
            We'll notify you as soon as Glamro launches in {formData.city}.
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
            Your Perfect Cut,<br />One Tap Away
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md animate-fade-in">
            The smartest way to book barbers and hair salons. 
            Find, book, and pay — all from your phone.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg btn-press text-lg animate-fade-in"
          >
            Join the Waitlist
          </button>

          <p className="text-muted-foreground text-sm mt-4 animate-fade-in">
            Be the first to know when we launch
          </p>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToForm}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce btn-press"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Why Glamro?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            We're building the future of grooming appointments
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
              What's Coming in 2026
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Join us on our journey to revolutionize the grooming industry
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
              Get Early Access
            </h2>
            <p className="text-muted-foreground">
              Be the first to experience Glamro in your city
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Email Address
              </label>
              <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
                <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                Mobile Number
              </label>
              <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
                <span className="text-lg mr-2">🇮🇳</span>
                <span className="text-foreground font-medium mr-3">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {/* City Input */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Your city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-muted text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* User Type Select */}
            <div>
              <label className="block text-muted-foreground text-sm mb-2">
                You are a...
              </label>
              <Select
                value={formData.userType}
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
              >
                <SelectTrigger className="w-full bg-muted border-0 text-foreground h-12 rounded-lg focus:ring-2 focus:ring-foreground/20">
                  <SelectValue placeholder="Select your profile" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="salon">Salon</SelectItem>
                  <SelectItem value="independent">Indépendant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone || !formData.city || !formData.userType}
              className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg btn-press disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              Join Waitlist
            </button>
          </form>

          <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
            By signing up, you agree to receive updates about Glamro via calls, WhatsApp, or SMS.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-background border-t border-border">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <GlamroLogo className="w-10 h-10 text-foreground mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2026 Glamro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistLanding;
