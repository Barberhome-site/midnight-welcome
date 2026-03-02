const Footer = () => {
  return (
    <footer className="px-6 py-8 bg-background border-t border-border">
        <div className="mx-auto flex flex-col items-center">
          <img className={"w-32 text-foreground mb-6"} alt="Glamro Logo" src={"assets/image/logo.png"}/>
          {/* Disclaimers, informations and conditions */}
          <div className="flex flex-wrap justify-center mb-4">
            <a href="/documents/Disclaimer_igienico_sanitario.pdf" className="text-muted-foreground text-sm hover:underline mx-2">
              Trattamento dati
            </a>
            <a href="/documents/Informativa_Cookie.pdf" className="text-muted-foreground text-sm hover:underline mx-2">
              Cookies
            </a>
            <a href="/documents/Termini_Condizioni.pdf" className="text-muted-foreground text-sm hover:underline mx-2">
              Termini e condizioni
            </a>
            <a href="/documents/Regolamento_piattaforma.pdf" className="text-muted-foreground text-sm hover:underline mx-2">
              Regolamento
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 Glamro. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    );
};

export default Footer;