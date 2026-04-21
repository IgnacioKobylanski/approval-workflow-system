# Approval Workflow System

A full-stack enterprise application designed to manage internal corporate requests (e.g., vacations, expenses, permissions) through a structured approval process.

## 🚀 Tech Stack

- **Backend:** NestJS (Node.js framework) using TypeScript.
- **Frontend:** Angular (v21) with SCSS styling.
- **Database:** MySQL 8.0 with TypeORM for entity mapping and persistence.
- **Architecture:** Modular architecture with a focus on Object-Oriented Programming (OOP) principles and Clean Code.

## 📂 Project Structure

This repository is organized as a monorepo:

- `/backend`: NestJS API, controllers, services, and database entities.
- `/frontend`: Angular SPA, components, services, and state management.

## 🛠️ Features (In Development)

- **Request Submission:** Users can create and track the status of their requests.
- **Administrative Dashboard:** Role-based access to approve or reject pending submissions.
- **Automated Workflow:** Status transitions managed via backend business logic.

## 🔧 Prerequisites

- **Node.js** (v22 or higher)
- **NPM** (v10 or higher)
- **MySQL Server**
- **Angular CLI** & **Nest CLI**

## 🚦 Getting Started

1. Clone the repository:
   git clone <your-repo-url>

2. Install dependencies for both projects:
   cd backend && npm install
   cd ../frontend && npm install

3. Set up the database in MySQL:
   - Create a schema named workflow_db.

---