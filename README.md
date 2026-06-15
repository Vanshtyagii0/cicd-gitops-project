# CI/CD GitOps Project on Minikube

## Architecture
- **Python Backend** - FastAPI service (port 8000)
- **Java Backend** - Spring Boot service (port 8080)
- **Angular Frontend** - Dashboard UI (port 80)
- **Tekton** - CI/CD Pipeline
- **ArgoCD** - GitOps Deployment

## Access URLs
- Frontend: http://192.168.49.2:31885
- ArgoCD UI: https://localhost:8080

## ArgoCD Login
- Username: admin
- Password: Check secret

## How GitOps Works
1. Code push to GitHub
2. ArgoCD detects change
3. Auto-deploys to Minikube

## Tekton Pipeline
- Builds Docker images
- Pushes to registry
- Deploys to Kubernetes
