import type { MarketingSection } from "../marketing";
import { aspNetCoreCode, databaseProviders } from "./common";
import type { MarketingCopy } from "./types";

const pages: Record<string, MarketingCopy> = {
  "features/sql-compiler": {
    title: "SQL-Compiler mit Ablehnung bei Unsicherheit",
    headline:
      "Behandeln Sie KI-generiertes SQL als nicht vertrauenswürdige Eingabe.",
    description:
      "hs-sql-agent parst SQL in eine typisierte Compiler-Pipeline, validiert Quellsemantik und Richtlinien, prüft die Fähigkeiten des Ziels und erzeugt erst danach providerspezifisches SQL.",
    eyebrow: "SQL-Compiler",
    keywords: [
      "SQL-Compiler",
      "MCP SQL",
      "KI SQL Sicherheit",
      "fail closed SQL",
    ],
    highlights: [
      {
        title: "Zuerst parsen",
        description:
          "SQL wird nicht direkt an den Datenbanktreiber weitergegeben, sondern durch einen strukturierten Parser geführt.",
      },
      {
        title: "Fähigkeiten prüfen",
        description:
          "Nicht nachweisbare Quell- oder Zielsemantik wird abgelehnt statt stillschweigend abgeschwächt.",
      },
      {
        title: "Pro Provider kompilieren",
        description:
          "Datenbankspezifisches Verhalten bleibt innerhalb einer klaren Ausführungsgrenze.",
      },
    ],
    relatedDocs: [
      {
        label: "SQL-Ausführungsmodell",
        path: "docs/sql-compiler/execution-model",
      },
      {
        label: "Datenbankdialekte",
        path: "docs/sql-compiler/database-dialects",
      },
    ],
    body: [
      {
        title: "Generiertes SQL ist Eingabe, keine Berechtigung",
        paragraphs: [
          "Ein LLM kann SQL vorschlagen. Dass eine Datenbank dieses SQL parsen könnte, macht es aber noch nicht ausführbar. hs-sql-agent setzt zwischen Modell und Verbindung eine Compiler- und Richtliniengrenze.",
          "Die Pipeline lehnt bei Unsicherheit ab: Eine Anweisung, die nicht sicher dargestellt oder nachgewiesen werden kann, wird zurückgewiesen und nicht nur für die Ausführbarkeit in eine andere Bedeutung umgeschrieben.",
        ],
      },
      {
        title: "Ein typisierter Ausführungspfad",
        paragraphs: [
          "Queries durchlaufen Parsing, Binding, Validierung, Capability-Prüfung, providerspezifische Kompilierung und die Ausführung eines unveränderlichen Commands. Richtlinien können dadurch auf einer strukturierten Anweisung statt nur auf rohem SQL-Text arbeiten.",
        ],
        bullets: [
          "Validierung von Queries mit genau einer Anweisung",
          "Tabellenautorisierung und Query-Richtlinien",
          "Capability-Grenzen für Quell- und Zieldialekte",
          "providerspezifisches Rendering erst nach erfolgreicher Validierung",
        ],
      },
      {
        title:
          "SQL-Unterstützung erweitern, ohne die Sicherheitsgrenze aufzuweichen",
        paragraphs: [
          "Neue Syntax gilt erst dann als unterstützt, wenn Parser, typisiertes Modell, Validierung, Capability-Nachweise, Renderer und Tests ihre Semantik vollständig abbilden. So kann die SQL-Abdeckung wachsen, ohne das Prinzip der Ablehnung bei Unsicherheit zu schwächen.",
        ],
      },
    ],
  },
  "features/safe-dml": {
    title: "Safe DML mit menschlicher Freigabe",
    headline: "Vorschau, Freigabe, erneute Prüfung und erst dann Commit.",
    description:
      "UPDATE und DELETE durchlaufen ein mehrstufiges Freigabeprotokoll. Die menschliche Freigabe wird an den validierten Plan gebunden, und die betroffene Zeilenmenge wird in der Commit-Transaktion erneut geprüft.",
    eyebrow: "Safe DML",
    keywords: [
      "Safe DML",
      "MCP Freigabe",
      "SQL menschliche Freigabe",
      "KI Datenbankänderung",
    ],
    highlights: [
      {
        title: "Vorschau",
        description:
          "Prüfen Sie die betroffenen Zeilen, bevor die Mutation ausgeführt werden darf.",
      },
      {
        title: "Freigabe",
        description:
          "Binden Sie eine einmalige menschliche Freigabe an die validierte Operation.",
      },
      {
        title: "Erneut prüfen",
        description:
          "Prüfen Sie die Zeilenmenge vor dem Commit innerhalb der Transaktion erneut.",
      },
    ],
    relatedDocs: [
      { label: "Safe-DML-Protokoll", path: "docs/sql-compiler/safe-dml" },
    ],
    body: [
      {
        title: "Freigabe ist ein Protokoll, kein Bestätigungsdialog",
        paragraphs: [
          "Wenn eine generierte Mutation Produktionsdaten verändern kann, reicht ein Bestätigungsbutton nicht aus. hs-sql-agent trennt Auswirkungsvorschau, explizite Freigabe, erneute Prüfung in der Transaktion und Commit in eigene Phasen.",
        ],
      },
      {
        title: "Freigabe an den tatsächlich geprüften Inhalt binden",
        paragraphs: [
          "Der Freigabeablauf basiert auf der validierten Operation und ihrer beobachteten Auswirkung. Vor dem Commit prüft der Server, ob Plan, Policy, Challenge, Row Count und Row Set noch zum freigegebenen Kontext passen.",
        ],
        bullets: [
          "schreibgeschützte Auswirkungsvorschau",
          "einmalige Freigabe-Challenge",
          "menschliche Entscheidung über MCP form Elicitation",
          "erneute Prüfung des Row Sets in der Transaktion",
        ],
      },
      {
        title: "Custom DML Tools verwenden dieselbe Grenze",
        paragraphs: [
          "Auch veröffentlichte Custom Tools mit DML laufen durch denselben typisierten Freigabepfad. Die Tool-Abstraktion ändert, wie eine Operation angeboten wird, aber nicht den Sicherheitsvertrag für Mutationen.",
        ],
      },
    ],
  },
  "features/access-control": {
    title: "Datenbankzugriffskontrolle für KI-Agenten",
    headline: "Autorisierung bleibt außerhalb des Modells.",
    description:
      "Begrenzen Sie jeden MCP-Key auf die tatsächlich freizugebende Datenbank, Tools, Tabellen, Rate Limits und Runtime-Richtlinien. Das LLM kann diese Grenzen nicht über einen Prompt neu definieren.",
    eyebrow: "Governance",
    keywords: [
      "MCP Zugriffskontrolle",
      "KI Datenbank Governance",
      "SQL Tabellen-Allowlist",
      "MCP Key Sicherheit",
    ],
    highlights: [
      {
        title: "Scope pro Key",
        description:
          "Binden Sie Credentials an eine konkrete Datenbank und die erlaubten MCP Tools.",
      },
      {
        title: "Tabellengrenzen",
        description:
          "Table Allowlist und Query-Richtlinien gelten unabhängig von Modellanweisungen.",
      },
      {
        title: "Betriebsgrenzen",
        description:
          "Rate Limits, Parallelität, Sperrung und Audit werden außerhalb des Prompts durchgesetzt.",
      },
    ],
    relatedDocs: [
      { label: "Sicherheitsübersicht", path: "docs/security/overview" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Richtlinien gehören auf den Server",
        paragraphs: [
          "Ein Prompt ist kein Autorisierungssystem. hs-sql-agent prüft den authentifizierten Key, die Datenbankbindung, erlaubte Tools, Tabellengrenzen und die aktive Sicherheitsrichtlinie, bevor SQL zur Ausführung gelangt.",
        ],
      },
      {
        title: "Keys geben nur die notwendige Oberfläche frei",
        paragraphs: [
          "Ein MCP-Key kann auf genau die Datenbank und Tools beschränkt werden, die ein Client tatsächlich benötigt. Built-in Tools und veröffentlichte Custom Tools werden vor dem Aufruf mit der Key-Konfiguration abgeglichen.",
        ],
        bullets: [
          "Datenbankbindung",
          "erlaubte MCP Tools",
          "Table Allowlist",
          "effektive Rate Limits",
          "Sperr- und Ablaufstatus",
        ],
      },
      {
        title: "Die Ausführungsgrenze auditierbar halten",
        paragraphs: [
          "Query- und DML-Ausführungen können Tool, Operation, Laufzeit, zurückgegebene oder betroffene Zeilen, Freigabestatus und vom Compiler abgeleitete Fakten protokollieren. Governance bleibt damit auch nach der Modellinteraktion nachvollziehbar.",
        ],
      },
    ],
  },
  "integrations/claude-desktop": {
    title: "Claude Desktop + hs-sql-agent",
    headline: "Geben Sie Claude einen kontrollierten SQL-MCP-Endpunkt.",
    description:
      "Verbinden Sie Claude Desktop über MCP mit hs-sql-agent, damit Datenbankerkennung, Queries, Custom Tools und freizugebendes DML hinter serverseitigen Richtlinien bleiben.",
    eyebrow: "Claude Desktop · MCP",
    keywords: [
      "Claude Desktop MCP SQL",
      "Claude database MCP",
      "Claude PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "MCP-nativ",
        description:
          "Verwenden Sie dieselbe MCP-Server-Oberfläche wie andere kompatible Clients.",
      },
      {
        title: "Eingeschränkte Credentials",
        description:
          "Erstellen Sie einen MCP-Key, der nur an die für Claude erlaubte Datenbank und Tools gebunden ist.",
      },
      {
        title: "Menschliche DML-Freigabe",
        description:
          "Mutationen können vor dem Commit MCP form Elicitation verlangen.",
      },
    ],
    relatedDocs: [
      { label: "MCP-Client anbinden", path: "docs/mcp/client-onboarding" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Den Client verbinden, nicht das Datenbankpasswort weitergeben",
        paragraphs: [
          "Claude Desktop kommuniziert über MCP mit hs-sql-agent. Die eigentliche Datenbankverbindung, Autorisierung, Richtlinien, der Compiler und die Audit-Verantwortung bleiben serverseitig.",
        ],
      },
      {
        title: "Nur die benötigten Tools freigeben",
        paragraphs: [
          "Ein dedizierter MCP-Key kann je nach Workflow auf Metadata Discovery, SELECT, ausgewählte Custom Tools oder DML begrenzt werden.",
        ],
      },
    ],
  },
  "integrations/cursor": {
    title: "Cursor + hs-sql-agent",
    headline: "Kontrollierte SQL Tools direkt aus Cursor verwenden.",
    description:
      "Verbinden Sie Cursor über MCP mit hs-sql-agent und halten Sie generiertes SQL hinter demselben Compiler, Datenbank-Scope, derselben Tool Policy und Audit-Grenze wie in Produktion.",
    eyebrow: "Cursor · MCP",
    keywords: [
      "Cursor MCP SQL",
      "Cursor database MCP",
      "Cursor PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "Schema Discovery",
        description:
          "Schemas, Tabellen und Spalten werden über authentifizierte Metadata Tools gelesen.",
      },
      {
        title: "Kompilierte Queries",
        description:
          "Generierte SELECT-Anweisungen laufen vor der Ausführung durch den typisierten Query Runtime.",
      },
      {
        title: "Kontrollierte Mutationen",
        description:
          "DML kann weiterhin durch das Safe-DML-Freigabeprotokoll geschützt werden.",
      },
    ],
    relatedDocs: [
      { label: "MCP-Client anbinden", path: "docs/mcp/client-onboarding" },
      {
        label: "SQL-Ausführungsmodell",
        path: "docs/sql-compiler/execution-model",
      },
    ],
    body: [
      {
        title: "Coding-Unterstützung und Datenbankautorität trennen",
        paragraphs: [
          "Cursor kann SQL Tools erzeugen und aufrufen. Welche Operationen tatsächlich die Datenbank erreichen dürfen, entscheidet weiterhin hs-sql-agent. Modellkontext wird nicht automatisch zu Datenbankautorisierung.",
        ],
      },
      {
        title: "Schon in der Entwicklung dieselbe Produktionsgrenze verwenden",
        paragraphs: [
          "Auch ein Entwickler-Client kann denselben MCP-Key-Scope, Compiler, Query-Richtlinien, Safe DML und Audit-Pfad verwenden. Eine separate unrestricted connection nur für Bequemlichkeit ist nicht nötig.",
        ],
      },
    ],
  },
  "integrations/aspnet-core": {
    title: "hs-sql-agent in ASP.NET Core einbetten",
    headline:
      "Kombinieren Sie nur die hs-sql-agent-Funktionen, die Ihr .NET-Host benötigt.",
    description:
      "Verwenden Sie HsSqlAgent.Server 2.0.2 als einbettbare ASP.NET-Core-Klassenbibliothek. Der Host behält Authentifizierung und Controller-Mapping und aktiviert Admin API, MCP, integrierte Identität oder Admin UI nur bei Bedarf.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description:
          "Starten Sie mit dem optionsfreien Core statt mit der früheren All-in-one-Registrierung.",
      },
      {
        title: "Funktionen gezielt kombinieren",
        description:
          "Runtime, Admin Store/API, MCP, Telemetrie und integrierte Identität lassen sich unabhängig hinzufügen.",
      },
      {
        title: "Pipeline bleibt beim Host",
        description:
          "Die bestehende Anwendung behält authentication, authorization middleware und MapControllers().",
      },
    ],
    relatedDocs: [
      {
        label: "ASP.NET-Core-Integration",
        path: "docs/integration/aspnet-core",
      },
    ],
    body: [
      {
        title: "In einen bestehenden ASP.NET Core Host einbetten",
        paragraphs: [
          "HsSqlAgent.Server ist eine Class-Library-Integrationsoberfläche und startet nicht versteckt einen zweiten Web Host in Ihrer Anwendung. Neue Integrationen mit 2.0.2 beginnen mit AddHsSqlAgentCore() und wählen die benötigten Funktionen anschließend explizit aus.",
          "Wenn die Anwendung Login und Berechtigungen bereits selbst verwaltet, delegieren Sie die Admin-Autorisierung an die Host Policy, statt den integrierten Member/Role-Identity-Stack von hs-sql-agent zu installieren.",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: aspNetCoreCode,
        },
      },
      {
        title: "Integrierte Identität und Admin UI sind optional",
        paragraphs: [
          "Wenn der Host das eigene JWT/Member/Role-Modell von hs-sql-agent verwenden soll, wählen Sie AddHsSqlAgentBuiltInAuth() statt Host Authorization. Beide Autorisierungsmodi schließen sich gegenseitig aus.",
          "Auch die mitgelieferte Admin UI ist optional. Eine bestehende Anwendung kann nur die Admin API bereitstellen und ihr eigenes Frontend verwenden oder die mitgelieferte UI bei Bedarf ergänzen.",
        ],
      },
      {
        title: "Einbettung schwächt die SQL-Sicherheitsgrenze nicht",
        paragraphs: [
          "Die Hosting-Topologie ändert sich, aber Query-Kompilierung, Safe DML, MCP-Key-Scope, Richtlinien, Provider-Capability-Prüfungen und Audit laufen weiterhin durch dieselbe hs-sql-agent-Runtime-Grenze.",
        ],
      },
    ],
  },
};

function databaseCopy(provider: string): MarketingCopy {
  return {
    title: `${provider} MCP Server`,
    headline: `Kontrollierter KI-Zugriff auf ${provider}.`,
    description: `Verbinden Sie KI-Clients über die MCP-Oberfläche von hs-sql-agent, den typisierten SQL-Compiler, Zugriffsrichtlinien, Safe DML und die Audit-Grenze sicher mit ${provider}.`,
    eyebrow: `${provider} · MCP`,
    keywords: [
      `${provider} MCP server`,
      `${provider} AI agent`,
      `sicheres ${provider} MCP`,
      `${provider} SQL-Compiler`,
    ],
    highlights: [
      {
        title: "Eine kontrollierte MCP-Oberfläche",
        description: `Stellen Sie ${provider} bereit, ohne dem Modell eine unrestricted database connection zu geben.`,
      },
      {
        title: "Dialektbewusster Compiler",
        description: `${provider}-spezifische SQL-Semantik bleibt innerhalb einer expliziten Source-/Target-Capability-Grenze.`,
      },
      {
        title: "Richtlinie vor Ausführung",
        description:
          "Datenbank-Scope, Tabellenrichtlinien, Tool-Einschränkungen, Rate Limits, Safe DML und Audit greifen vor dem Commit.",
      },
    ],
    relatedDocs: [
      {
        label: "Datenbankdialekte",
        path: "docs/sql-compiler/database-dialects",
      },
      {
        label: "SQL-Ausführungsmodell",
        path: "docs/sql-compiler/execution-model",
      },
      { label: "MCP-Client anbinden", path: "docs/mcp/client-onboarding" },
    ],
    body: [
      {
        title: `${provider} bleibt hinter einer Compiler-Grenze`,
        paragraphs: [
          `hs-sql-agent vertraut einer vom Modell generierten ${provider}-Anweisung nicht allein deshalb, weil der Provider sie ausführen könnte. SQL durchläuft zuerst die typisierte Validierungs- und Capability-Pipeline.`,
          "Provider-Support bedeutet, dass die Runtime verbinden, Metadaten lesen, unterstützte Anweisungen kompilieren und unter Richtlinien ausführen kann. Er bedeutet nicht, dass jede herstellerspezifische Syntax automatisch akzeptiert wird.",
        ],
      },
      {
        title: "Metadaten verwenden, bevor das Schema geraten wird",
        paragraphs: [
          `MCP-Clients können vor dem Erzeugen von ${provider}-SQL Schemas, Tabellen und Spalten über die integrierten Metadata Tools lesen. Das reduziert blindes Raten und hält Discovery innerhalb desselben authentifizierten Datenbank-Scope.`,
        ],
        bullets: [
          "get_schemas",
          "get_tables",
          "get_columns",
          "execute_query_sql",
          "execute_dml_sql",
        ],
      },
      {
        title: "Ablehnen, wenn die Semantik nicht nachgewiesen ist",
        paragraphs: [
          `Für ${provider} gilt dieselbe Regel wie für alle anderen Provider: Nicht unterstützte Syntax oder nicht nachgewiesene cross-provider semantics werden an der passenden Validierungs- oder Capability-Grenze abgelehnt, statt stillschweigend in SQL mit anderem Verhalten umgeschrieben zu werden.`,
        ],
      },
    ],
  };
}

export function getDeMarketingCopy(
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  if (section === "databases") {
    const provider = databaseProviders[slug];
    return provider ? databaseCopy(provider) : undefined;
  }
  return pages[`${section}/${slug}`];
}
