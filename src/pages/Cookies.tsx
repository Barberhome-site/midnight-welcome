import Footer from "@/components/Footer";
import { ArrowLeftFromLine } from "lucide-react";

const Cookies = () => {
    return (
         <div className="min-h-screen bg-background">
            <nav className="w-full bg-background text-white py-4 px-6 flex items-center">
                <a href="/" className="text-lg hover:text-muted-foreground transition-colors">
                    <ArrowLeftFromLine className="w-5 h-5 inline mr-2 mb-0.5" />
                    Torna alla Home
                </a>
            </nav>
            <section className="min-h-screen flex flex-col justify-center items-left py-16 relative mx-auto w-5/6 md:w-3/4 lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Informativa sui cookie</h1>
                    <div className="rounded-lg p-8 shadow-lg mb-3">
                        <h2 className="text-3xl font-semibold mb-2">1. Cosa sono i cookie</h2>
                        <p className="text-md md:text-lg">
                            I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell’Utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie consentono al sito di riconoscere l’Utente e memorizzarne preferenze o credenziali di accesso. Esistono anche cookie di terze parti, installati da siti differenti tramite elementi incorporati (es. banner, video, mappe, social plugin).
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3">
                        <h2 className="text-3xl font-semibold mb-2">2. Tipologie di cookie</h2>
                        <p className="text-md md:text-lg">
                            In base alla durata:
                        </p>
                        <ul className="list-decimal list-inside text-md md:text-lg">
                            <li className="mb-3">Cookie di sessione: <br/>cancellati alla chiusura del browser;</li>
                            <li className="mb-3">Cookie persistenti: <br/>restano memorizzati fino alla scadenza preimpostata o cancellazione manuale.</li>
                        </ul>
                        <p className="mt-6 text-md md:text-lg">
                            In base alla funzione:
                        </p>
                        <ul className="list-decimal list-inside text-md md:text-lg">
                            <li className="mb-3">Cookie tecnici e funzionali: <br/>Permettono il corretto utilizzo del sito e delle sue funzionalità (es. carrello, login). Non richiedono consenso. Includono anche gli analytics anonimizzati.</li>
                            <li className="mb-3">Cookie di profilazione: <br/>Monitorano la navigazione per offrire pubblicità personalizzate (es. annunci mirati). Richiedono consenso esplicito tramite banner (art. 7 GDPR)</li>
                            <li className="mb-3">Cookie di terze parti: <br/>Possono essere installati da soggetti terzi per finalità tecniche, statistiche o di profilazione. L’utilizzo e la gestione sono soggetti alle rispettive privacy policy.</li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3">
                        <h2 className="text-3xl font-semibold mb-2">3. Cookie utilizzati da Glamro.it</h2>
                        <p className="text-md md:text-lg">
                            Il sito <a className="underline break-all" href="https://www.glamro.it" rel="noopener noreferrer">www.glamro.it</a> e l’App GLAMRO utilizzano le seguenti categorie di cookie:
                        </p>
                        <ul className="list-disc list-inside text-md md:text-lg">
                            <li className="mb-3">Cookie tecnici e funzionali: <br/>Garantiscono navigazione sicura, gestione login, carrello e funzionalità di base. Non richiedono consenso.</li>
                            <li className="mb-3">Cookie analitici di terze parti (Google Analytics): <br/>Consentono di raccogliere statistiche anonime per migliorare l’esperienza utente. Informativa completa su: <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                            <li className="mb-3">Cookie di profilazione e marketing (terze parti): <br/>Utilizzati per pubblicità comportamentale tramite:</li>
                            <ul className="list-disc list-inside text-md md:text-lg pl-6">
                                <li className="mb-3">Meta (Facebook/Instagram) ADS<br/>Per tracciare conversioni e targettizzare annunci<br/>Info: <a className="underline break-all" href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policy.php</a></li>
                                <li className="mb-3">Google Ads e Google Remarketing<br/>Per mostrare annunci agli utenti che hanno già interagito con il sito<br/>Info: <a className="underline break-all" href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
                            </ul>
                        </ul>
                        <p className="mt-6 text-md md:text-lg">
                            Questi cookie vengono installati solo previo consenso esplicito tramite banner cookie.
                        </p>
                    </div>
                    <div className="rounded-lg p-8 shadow-lg mb-3">
                        <h2 className="text-3xl font-semibold mb-2">4. Gestione dei cookie</h2>
                        <p className="text-md md:text-lg">
                            L’Utente può gestire i cookie tramite le impostazioni del browser:<br />
                            <ul className="list-disc list-inside text-md md:text-lg">
                                <li>
                                    Google Chrome: <a className="underline break-all" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a>
                                </li>
                                <li>
                                    Mozilla Firefox: <a className="underline break-all" href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a>
                                </li>
                                <li>
                                    Apple Safari: <a className="underline break-all" href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer">https://support.apple.com/it-it/HT201265</a>
                                </li>
                                <li>
                                    Microsoft Edge: <a className="underline break-all" href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies</a>
                                </li>
                            </ul>
                            Per disattivare singolarmente i cookie di profilazione, visitare:<br />
                            <ul className="list-disc list-inside text-md md:text-lg">
                                <li>
                                    <a className="underline break-all" href="https://www.youronlinechoices.com/it/" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.com/it/</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </section>
            <Footer />
        </div>
    );
}

export default Cookies;