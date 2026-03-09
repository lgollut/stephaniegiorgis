# stephaniegiorgis

## 0.1.2

### Patch Changes

- 7acf6df: Ensure Kubernetes deployments use the GHCR pull secret so staging and production pods can authenticate and start successfully on Naima.

## 0.1.1

### Patch Changes

- 076cda1: Migrate the site deployment from Vercel-oriented hosting to the Naima Kubernetes workflow with pnpm, containerization, and ArgoCD-ready manifests.
- cbae5f6: Ensure the self-hosted build installs and verifies sharp correctly in CI and Docker while disabling Scarf analytics noise during automated installs.
