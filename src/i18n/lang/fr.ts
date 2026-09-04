import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    features: "Fonctionnalités",
    databases: "Bases de données",
    integrations: "Intégrations",
    docs: "Documentation",
    github: "GitHub",
    posts: "Articles",
    tags: "Étiquettes",
    about: "À propos",
    archives: "Archives",
    search: "Rechercher",
  },
  post: {
    publishedAt: "Publié le",
    updatedAt: "Mis à jour le",
    sharePostIntro: "Partager cet article :",
    sharePostOn: "Partager cet article sur {{platform}}",
    sharePostViaEmail: "Partager cet article par e-mail",
    tagLabel: "Étiquettes",
    backToTop: "Retour en haut",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Article précédent",
    nextPost: "Article suivant",
  },
  pagination: { prev: "Précédent", next: "Suivant", page: "Page" },
  home: {
    socialLinks: "Liens sociaux",
    featured: "À la une",
    recentPosts: "Articles récents",
    allPosts: "Tous les articles",
    heroKicker: "Natif MCP · refus par défaut · six dialectes SQL",
    heroTitle: "Exécution SQL sécurisée pour les agents IA.",
    heroDesc:
      "Placez un compilateur et une frontière de gouvernance entre le SQL généré et vos bases de données. hs-sql-agent analyse, valide, vérifie les capacités, applique les politiques d’accès, puis seulement exécute le SQL propre au moteur ciblé.",
    heroDescLinkBefore: "",
    heroDescLinkAfter: "",
    primaryCta: "Commencer",
    secondaryCta: "Voir sur GitHub",
    copyCommand: "Copier",
    copiedCommand: "Copié",
    compilerLive: "Frontière de politique active",
    compilerResult: "SQL adapté au moteur prêt à l’exécution",
    compilerTitle: "Compilateur SQL à refus par défaut",
    compilerDesc:
      "Les syntaxes non prises en charge sont refusées au lieu d’être réécrites silencieusement avec une sémantique différente.",
    dmlTitle: "DML soumis à approbation humaine",
    dmlDesc:
      "Prévisualisez l’impact, liez l’approbation au plan validé, puis revérifiez l’ensemble de lignes dans la transaction de validation.",
    databaseTitle: "Six dialectes de base de données",
    databaseDesc:
      "PostgreSQL, MySQL, SQL Server, Oracle, SQLite et Firebird derrière une interface MCP unique.",
    governanceTitle: "Gouvernance par défaut",
    governanceDesc:
      "Le périmètre de base de données par clé, les listes de tables autorisées, les restrictions d’outils, les limites de débit, les politiques de sécurité et l’audit restent hors du LLM.",
    capabilityKicker: "Frontière du compilateur",
    capabilityTitle: "Traitez le SQL généré comme une entrée non fiable.",
    capabilityDesc:
      "L’enjeu n’est pas de générer du SQL, mais de démontrer que l’instruction reste dans les limites de dialecte, de capacités et de politiques que vous avez choisi d’exposer.",
    dmlKicker: "Chemin sûr pour les modifications",
    dmlSectionTitle:
      "L’approbation DML est un protocole, pas une simple boîte de dialogue.",
    dmlSectionDesc:
      "UPDATE et DELETE sont prévisualisés sans modifier les données, l’approbation est liée au plan compilé validé et à l’empreinte de l’ensemble de lignes, puis les lignes correspondantes sont revérifiées avant validation de la transaction.",
    dmlPreviewTitle: "Prévisualiser",
    dmlPreviewDesc:
      "Lire les lignes concernées sans appliquer la modification.",
    dmlApproveTitle: "Approuver",
    dmlApproveDesc:
      "Exiger une approbation explicite de l’opérateur humain via MCP form Elicitation.",
    dmlRevalidateTitle: "Revérifier",
    dmlRevalidateDesc:
      "Relire les lignes dans la transaction de validation et comparer l’ensemble lié à l’approbation.",
    dmlCommitTitle: "Valider",
    dmlCommitDesc:
      "Exécuter uniquement si le plan, la politique, le défi, le nombre de lignes et l’ensemble de lignes correspondent toujours.",
    databaseKicker: "Une interface, six dialectes",
    databaseSectionTitle:
      "Conservez la base de données que vous utilisez déjà.",
    databaseSectionDesc:
      "Le compilateur rend explicites les différences sémantiques propres à chaque moteur SQL, tandis que les clients MCP utilisent une interface unique et gouvernée.",
    integrationKicker: "Intégrations MCP et .NET",
    integrationTitle: "Connectez les agents là où ils travaillent déjà.",
    integrationDesc:
      "Connectez des clients MCP distants comme Claude Desktop et Cursor, ou intégrez la même frontière serveur gouvernée dans une application ASP.NET Core.",
    docsKicker: "Documentation",
    docsTitle: "De la première clé MCP à la gouvernance en production.",
    docsDesc:
      "La documentation suit le parcours réel d’adoption de hs-sql-agent : installation, MCP, garanties du compilateur, administration, intégrations, exploitation et développement.",
    docsCta: "Explorer la documentation",
  },
  docs: {
    indexTitle: "Documentation",
    indexDescription:
      "Guides, concepts du compilateur, intégrations, exploitation et références pour hs-sql-agent.",
    sidebarLabel: "Navigation de la documentation",
    onThisPage: "Sur cette page",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tous droits réservés.",
  },
  pages: {
    tagTitle: "Étiquette",
    tagDesc: "Tous les articles portant cette étiquette",
    tagsTitle: "Étiquettes",
    tagsDesc: "Toutes les étiquettes utilisées dans les articles.",
    postsTitle: "Articles",
    postsDesc: "Tous les articles.",
    archivesTitle: "Archives",
    archivesDesc: "Articles archivés.",
    searchTitle: "Rechercher dans la documentation",
    searchDesc: "Rechercher dans la documentation de hs-sql-agent.",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher dans la documentation...",
    noResults: "Aucun résultat",
    rssFeed: "flux RSS",
    goToPreviousPage: "Aller à la page précédente",
    goToNextPage: "Aller à la page suivante",
  },
  notFound: {
    title: "404 Introuvable",
    message: "Page introuvable",
    goHome: "Retour à l’accueil",
  },
} satisfies UIStrings;
