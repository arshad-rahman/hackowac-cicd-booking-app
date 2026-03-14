# HackoWac CI/CD Booking App

A small full-stack booking application built as a DevOps portfolio project.

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Containers: Docker
- Orchestration: Docker Compose

## Features

- Create bookings
- View recent bookings
- Backend health endpoint
- Full containerized local setup

## Run locally with Docker Compose

```bash
docker compose up --build
App URLs

Frontend: http://localhost:3000

Backend health: http://localhost:5000/health

Environment variables
Backend

See backend/.env.example

Frontend

See frontend/.env.example

Purpose

This project is being built to demonstrate:

containerization

multi-service application setup

health checks

CI/CD pipeline design

deployment automation


### Why
Even a simple README makes the repo look much more serious.

We will improve it later into a strong portfolio README.

---

## Step 6 — commit this milestone

From project root:

```powershell
git add .
git commit -m "Dockerize full-stack booking app with Compose"
Why

This creates a clean checkpoint before CI/CD automation.