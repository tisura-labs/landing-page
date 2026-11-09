const UL = `<ul class="list-disc pl-6 space-y-2">`;
const MAIL = `<a href="mailto:contact@tisura.xyz" class="underline hover:no-underline">contact@tisura.xyz</a>`;
const CNIL = `<a href="https://www.cnil.fr/fr/plaintes" class="underline hover:no-underline">CNIL</a>`;

export const privacyPolicyTranslations = {
    en: {
        title: "Privacy Policy — Tisura",
        heading: "Privacy Policy",
        intro: `Last updated: November 9, 2026.<br>This policy covers T-Wallet (the web app) and the T-Wallet Chrome extension, both operated by Tisura. They let you import documents from official websites, certify that they are genuine, and share them with the people you choose.`,
        sections: [
            {
                title: "Data controller",
                content: `Tisura is the data controller. For any question about your data, contact ${MAIL}.`
            },
            {
                title: "Data we process",
                content: `${UL}
          <li><strong>Your account:</strong> email address, account type (tenant or landlord) and your password, stored only as a secure hash. If you sign in with Google, we receive your email address from Google.</li>
          <li><strong>Your documents and folder:</strong> encrypted in your browser before they reach our servers (end-to-end encryption). Tisura cannot read them.</li>
          <li><strong>Certification records:</strong> when you import a document, the extension downloads it from the provider's website through our relay. The connection stays encrypted end to end between your browser and the website. We store the encrypted exchange (ciphertext only) and our signature, so that anyone can later check where the document came from. We never decrypt it.</li>
          <li><strong>Session cookies of the provider's website:</strong> the extension uses them on your device to download the document with your existing session. They are only sent to that website, inside the encrypted connection. Tisura never stores or reads them.</li>
          <li><strong>IP address:</strong> read in memory only, to limit abuse (rate limiting). It is never logged or stored.</li>
        </ul>
        The extension only acts when you start an import from T-Wallet, and only on supported provider websites. It does not collect your browsing history or any data from other websites.`
            },
            {
                title: "Purposes and legal bases",
                content: `${UL}
          <li>Providing your account, your folder and sharing: performance of the contract (terms of use).</li>
          <li>Certifying documents and letting recipients verify them: performance of the contract.</li>
          <li>Account emails (address verification, password reset, notifications): performance of the contract.</li>
          <li>Security and abuse prevention: our legitimate interest in keeping the service available.</li>
        </ul>`
            },
            {
                title: "Who receives your data",
                content: `${UL}
          <li><strong>The recipients you choose:</strong> when you send your folder (for example to a landlord), it is encrypted for that recipient only.</li>
          <li><strong>Our service providers:</strong> Amazon Web Services (hosting, Paris region, EU), Resend (sending emails) and Google (only if you sign in with Google). They act on our instructions.</li>
        </ul>
        We never sell or rent your data, and never use it for advertising.`
            },
            {
                title: "Transfers outside the EU",
                content: `Your data is hosted in the European Union. Some providers are US companies; transfers to them rely on the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.`
            },
            {
                title: "Retention",
                content: `${UL}
          <li><strong>Account and documents:</strong> kept until you delete them or delete your account from T-Wallet. Deletion is immediate and permanent.</li>
          <li><strong>Certification records:</strong> kept so that already issued certificates remain verifiable. They only contain encrypted data. You can ask us to delete them at ${MAIL}.</li>
          <li><strong>IP address:</strong> not kept.</li>
        </ul>`
            },
            {
                title: "Your rights",
                content: `Under the GDPR, you can access, correct, delete or export your data, object to or restrict its processing. You can delete your account at any time from T-Wallet. For any other request, contact ${MAIL}. You can also lodge a complaint with the ${CNIL}.`
            },
            {
                title: "Contact",
                content: `For any question about this policy, contact ${MAIL}.`
            }
        ]
    },
    fr: {
        title: "Politique de confidentialité — Tisura",
        heading: "Politique de confidentialité",
        intro: `Dernière mise à jour le 9 novembre 2026.<br>Cette politique concerne le T-Wallet (l'application web) et l'extension Chrome T-Wallet, tous deux édités par Tisura. Ils vous permettent d'importer vos documents depuis les sites officiels, de certifier leur authenticité et de les partager avec les personnes de votre choix.`,
        sections: [
            {
                title: "Responsable du traitement",
                content: `Tisura est responsable du traitement de vos données. Pour toute question, écrivez à ${MAIL}.`
            },
            {
                title: "Données traitées",
                content: `${UL}
          <li><strong>Votre compte.</strong> Adresse e-mail, type de compte (locataire ou bailleur) et mot de passe, conservé uniquement sous forme d'empreinte sécurisée. Si vous vous connectez avec Google, nous recevons votre adresse e-mail de Google.</li>
          <li><strong>Vos documents et votre dossier.</strong> Ils sont chiffrés dans votre navigateur avant d'arriver sur nos serveurs (chiffrement de bout en bout). Tisura ne peut pas les lire.</li>
          <li><strong>Les traces de certification.</strong> Quand vous importez un document, l'extension le télécharge depuis le site du fournisseur en passant par notre relais. La connexion reste chiffrée de bout en bout entre votre navigateur et le site. Nous conservons l'échange chiffré (sans jamais le déchiffrer) et notre signature, pour que chacun puisse vérifier plus tard d'où vient le document.</li>
          <li><strong>Les cookies de session du site du fournisseur.</strong> L'extension les utilise sur votre appareil pour télécharger le document avec votre session en cours. Ils ne sont envoyés qu'à ce site, dans la connexion chiffrée. Tisura ne les conserve pas et ne peut pas les lire.</li>
          <li><strong>Votre adresse IP.</strong> Elle est lue en mémoire uniquement, pour limiter les abus. Elle n'est jamais enregistrée ni journalisée.</li>
        </ul>
        L'extension n'agit que lorsque vous lancez un import depuis le T-Wallet, et uniquement sur les sites des fournisseurs pris en charge. Elle ne collecte ni votre historique de navigation ni aucune donnée des autres sites.`
            },
            {
                title: "Finalités et bases légales",
                content: `${UL}
          <li>Fournir votre compte, votre dossier et le partage. Base légale : l'exécution du contrat (conditions d'utilisation).</li>
          <li>Certifier les documents et permettre aux destinataires de les vérifier. Base légale : l'exécution du contrat.</li>
          <li>Envoyer les e-mails liés au compte (vérification de l'adresse, mot de passe oublié, notifications). Base légale : l'exécution du contrat.</li>
          <li>Assurer la sécurité du service et prévenir les abus. Base légale : notre intérêt légitime à garder le service disponible.</li>
        </ul>`
            },
            {
                title: "Destinataires des données",
                content: `${UL}
          <li><strong>Les destinataires que vous choisissez.</strong> Quand vous envoyez votre dossier, par exemple à un bailleur, il est chiffré pour ce seul destinataire.</li>
          <li><strong>Nos sous-traitants.</strong> Amazon Web Services (hébergement, région de Paris), Resend (envoi des e-mails) et Google (seulement si vous vous connectez avec Google). Ils agissent sur nos instructions.</li>
        </ul>
        Nous ne vendons ni ne louons jamais vos données, et ne les utilisons pas à des fins publicitaires.`
            },
            {
                title: "Transferts hors de l'Union européenne",
                content: `Vos données sont hébergées dans l'Union européenne. Certains sous-traitants sont des sociétés américaines. Les transferts vers ces sociétés reposent sur le Data Privacy Framework UE–États-Unis ou sur les clauses contractuelles types de la Commission européenne.`
            },
            {
                title: "Durée de conservation",
                content: `${UL}
          <li><strong>Compte et documents.</strong> Conservés jusqu'à ce que vous les supprimiez ou que vous supprimiez votre compte depuis le T-Wallet. La suppression est immédiate et définitive.</li>
          <li><strong>Traces de certification.</strong> Conservées pour que les certificats déjà émis restent vérifiables. Elles ne contiennent que des données chiffrées. Vous pouvez demander leur suppression à ${MAIL}.</li>
          <li><strong>Adresse IP.</strong> Non conservée.</li>
        </ul>`
            },
            {
                title: "Vos droits",
                content: `Conformément au RGPD, vous pouvez accéder à vos données, les rectifier, les supprimer, les récupérer, vous opposer à leur traitement ou en demander la limitation. Vous pouvez supprimer votre compte à tout moment depuis le T-Wallet. Pour toute autre demande, écrivez à ${MAIL}. Vous pouvez aussi introduire une réclamation auprès de la ${CNIL}.`
            },
            {
                title: "Contact",
                content: `Pour toute question sur cette politique, écrivez à ${MAIL}.`
            }
        ]
    },
    de: {
        title: "Datenschutzerklärung — Tisura",
        heading: "Datenschutzerklärung",
        intro: `Stand: 9. November 2026.<br>Diese Erklärung gilt für T-Wallet (die Web-App) und die Chrome-Erweiterung T-Wallet, beide betrieben von Tisura. Damit importieren Sie Dokumente von offiziellen Websites, belegen ihre Echtheit und teilen sie mit Personen Ihrer Wahl.`,
        sections: [
            {
                title: "Verantwortlicher",
                content: `Verantwortlich für die Verarbeitung Ihrer Daten ist Tisura. Bei Fragen schreiben Sie an ${MAIL}.`
            },
            {
                title: "Verarbeitete Daten",
                content: `${UL}
          <li><strong>Ihr Konto:</strong> E-Mail-Adresse, Kontotyp (Mieter oder Vermieter) und Ihr Passwort, das nur als sicherer Hash gespeichert wird. Bei Anmeldung mit Google erhalten wir Ihre E-Mail-Adresse von Google.</li>
          <li><strong>Ihre Dokumente und Ihre Akte:</strong> werden in Ihrem Browser verschlüsselt, bevor sie unsere Server erreichen (Ende-zu-Ende-Verschlüsselung). Tisura kann sie nicht lesen.</li>
          <li><strong>Zertifizierungsdaten:</strong> Beim Import lädt die Erweiterung das Dokument über unser Relay von der Website des Anbieters herunter. Die Verbindung bleibt zwischen Ihrem Browser und der Website Ende-zu-Ende verschlüsselt. Wir speichern den verschlüsselten Austausch (nur Chiffretext) und unsere Signatur, damit jeder später die Herkunft des Dokuments prüfen kann. Wir entschlüsseln ihn nie.</li>
          <li><strong>Sitzungs-Cookies der Anbieter-Website:</strong> Die Erweiterung nutzt sie auf Ihrem Gerät, um das Dokument mit Ihrer bestehenden Sitzung herunterzuladen. Sie werden nur an diese Website gesendet, innerhalb der verschlüsselten Verbindung. Tisura speichert oder liest sie nie.</li>
          <li><strong>IP-Adresse:</strong> wird nur im Arbeitsspeicher gelesen, um Missbrauch zu begrenzen. Sie wird nie protokolliert oder gespeichert.</li>
        </ul>
        Die Erweiterung wird nur aktiv, wenn Sie einen Import in T-Wallet starten, und nur auf unterstützten Anbieter-Websites. Sie erfasst weder Ihren Browserverlauf noch Daten anderer Websites.`
            },
            {
                title: "Zwecke und Rechtsgrundlagen",
                content: `${UL}
          <li>Bereitstellung Ihres Kontos, Ihrer Akte und der Freigabe: Vertragserfüllung (Nutzungsbedingungen).</li>
          <li>Zertifizierung der Dokumente und Prüfung durch Empfänger: Vertragserfüllung.</li>
          <li>Konto-E-Mails (Adressbestätigung, Passwort zurücksetzen, Benachrichtigungen): Vertragserfüllung.</li>
          <li>Sicherheit und Missbrauchsschutz: unser berechtigtes Interesse an einem verfügbaren Dienst.</li>
        </ul>`
            },
            {
                title: "Empfänger Ihrer Daten",
                content: `${UL}
          <li><strong>Die Empfänger Ihrer Wahl:</strong> Wenn Sie Ihre Akte senden, zum Beispiel an einen Vermieter, wird sie nur für diesen Empfänger verschlüsselt.</li>
          <li><strong>Unsere Dienstleister:</strong> Amazon Web Services (Hosting, Region Paris, EU), Resend (E-Mail-Versand) und Google (nur bei Anmeldung mit Google). Sie handeln nach unseren Weisungen.</li>
        </ul>
        Wir verkaufen oder vermieten Ihre Daten nie und nutzen sie nicht für Werbung.`
            },
            {
                title: "Übermittlung außerhalb der EU",
                content: `Ihre Daten werden in der Europäischen Union gehostet. Einige Dienstleister sind US-Unternehmen; Übermittlungen an sie stützen sich auf das EU-US Data Privacy Framework oder die Standardvertragsklauseln der Europäischen Kommission.`
            },
            {
                title: "Speicherdauer",
                content: `${UL}
          <li><strong>Konto und Dokumente:</strong> bis Sie sie löschen oder Ihr Konto in T-Wallet löschen. Die Löschung erfolgt sofort und endgültig.</li>
          <li><strong>Zertifizierungsdaten:</strong> werden aufbewahrt, damit ausgestellte Zertifikate prüfbar bleiben. Sie enthalten nur verschlüsselte Daten. Sie können die Löschung unter ${MAIL} verlangen.</li>
          <li><strong>IP-Adresse:</strong> wird nicht gespeichert.</li>
        </ul>`
            },
            {
                title: "Ihre Rechte",
                content: `Nach der DSGVO können Sie Auskunft, Berichtigung, Löschung und Übertragung Ihrer Daten verlangen sowie der Verarbeitung widersprechen oder sie einschränken lassen. Ihr Konto können Sie jederzeit in T-Wallet löschen. Für andere Anfragen schreiben Sie an ${MAIL}. Sie können sich auch bei einer Datenschutzaufsichtsbehörde beschweren, etwa der ${CNIL}.`
            },
            {
                title: "Kontakt",
                content: `Bei Fragen zu dieser Erklärung schreiben Sie an ${MAIL}.`
            }
        ]
    },
    es: {
        title: "Política de privacidad — Tisura",
        heading: "Política de privacidad",
        intro: `Última actualización: 9 de noviembre de 2026.<br>Esta política se aplica a T-Wallet (la aplicación web) y a la extensión de Chrome T-Wallet, ambas gestionadas por Tisura. Le permiten importar documentos desde sitios oficiales, certificar su autenticidad y compartirlos con las personas que elija.`,
        sections: [
            {
                title: "Responsable del tratamiento",
                content: `Tisura es el responsable del tratamiento de sus datos. Para cualquier pregunta, escriba a ${MAIL}.`
            },
            {
                title: "Datos que tratamos",
                content: `${UL}
          <li><strong>Su cuenta:</strong> dirección de correo, tipo de cuenta (inquilino o arrendador) y su contraseña, guardada solo como hash seguro. Si inicia sesión con Google, recibimos su correo de Google.</li>
          <li><strong>Sus documentos y su expediente:</strong> se cifran en su navegador antes de llegar a nuestros servidores (cifrado de extremo a extremo). Tisura no puede leerlos.</li>
          <li><strong>Registros de certificación:</strong> al importar un documento, la extensión lo descarga del sitio del proveedor a través de nuestro relé. La conexión sigue cifrada de extremo a extremo entre su navegador y el sitio. Guardamos el intercambio cifrado (solo texto cifrado) y nuestra firma, para que cualquiera pueda comprobar después de dónde procede el documento. Nunca lo desciframos.</li>
          <li><strong>Cookies de sesión del sitio del proveedor:</strong> la extensión las usa en su dispositivo para descargar el documento con su sesión abierta. Solo se envían a ese sitio, dentro de la conexión cifrada. Tisura nunca las guarda ni las lee.</li>
          <li><strong>Dirección IP:</strong> se lee solo en memoria, para limitar abusos. Nunca se registra ni se guarda.</li>
        </ul>
        La extensión solo actúa cuando inicia una importación desde T-Wallet, y solo en los sitios de proveedores compatibles. No recopila su historial de navegación ni datos de otros sitios.`
            },
            {
                title: "Finalidades y bases legales",
                content: `${UL}
          <li>Prestar su cuenta, su expediente y el uso compartido: ejecución del contrato (condiciones de uso).</li>
          <li>Certificar los documentos y permitir que los destinatarios los verifiquen: ejecución del contrato.</li>
          <li>Correos de la cuenta (verificación de la dirección, restablecer contraseña, notificaciones): ejecución del contrato.</li>
          <li>Seguridad y prevención de abusos: nuestro interés legítimo en mantener el servicio disponible.</li>
        </ul>`
            },
            {
                title: "Destinatarios de los datos",
                content: `${UL}
          <li><strong>Los destinatarios que usted elija:</strong> cuando envía su expediente, por ejemplo a un arrendador, se cifra solo para ese destinatario.</li>
          <li><strong>Nuestros proveedores:</strong> Amazon Web Services (alojamiento, región de París, UE), Resend (envío de correos) y Google (solo si inicia sesión con Google). Actúan según nuestras instrucciones.</li>
        </ul>
        Nunca vendemos ni alquilamos sus datos, ni los usamos con fines publicitarios.`
            },
            {
                title: "Transferencias fuera de la UE",
                content: `Sus datos se alojan en la Unión Europea. Algunos proveedores son empresas estadounidenses; las transferencias a ellas se basan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo de la Comisión Europea.`
            },
            {
                title: "Conservación",
                content: `${UL}
          <li><strong>Cuenta y documentos:</strong> hasta que los elimine o elimine su cuenta desde T-Wallet. La eliminación es inmediata y definitiva.</li>
          <li><strong>Registros de certificación:</strong> se conservan para que los certificados emitidos sigan siendo verificables. Solo contienen datos cifrados. Puede pedir su eliminación en ${MAIL}.</li>
          <li><strong>Dirección IP:</strong> no se conserva.</li>
        </ul>`
            },
            {
                title: "Sus derechos",
                content: `Según el RGPD, puede acceder a sus datos, rectificarlos, suprimirlos, portarlos, oponerse a su tratamiento o pedir su limitación. Puede eliminar su cuenta en cualquier momento desde T-Wallet. Para cualquier otra solicitud, escriba a ${MAIL}. También puede presentar una reclamación ante una autoridad de protección de datos, como la ${CNIL}.`
            },
            {
                title: "Contacto",
                content: `Para cualquier pregunta sobre esta política, escriba a ${MAIL}.`
            }
        ]
    }
};
