# Portfolio Website

## Overview
This project is a personal portfolio website built with:
- **Frontend**: React + TypeScript + TailwindCSS 4.0
- **Backend**: Node.js + Express.js
- **Database**: MongoDB

The website consists of a public portfolio section displaying projects and an admin panel for managing content with CRUD operations.

## Project Structure
```
portfolio-website/
│── backend/               # Backend with Node.js (Express.js)
│   ├── controllers/       # API logic
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middleware/        # Authentication middleware
│   ├── config/            # Database configuration
│   ├── server.ts          # Main entry point
│── frontend/              # Frontend with React + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # Global state
│   │   ├── App.tsx        # Main component
│── database/              # Database-related files
│── .env                   # Environment variables
│── package.json           # Project dependencies
│── README.md              # Documentation
```

## Installation Steps

### 1. Create a new project directory
```bash
mkdir portfolio-website
cd portfolio-website
```

### 2. Set up Backend
```bash
mkdir backend
cd backend
npm init -y
npm install express mongoose dotenv cors jsonwebtoken bcryptjs
npm install --save-dev nodemon @types/express @types/cors @types/jsonwebtoken @types/bcryptjs
```

Create a `server.ts` file and setup Express.js:
```ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

Create a `.env` file in the `backend` directory and add:
```
MONGO_URI=mongodb+srv://your-mongo-uri
JWT_SECRET=your-secret-key
PORT=5000
```

Run the backend:
```bash
npm run dev
```

### 3. Set up Frontend
```bash
cd ../
mkdir frontend
cd frontend
npx create-react-app . --template typescript
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `tailwind.config.js` to:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind to `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the frontend:
```bash
npm run dev
```

## Features
- Portfolio display with animations
- Admin panel with authentication
- CRUD operations for managing content
- Responsive design with TailwindCSS

## Future Improvements
- Add more animations
- Improve authentication security
- Implement unit testing

## License
This project is licensed under the MIT License.

