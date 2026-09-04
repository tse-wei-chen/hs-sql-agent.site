import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Startseite",
    features: "Funktionen",
    databases: "Datenbanken",
    integrations: "Integrationen",
    docs: "Dokumentation",
    github: "GitHub",
    posts: "Beiträge",
    tags: "Tags",
    about: "Über",
    archives: "Archiv",
    search: "Suchen",
  },
  post: {
    publishedAt: "Veröffentlicht am",
    updatedAt: "Aktualisiert am",
    sharePostIntro: "Diesen Beitrag teilen:",
    sharePostOn: "Diesen Beitrag auf {{platform}} teilen",
    sharePostViaEmail: "Diesen Beitrag per E-Mail teilen",
    tagLabel: "Tags",
    backToTop: "Nach oben",
    goBack: "Zurück",
    editPage: "Seite bearbeiten",
    previousPost: "Vorheriger Beitrag",
    nextPost: "Nächster Beitrag",
  },
  pagination: { prev: "Zurück", next: "Weiter", page: "Seite" },
  home: {
    socialLinks: "Soziale Links",
    featured: "Empfohlen",
    recentPosts: "Neueste Beiträge",
    allPosts: "Alle Beiträge",
    heroKicker:
      "Für MCP entwickelt · bei Unsicherheit ablehnen · sechs SQL-Dialekte",
    heroTitle: "Sichere SQL-Ausführung für KI-Agenten.",
    heroDesc:
      "Setzen Sie einen Compiler und eine Governance-Grenze zwischen generiertem SQL und Ihren Datenbanken. hs-sql-agent parst, validiert, prüft erforderliche Fähigkeiten, wendet Zugriffsrichtlinien an und führt erst danach datenbankspezifisches SQL aus.",
    heroDescLinkBefore: "",
    heroDescLinkAfter: "",
    primaryCta: "Erste Schritte",
    secondaryCta: "Auf GitHub ansehen",
    copyCommand: "Kopieren",
    copiedCommand: "Kopiert",
    compilerLive: "Richtliniengrenze aktiv",
    compilerResult: "Datenbankspezifisches SQL bereit",
    compilerTitle: "SQL-Compiler mit sicherem Ablehnungsverhalten",
    compilerDesc:
      "Nicht unterstützte Syntax wird abgelehnt, statt stillschweigend in SQL mit anderer Semantik umgeschrieben zu werden.",
    dmlTitle: "DML mit menschlicher Freigabe",
    dmlDesc:
      "Auswirkungen vorab prüfen, die Freigabe an den validierten Plan binden und die betroffenen Zeilen in der Commit-Transaktion erneut prüfen.",
    databaseTitle: "Sechs Datenbankdialekte",
    databaseDesc:
      "PostgreSQL, MySQL, SQL Server, Oracle, SQLite und Firebird hinter einer gemeinsamen MCP-Schnittstelle.",
    governanceTitle: "Kontrolle standardmäßig aktiv",
    governanceDesc:
      "Datenbankumfang pro Schlüssel, Tabellen-Zulassungslisten, Werkzeugbeschränkungen, Ratenbegrenzungen, Sicherheitsrichtlinien und Auditierbarkeit bleiben außerhalb des LLM.",
    capabilityKicker: "Compiler-Grenze",
    capabilityTitle:
      "Behandeln Sie generiertes SQL als nicht vertrauenswürdige Eingabe.",
    capabilityDesc:
      "Entscheidend ist nicht das Erzeugen von SQL, sondern der Nachweis, dass die Anweisung innerhalb der vorgesehenen Dialekt-, Fähigkeits- und Richtliniengrenzen liegt.",
    dmlKicker: "Sicherer Änderungspfad",
    dmlSectionTitle: "DML-Freigabe ist ein Protokoll, kein Bestätigungsdialog.",
    dmlSectionDesc:
      "UPDATE und DELETE werden ohne Datenänderung vorab geprüft, die Freigabe wird an den validierten kompilierten Plan und den Fingerabdruck der Zeilenmenge gebunden, und die betroffenen Zeilen werden vor dem Commit erneut geprüft.",
    dmlPreviewTitle: "Vorschau",
    dmlPreviewDesc: "Betroffene Zeilen lesen, ohne die Änderung auszuführen.",
    dmlApproveTitle: "Freigeben",
    dmlApproveDesc:
      "Eine ausdrückliche Freigabe durch den menschlichen Bediener über MCP-Elicitation per Formular verlangen.",
    dmlRevalidateTitle: "Erneut prüfen",
    dmlRevalidateDesc:
      "In der Commit-Transaktion erneut abfragen und die gebundene Zeilenmenge vergleichen.",
    dmlCommitTitle: "Commit",
    dmlCommitDesc:
      "Nur ausführen, wenn Plan, Richtlinie, Freigabe-Challenge, Zeilenanzahl und Zeilenmenge weiterhin übereinstimmen.",
    databaseKicker: "Eine Schnittstelle, sechs Dialekte",
    databaseSectionTitle:
      "Nutzen Sie die Datenbank weiter, die bereits im Einsatz ist.",
    databaseSectionDesc:
      "Der Compiler hält datenbankspezifische SQL-Semantik explizit, während MCP-Clients über eine einheitliche kontrollierte Schnittstelle arbeiten.",
    integrationKicker: "MCP- und .NET-Integrationen",
    integrationTitle: "Binden Sie Agenten dort an, wo sie bereits arbeiten.",
    integrationDesc:
      "Verbinden Sie entfernte MCP-Clients wie Claude Desktop und Cursor oder betten Sie dieselbe kontrollierte Servergrenze in eine ASP.NET-Core-Anwendung ein.",
    docsKicker: "Dokumentation",
    docsTitle:
      "Vom ersten MCP-Schlüssel bis zur Governance im Produktivbetrieb.",
    docsDesc:
      "Die Dokumentation folgt dem tatsächlichen Einführungsweg von hs-sql-agent: Einrichtung, MCP, Compiler-Garantien, Administration, Integrationen, Betrieb und Entwicklung.",
    docsCta: "Dokumentation öffnen",
  },
  docs: {
    indexTitle: "Dokumentation",
    indexDescription:
      "Anleitungen, Compiler-Konzepte, Integrationen, Betrieb und Referenzdokumentation für hs-sql-agent.",
    sidebarLabel: "Dokumentationsnavigation",
    onThisPage: "Auf dieser Seite",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Alle Rechte vorbehalten.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Alle Beiträge mit diesem Tag",
    tagsTitle: "Tags",
    tagsDesc: "Alle in Beiträgen verwendeten Tags.",
    postsTitle: "Beiträge",
    postsDesc: "Alle Beiträge.",
    archivesTitle: "Archiv",
    archivesDesc: "Archivierte Beiträge.",
    searchTitle: "Dokumentation durchsuchen",
    searchDesc: "Die hs-sql-agent-Dokumentation durchsuchen.",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toggleTheme: "Darstellung wechseln",
    searchPlaceholder: "Dokumentation durchsuchen...",
    noResults: "Keine Ergebnisse gefunden",
    rssFeed: "RSS-Feed",
    goToPreviousPage: "Zur vorherigen Seite",
    goToNextPage: "Zur nächsten Seite",
  },
  notFound: {
    title: "404 Nicht gefunden",
    message: "Seite nicht gefunden",
    goHome: "Zur Startseite",
  },
} satisfies UIStrings;
