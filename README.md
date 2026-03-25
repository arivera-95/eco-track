# 🌲 EcoTrack

A minimalist web application to track and reduce your environmental impact through daily logging and visualization.

## 🎯 Features

- **Carbon Footprint Logging**: Log your daily commute, diet, and energy usage
- **Interactive Trends**: Visualize your impact over time with beautiful charts
- **Community Comparison**: See how your footprint compares to local averages
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, Tailwind CSS, Recharts |
| **Backend** | Node.js, Express, JWT Authentication |
| **Database** | MongoDB |
| **Deployment** | (Add your deployment platform) |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new account |
| POST | `/api/auth/login` | User login |
| GET | `/api/entries` | Get user's footprint entries |
| POST | `/api/entries` | Create new entry |
| GET | `/api/entries/trends` | Get weekly trends |

## 💭 Why I Built This

I wanted to practice handling time-series data and data visualization while creating something meaningful—a tool that helps people understand and reduce their environmental impact through simple daily
