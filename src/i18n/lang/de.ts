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
    socialLinks: "Social Links",
    featured: "Empfohlen",
    recentPosts: "Neueste Beiträge",
    allPosts: "Alle Beiträge",
    heroKicker:
      "Open-Source-SQL-MCP-Server · bei Unsicherheit ablehnen · sechs SQL-Dialekte",
    heroTitle: "Ein sicherer SQL-MCP-Server für KI-Agenten.",
    heroDesc:
      "Nutzen Sie Roh-SQL über MCP, ohne Clients uneingeschränkten Datenbankzugriff zu geben. hs-sql-agent prüft KI-generiertes SQL, erzwingt serverseitige Zugriffsrichtlinien und kontrolliert DML vor der Ausführung.",
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
      "Datenbankumfang pro Schlüssel, zulässige Tabellen und Tools, Rate Limits, Sicherheitsrichtlinien und Auditierbarkeit werden serverseitig durchgesetzt und bleiben außerhalb des LLM.",
    capabilityKicker: "Compiler-Grenze",
    capabilityTitle:
      "Prüfen Sie KI-generiertes SQL, bevor es die Datenbank erreicht.",
    capabilityDesc:
      "Roh-SQL bleibt flexibel, aber Modellausgaben werden nicht blind ausgeführt. Der Compiler lehnt Anweisungen ab, die außerhalb unterstützter Dialekte, Fähigkeiten oder serverseitiger Richtlinien liegen.",
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
      "Nur ausführen, wenn Plan, Richtlinie, Freigabenachweis, Zeilenanzahl und Zeilenmenge weiterhin übereinstimmen.",
    databaseKicker: "Eine Schnittstelle, sechs Dialekte",
    databaseSectionTitle:
      "Ein SQL-MCP-Server für sechs Datenbankdialekte.",
    databaseSectionDesc:
      "Verbinden Sie PostgreSQL, MySQL, SQL Server, Oracle, SQLite oder Firebird hinter einer gemeinsamen kontrollierten MCP-Schnittstelle und bewahren Sie die jeweilige SQL-Semantik.",
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
