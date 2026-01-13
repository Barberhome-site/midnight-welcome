import { useState } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import GlamroLogo from "./icons/GlamroLogo";

const WaitlistScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = () => {
    if (mobileNumber.trim()) {
      // Here you would send to your backend/database
      console.log("Joined waitlist with:", mobileNumber);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-3">
            Vous êtes sur la liste !
          </h1>
          <p className="text-muted-foreground mb-8">
            Nous vous contacterons dès que Glamro sera disponible.
          </p>
          <GlamroLogo className="w-16 h-16 text-muted-foreground opacity-50" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <GlamroLogo className="w-28 h-28 text-foreground mb-6" />

        {/* Header */}
        <h1 className="text-2xl font-semibold text-foreground text-center mb-2">
          Glamro arrive bientôt
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Rejoignez la liste d'attente pour être notifié du lancement.
        </p>

        {/* Mobile Input Section */}
        <div className="w-full mb-4">
          <label className="block text-muted-foreground text-sm mb-2">
            Numéro de téléphone
          </label>
          <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
            {/* India Flag */}
            <span className="text-lg mr-2">🇮🇳</span>
            <span className="text-foreground font-medium mr-3">+91</span>
            <input
              type="tel"
              placeholder="Votre numéro"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Join Waitlist Button */}
        <button
          onClick={handleJoinWaitlist}
          disabled={!mobileNumber.trim()}
          className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg btn-press disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Rejoindre la liste d'attente
        </button>

        {/* Work with us link */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-foreground underline mt-10 btn-press"
        >
          Travailler avec nous
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Legal disclaimer */}
        <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
          En vous inscrivant, vous acceptez de recevoir des communications de Glamro et ses partenaires.
        </p>
      </div>
    </div>
  );
};

export default WaitlistScreen;
