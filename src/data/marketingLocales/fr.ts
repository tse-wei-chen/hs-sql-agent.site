import type { MarketingSection } from "../marketing";
import { aspNetCoreCode, databaseProviders } from "./common";
import type { MarketingCopy } from "./types";

const pages: Record<string, MarketingCopy> = {
  "features/sql-compiler": {
    title: "Compilateur SQL qui refuse par défaut",
    headline: "Traitez le SQL généré par l’IA comme une entrée non fiable.",
    description:
      "hs-sql-agent analyse le SQL dans une chaîne de compilation typée, valide la sémantique source et les politiques d’accès, vérifie les capacités de la cible, puis seulement génère le SQL propre au fournisseur.",
    eyebrow: "Compilateur SQL",
    keywords: [
      "compilateur SQL",
      "MCP SQL",
      "sécurité SQL IA",
      "fail closed SQL",
    ],
    highlights: [
      {
        title: "Analyser d’abord",
        description:
          "Le SQL passe par un analyseur structuré au lieu d’être envoyé directement au pilote de base de données.",
      },
      {
        title: "Vérifier les capacités",
        description:
          "Si une sémantique source ou cible ne peut pas être garantie, elle est refusée plutôt que dégradée silencieusement.",
      },
      {
        title: "Compiler par fournisseur",
        description:
          "Les particularités de chaque base restent confinées à une frontière d’exécution explicite.",
      },
    ],
    relatedDocs: [
      {
        label: "Modèle d’exécution SQL",
        path: "docs/sql-compiler/execution-model",
      },
      {
        label: "Dialectes de bases de données",
        path: "docs/sql-compiler/database-dialects",
      },
    ],
    body: [
      {
        title: "Le SQL généré est une entrée, pas une autorisation",
        paragraphs: [
          "Un LLM peut proposer du SQL, mais le fait qu’une base puisse l’analyser ne suffit pas à l’autoriser. hs-sql-agent place une frontière de compilation et de politique d’accès entre le modèle et la connexion.",
          "La chaîne fonctionne en refus par défaut : une instruction qui ne peut pas être représentée ou démontrée sûre est rejetée, et non réécrite avec une autre sémantique simplement pour pouvoir s’exécuter.",
        ],
      },
      {
        title: "Un chemin d’exécution typé",
        paragraphs: [
          "Les requêtes passent par parsing, binding, validation, contrôle des capacités, compilation propre au fournisseur puis exécution d’une commande immuable. Les politiques raisonnent ainsi sur une instruction structurée et pas uniquement sur du SQL brut.",
        ],
        bullets: [
          "validation des requêtes à instruction unique",
          "autorisation des tables et contrôle des politiques de requête",
          "frontières de capacités des dialectes source et cible",
          "rendu propre au fournisseur uniquement après validation",
        ],
      },
      {
        title: "Étendre le SQL sans affaiblir le refus par défaut",
        paragraphs: [
          "Une nouvelle syntaxe n’est prise en charge qu’une fois sa sémantique comprise par le parser, le modèle typé, la validation, les preuves de capacité, le renderer et les tests. La couverture SQL peut donc évoluer sans réduire le niveau de sûreté.",
        ],
      },
    ],
  },
  "features/safe-dml": {
    title: "Safe DML avec approbation humaine",
    headline:
      "Prévisualiser, approuver, revalider, puis valider la transaction.",
    description:
      "UPDATE et DELETE suivent un protocole d’approbation en plusieurs étapes qui lie la décision humaine au plan validé et revérifie l’ensemble de lignes affecté dans la transaction avant sa validation.",
    eyebrow: "Safe DML",
    keywords: [
      "Safe DML",
      "approbation MCP",
      "approbation humaine SQL",
      "modification de base par IA",
    ],
    highlights: [
      {
        title: "Prévisualiser",
        description:
          "Inspectez les lignes concernées avant d’autoriser la modification.",
      },
      {
        title: "Approuver",
        description:
          "Liez une approbation humaine à usage unique à l’opération validée.",
      },
      {
        title: "Revalider",
        description:
          "Revérifiez l’ensemble de lignes dans la transaction avant sa validation.",
      },
    ],
    relatedDocs: [
      { label: "Protocole Safe DML", path: "docs/sql-compiler/safe-dml" },
    ],
    body: [
      {
        title: "L’approbation est un protocole, pas une boîte de dialogue",
        paragraphs: [
          "Un simple bouton de confirmation ne suffit pas lorsqu’une mutation générée peut modifier des données de production. hs-sql-agent sépare la prévisualisation de l’impact, l’approbation explicite, la revalidation dans la transaction et sa validation finale.",
        ],
      },
      {
        title: "Lier l’approbation à ce qui a réellement été relu",
        paragraphs: [
          "Le flux d’approbation s’appuie sur l’opération validée et l’impact observé au moment de la revue. Avant la validation de la transaction, le serveur vérifie que plan, policy, challenge, row count et row set correspondent toujours au contexte approuvé.",
        ],
        bullets: [
          "prévisualisation en lecture seule de l’impact",
          "challenge d’approbation à usage unique",
          "décision humaine via MCP form Elicitation",
          "revalidation du row set dans la transaction",
        ],
      },
      {
        title: "Les Custom DML Tools suivent la même frontière",
        paragraphs: [
          "Un Custom Tool publié qui exécute du DML passe par le même flux d’approbation typé. L’abstraction Tool change la manière d’exposer l’opération, pas le contrat de sûreté des mutations.",
        ],
      },
    ],
  },
  "features/access-control": {
    title: "Contrôle d’accès aux bases pour les agents IA",
    headline: "Gardez l’autorisation en dehors du modèle.",
    description:
      "Limitez chaque clé MCP à la base, aux Tools, aux tables, aux limites de débit et aux politiques d’exécution réellement exposées. Le LLM ne peut pas redéfinir ces frontières depuis un prompt.",
    eyebrow: "Gouvernance",
    keywords: [
      "contrôle d’accès MCP",
      "gouvernance base de données IA",
      "liste blanche SQL",
      "sécurité clé MCP",
    ],
    highlights: [
      {
        title: "Périmètre par clé",
        description:
          "Associez les identifiants à une base précise et aux MCP Tools autorisés.",
      },
      {
        title: "Frontières de table",
        description:
          "Appliquez listes blanches et politiques de requête indépendamment des instructions du modèle.",
      },
      {
        title: "Limites opérationnelles",
        description:
          "Débit, concurrence, révocation et audit restent hors du prompt.",
      },
    ],
    relatedDocs: [
      {
        label: "Vue d’ensemble de la sécurité",
        path: "docs/security/overview",
      },
      { label: "Référence des MCP Tools", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Les politiques appartiennent au serveur",
        paragraphs: [
          "Un prompt n’est pas un système d’autorisation. Avant toute exécution SQL, hs-sql-agent évalue la clé authentifiée, la base associée, les Tools autorisés, les frontières de table et la politique de sécurité active.",
        ],
      },
      {
        title: "Chaque clé n’expose que la surface utile",
        paragraphs: [
          "Une clé MCP peut être limitée à la base et aux Tools réellement nécessaires au client. Les Tools intégrés et les Custom Tools publiés sont vérifiés par rapport à la configuration de la clé avant leur invocation.",
        ],
        bullets: [
          "association à la base",
          "MCP Tools autorisés",
          "liste blanche des tables",
          "limites de débit effectives",
          "état de révocation et d’expiration",
        ],
      },
      {
        title: "Rendre la frontière d’exécution auditable",
        paragraphs: [
          "Les exécutions Query et DML peuvent enregistrer le Tool, l’opération, la durée, les lignes retournées ou affectées, l’état d’approbation et les faits issus du compilateur. La gouvernance reste donc vérifiable après l’interaction avec le modèle.",
        ],
      },
    ],
  },
  "integrations/claude-desktop": {
    title: "Claude Desktop + hs-sql-agent",
    headline: "Donnez à Claude un endpoint SQL MCP gouverné.",
    description:
      "Connectez Claude Desktop à hs-sql-agent via MCP afin que découverte de schéma, requêtes, Custom Tools et DML approuvé restent derrière les politiques côté serveur.",
    eyebrow: "Claude Desktop · MCP",
    keywords: [
      "Claude Desktop MCP SQL",
      "Claude database MCP",
      "Claude PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "Natif MCP",
        description:
          "Utilisez la même surface MCP Server que les autres clients compatibles.",
      },
      {
        title: "Identifiants à périmètre limité",
        description:
          "Émettez une clé MCP liée uniquement à la base et aux Tools autorisés pour Claude.",
      },
      {
        title: "Approbation humaine du DML",
        description:
          "Une mutation peut exiger une MCP form Elicitation avant la validation de la transaction.",
      },
    ],
    relatedDocs: [
      {
        label: "Connexion d’un client MCP",
        path: "docs/mcp/client-onboarding",
      },
      { label: "Référence des MCP Tools", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title:
          "Connecter le client, pas lui remettre le mot de passe de la base",
        paragraphs: [
          "Claude Desktop communique avec hs-sql-agent via MCP. La vraie connexion à la base, l’autorisation, les politiques, le compilateur et l’audit restent des responsabilités côté serveur.",
        ],
      },
      {
        title: "N’exposer que les Tools nécessaires",
        paragraphs: [
          "Une clé MCP dédiée peut être limitée à la découverte de métadonnées, à SELECT, à certains Custom Tools ou au DML selon le flux de travail prévu.",
        ],
      },
    ],
  },
  "integrations/cursor": {
    title: "Cursor + hs-sql-agent",
    headline: "Utilisez depuis Cursor des Tools SQL gouvernés.",
    description:
      "Connectez Cursor à hs-sql-agent via MCP et gardez le SQL généré derrière le même compilateur, le même périmètre de base, les mêmes politiques de Tool et la même frontière d’audit qu’en production.",
    eyebrow: "Cursor · MCP",
    keywords: [
      "Cursor MCP SQL",
      "Cursor database MCP",
      "Cursor PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "Découverte du schéma",
        description:
          "Inspectez schémas, tables et colonnes via des Tools de métadonnées authentifiés.",
      },
      {
        title: "Requêtes compilées",
        description:
          "Les SELECT générés passent par le runtime Query typé avant exécution.",
      },
      {
        title: "Mutations contrôlées",
        description:
          "Le DML peut rester protégé par le protocole d’approbation Safe DML.",
      },
    ],
    relatedDocs: [
      {
        label: "Connexion d’un client MCP",
        path: "docs/mcp/client-onboarding",
      },
      {
        label: "Modèle d’exécution SQL",
        path: "docs/sql-compiler/execution-model",
      },
    ],
    body: [
      {
        title: "Séparer l’assistance au code de l’autorité sur la base",
        paragraphs: [
          "Cursor peut générer et appeler des SQL Tools, tandis que hs-sql-agent reste responsable de ce qui est réellement autorisé à atteindre la base. Le contexte du modèle ne devient jamais une autorisation de base de données.",
        ],
      },
      {
        title:
          "Utiliser la même frontière qu’en production pendant le développement",
        paragraphs: [
          "Le client de développement peut conserver le même périmètre de clé MCP, le même compilateur, les mêmes politiques de requête, Safe DML et la même piste d’audit, sans ouvrir une connexion non restreinte uniquement pour gagner du temps.",
        ],
      },
    ],
  },
  "integrations/aspnet-core": {
    title: "Intégrer hs-sql-agent dans ASP.NET Core",
    headline:
      "Composez uniquement les capacités hs-sql-agent dont votre hôte .NET a besoin.",
    description:
      "Utilisez HsSqlAgent.Server 2.0.2 comme bibliothèque de classes ASP.NET Core intégrable. Conservez l’authentification et le mapping des contrôleurs de l’hôte, puis activez Admin API, MCP, l’identité intégrée ou Admin UI uniquement si nécessaire.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description:
          "Démarrez avec le core sans options plutôt qu’avec l’ancien enregistrement tout-en-un.",
      },
      {
        title: "Composer les capacités",
        description:
          "Runtime, Admin Store/API, MCP, télémétrie et identité intégrée peuvent être ajoutés indépendamment.",
      },
      {
        title: "Pipeline détenu par l’hôte",
        description:
          "L’application existante conserve authentication, authorization middleware et MapControllers().",
      },
    ],
    relatedDocs: [
      {
        label: "Intégration ASP.NET Core",
        path: "docs/integration/aspnet-core",
      },
    ],
    body: [
      {
        title: "Intégrer dans un hôte ASP.NET Core existant",
        paragraphs: [
          "HsSqlAgent.Server est une surface d’intégration sous forme de bibliothèque de classes, pas un second Web Host caché dans l’application. Avec 2.0.2, les nouvelles intégrations commencent par AddHsSqlAgentCore() puis sélectionnent explicitement les capacités nécessaires.",
          "Si l’application gère déjà ses connexions utilisateur et ses permissions, déléguez l’autorisation Admin à la politique de l’hôte au lieu d’installer la pile d’identité member/role intégrée à hs-sql-agent.",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: aspNetCoreCode,
        },
      },
      {
        title: "L’identité intégrée et Admin UI sont optionnelles",
        paragraphs: [
          "Si l’hôte veut le modèle JWT/member/role propre à hs-sql-agent, choisissez AddHsSqlAgentBuiltInAuth() plutôt que l’autorisation de l’hôte. Les deux modes d’autorisation sont exclusifs.",
          "L’Admin UI fournie est elle aussi facultative. Une application existante peut exposer uniquement Admin API et conserver son propre frontend, ou ajouter l’interface fournie quand elle en a besoin.",
        ],
      },
      {
        title: "L’intégration ne réduit pas la frontière de sûreté SQL",
        paragraphs: [
          "La topologie d’hébergement change, mais compilation des requêtes, Safe DML, périmètre des clés MCP, politiques, vérification des capacités du fournisseur et audit passent toujours par la même frontière runtime hs-sql-agent.",
        ],
      },
    ],
  },
};

function databaseCopy(provider: string): MarketingCopy {
  return {
    title: `${provider} MCP Server`,
    headline: `Accès IA gouverné à ${provider}.`,
    description: `Connectez les clients IA à ${provider} via la surface MCP de hs-sql-agent, son compilateur SQL typé, ses politiques d’accès, Safe DML et sa frontière d’audit.`,
    eyebrow: `${provider} · MCP`,
    keywords: [
      `${provider} MCP server`,
      `${provider} AI agent`,
      `MCP ${provider} sécurisé`,
      `${provider} compilateur SQL`,
    ],
    highlights: [
      {
        title: "Une surface MCP gouvernée",
        description: `Exposez ${provider} sans donner au modèle une connexion directe et non restreinte à la base.`,
      },
      {
        title: "Compilateur conscient du dialecte",
        description: `Gardez la sémantique SQL propre à ${provider} dans une frontière explicite de capacités source et cible.`,
      },
      {
        title: "Politique avant exécution",
        description:
          "Périmètre de base, politique de table, restrictions de Tool, limites de débit, Safe DML et audit s’appliquent avant la validation de la transaction.",
      },
    ],
    relatedDocs: [
      {
        label: "Dialectes de bases de données",
        path: "docs/sql-compiler/database-dialects",
      },
      {
        label: "Modèle d’exécution SQL",
        path: "docs/sql-compiler/execution-model",
      },
      {
        label: "Connexion d’un client MCP",
        path: "docs/mcp/client-onboarding",
      },
    ],
    body: [
      {
        title: `${provider} reste derrière une frontière de compilation`,
        paragraphs: [
          `hs-sql-agent ne considère pas une instruction ${provider} générée par un modèle comme fiable simplement parce que le fournisseur saurait l’exécuter. Le SQL passe d’abord par la validation typée et la chaîne de vérification des capacités.`,
          "La prise en charge d’un fournisseur signifie que le runtime peut se connecter, lire les métadonnées, compiler les instructions prises en charge et les exécuter sous politique. Elle ne signifie pas que toute syntaxe propriétaire est acceptée automatiquement.",
        ],
      },
      {
        title: "Utiliser les métadonnées avant de deviner le schéma",
        paragraphs: [
          `Avant de produire du SQL ${provider}, un client MCP peut découvrir schémas, tables et colonnes avec les Tools de métadonnées intégrés. Cela limite les suppositions aveugles et maintient la découverte dans le même périmètre de base authentifié.`,
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
        title: "Refuser lorsque la sémantique ne peut pas être démontrée",
        paragraphs: [
          `Comme les autres fournisseurs, ${provider} suit la même règle : une syntaxe non prise en charge ou une sémantique cross-provider non démontrée est refusée à la bonne frontière de validation ou de capacité, plutôt que réécrite silencieusement avec un comportement différent.`,
        ],
      },
    ],
  };
}

export function getFrMarketingCopy(
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  if (section === "databases") {
    const provider = databaseProviders[slug];
    return provider ? databaseCopy(provider) : undefined;
  }
  return pages[`${section}/${slug}`];
}
