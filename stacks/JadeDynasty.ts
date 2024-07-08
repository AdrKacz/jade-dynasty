import { StackContext, StaticSite, Api } from "sst/constructs";

export function JadeDynasty({ stack }: StackContext) {
    const hostedZone = 'jadedynastygua.com'
    const domain = stack.stage === 'prod' ? hostedZone : `local.${hostedZone}`;

    const api = new Api(stack, 'api', {
        customDomain: {
            hostedZone,
            domainName: stack.stage === 'prod' ? `api.${hostedZone}` : `api.${stack.stage}.${hostedZone}`,
        },
        routes: {
            "GET /status": "packages/api/src/get.handler",
        }
    });

    const staticSite = new StaticSite(stack, "StaticStite", {
        customDomain: stack.stage === 'prod' ? {
            domainName: domain,
            domainAlias: `www.${domain}`,
            hostedZone
        } : undefined,
        path: "packages/web",
        buildOutput: "dist",
        buildCommand: "npm run build",
        environment: { VITE_APP_API_URL: api.customDomainUrl || api.url }
    });

    stack.addOutputs({
        "Api URL": api.customDomainUrl || api.url,
        "Web URL": staticSite.customDomainUrl || staticSite.url,
    });
}