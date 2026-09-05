export const productRelease = {
  repository: "tse-wei-chen/hs-sql-agent",
  version: "2.0.2",
  tag: "v2.0.2",
  previousTag: "v2.0.1",
  sources: {
    version: "backend/Directory.Build.props",
    overview: "README.md",
    serverEmbedding: "backend/src/Modules/HsSqlAgent.Server/README.md",
    permissions:
      "backend/src/Modules/Auth.Service/Authorization/PermissionCanonicalPaths.cs",
    mcpBuiltIns:
      "backend/src/Modules/Admin.Service/Services/McpAccessKeyService.cs",
    mcpRateLimit:
      "backend/src/Modules/Admin.Service/Models/McpKeyRateLimitMode.cs",
    authController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/AuthController.cs",
    memberController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/MemberController.cs",
    roleController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/RoleController.cs",
    runtimeAdminController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/RuntimeAdminController.cs",
    dbManagementController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/DbManagementController.cs",
    customSqlToolController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/CustomSqlToolController.cs",
    securityPolicyController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/SecurityPolicyController.cs",
    credentialController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/CredentialController.cs",
    sqlCompilerProject:
      "backend/src/Modules/HsSqlAgent.SqlCore/HsSqlAgent.SqlCore.fsproj",
  },
} as const;
