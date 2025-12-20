export const dossierTranslations = {
    fr: {
        headerTitle: "Certification et vérification<br>de documents",
        headerSubtitle: "Transmettre un dossier certifié n'a jamais été aussi simple !",
        demoVideo: "Démo Vidéo",
        comingSoon: "Bientôt disponible",
        ownerBtn: "Je souhaite vérifier un document",
        ownerStep1: "Je reçois un document certifié",
        ownerStep2: `Je vérifie le document sur <a href="https://verify.tisura.xyz/" class="font-semibold text-blue-600 dark:text-blue-400" target="_blank">verify.tisura.xyz</a>`,
        applicantBtn: "Je souhaite certifier un document",
        applicantStep1: `J'installe l'extension <a href="https://chromewebstore.google.com/detail/tisura-redirector-esm/hoinkjfjaejeilfgnidgdogbhbiakgei" class="text-purple-600 dark:text-purple-400 font-medium cursor-pointer" target="_blank">Tisura</a>.`,
        applicantStep2: "Je télécharge et certifie mes documents.",
        applicantStep3: "J'envoie mes documents certifiés.",
        contactText: "Pour toute autre question, envoyez un email à ",
        faqTitle: "Questions fréquentes",
        faq: [
            {
                question: "Que signifie que Tisura garantit authenticité et intégrité ?",
                answer: `<ul class="list-disc pl-5 space-y-2">
            <li><strong>Authenticité</strong> : le fichier présenté est bien celui délivré par le site source au moment du téléchargement.</li>
            <li><strong>Intégrité</strong> : il n’a pas été modifié. On le prouve par une comparaison cryptographique entre l’empreinte du fichier et la trace chiffrée capturée lors du téléchargement.</li>
        </ul>`
            },
            {
                question: "Quelle est la technologie utilisée ?",
                answer: `Tisura s’appuie sur deux technologies :
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li><em>TLS session keys</em>, empreintes cryptographiques (ex. SHA-256)</li>
            <li>et comparaison déterministe entre le fichier fourni et la réponse HTTPS capturée lors du téléchargement via l’infrastructure Tisura.</li>
        </ul>
        </div>
        <br />
        Tisura n'utilise pas d’IA : c’est une <strong>preuve cryptographique de provenance</strong>, pas une analyse du contenu. Votre vie privée est donc protégée.`
            },
            {
                question: "Est-ce que Tisura a accès à mes données téléchargées ?",
                answer: `Non. Tisura ne lit pas le contenu du document. Nous conservons la <strong>réponse chiffrée</strong> et les métadonnées minimales nécessaires à la preuve, afin de la comparer plus tard au document présenté par l'utilisateur.`
            },
            {
                question: "Est-ce que Tisura conserve mes données ? Si oui, combien de temps ?",
                answer: `Nous conservons uniquement ce qui est nécessaire à la vérification (traces chiffrées, empreintes, journaux techniques) sur une <strong>durée limitée à 7 jours</strong> calendaires après la certification du document. La rétention est <strong>configurable</strong> selon les besoins clients (ex. quelques mois).`
            },
            {
                question: "Puis-je utiliser Tisura pour tous types de documents ?",
                answer: `Tisura cible d’abord les <strong>PDF</strong> et <strong>JSON</strong> téléchargés via HTTPS depuis des sites officiels - la liste est disponible sur le notaire digital. D’autres formats pourront être ajoutés progressivement. A noter que la vérification fonctionne même si le fichier a été renommé.`
            },
            {
                question: "Est-ce que le service est tout le temps actif ?",
                answer: `Non. La certification ne s’active que lorsque vous l’initiez (extension activée + téléchargement via l’infra Tisura). En d’autres termes, si vous n’activez pas l’extension et/ou si vous ne téléchargez pas via l’extension, rien n’est capturé par Tisura.`
            },
            {
                question: "Dois-je créer un compte ?",
                answer: `<strong>Non.</strong>
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li>Pour la <strong>certification</strong>, il vous suffit d'installer l’extension Tisura et de suivre les étapes. Pas d’inscription complexe.</li>
            <li>Pour la <strong>vérification</strong>, pas de compte requis, vous uploadez le fichier et obtenez le résultat</li>
        </ul>
        </div>`
            },
            {
                question: "Est-ce que Tisura détecte des deepfakes ?",
                answer: `Tisura peut être utilisé pour détecter toute modification d'un fichier, y compris les deepfakes. Nous prouvons la <strong>provenance</strong> et l’<strong>intégrité</strong> : un document est considéré fiable s’il correspond exactement à ce qui a été délivré par la source officielle.`
            }
        ]
    },
    en: {
        headerTitle: "Document Certification<br>and Verification",
        headerSubtitle: "Transmitting a certified file has never been easier!",
        demoVideo: "Demo Video",
        comingSoon: "Coming soon",
        ownerBtn: "I want to verify a document",
        ownerStep1: "I receive a certified document",
        ownerStep2: `I verify the document on <a href="https://verify.tisura.xyz/" class="font-semibold text-blue-600 dark:text-blue-400" target="_blank">verify.tisura.xyz</a>`,
        applicantBtn: "I want to certify a document",
        applicantStep1: `I install the <a href="https://chromewebstore.google.com/detail/tisura-redirector-esm/hoinkjfjaejeilfgnidgdogbhbiakgei" class="text-purple-600 dark:text-purple-400 font-medium cursor-pointer" target="_blank">Tisura extension</a>.`,
        applicantStep2: "I download and certify my documents.",
        applicantStep3: "I send my certified documents.",
        contactText: "For any other questions, email us at ",
        faqTitle: "Frequently Asked Questions",
        faq: [
            {
                question: "What does it mean that Tisura guarantees authenticity and integrity?",
                answer: `<ul class="list-disc pl-5 space-y-2">
            <li><strong>Authenticity</strong>: the presented file is indeed the one delivered by the source site at the time of download.</li>
            <li><strong>Integrity</strong>: it has not been modified. This is proven by a cryptographic comparison between the file's fingerprint and the encrypted trace captured during download.</li>
        </ul>`
            },
            {
                question: "What technology is used?",
                answer: `Tisura relies on two technologies:
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li><em>TLS session keys</em>, cryptographic fingerprints (e.g. SHA-256)</li>
            <li>and deterministic comparison between the provided file and the HTTPS response captured during download via the Tisura infrastructure.</li>
        </ul>
        </div>
        <br />
        Tisura does not use AI: it is a <strong>cryptographic proof of provenance</strong>, not content analysis. Your privacy is therefore protected.`
            },
            {
                question: "Does Tisura have access to my downloaded data?",
                answer: `No. Tisura does not read the document content. We keep the <strong>encrypted response</strong> and minimal metadata necessary for the proof, in order to compare it later with the document presented by the user.`
            },
            {
                question: "Does Tisura keep my data? If so, for how long?",
                answer: `We only keep what is necessary for verification (encrypted traces, fingerprints, technical logs) for a <strong>limited duration of 7 calendar days</strong> after document certification. Retention is <strong>configurable</strong> according to client needs (e.g. a few months).`
            },
            {
                question: "Can I use Tisura for all types of documents?",
                answer: `Tisura primarily targets <strong>PDF</strong> and <strong>JSON</strong> files downloaded via HTTPS from official sites - the list is available on the digital notary. Other formats may be added gradually. Note that verification works even if the file has been renamed.`
            },
            {
                question: "Is the service always active?",
                answer: `No. Certification is only activated when you initiate it (extension activated + download via Tisura infra). In other words, if you don't activate the extension and/or if you don't download via the extension, nothing is captured by Tisura.`
            },
            {
                question: "Do I need to create an account?",
                answer: `<strong>No.</strong>
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li>For <strong>certification</strong>, just install the Tisura extension and follow the steps. No complex registration.</li>
            <li>For <strong>verification</strong>, no account required, you upload the file and get the result.</li>
        </ul>
        </div>`
            },
            {
                question: "Does Tisura detect deepfakes?",
                answer: `Tisura can be used to detect any modification of a file, including deepfakes. We prove <strong>provenance</strong> and <strong>integrity</strong>: a document is considered reliable if it matches exactly what was delivered by the official source.`
            }
        ]
    },
    de: {
        headerTitle: "Dokumentenzertifizierung<br>und -überprüfung",
        headerSubtitle: "Die Übermittlung einer zertifizierten Akte war noch nie so einfach!",
        demoVideo: "Demo-Video",
        comingSoon: "Demnächst verfügbar",
        ownerBtn: "Ich möchte ein Dokument überprüfen",
        ownerStep1: "Ich erhalte ein zertifiziertes Dokument",
        ownerStep2: `Ich überprüfe das Dokument auf <a href="https://verify.tisura.xyz/" class="font-semibold text-blue-600 dark:text-blue-400" target="_blank">verify.tisura.xyz</a>`,
        applicantBtn: "Ich möchte ein Dokument zertifizieren",
        applicantStep1: `Ich installiere die <a href="https://chromewebstore.google.com/detail/tisura-redirector-esm/hoinkjfjaejeilfgnidgdogbhbiakgei" class="text-purple-600 dark:text-purple-400 font-medium cursor-pointer" target="_blank">Tisura-Erweiterung</a>.`,
        applicantStep2: "Ich lade meine Dokumente herunter und zertifiziere sie.",
        applicantStep3: "Ich sende meine zertifizierten Dokumente.",
        contactText: "Bei weiteren Fragen senden Sie eine E-Mail an ",
        faqTitle: "Häufig gestellte Fragen",
        faq: [
            {
                question: "Was bedeutet, dass Tisura Authentizität und Integrität garantiert?",
                answer: `<ul class="list-disc pl-5 space-y-2">
            <li><strong>Authentizität</strong>: Die vorgelegte Datei ist tatsächlich diejenige, die zum Zeitpunkt des Downloads von der Quellseite geliefert wurde.</li>
            <li><strong>Integrität</strong>: Sie wurde nicht verändert. Dies wird durch einen kryptographischen Vergleich zwischen dem Fingerabdruck der Datei und der beim Download erfassten verschlüsselten Spur bewiesen.</li>
        </ul>`
            },
            {
                question: "Welche Technologie wird verwendet?",
                answer: `Tisura stützt sich auf zwei Technologien:
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li><em>TLS-Sitzungsschlüssel</em>, kryptographische Fingerabdrücke (z. B. SHA-256)</li>
            <li>und deterministischer Vergleich zwischen der bereitgestellten Datei und der HTTPS-Antwort, die während des Downloads über die Tisura-Infrastruktur erfasst wurde.</li>
        </ul>
        </div>
        <br />
        Tisura verwendet keine KI: Es handelt sich um einen <strong>kryptographischen Herkunftsnachweis</strong>, nicht um eine Inhaltsanalyse. Ihre Privatsphäre ist daher geschützt.`
            },
            {
                question: "Hat Tisura Zugriff auf meine heruntergeladenen Daten?",
                answer: `Nein. Tisura liest den Dokumenteninhalt nicht. Wir bewahren die <strong>verschlüsselte Antwort</strong> und minimale Metadaten auf, die für den Beweis erforderlich sind, um sie später mit dem vom Benutzer vorgelegten Dokument zu vergleichen.`
            },
            {
                question: "Speichert Tisura meine Daten? Wenn ja, wie lange?",
                answer: `Wir bewahren nur das auf, was für die Überprüfung notwendig ist (verschlüsselte Spuren, Fingerabdrücke, technische Protokolle), für eine <strong>begrenzte Dauer von 7 Kalendertagen</strong> nach der Dokumentenzertifizierung. Die Aufbewahrung ist <strong>konfigurierbar</strong> nach Kundenbedarf (z. B. einige Monate).`
            },
            {
                question: "Kann ich Tisura für alle Arten von Dokumenten verwenden?",
                answer: `Tisura zielt hauptsächlich auf <strong>PDF</strong>- und <strong>JSON</strong>-Dateien ab, die über HTTPS von offiziellen Websites heruntergeladen wurden - die Liste ist im digitalen Notar verfügbar. Andere Formate können schrittweise hinzugefügt werden. Beachten Sie, dass die Überprüfung auch funktioniert, wenn die Datei umbenannt wurde.`
            },
            {
                question: "Ist der Dienst immer aktiv?",
                answer: `Nein. Die Zertifizierung wird nur aktiviert, wenn Sie sie initiieren (Erweiterung aktiviert + Download über Tisura-Infra). Mit anderen Worten, wenn Sie die Erweiterung nicht aktivieren und/oder nicht über die Erweiterung herunterladen, wird nichts von Tisura erfasst.`
            },
            {
                question: "Muss ich ein Konto erstellen?",
                answer: `<strong>Nein.</strong>
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li>Für die <strong>Zertifizierung</strong> reicht es aus, die Tisura-Erweiterung zu installieren und den Schritten zu folgen. Keine komplexe Registrierung.</li>
            <li>Für die <strong>Überprüfung</strong> ist kein Konto erforderlich, Sie laden die Datei hoch und erhalten das Ergebnis.</li>
        </ul>
        </div>`
            },
            {
                question: "Erkennt Tisura Deepfakes?",
                answer: `Tisura kann verwendet werden, um jede Änderung einer Datei zu erkennen, einschließlich Deepfakes. Wir beweisen <strong>Herkunft</strong> und <strong>Integrität</strong>: Ein Dokument gilt als zuverlässig, wenn es genau dem entspricht, was von der offiziellen Quelle geliefert wurde.`
            }
        ]
    },
    es: {
        headerTitle: "Certificación y verificación<br>de documentos",
        headerSubtitle: "¡Transmitir un expediente certificado nunca ha sido tan sencillo!",
        demoVideo: "Video de demostración",
        comingSoon: "Próximamente",
        ownerBtn: "Quiero verificar un documento",
        ownerStep1: "Recibo un documento certificado",
        ownerStep2: `Verifico el documento en <a href="https://verify.tisura.xyz/" class="font-semibold text-blue-600 dark:text-blue-400" target="_blank">verify.tisura.xyz</a>`,
        applicantBtn: "Quiero certificar un documento",
        applicantStep1: `Instalo la <a href="https://chromewebstore.google.com/detail/tisura-redirector-esm/hoinkjfjaejeilfgnidgdogbhbiakgei" class="text-purple-600 dark:text-purple-400 font-medium cursor-pointer" target="_blank">extensión Tisura</a>.`,
        applicantStep2: "Descargo y certifico mis documentos.",
        applicantStep3: "Envío mis documentos certificados.",
        contactText: "Para cualquier otra pregunta, envíe un correo a ",
        faqTitle: "Preguntas frecuentes",
        faq: [
            {
                question: "¿Qué significa que Tisura garantiza autenticidad e integridad?",
                answer: `<ul class="list-disc pl-5 space-y-2">
            <li><strong>Autenticidad</strong>: el archivo presentado es efectivamente el entregado por el sitio de origen en el momento de la descarga.</li>
            <li><strong>Integridad</strong>: no ha sido modificado. Se prueba mediante una comparación criptográfica entre la huella digital del archivo y el rastro cifrado capturado durante la descarga.</li>
        </ul>`
            },
            {
                question: "¿Qué tecnología se utiliza?",
                answer: `Tisura se basa en dos tecnologías:
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li><em>Claves de sesión TLS</em>, huellas criptográficas (ej. SHA-256)</li>
            <li>y comparación determinista entre el archivo proporcionado y la respuesta HTTPS capturada durante la descarga a través de la infraestructura de Tisura.</li>
        </ul>
        </div>
        <br />
        Tisura no utiliza IA: es una <strong>prueba criptográfica de procedencia</strong>, no un análisis de contenido. Su privacidad está por lo tanto protegida.`
            },
            {
                question: "¿Tiene Tisura acceso a mis datos descargados?",
                answer: `No. Tisura no lee el contenido del documento. Conservamos la <strong>respuesta cifrada</strong> y los metadatos mínimos necesarios para la prueba, con el fin de compararla más tarde con el documento presentado por el usuario.`
            },
            {
                question: "¿Conserva Tisura mis datos? Si es así, ¿por cuánto tiempo?",
                answer: `Solo conservamos lo necesario para la verificación (rastros cifrados, huellas digitales, registros técnicos) por una <strong>duración limitada a 7 días</strong> naturales después de la certificación del documento. La retención es <strong>configurable</strong> según las necesidades del cliente (ej. algunos meses).`
            },
            {
                question: "¿Puedo usar Tisura para todo tipo de documentos?",
                answer: `Tisura se dirige principalmente a archivos <strong>PDF</strong> y <strong>JSON</strong> descargados a través de HTTPS desde sitios oficiales; la lista está disponible en el notario digital. Se podrán añadir otros formatos progresivamente. Tenga en cuenta que la verificación funciona incluso si se ha cambiado el nombre del archivo.`
            },
            {
                question: "¿Está el servicio siempre activo?",
                answer: `No. La certificación solo se activa cuando usted la inicia (extensión activada + descarga a través de la infra de Tisura). En otras palabras, si no activa la extensión y/o si no descarga a través de la extensión, Tisura no captura nada.`
            },
            {
                question: "¿Debo crear una cuenta?",
                answer: `<strong>No.</strong>
        <div class="mt-3 text-gray-700 dark:text-gray-300">
        <ul class="list-disc pl-5 space-y-2">
            <li>Para la <strong>certificación</strong>, basta con instalar la extensión Tisura y seguir los pasos. Sin registro complejo.</li>
            <li>Para la <strong>verificación</strong>, no se requiere cuenta, usted sube el archivo y obtiene el resultado.</li>
        </ul>
        </div>`
            },
            {
                question: "¿Detecta Tisura deepfakes?",
                answer: `Tisura se puede utilizar para detectar cualquier modificación de un archivo, incluidos los deepfakes. Probamos la <strong>procedencia</strong> y la <strong>integridad</strong>: un documento se considera fiable si corresponde exactamente a lo que fue entregado por la fuente oficial.`
            }
        ]
    }
};
