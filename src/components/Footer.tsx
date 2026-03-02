const Footer = () => {
  return (
    <footer className="px-6 py-8 bg-background border-t border-border">
        <div className="mx-auto flex flex-col items-center">
          <img className={"w-32 text-foreground mb-6"} alt="Glamro Logo" src={"assets/image/logo.png"}/>
          {/* Disclaimers, informations and conditions */}
          <p className="text-muted-foreground text-sm">
            © 2026 Glamro. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    );
};

export default Footer;