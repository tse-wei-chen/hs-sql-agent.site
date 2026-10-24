export const productRelease = {
  repository: "tse-wei-chen/hs-sql-agent",
  version: "3.0.0",
  tag: "v3.0.0",
  sourceRef: "4acb6725bb4623104ae6a9de5c3dea404616d09e",
  historicalTags: ["v2.0.6", "v2.0.5", "v2.0.4", "v2.0.3", "v2.0.2", "v2.0.1"],
  sources: {
    version: "backend/Directory.Build.props",
    overview: "README.md",
    serverEmbedding: "backend/src/Modules/HsSqlAgent.Server/README.md",
    standardHosting: "backend/src/Modules/HsSqlAgent.Hosting/README.md",
    approvalContracts:
      "backend/src/Modules/HsSqlAgent.Approvals.Abstractions/DmlApprovalContracts.cs",
    webhookApprovals:
      "backend/src/Modules/HsSqlAgent.Approvals.Webhook/README.md",
    dmlTool: "backend/src/Modules/HsSqlAgent.Server/Tools/SqlAgentTool.Dml.cs",
    mcpToolResults:
      "backend/src/Modules/HsSqlAgent.Server/Models/McpToolResults.cs",
    mcpBuiltInCatalog: "backend/src/Common/Models/McpBuiltInTools.cs",
    sqlExplainController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/SqlExplainController.cs",
    sqlExplainContextController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/SqlExplainContextController.cs",
    runtimeDoctorController:
      "backend/src/Modules/HsSqlAgent.Server/Controllers/RuntimeDoctorController.cs",
    runtimeDoctorAnalyzer:
      "backend/src/Modules/HsSqlAgent.Server/Services/RuntimeDoctorAnalyzer.cs",
    systemReadiness: "frontend/app/lib/systemReadiness.ts",
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
