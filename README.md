# 🕹️POS Gamer – Frontend

## 📌Overview

Frontend application for a Point of Sale (POS) system focused on providing a user-friendly interface for managing sales, inventory, and users.

It integrates with a REST API and reflects real-world workflows such as role-based access, dynamic sales handling, and real-time UI feedback.

## 🏗Architecture

The project follows a modular and scalable structure:

- **Pages** → Feature-based routing (sales, inventory, users, dashboard)
- **Components** → Reusable UI elements (tables, modals, notifications)
- **Services** → Centralized API communication (Axios instance)
- **Styles** → Organized using styled-components

This separation improves maintainability and allows easy extension of features.

## 🔐Authentication & Session Handling

Authentication is managed via **HttpOnly cookies handled by the backend**.

- No tokens stored in localStorage
- Requests include credentials using `withCredentials`
- Automatic redirect on unauthorized access
- Session persistence handled transparently

This approach improves security and avoids common client-side vulnerabilities.

## 👥Role-Based UI (RBAC)

The interface adapts dynamically based on user roles:

- **Admin**
  - Full access to all modules (users, inventory, sales, reports)

- **Seller**
  - Access to sales module
  - Limited inventory visibility

Role enforcement is handled in:

- Backend → Security
- Frontend → UI/UX restrictions

## 📊Core Features

- Inventory management (CRUD + stock visibility)
- Sales registration with dynamic product selection
- Automatic total calculation
- User management (admin only)
- Search, filtering, and pagination
- Dashboard with sales metrics
- Real-time feedback (notifications and modals)

## 🧠Technical Decisions

### Axios Instance
A centralized Axios instance is used to:

- Configure base URL
- Enable `withCredentials`
- Handle errors globally with interceptors

### State Management
- Managed with React hooks (useState, useEffect)
- Data is refetched after mutations to ensure consistency
- Avoided unnecessary global state for simplicity

### UI/UX Handling
- Notifications for success/error feedback
- Confirmation modals for destructive actions
- Pagination for performance and usability

## ⚔️Challenges & Solutions

### 1. Handling authenticated requests securely
Problem: managing sessions without exposing tokens  
Solution: rely on HttpOnly cookies and `withCredentials`

### 2. Role-based UI restrictions
Problem: preventing users from accessing restricted actions  
Solution: conditional rendering + UI-level validation  

### 3. Keeping UI in sync with backend data
Problem: stale data after operations  
Solution: refetch data after create/update/delete  

### 4. Dynamic sales form
Problem: handling multiple products with quantities  
Solution: controlled dynamic state with structured inputs  

## 🌐Live Demo

👉 https://techno-pos.vercel.app

## 🛠Tech Stack

- `Next.js`
- `React`
- `Axios`
- `Emotion Styled`
- `Recharts`

## ⚙️Local Setup

```bash
git clone https://github.com/EdannyDev/pos-app.git
yarn install
yarn dev
```