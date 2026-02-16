# 🕹️ POS Gamer – Frontend

## 📌 Overview

POS Gamer Frontend is a Next.js application that provides a responsive and intuitive interface for managing a retail Point of Sale system.

It communicates securely with the backend API and enforces client-side route protection based on user roles.

## 🎨 UI & Architecture

The frontend follows a modular structure:

- Pages organized by feature
- Reusable components
- Axios-based API communication
- Protected routes based on authentication state
- Dynamic reporting dashboards

The application emphasizes usability and clean UI design.

## 🔐 Authentication Handling

- Secure session handling via HttpOnly cookies (managed by backend)
- Role-based UI rendering
- Protected pages for Admin and Seller
- Automatic redirection for unauthorized access

## 📊 Core Features

- Inventory management interface
- Sales registration module
- User management dashboard
- Interactive reports using charts
- Responsive layout

## 🛠 Tech Stack

`Next.js` · `React` · `Axios`

`Recharts` · `Emotion Styled` · `FontAwesome`

## 🌐 Live Demo

**Deploy: https://techno-pos.vercel.app** 

## ⚙️ Local Setup

```bash
git clone https://github.com/EdannyDev/pos-app.git
yarn install
yarn dev
```
