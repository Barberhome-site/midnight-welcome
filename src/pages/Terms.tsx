import Footer from "@/components/Footer";
import { ArrowLeftFromLine } from "lucide-react";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <nav className="w-full bg-background text-white py-4 px-6 flex items-center">
                <a href="/" className="text-lg hover:text-muted-foreground transition-colors">
                    <ArrowLeftFromLine className="w-5 h-5 inline mr-2 mb-0.5" />
                    Torna alla Home
                </a>
            </nav>
            <section className="min-h-screen flex flex-col justify-center items-left py-16 relative mx-auto w-5/6 md:w-3/4 lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Termini e condizioni</h1>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">Premesse</h2>
                    <p className="text-md md:text-lg">
                        Le presenti condizioni generali di servizio e vendita (di seguito "Condizioni Generali")
disciplinano: (i) la prenotazione e l’acquisto – tramite la piattaforma web www.glamro.it e
l'applicazione mobile GLAMRO (di seguito, congiuntamente, la "Piattaforma") di cui è titolare la società
GLAMRO S.R.L. (la "Società") – dei servizi beauty offerti da professionisti terzi ("Servizi"); (ii) la vendita
diretta di prodotti, cosmetici, gift card e beni offerti dalla Società nella sezione E-commerce
("Prodotti"); (iii) l'utilizzo della Piattaforma stessa.
                    </p>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">Definizioni</h2>
                    <ul className="list-disc list-inside text-md md:text-lg">
                        <li className="mb-3"><strong>Cliente/Utente:</strong> Qualsiasi persona fisica o giuridica che si registra sulla Piattaforma per
acquistare Servizi o Prodotti.</li>
                        <li className="mb-3"><strong>Professionista/Partner:</strong> Barbieri, parrucchieri, estetiste e operatori del benessere che, registrati
sulla Piattaforma, forniscono i Servizi ai Clienti in autonomia operativa.</li>
                        <li className="mb-3"><strong>Servizi:</strong> I servizi di beauty on-demand (es. taglio, barba, piega, trattamenti) offerti dai
Professionisti.</li>
                        <li className="mb-3"><strong>Prodotti:</strong> I beni fisici (shampoo, creme, accessori) venduti direttamente da GLAMRO tramite lo
shop in-App.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">1. Accettazione delle condizioni</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">L'utilizzo della Piattaforma implica l'accettazione integrale
delle presenti Condizioni. L'accettazione avviene tramite procedura "point and click" al momento della
registrazione o dell'acquisto.</li>
                        <li className="mb-3">Il contratto è archiviato digitalmente sui server della Società ed è
accessibile, previa richiesta, da parte dell’Utente.</li>
                        <li className="mb-3">Le fasi tecniche per la conclusione del contratto
prevedono: selezione del Servizio o Prodotto, accesso/registrazione, inserimento dati richiesti,
accettazione T&C e conferma dell'ordine.</li>
                        <li className="mb-3">L'Utente ha la possibilità di correggere eventuali errori
prima dell'invio dell'ordine.</li>
                        <li className="mb-3">La lingua disponibile per la conclusione del contratto è l'italiano.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">2. Descrizione del servizio (Modello Marketplace)</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">GLAMRO agisce come intermediario
tecnologico (tramite piattaforma tecnologica) mettendo in contatto la domanda degli Utenti con
l'offerta dei Professionisti.</li>
                        <li className="mb-3"> Il contratto di prestazione del Servizio di bellezza intercorre
esclusivamente tra il Cliente e il Professionista. GLAMRO non è responsabile dell'esecuzione materiale
del trattamento (es. qualità del taglio), ma solo del funzionamento dell'App e della gestione dei
pagamenti.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">3. Registrazione e sicurezza</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">Per utilizzare l'App è necessaria la registrazione. L'Utente è
responsabile della custodia delle credenziali.</li>
                        <li className="mb-3">La Società si riserva il diritto di sospendere l'account
in caso di violazioni, uso improprio, o comportamenti scorretti verso i Professionisti.
</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">4. Prenotazione servizi e politiche di cancellazione</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">Cancellazione:</li>
                        <ul className="list-disc list-inside text-md md:text-lg pl-6">
                            <li className="mb-3"><strong>Entro 24 ore:</strong> Cancellazione gratuita. L'importo viene rimborsato o riaccreditato come credito in App.</li>
                            <li className="mb-3"><strong>Meno di 24 ore (Late Cancel):</strong> Nessun rimborso. Viene addebitata una penale pari al 100% del valore
del servizio per compensare il mancato guadagno del Professionista.</li>
                            <li className="mb-3"><strong>Forza Maggiore:</strong> Solo in caso di comprovata forza maggiore (documentabile), la Società potrà, a sua
discrezione, emettere un voucher pari al 50% dell'importo.</li>
                        </ul>
                        <li className="mb-3">Ritardi e No-Show (Reciprocità):</li>
                        <ul className="list-disc list-inside text-md md:text-lg pl-6">
                            <li className="mb-3"><strong>Ritardo del Professionista:</strong> Il Cliente attende 20 minuti. Oltre tale termine, può riprogrammare o
ottenere il rimborso integrale.</li>
                            <li className="mb-3"><strong>Ritardo del Cliente:</strong> Il Professionista attende 20 minuti. Oltre tale termine, l'appuntamento salta e
viene addebitato il 100% del costo (No-Show).</li>
                        </ul>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">5. E-commerce: Vendita di prodotti</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">Gli acquisti di Prodotti fisici (es. creme, lozioni) sono
venduti direttamente da GLAMRO S.R.L.</li>
                        <li className="mb-3"> Spedizioni: I prodotti vengono spediti all'indirizzo indicato. I
tempi di consegna sono stime indicative.</li>
                        <li className="mb-3">Diritto di Recesso (Prodotti): Il Cliente ha 14 giorni dalla
ricezione per rendere i prodotti, scrivendo a contact@glamro.it.</li>
                        <li className="mb-3">Esclusione Recesso (Igiene): Ai sensi
dell'art. 59 del Codice del Consumo, non si accettano resi di cosmetici o prodotti sigillati che siano stati
aperti, per motivi igienici e di tutela della salute.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">6. Pagamenti</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3"> I pagamenti avvengono tramite App (Carta di Credito, Apple Pay, Google Pay).</li>
                        <li className="mb-3">No
Contanti: Non sono accettati pagamenti in contanti diretti al Professionista per i servizi prenotati, salvo
mance facoltative. GLAMRO incassa in nome e per conto del Professionista.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">7. Limitazioni di responsabilità</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">La Società non è responsabile per:</li>
                        <ul className="list-disc list-inside text-md md:text-lg pl-6">
                            <li className="mb-3">Danni fisici, reazioni allergiche o insoddisfazione estetica derivanti dal Servizio del Professionista.</li>
                            <li className="mb-3">Malfunzionamenti dell'App dovuti a cause di forza maggiore o bug.</li>
                            <li className="mb-3">Ritardi dei Professionisti dovuti al traffico o imprevisti.</li>
                        </ul>
                        <li className="mb-3">L'Utente manleva GLAMRO da qualsiasi
pretesa risarcitoria connessa all'operato del Professionista.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">8. Requisiti di età</h2>
                    <p className="text-md md:text-lg">
                        I servizi sono riservati ai maggiorenni. I minori possono usufruirne solo sotto
supervisione di un genitore o tutore.
                    </p>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">9. Modifiche e cessione</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">La Società può modificare queste Condizioni in ogni momento,
notificandolo via App. </li>
                        <li className="mb-3">GLAMRO può cedere il presente contratto a terzi (es. in caso di exit o
acquisizione della Società) senza pregiudizio per i diritti dell'Utente.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">10. Legge applicabile e foro competente</h2>
                    <ul className="list-decimal list-inside text-md md:text-lg">
                        <li className="mb-3">Legge Italiana. </li>
                        <li className="mb-3">Foro Competente:</li>
                        <ul className="list-disc list-inside text-md md:text-lg pl-6">
                            <li className="mb-3">Per i Consumatori: Foro di residenza del Consumatore.</li>
                            <li className="mb-3">Per Clienti Business/Professionisti (B2B): Foro esclusivo di Ancona.</li>
                        </ul>
                        <li className="mb-3">Ai sensi del Regolamento UE
524/2013, si informa che la Commissione Europea mette a disposizione una piattaforma per la
risoluzione online delle controversie (ODR), disponibile al seguente link:
<a className="underline break-all" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.</li>
                    </ul>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">11. Privacy</h2>
                    <p className="text-md md:text-lg">
                         Il trattamento dei dati personali avviene nel rispetto del Regolamento UE 2016/679
(GDPR) e del D. Lgs. 196/2003 come novellato. L'Utente è invitato a consultare l'Informativa Privacy
completa disponibile sul sito <a className="underline break-all" href="https://www.glamro.it/privacy" target="_blank" rel="noopener noreferrer">www.glamro.it/privacy</a>.
                    </p>
                </div>
                <div className="rounded-lg p-8 shadow-lg mb-3">
                    <h2 className="text-3xl font-semibold mb-2">Approvazione specifica (art. 1341 e art. 1342 C.C.)</h2>
                    <p className="text-md md:text-lg">
                        Ai sensi degli artt. 1341 e 1342 del Codice Civile,
l'Utente dichiara di approvare specificamente le seguenti clausole: Premesse: (Limitazione responsabilità);
Art. 2.2: (GLAMRO come mero intermediario, esclusione responsabilità sui servizi); Art. 3.2: (Sospensione
account senza preavviso); Art. 4: (Penali del 100% per cancellazione tardiva e No-Show); Art. 7: (Limitazioni
generali di responsabilità e manleva); Art. 10.2: (Deroga al foro competente per utenti Business).
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Terms;