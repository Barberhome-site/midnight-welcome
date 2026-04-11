import Footer from "@/components/Footer";
import { ArrowLeftFromLine } from "lucide-react";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
            <nav className="w-full bg-background text-white py-4 px-6 flex items-center">
                <a href="/" className="text-lg hover:text-muted-foreground transition-colors">
                    <ArrowLeftFromLine className="w-5 h-5 inline mr-2 mb-0.5" />
                    Torna alla Home
                </a>

            </nav>
            <section className="min-h-screen flex flex-col justify-center items-left px-20 py-16 relative mx-auto w-5/6 text-justify        ">
                    <h1 className="text-5xl font-bold mb-10 text-center">Informativa sul trattamento dei dati</h1>
                    <div className="rounded-lg p-8 shadow-lg px-20 mb-3">
                        <h2 className="text-3xl font-semibold mb-2">1. Categorie di dati trattati</h2>
                        <ul className="list-disc list-inside text-lg">
                            <li className="mb-3">Dati anagrafici e di contatto (nome, cognome, email, telefono);</li>
                            <li className="mb-3">Dati di pagamento e fatturazione;</li>
                            <li className="mb-3">Cronologia di prenotazioni e servizi fruiti;</li>
                            <li className="mb-3">Dati di geolocalizzazione (per i servizi on-demand);</li>
                            <li className="mb-3">Dati di navigazione tramite cookie (v. Cookie Policy);</li>
                            <li className="mb-3">Eventuali ulteriori dati forniti volontariamente dall’utente.</li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">2. Finalità del trattamento e basi giuridiche</h2>
                        <ul className="list-disc list-inside text-lg list-decimal">
                            <li className="mb-2">Finalità contrattuali e precontrattuali:<br/> Registrazione, prenotazioni, gestione account, fatturazione.
                            <br/>Base giuridica: art. 6.1.b GDPR.
                            </li>
                            <li className="mb-3">Finalità di geolocalizzazione (servizi on-demand):<br/>
                            Identificare la posizione dell’utente per individuare i professionisti disponibili.
                            <br/>Base giuridica: art. 6.1.a GDPR – consenso esplicito dell’interessato.
                            </li>
                            <li className="mb-3">Finalità di marketing diretto:<br/>
                            Invio di comunicazioni promozionali (email, SMS, notifiche push).
                            <br/>Base giuridica: art. 6.1.a GDPR – consenso esplicito.
                            <br/>Revocabile in qualsiasi momento.
                            </li>
                            <li className="mb-3">Adempimento obblighi di legge:<br/>
                            Obblighi fiscali, contabili, richieste delle autorità.
                            <br/>Base giuridica: art. 6.1.c GDPR.
                            </li>
                            <li className="mb-3">Tutela giudiziaria:<br/>
                            Difesa di diritti in sede giudiziaria.
                            <br/>Base giuridica: art. 6.1.f GDPR – legittimo interesse del Titolare
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">3. Modalità di trattamento</h2>
                        <p className="text-lg">
                        Il trattamento avviene in modalità elettronica e cartacea, con misure tecniche e organizzative idonee
                        alla protezione dei dati, nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione e
                        integrità.
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">4. Conservazione dei dati</h2>
                        <ul className="list-disc list-inside text-lg">
                            <li className="mb-3">Finalità contrattuali: durata del contratto + 10 anni;</li>
                            <li className="mb-3">Marketing: fino a revoca del consenso, massimo 24 mesi;</li>
                            <li className="mb-3">Obblighi di legge: secondo termini normativi.</li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">5. Destinatari dei dati</h2>
                        <p className="mb-6 text-lg">
                        I dati potranno essere comunicati a:
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg">
                            <li className="mb-3">Personale autorizzato del Titolare;</li>
                            <li className="mb-3">Professionisti partner (autonomi titolari);</li>
                            <li className="mb-3">Fornitori di servizi IT, hosting, pagamenti;</li>
                            <li className="mb-3">Consulenti fiscali e legali;</li>
                            <li className="mb-3">Altri Responsabili esterni del trattamento, formalmente nominati ai sensi dell’art. 28 GDPR.</li>
                        </ul>
                        <p className="text-lg">
                        I dati non saranno diffusi. In caso di trasferimento verso Paesi extra-UE, saranno adottate le garanzie
                        previste dagli artt. 44 ss. GDPR (es. Clausole Contrattuali Standard).
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">6. Google Calendar (Google API Services)</h2>
                        <p className="text-lg">
                        L’App può integrarsi con Google Calendar per la gestione degli appuntamenti.
                        Il trattamento dei dati attraverso le API Google avviene nel rispetto delle <a className="underline" href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User
                        Data Policy</a>, incluse le norme di Limited Use.
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">7. Diritti dell'interessato (art. 15–22 GDPR)</h2>
                        <p className="mb-6 text-lg">
                        L’interessato ha diritto di:
                        </p>
                        <ul className="list-disc list-inside text-lg">
                            <li className="mb-3">Accesso, rettifica, cancellazione;</li>
                            <li className="mb-3">Limitazione e opposizione al trattamento;</li>
                            <li className="mb-3">Portabilità dei dati;</li>
                            <li className="mb-3">Revoca del consenso (senza pregiudicare la liceità del trattamento effettuato prima della revoca);</li>
                            <li className="mb-3">Proporre reclamo al Garante Privacy: <a className="underline" href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">8. Natura del conferimento</h2>
                        <p className="mb-6 text-lg">
                        Il conferimento dei dati è:
                        </p>
                        <ul className="list-disc list-inside text-lg">
                            <li className="mb-3">Obbligatorio per finalità contrattuali e di legge;</li>
                            <li className="mb-3">Facoltativo per marketing e geolocalizzazione.</li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">9. Responsabile della protezione dei dati (DPO)</h2>
                        <p className="text-lg">
                        GLAMRO non ha nominato un DPO, non ricorrendo ai casi previsti dall’art. 37 GDPR.
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3 px-20">
                        <h2 className="text-3xl font-semibold mb-2">10. Cookie policy</h2>
                        <p className="text-lg">
                        Per maggiori dettagli sui cookie, consultare l’informativa aggiornata su:<br />
                        <a className="underline" href="https://www.glamro.it/cookie-policy" target="_blank" rel="noopener noreferrer">www.glamro.it/cookie-policy</a>
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-5 px-20">
                        <h2 className="text-3xl font-semibold mb-2">11. Modifiche all'informativa</h2>
                        <p className="mb-6 text-lg">
                        Eventuali modifiche saranno pubblicate su <a className="underline" href="https://www.glamro.it" target="_blank" rel="noopener noreferrer">www.glamro.it</a> e/o notificate via App.
                        </p>
                    </div>
            </section>
            <Footer />
        </div>
    );
}

export default Privacy;