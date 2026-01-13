import { useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import GlamroLogo from "./icons/GlamroLogo";
import GoogleIcon from "./icons/GoogleIcon";
import AppleIcon from "./icons/AppleIcon";

const OnboardingScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleContinue = () => {
    if (mobileNumber.trim()) {
      console.log("Continue with mobile:", mobileNumber);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <GlamroLogo className="w-28 h-28 text-foreground mb-6" />

        {/* Header */}
        <h1 className="text-2xl font-semibold text-foreground text-center mb-8">
          Get started with Glamro
        </h1>

        {/* Mobile Input Section */}
        <div className="w-full mb-4">
          <label className="block text-muted-foreground text-sm mb-2">
            Mobile Number
          </label>
          <div className="flex items-center bg-muted rounded-lg px-4 py-3.5">
            {/* India Flag */}
            <span className="text-lg mr-2">🇮🇳</span>
            <span className="text-foreground font-medium mr-3">+91</span>
            <input
              type="tel"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Primary Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg btn-press"
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="px-4 text-muted-foreground text-sm">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social Buttons */}
        <div className="w-full space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-medium py-3.5 rounded-lg btn-press">
            <GoogleIcon className="w-5 h-5" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-medium py-3.5 rounded-lg btn-press">
            <AppleIcon className="w-5 h-5" />
            Continue with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-medium py-3.5 rounded-lg btn-press">
            <Mail className="w-5 h-5" />
            Continue with Email
          </button>
        </div>

        {/* Work with us link */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-foreground underline mt-10 btn-press"
        >
          Work with us
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Legal disclaimer */}
        <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
          By continuing, you agree to calls, including by autodialler,
          WhatsApp or texts from Glamro and its affiliates.
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
