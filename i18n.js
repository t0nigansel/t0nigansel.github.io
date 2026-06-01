(function () {
  "use strict";

  var SUPPORTED = ["de", "en"];
  var DEFAULT = "de";

  var I18N = {
    de: {
      // shared
      "nav.services": "Leistungen",
      "nav.profile": "Profil",
      "nav.cv": "CV",
      "nav.certs": "Zertifikate",
      "nav.articles": "Artikel",
      "nav.contact": "Kontakt",
      "nav.bookmarks": "Lesezeichen",
      "footer.backHome": "Zurueck zur Startseite",
      "meta.imageAlt": "Portrait von Toni Gansel",

      // index — meta
      "index.meta.title": "Toni Gansel | AI Engineering, Cybersecurity & Quality Engineering",
      "index.meta.description": "Toni Gansel arbeitet an AI Engineering, Cybersecurity und Quality Engineering mit Claude Code, Codex, Testautomatisierung und Security Thinking.",
      "index.meta.ogDescription": "AI Engineering, Cybersecurity und Quality Engineering fuer robuste, nachvollziehbare Software.",

      "index.marquee": "*** Willkommen auf Toni's Homepage !!! AI Engineering | Cybersecurity | Quality Engineering !!! Best viewed with Netscape Navigator 4.0 ***",

      "index.hero.figcaption": "AI Engineering, Cybersecurity, Quality Engineering",
      "index.hero.eyebrow": "AI Engineering | Cybersecurity | Quality Engineering",
      "index.hero.title": "Ich baue, teste und sichere Software mit AI im Maschinenraum.",
      "index.hero.underConstruction": "+++ Diese Homepage ist permanent im Umbau +++",
      "index.hero.copy": "Ich arbeite viel mit Claude Code und Codex, verbinde klassische Software-Qualitaet mit Security Thinking und mache AI-gestuetzte Entwicklung praktisch, pruefbar und kontrollierbar.",
      "index.hero.ctaPrimary": "Auf LinkedIn Kontakt aufnehmen",
      "index.hero.ctaSecondary": "Artikel lesen",

      "index.facts.kicker": "Fakten",
      "index.facts.h2": "Auf einen Blick.",
      "index.facts.role.dt": "Rolle",
      "index.facts.role.dd": "Senior Test Engineer",
      "index.facts.company.dt": "Firma",
      "index.facts.location.dt": "Standort",
      "index.facts.experience.dt": "Erfahrung",
      "index.facts.experience.dd": "22+ Jahre IT (Entwicklung, Test Engineering, Security, AI)",
      "index.facts.available.dt": "Verfuegbar",
      "index.facts.available.dd": "ab in 3 Monaten",
      "index.facts.contact.dt": "Kontakt",

      "index.services.kicker": "Schwerpunkte",
      "index.services.h2": "AI Engineering, Security und Qualitaet zusammen denken.",
      "index.services.visitor": "Sie sind Besucher Nr.",
      "index.services.card1.h3": "AI Engineering",
      "index.services.card1.p": "Praktische Arbeit mit Coding Agents, LLM-Workflows, AI-gestuetzter Automatisierung und kontrollierbaren Entwicklungsprozessen.",
      "index.services.card2.h3": "Cybersecurity",
      "index.services.card2.p": "Threat Modeling, Application Security Testing, Security Reviews und realistisches Denken ueber Angriffe, Risiken und Verantwortung.",
      "index.services.card3.h3": "Quality Engineering",
      "index.services.card3.p": "Teststrategie, Testautomatisierung, API- und E2E-Tests, CI/CD-nahe Qualitaetssicherung und sauberes Reporting.",
      "index.services.card4.h3": "Agentic Tooling",
      "index.services.card4.p": "Viel Praxis mit Claude Code und Codex: nicht als Spielerei, sondern als Werkzeug fuer Analyse, Implementierung, Tests und Dokumentation.",

      "index.profile.kicker": "Profil",
      "index.profile.h2": "AI-naher Quality Engineer mit Security-Hintergrund.",
      "index.profile.p": "Ich komme aus Softwareentwicklung, Test Engineering und Security Testing und arbeite heute stark an der Schnittstelle zu AI Engineering. Mich interessiert, wie Teams mit AI schneller werden, ohne Kontrolle, Nachvollziehbarkeit und Sicherheit zu verlieren.",
      "index.profile.focus.dt": "Fokus",
      "index.profile.focus.dd": "AI Engineering, Cybersecurity, Quality Engineering",
      "index.profile.tools.dt": "Tools",
      "index.profile.approach.dt": "Arbeitsweise",
      "index.profile.approach.dd": "risikobasiert, security-nah, automatisiert, AI-gestuetzt",

      "index.cv.kicker": "Curriculum Vitae",
      "index.cv.h2": "Grob genug fuers Web. Konkret genug fuer Vertrauen.",
      "index.cv.intro": "Mehr als zwei Jahrzehnte Praxis zwischen Entwicklung, Test Engineering, Security Testing und Automatisierung. Heute liegt mein Schwerpunkt dort, wo AI-gestuetzte Softwareentwicklung, Cybersecurity und Quality Engineering zusammenlaufen.",
      "index.cv.box1.h3": "Was ich praktisch gemacht habe",
      "index.cv.box1.li1": "KI-gestuetzte Werkzeuge wie Claude Code und Codex fuer Testplanung, Codegenerierung und Auswertung von Testergebnissen erprobt und ihren Mehrwert und ihre Grenzen bewertet (EPA, RISE).",
      "index.cv.box1.li2": "Automatisierte API-Tests (SoapUI, Postman, Bruno), E2E-Tests (Cypress, Cucumber) und Regressionstests aufgebaut und in GitLab- und Jenkins-Pipelines integriert (TI-Portal, HSK API Tests, school-SH).",
      "index.cv.box1.li3": "Penetrationstests nach OWASP Top 10 mit OWASP ZAP, Burp Suite und Nessus durchgefuehrt und Schwachstellen nach Schweregrad klassifiziert (Pentest, Sogeti NL).",
      "index.cv.box1.li4": "Projektweite Teststrategien und Testkonzepte konzipiert, u.a. fuer eine Telematikinfrastruktur-API (TMS) und die Schulverwaltungen School-SH und HSMS.",
      "index.cv.box1.li5": "Junior Tester in die Testautomatisierung eingearbeitet (Pair Programming, Code Reviews, TI-Portal) und projektbegleitende Schulungen zu Application Security und Testing gehalten (school-SH).",
      "index.cv.box1.li6": "Last- und Performancetests mit JMeter geplant und ausgewertet, verteilt ausgefuehrt auf Kubernetes und ueberwacht mit Prometheus und Grafana (EPA, RISE).",
      "index.cv.box2.h3": "Womit ich arbeite",
      "index.cv.box2.p1": "Claude Code, Codex, Python, Java, JavaScript, TypeScript, SQL, REST-APIs, Selenium, Cypress, Cucumber, Postman, Bruno, JUnit, OWASP ZAP, Burp Suite, Nmap, SonarQube, Jenkins, GitLab CI, Docker, Kubernetes, Jira und Zephyr Scale.",
      "index.cv.box2.p2": "JMeter, Prometheus und Grafana habe ich u.a. fuer die Last- und Performancetests der Elektronischen Patientenakte eingesetzt, verteilt ausgefuehrt auf einem Kubernetes-Cluster.",
      "index.cv.box3.h3": "Wie ich denke",
      "index.cv.box3.li1": "Risikobasiert: Nicht alles testen, sondern das Richtige zuerst.",
      "index.cv.box3.li2": "AI-praktisch: Agents muessen helfen, aber pruefbar und steuerbar bleiben.",
      "index.cv.box3.li3": "Automatisiert: Tests und Workflows sollen wiederholbar, wartbar und pipelinefaehig sein.",
      "index.cv.box3.li4": "Sicherheitsnah: Qualitaet endet nicht bei gruener UI.",
      "index.cv.box3.li5": "Messbar: Performance, Stabilitaet und Befunde brauchen Daten statt Bauchgefuehl.",
      "index.cv.box3.li6": "Teamnah: Gute QA hilft Entwicklung, Produkt und Betrieb gleichzeitig.",
      "index.cv.box4.h3": "Nachweise ohne Lebenslauf-Krimi",
      "index.cv.box4.p1": "Zertifizierungen und Weiterbildungen in Softwaretesting, Scrum, Cybersecurity, Application Security, Generative AI, AI Agents, LLM Red Teaming, Azure AI, Data Engineering und UX.",
      "index.cv.box4.p2": "Dazu Erfahrung mit ISTQB-, OWASP- und BSI-nahen Vorgehensweisen, plus viele Jahre Praxis zwischen Entwicklung, Testmanagement, Security Testing, Performance Engineering und DevSecOps.",

      "index.hits.h2": ">>> Systeme, die nicht ausfallen duerfen <<<",
      "index.hits.subtitle": "*** Kritische Infrastruktur. Echte Last. Echte Konsequenzen. ***",
      "index.hits.th.system": "System",
      "index.hits.th.carries": "Was es traegt",
      "index.hits.th.did": "Was ich gemacht habe",
      "index.hits.row1.carries": "Gesundheitsdaten aller gesetzlich Versicherten in DE",
      "index.hits.row1.did": "Last- und Performancetests (JMeter, Kubernetes, Prometheus/Grafana)",
      "index.hits.row2.carries": "Bundesweites Warnsystem fuer Katastrophen und Gefahrenlagen",
      "index.hits.row2.did": "Test Manager: Validierung der XML-Transformationen unter grossen Datenmengen, Tests mit fehlenden, manipulierten und typfremden Werten",
      "index.hits.row3.carries": "Berechnung der Grundsicherung (ALG II) der Bundesagentur fuer Arbeit",
      "index.hits.row3.did": "Tests zu Sicherheit, Performance, Usability und Barrierefreiheit",
      "index.hits.clientsLabel": "Auftraggeber u.a.:",

      "index.certsTeaser.kicker": "Zertifizierungen",
      "index.certsTeaser.h2": "AI, Security, Testing und ein bisschen Papierkrieg.",
      "index.certsTeaser.p": "Die Liste reicht von Claude Code, Coding Agents und LLM Red Teaming bis zu ISTQB, Secure Software Engineering, Cybersecurity und Scrum.",
      "index.certsTeaser.btn": "Alle Zertifikate anzeigen",

      "index.articlesTeaser.kicker": "Artikel",
      "index.articlesTeaser.h2": "Texte zu AI, Security, Gesellschaft und Softwarequalitaet.",
      "index.articlesTeaser.p": "Die komplette Linkliste liegt jetzt auf einer eigenen Seite: LinkedIn-Artikel, Fachartikel-PDFs aus GitHub und alles, was irgendwo dazwischen passiert ist.",
      "index.articlesTeaser.btn": "Alle Artikel anzeigen",

      "index.contact.kicker": "Kontakt",
      "index.contact.h2": "Lust auf AI Engineering mit Bodenhaftung?",
      "index.contact.p": "Fuer AI Engineering, Cybersecurity, Quality Engineering oder den pragmatischen Einsatz von Claude Code und Codex freue ich mich ueber eine Nachricht auf LinkedIn.",
      "index.contact.btnPrimary": "Auf LinkedIn schreiben",

      // certifications
      "cert.meta.title": "Zertifizierungen | Toni Gansel",
      "cert.meta.description": "Zertifizierungen von Toni Gansel zu AI Engineering, Cybersecurity, Testing, Scrum, UX und Data.",
      "cert.meta.ogDescription": "AI, Cybersecurity, Testing und Quality Engineering Zertifizierungen.",
      "cert.marquee": "*** Zertifikate !!! Scheine !!! Badges !!! Bitte nicht laminieren ***",
      "cert.intro.kicker": "Zertifizierungen",
      "cert.intro.h1": "AI, Security, Testing und Quality Engineering in Papierform.",
      "cert.intro.p": "Eine vollstaendige Liste meiner Zertifizierungen und Weiterbildungen. Die Mischung ist Absicht: moderne AI-Engineering-Praxis auf einem Fundament aus Security, Testing und Softwarequalitaet.",
      "cert.focus.kicker": "Schwerpunkte",
      "cert.focus.h2": "Die grobe Landkarte.",
      "cert.all.kicker": "Alle Zertifikate",
      "cert.all.h2": "Chronologisch ungefaehr von frisch bis fossil.",
      "cert.all.p": "Jeder Titel verlinkt auf das jeweilige Zertifikat (PDF).",

      // articles
      "art.meta.title": "Artikel | Toni Gansel",
      "art.meta.description": "Artikel und Fachartikel von Toni Gansel zu AI, Cybersecurity, Quality Engineering und Gesellschaft.",
      "art.meta.ogDescription": "LinkedIn-Artikel und Fachartikel zu AI, Cybersecurity und Quality Engineering.",
      "art.marquee": "*** Artikelsammlung !!! PDFs !!! LinkedIn !!! Bitte warten Sie, das Modem waehlt sich ein ***",
      "art.intro.kicker": "Komplette Artikelliste",
      "art.intro.h1": "Artikel, Fachartikel und andere Internet-Fundstuecke.",
      "art.intro.p": "Eine lange, unsortierte, ziemlich echte Sammlung: AI, Security, Quality Engineering, Gesellschaft, Politik, Satire und Software.",
      "art.tech.kicker": "Fachartikel",
      "art.tech.h2": "Das sind Fachartikel.",
      "art.tech.p": "Ausfuehrlichere Texte zu AI, Security, Softwareprojekten und Qualitaet.",
      "art.linkedin.kicker": "LinkedIn",
      "art.linkedin.h2": "Hier sind meine Artikel.",
      "art.linkedin.p": "Gedanken zu AI, Security, Gesellschaft, Softwarequalitaet und dem ganzen digitalen Theater.",

      // bookmarks
      "book.meta.title": "Lesezeichen | Toni Gansel",
      "book.meta.description": "Seiten, die Toni Gansel gerne besucht: AI, Forschung, Security und Weiterbildung.",
      "book.meta.ogDescription": "Eine ehrliche Linksammlung im Web-1.0-Geist.",
      "book.marquee": "*** Hotlist !!! Coole Links !!! Bookmarke diese Seite (Strg+D) !!! ***",
      "book.intro.kicker": "Hotlist",
      "book.intro.h1": "Meine Lesezeichen.",
      "book.intro.p": "Keine Banner-Tauschpartner, nur Seiten auf denen ich selbst oft bin.",
      "book.cat1.kicker": "Video & Podcast",
      "book.cat1.h2": "Was ich mir ansehe.",
      "book.dwarkesh.blurb": "Die langen, ruhigen Interviews zu AI und Forschung. Wenn Du verstehen willst, wie die Leute hinter den Modellen wirklich denken, faengst Du hier an.",
      "book.allin.blurb": "Tech, Geld und Politik, laut und meinungsstark. Nicht immer meine Meinung, aber selten langweilig.",
      "book.cat2.kicker": "AI & Forschung",
      "book.cat2.h2": "Wo ich schlauer werde.",
      "book.karpathy.blurb": "Andrej Karpathy erklaert neuronale Netze so, dass es sogar Spass macht. Seine Videos haben mir mehr gebracht als manche Vorlesung.",
      "book.cleverhans.blurb": "Blog ueber adversarial Machine Learning. Pflicht, wenn Du wissen willst, wie man AI-Systeme angreift und absichert.",
      "book.cat3.kicker": "Lernen & Security",
      "book.cat3.h2": "Wo ich gelernt habe.",
      "book.deeplearning.blurb": "Hier habe ich die meisten meiner AI-Kurse gemacht. Solide, praktisch und ohne Hype.",
      "book.coursera.blurb": "Meine Standard-Anlaufstelle fuer Weiterbildung. Die Haelfte meiner Zertifikate kommt von hier.",
      "book.owasp.blurb": "Wenn Du irgendwas mit Security machst, kommst Du an OWASP nicht vorbei. Die Top 10 sollte jeder Entwickler kennen.",

      // 404
      "e404.meta.title": "404 | Toni Gansel",
      "e404.meta.description": "Seite nicht gefunden.",
      "e404.meta.ogDescription": "Seite nicht gefunden.",
      "e404.marquee": "*** ERROR 404 !!! Datei nicht gefunden !!! Vielleicht hat ein Bot sie gefressen !!! Best viewed with Netscape Navigator 4.0 ***",
      "e404.kicker": "Fehler 404",
      "e404.heading": "File not found.",
      "e404.underConstruction": "+++ Diese Seite ist permanent im Umbau +++",
      "e404.copy": "Die angeforderte Datei existiert nicht, wurde umbenannt oder ist irgendwo zwischen zwei Commits verloren gegangen."
    },

    en: {
      // shared
      "nav.services": "Services",
      "nav.profile": "Profile",
      "nav.cv": "CV",
      "nav.certs": "Certificates",
      "nav.articles": "Articles",
      "nav.contact": "Contact",
      "nav.bookmarks": "Bookmarks",
      "footer.backHome": "Back to home",
      "meta.imageAlt": "Portrait of Toni Gansel",

      // index — meta
      "index.meta.title": "Toni Gansel | AI Engineering, Cybersecurity & Quality Engineering",
      "index.meta.description": "Toni Gansel works on AI engineering, cybersecurity and quality engineering with Claude Code, Codex, test automation and security thinking.",
      "index.meta.ogDescription": "AI engineering, cybersecurity and quality engineering for robust, traceable software.",

      "index.marquee": "*** Welcome to Toni's Homepage !!! AI Engineering | Cybersecurity | Quality Engineering !!! Best viewed with Netscape Navigator 4.0 ***",

      "index.hero.figcaption": "AI Engineering, Cybersecurity, Quality Engineering",
      "index.hero.eyebrow": "AI Engineering | Cybersecurity | Quality Engineering",
      "index.hero.title": "I build, test and secure software with AI in the engine room.",
      "index.hero.underConstruction": "+++ This homepage is permanently under construction +++",
      "index.hero.copy": "I work a lot with Claude Code and Codex, combine classic software quality with security thinking and make AI-assisted development practical, verifiable and controllable.",
      "index.hero.ctaPrimary": "Connect on LinkedIn",
      "index.hero.ctaSecondary": "Read articles",

      "index.facts.kicker": "Facts",
      "index.facts.h2": "At a glance.",
      "index.facts.role.dt": "Role",
      "index.facts.role.dd": "Senior Test Engineer",
      "index.facts.company.dt": "Company",
      "index.facts.location.dt": "Location",
      "index.facts.experience.dt": "Experience",
      "index.facts.experience.dd": "22+ years in IT (development, test engineering, security, AI)",
      "index.facts.available.dt": "Available",
      "index.facts.available.dd": "in 3 months",
      "index.facts.contact.dt": "Contact",

      "index.services.kicker": "Focus areas",
      "index.services.h2": "Thinking AI engineering, security and quality together.",
      "index.services.visitor": "You are visitor no.",
      "index.services.card1.h3": "AI Engineering",
      "index.services.card1.p": "Hands-on work with coding agents, LLM workflows, AI-assisted automation and controllable development processes.",
      "index.services.card2.h3": "Cybersecurity",
      "index.services.card2.p": "Threat modeling, application security testing, security reviews and realistic thinking about attacks, risks and responsibility.",
      "index.services.card3.h3": "Quality Engineering",
      "index.services.card3.p": "Test strategy, test automation, API and E2E tests, CI/CD-near quality assurance and clean reporting.",
      "index.services.card4.h3": "Agentic Tooling",
      "index.services.card4.p": "Plenty of practice with Claude Code and Codex: not as a gimmick, but as a tool for analysis, implementation, tests and documentation.",

      "index.profile.kicker": "Profile",
      "index.profile.h2": "AI-focused quality engineer with a security background.",
      "index.profile.p": "I come from software development, test engineering and security testing, and today I work strongly at the interface with AI engineering. I'm interested in how teams get faster with AI without losing control, traceability and security.",
      "index.profile.focus.dt": "Focus",
      "index.profile.focus.dd": "AI Engineering, Cybersecurity, Quality Engineering",
      "index.profile.tools.dt": "Tools",
      "index.profile.approach.dt": "Approach",
      "index.profile.approach.dd": "risk-based, security-minded, automated, AI-assisted",

      "index.cv.kicker": "Curriculum Vitae",
      "index.cv.h2": "Rough enough for the web. Concrete enough for trust.",
      "index.cv.intro": "More than two decades of practice across development, test engineering, security testing and automation. Today my focus is where AI-assisted software development, cybersecurity and quality engineering come together.",
      "index.cv.box1.h3": "What I've actually done",
      "index.cv.box1.li1": "Trialled AI-assisted tools like Claude Code and Codex for test planning, code generation and evaluation of test results, and assessed their value and limits (ePA, RISE).",
      "index.cv.box1.li2": "Built automated API tests (SoapUI, Postman, Bruno), E2E tests (Cypress, Cucumber) and regression tests and integrated them into GitLab and Jenkins pipelines (TI-Portal, HSK API Tests, school-SH).",
      "index.cv.box1.li3": "Ran penetration tests following the OWASP Top 10 with OWASP ZAP, Burp Suite and Nessus and classified vulnerabilities by severity (pentest, Sogeti NL).",
      "index.cv.box1.li4": "Designed project-wide test strategies and test concepts, e.g. for a telematics infrastructure API (TMS) and the school administration systems School-SH and HSMS.",
      "index.cv.box1.li5": "Onboarded junior testers into test automation (pair programming, code reviews, TI-Portal) and ran project-accompanying training on application security and testing (school-SH).",
      "index.cv.box1.li6": "Planned and evaluated load and performance tests with JMeter, executed distributed on Kubernetes and monitored with Prometheus and Grafana (ePA, RISE).",
      "index.cv.box2.h3": "What I work with",
      "index.cv.box2.p1": "Claude Code, Codex, Python, Java, JavaScript, TypeScript, SQL, REST APIs, Selenium, Cypress, Cucumber, Postman, Bruno, JUnit, OWASP ZAP, Burp Suite, Nmap, SonarQube, Jenkins, GitLab CI, Docker, Kubernetes, Jira and Zephyr Scale.",
      "index.cv.box2.p2": "I used JMeter, Prometheus and Grafana for the load and performance tests of the electronic patient record (ePA), among others, executed distributed on a Kubernetes cluster.",
      "index.cv.box3.h3": "How I think",
      "index.cv.box3.li1": "Risk-based: don't test everything, test the right things first.",
      "index.cv.box3.li2": "AI-practical: agents must help, but stay verifiable and controllable.",
      "index.cv.box3.li3": "Automated: tests and workflows should be repeatable, maintainable and pipeline-ready.",
      "index.cv.box3.li4": "Security-minded: quality doesn't end at a green UI.",
      "index.cv.box3.li5": "Measurable: performance, stability and findings need data, not gut feeling.",
      "index.cv.box3.li6": "Team-minded: good QA helps development, product and operations at the same time.",
      "index.cv.box4.h3": "Proof without a CV thriller",
      "index.cv.box4.p1": "Certifications and training in software testing, Scrum, cybersecurity, application security, generative AI, AI agents, LLM red teaming, Azure AI, data engineering and UX.",
      "index.cv.box4.p2": "Plus experience with ISTQB-, OWASP- and BSI-style approaches, and many years of practice across development, test management, security testing, performance engineering and DevSecOps.",

      "index.hits.h2": ">>> Systems that must not fail <<<",
      "index.hits.subtitle": "*** Critical infrastructure. Real load. Real consequences. ***",
      "index.hits.th.system": "System",
      "index.hits.th.carries": "What it carries",
      "index.hits.th.did": "What I did",
      "index.hits.row1.carries": "Health data of everyone with statutory insurance in Germany",
      "index.hits.row1.did": "Load and performance tests (JMeter, Kubernetes, Prometheus/Grafana)",
      "index.hits.row2.carries": "Nationwide warning system for disasters and emergencies",
      "index.hits.row2.did": "Test manager: validation of XML transformations under large data volumes, tests with missing, manipulated and type-mismatched values",
      "index.hits.row3.carries": "Calculation of basic income support (ALG II) for the Federal Employment Agency",
      "index.hits.row3.did": "Tests for security, performance, usability and accessibility",
      "index.hits.clientsLabel": "Clients incl.:",

      "index.certsTeaser.kicker": "Certifications",
      "index.certsTeaser.h2": "AI, security, testing and a bit of paperwork.",
      "index.certsTeaser.p": "The list ranges from Claude Code, coding agents and LLM red teaming to ISTQB, secure software engineering, cybersecurity and Scrum.",
      "index.certsTeaser.btn": "View all certificates",

      "index.articlesTeaser.kicker": "Articles",
      "index.articlesTeaser.h2": "Texts on AI, security, society and software quality.",
      "index.articlesTeaser.p": "The complete link list now lives on its own page: LinkedIn articles, technical-article PDFs from GitHub and everything in between.",
      "index.articlesTeaser.btn": "View all articles",

      "index.contact.kicker": "Contact",
      "index.contact.h2": "Up for AI engineering with both feet on the ground?",
      "index.contact.p": "For AI engineering, cybersecurity, quality engineering or the pragmatic use of Claude Code and Codex, I'm happy to receive a message on LinkedIn.",
      "index.contact.btnPrimary": "Message on LinkedIn",

      // certifications
      "cert.meta.title": "Certifications | Toni Gansel",
      "cert.meta.description": "Toni Gansel's certifications in AI engineering, cybersecurity, testing, Scrum, UX and data.",
      "cert.meta.ogDescription": "AI, cybersecurity, testing and quality engineering certifications.",
      "cert.marquee": "*** Certificates !!! Diplomas !!! Badges !!! Please do not laminate ***",
      "cert.intro.kicker": "Certifications",
      "cert.intro.h1": "AI, security, testing and quality engineering on paper.",
      "cert.intro.p": "A complete list of my certifications and training. The mix is intentional: modern AI engineering practice on a foundation of security, testing and software quality.",
      "cert.focus.kicker": "Focus areas",
      "cert.focus.h2": "The rough map.",
      "cert.all.kicker": "All certificates",
      "cert.all.h2": "Roughly chronological, from fresh to fossil.",
      "cert.all.p": "Each title links to the respective certificate (PDF).",

      // articles
      "art.meta.title": "Articles | Toni Gansel",
      "art.meta.description": "Articles and technical articles by Toni Gansel on AI, cybersecurity, quality engineering and society.",
      "art.meta.ogDescription": "LinkedIn articles and technical articles on AI, cybersecurity and quality engineering.",
      "art.marquee": "*** Article collection !!! PDFs !!! LinkedIn !!! Please wait, the modem is dialing in ***",
      "art.intro.kicker": "Complete article list",
      "art.intro.h1": "Articles, technical articles and other internet finds.",
      "art.intro.p": "A long, unsorted, pretty honest collection: AI, security, quality engineering, society, politics, satire and software.",
      "art.tech.kicker": "Technical articles",
      "art.tech.h2": "These are technical articles.",
      "art.tech.p": "More detailed texts on AI, security, software projects and quality.",
      "art.linkedin.kicker": "LinkedIn",
      "art.linkedin.h2": "Here are my articles.",
      "art.linkedin.p": "Thoughts on AI, security, society, software quality and the whole digital circus.",

      // bookmarks
      "book.meta.title": "Bookmarks | Toni Gansel",
      "book.meta.description": "Sites Toni Gansel likes to visit: AI, research, security and learning.",
      "book.meta.ogDescription": "An honest link collection in the Web 1.0 spirit.",
      "book.marquee": "*** Hotlist !!! Cool links !!! Bookmark this page (Ctrl+D) !!! ***",
      "book.intro.kicker": "Hotlist",
      "book.intro.h1": "My bookmarks.",
      "book.intro.p": "No banner exchange partners, just sites I'm actually on a lot.",
      "book.cat1.kicker": "Video & Podcast",
      "book.cat1.h2": "What I watch.",
      "book.dwarkesh.blurb": "The long, calm interviews on AI and research. If you want to understand how the people behind the models really think, this is where you start.",
      "book.allin.blurb": "Tech, money and politics, loud and opinionated. Not always my view, but rarely boring.",
      "book.cat2.kicker": "AI & Research",
      "book.cat2.h2": "Where I get smarter.",
      "book.karpathy.blurb": "Andrej Karpathy explains neural networks so well that it's actually fun. His videos taught me more than some lectures did.",
      "book.cleverhans.blurb": "A blog on adversarial machine learning. A must if you want to know how AI systems get attacked and secured.",
      "book.cat3.kicker": "Learning & Security",
      "book.cat3.h2": "Where I learned.",
      "book.deeplearning.blurb": "Where I did most of my AI courses. Solid, practical and without the hype.",
      "book.coursera.blurb": "My default place for further learning. Half of my certificates come from here.",
      "book.owasp.blurb": "If you do anything with security, you can't get past OWASP. Every developer should know the Top 10.",

      // 404
      "e404.meta.title": "404 | Toni Gansel",
      "e404.meta.description": "Page not found.",
      "e404.meta.ogDescription": "Page not found.",
      "e404.marquee": "*** ERROR 404 !!! File not found !!! Maybe a bot ate it !!! Best viewed with Netscape Navigator 4.0 ***",
      "e404.kicker": "Error 404",
      "e404.heading": "File not found.",
      "e404.underConstruction": "+++ This page is permanently under construction +++",
      "e404.copy": "The requested file doesn't exist, was renamed or got lost somewhere between two commits."
    }
  };

  function detect() {
    try {
      var saved = localStorage.getItem("lang");
      if (saved && SUPPORTED.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {
      /* localStorage may be unavailable */
    }
    var nav = (navigator.language || DEFAULT).slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT;
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) {
      el.setAttribute("content", value);
    }
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N[DEFAULT];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    setMeta('meta[name="language"]', lang);
    setMeta('meta[property="og:locale"]', lang === "de" ? "de_DE" : "en_US");
    if (dict["meta.imageAlt"]) {
      setMeta('meta[property="og:image:alt"]', dict["meta.imageAlt"]);
    }

    var page = document.body.getAttribute("data-page") || "";
    var title = dict[page + ".meta.title"];
    var description = dict[page + ".meta.description"];
    var ogDescription = dict[page + ".meta.ogDescription"];

    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', title);
      setMeta('meta[name="twitter:title"]', title);
    }
    if (description) {
      setMeta('meta[name="description"]', description);
    }
    if (ogDescription) {
      setMeta('meta[property="og:description"]', ogDescription);
      setMeta('meta[name="twitter:description"]', ogDescription);
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        btn.getAttribute("data-lang") === lang ? "true" : "false"
      );
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  function init() {
    apply(detect());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
