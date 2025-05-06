# Akshay Karada - Portfolio Website

A modern, responsive portfolio website for Akshay Karada, built with Next.js and Tailwind CSS.

## Features

- Clean, minimal design with plenty of white space
- Responsive layout that works on all devices
- Dark/Light mode toggle
- Interactive sections for showcasing projects, skills, and experience
- Contact form with server-side validation
- SEO optimization

## Project Structure

The project consists of two main parts:

1. **Frontend**: Next.js application with React components and Tailwind CSS
2. **Backend**: Simple Express.js server for handling the contact form

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/akshayUniverse/portfolio.git
   cd portfolio
   ```

2. Install dependencies for both frontend and backend:

   ```
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

### Running the Development Servers

1. Start the frontend development server:

   ```
   cd frontend
   npm run dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000)

2. Start the backend development server:

   ```
   cd backend
   npm run dev
   ```

   The backend API will be available at [http://localhost:5000](http://localhost:5000)

## Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Backend Deployment (Render)

1. Push your code to GitHub
2. Create a new Web Service in Render
3. Connect to your GitHub repository
4. Configure the build settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

## Technologies Used

### Frontend
- Next.js 14
- React 18
- Tailwind CSS
- next-themes (for dark mode)

### Backend
- Express.js
- CORS
- dotenv

## License

This project is licensed under the MIT License.

## Contact

Akshay Karada - akshay.karada@example.com 