export const databaseProviders: Record<string, string> = {
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  "sql-server": "SQL Server",
  oracle: "Oracle",
  sqlite: "SQLite",
  firebird: "Firebird",
};

export const aspNetCoreCode = `var hs = builder.Services.AddHsSqlAgentCore();

hs.AddHsSqlAgentRuntime();
hs.AddHsSqlAgentAdminStore(options =>
{
    options.Provider = "Postgres";
    options.ConnectionString =
        builder.Configuration.GetConnectionString("HsSqlAgent")!;
});
hs.AddHsSqlAgentHostAuthorization("SqlAgentAdmin");
hs.AddHsSqlAgentAdminApi();
hs.AddHsSqlAgentMcp(options =>
{
    options.PublicEndpoint = "https://example.com/mcp";
    options.HmacSecretKey = builder.Configuration["HMAC_KEY"]!;
});

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.UseHsSqlAgentMcp();
app.UseHsSqlAgentAdminApi();
app.MapControllers();`;
