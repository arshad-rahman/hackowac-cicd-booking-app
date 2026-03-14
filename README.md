# 🚀 HackoWac CI/CD Booking App

![CI Pipeline](https://github.com/arshad-rahman/hackowac-cicd-booking-app/actions/workflows/ci.yml/badge.svg)
![Docker](https://img.shields.io/badge/containerized-docker-blue)
![Node.js](https://img.shields.io/badge/backend-nodejs-green)
![React](https://img.shields.io/badge/frontend-react-blue)
![PostgreSQL](https://img.shields.io/badge/database-postgresql-336791)
![GitHub Actions](https://img.shields.io/badge/ci-github--actions-black)
![DevOps](https://img.shields.io/badge/devops-project-orange)
![License](https://img.shields.io/badge/license-MIT-green)

---

# 📌 Project Overview

**HackoWac CI/CD Booking App** is a **containerized full-stack application** built to demonstrate a modern **DevOps CI/CD pipeline**.

The project shows how production-style applications can be:

- Built and validated automatically
- Containerized using Docker
- Checked through CI pipelines
- Published to a container registry
- Prepared for automated deployment

The main focus of this repository is **DevOps workflow design**, automation, and containerized delivery.

---

# 🧭 Architecture

```text
Developer
   │
   │ git push
   ▼
GitHub Repository
   │
   ▼
GitHub Actions CI Pipeline
   │
   ├─ Checkout source code
   ├─ Install backend dependencies
   ├─ Install frontend dependencies
   ├─ Build frontend application
   ├─ Build backend Docker image
   ├─ Build frontend Docker image
   └─ Push images to GHCR
         │
         ▼
GitHub Container Registry
         │
         ▼
Future Deployment Target
(EC2 / Kubernetes / Cloud Environment)
```

---

# ⚙️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Containerization | Docker |
| Orchestration | Docker Compose |
| CI Pipeline | GitHub Actions |
| Image Registry | GitHub Container Registry (GHCR) |

---

# 🧱 Project Structure

```text
hackowac-cicd-booking-app
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── Dockerfile
│   ├── src
│   └── package.json
│
├── docker-compose.yml
│
└── .github
    └── workflows
        └── ci.yml
```

---

# 🚀 Running the Application Locally

## Clone the repository

```bash
git clone https://github.com/arshad-rahman/hackowac-cicd-booking-app.git
cd hackowac-cicd-booking-app
```

## Start containers

```bash
docker compose up --build
```

## Access the services

Frontend

```text
http://localhost
```

Backend API

```text
http://localhost:5000
```

Health endpoint

```text
http://localhost:5000/health
```

---

# 🐳 Containerized Services

The application runs using **three containers**.

| Service | Description |
|-------|-------------|
| frontend | React application served via Nginx |
| backend | Node.js Express API |
| db | PostgreSQL database |

All containers are orchestrated using **Docker Compose**.

---

# ⚡ Continuous Integration (CI)

A **GitHub Actions workflow** automatically runs whenever code is pushed to the repository.

## CI Pipeline Steps

```text
1. Checkout repository
2. Install backend dependencies
3. Install frontend dependencies
4. Build frontend application
5. Build backend Docker image
6. Build frontend Docker image
7. Push backend image to GitHub Container Registry
8. Push frontend image to GitHub Container Registry
```

This pipeline ensures that every change is:

- dependency-validated
- build-tested
- containerized
- ready for deployment

---

# 📦 Published Container Images

Docker images are automatically published to **GitHub Container Registry (GHCR)**.

Backend image

```text
ghcr.io/arshad-rahman/hackowac-cicd-booking-app-backend:latest
```

Frontend image

```text
ghcr.io/arshad-rahman/hackowac-cicd-booking-app-frontend:latest
```

These images can be pulled directly for deployment.

---

# 🔍 Example API

Health check endpoint

```text
GET /health
```

Example response

```json
{
  "status": "ok"
}
```

---

# 🔄 CI/CD Flow

```text
Code Push
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions
   │
   ├─ Dependency Installation
   ├─ Frontend Build
   ├─ Backend Docker Build
   ├─ Frontend Docker Build
   └─ GHCR Image Publish
         │
         ▼
Deployable Container Images
```

---

# 📈 DevOps Skills Demonstrated

This project demonstrates practical experience with:

- Docker containerization
- multi-service orchestration with Docker Compose
- CI automation using GitHub Actions
- frontend build validation
- backend and frontend image creation
- container registry publishing with GHCR
- DevOps pipeline design
- infrastructure-ready deployment workflow

---

# 🛠️ Future Enhancements

Planned improvements for this project include:

- Automated deployment to **AWS EC2**
- Infrastructure provisioning using **Terraform**
- Kubernetes deployment manifests
- automated integration testing
- monitoring with **Prometheus & Grafana**
- blue-green or rolling deployments

---

# 👨‍💻 Author

**Arshad Rahman**  
DevOps Engineer

GitHub

```text
https://github.com/arshad-rahman
```

---

# ⭐ About This Repository

This repository was created as a **DevOps portfolio project** to demonstrate how modern CI/CD pipelines work in containerized environments.

If you find this project useful or interesting, feel free to **star the repository**.
