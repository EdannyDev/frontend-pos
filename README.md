# 🕹️ PixelPOS – Frontend

A responsive point-of-sale interface built with Next.js, designed to consume the [PixelPOS Backend API](https://github.com/EdannyDev/backend-pos) and provide a smooth experience for managing inventory, sales and users.

## 📌 Overview

PixelPOS Frontend is a Next.js application that provides an interactive interface for inventory management, sales registration and business reporting.

It enforces role-based UI control and communicates with the backend exclusively through a REST API secured with HttpOnly cookies. Built as a portfolio project to demonstrate end-to-end ownership of a real POS workflow: role-based UI, dynamic sales handling, and a cohesive dark neon theme system rather than scattered ad-hoc styles.

## 📊 Core Features

- Inventory management (CRUD + stock visibility)
- Sales registration with dynamic product selection
- Automatic total calculation
- User management (admin only)
- Search, filtering, and pagination
- Dashboard with sales metrics and charts
- Real-time feedback (notifications and modals)

## 🎨 UI & Architecture

- Reusable, composable components (modal, notification, navbar, sidebar)
- Centralized Axios instance (`services/axios.js`) for API communication
- Route-based layout: collapsible sidebar on desktop, dropdown navbar on mobile, sharing the same design system
- One dedicated style file per page/component (`*.styles.js`) built on Emotion, plus a shared CSS custom property system (`globals.css`) for consistent theming

The application emphasizes clarity, responsiveness and operational usability.

## 🔐 Authentication Handling

- Secure session handling via HttpOnly cookies (managed by backend)
- Role-based rendering (Admin / Seller)
- Protected routes with automatic redirection for unauthorized users

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js, React |
| Styling | Emotion (styled) |
| Charts | Recharts |
| Icons | FontAwesome (solid, react) |
| HTTP Client | Axios |
| Package Manager | Yarn |
| Linting | ESLint (eslint-config-next) |

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- The backend API running locally

### Installation

```bash
git clone https://github.com/EdannyDev/frontend-pos.git
cd pos-app
yarn install
```

### Environment Variables

Copy `.env.example` to `.env.local` and adjust the values for your environment:

```bash
cp .env.example .env.local
```

| Variable | Description | Example |
|---|---|---|
| NEXT_PUBLIC_API_URL | Base URL of the backend REST API | http://localhost:5000/api |

### Running the App

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

## 📜 Available Scripts

| Script | Description |
|---|---|
| `yarn dev` | Runs the app in development mode |
| `yarn build` | Builds the app for production |
| `yarn start` | Runs the built app in production mode |
| `yarn lint` | Runs ESLint checks |

## 📱 Responsive Design

The interface is fully responsive from a 768px breakpoint down to mobile, covering the navbar, collapsible sidebar, all page views, authentication pages, and all reusable components.

---

Backend API: [backend-pos](https://github.com/EdannyDev/backend-pos) · Author: [@EdannyDev](https://github.com/EdannyDev)