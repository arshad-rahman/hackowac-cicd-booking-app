# 🚀 HackoWac CI/CD Booking App

[![CI](https://github.com/arshad-rahman/hackowac-cicd-booking-app/actions/workflows/ci.yml/badge.svg)](https://github.com/arshad-rahman/hackowac-cicd-booking-app/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/docker-containerized-blue)]()
[![Terraform](https://img.shields.io/badge/IaC-Terraform-purple)]()
[![Ansible](https://img.shields.io/badge/automation-Ansible-red)]()

A **DevOps portfolio project** demonstrating a full delivery workflow for a containerized application using:

- **React frontend**
- **Node.js backend**
- **PostgreSQL database**
- **Docker containerization**
- **GitHub Actions CI**
- **GitHub Container Registry (GHCR)**
- **Ansible deployment automation**
- **Terraform AWS infrastructure blueprint**

The goal of this project is to demonstrate **how application delivery, infrastructure design, and automation integrate into a DevOps workflow**.

---

# 🧠 Project Purpose

This repository is designed to showcase a **modern DevOps delivery pipeline** rather than simply an application.

It demonstrates how to:

• Containerize services  
• Automate CI builds  
• Publish deployable artifacts  
• Automate server configuration  
• Define infrastructure as code  

---

# 🏗 Architecture Overview

```
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions CI Pipeline
      │
      ├── Install Dependencies
      ├── Build Frontend
      ├── Build Backend
      ├── Build Docker Images
      └── Push Images to GHCR
      │
      ▼
Container Registry (GHCR)
      │
      ▼
Ansible Deployment
      │
      ▼
Docker Compose Host
      │
      ├── Frontend Container
      ├── Backend Container
      └── PostgreSQL Container
      │
      ▼
Application Health Check
```

---

# 📦 Application Stack

| Layer | Technology |
|-----|-----|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Containerization | Docker |
| Local Orchestration | Docker Compose |
| CI Pipeline | GitHub Actions |
| Container Registry | GitHub Container Registry |
| Deployment Automation | Ansible |
| Infrastructure Blueprint | Terraform |

---

# 🐳 Container Architecture

```
docker-compose
│
├── frontend
│     React + Nginx
│
├── backend
│     Node.js API
│
└── db
      PostgreSQL
```

Services communicate over an internal Docker network.

---

# ⚙️ CI Pipeline

The CI pipeline runs automatically on push.

### Pipeline steps

1️⃣ Install dependencies  
2️⃣ Backend build validation  
3️⃣ Frontend build validation  
4️⃣ Docker image build  
5️⃣ Publish images to **GHCR**

Images produced:

```
ghcr.io/arshad-rahman/hackowac-cicd-booking-app-backend
ghcr.io/arshad-rahman/hackowac-cicd-booking-app-frontend
```

These images are used during deployment.

---

# 🧩 Deployment Automation (Ansible)

Ansible is used to automate server preparation and deployment.

### Responsibilities

• Install Docker on the target host  
• Configure application directory  
• Deploy `docker-compose.yml`  
• Pull container images from GHCR  
• Start services  
• Validate application health endpoint

### Playbooks

```
ansible/playbooks/setup-server.yml
ansible/playbooks/deploy-app.yml
```

### Roles

```
docker_install
app_deploy
```

---

# ☁️ Infrastructure Blueprint (Terraform)

Terraform defines the infrastructure required to host the application on AWS.

### Infrastructure design

```
AWS
│
└── VPC
     │
     └── Public Subnet
           │
           ├── Internet Gateway
           ├── Route Table
           ├── Security Group
           │
           └── EC2 Instance
                  Docker Host
```

### Resources included

- VPC
- Public Subnet
- Internet Gateway
- Route Table
- Security Group
- EC2 Instance

This infrastructure is designed to support **Ansible-based deployment of the application containers**.

---

# 📁 Repository Structure

```
hackowac-cicd-booking-app
│
├── backend/                # Node.js API
├── frontend/               # React application
│
├── docker-compose.yml      # Local service orchestration
│
├── ansible/                # Deployment automation
│   ├── inventory/
│   ├── group_vars/
│   ├── playbooks/
│   └── roles/
│
├── infra/
│   └── terraform/          # Infrastructure blueprint
│
├── .github/
│   └── workflows/          # CI pipeline
│
└── README.md
```

---

# 🧪 Local Development

Run the application locally using Docker Compose.

### Start services

```bash
docker compose up --build
```

### Application URLs

```
Frontend: http://localhost:80
Backend:  http://localhost:5000
```

---

# 🧾 Terraform Validation

Terraform configuration was validated locally using:

```
terraform init
terraform validate
terraform fmt
```

The Terraform layer is included as an **infrastructure blueprint aligned with the deployment architecture**.

---

# 🔐 Notes

This repository is a **DevOps portfolio project** designed to demonstrate engineering practices.

It is not presented as a production deployment but rather as a **complete infrastructure + deployment workflow design**.

---

# 👤 Author

**Arshad Rahman**

DevOps Engineer focused on:

• CI/CD pipelines  
• Infrastructure as Code  
• Containerized deployment workflows  
• Automation and platform reliability  

GitHub:  
https://github.com/arshad-rahman

---

# 📜 License

MIT License
