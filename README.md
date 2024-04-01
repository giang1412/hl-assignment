### Daily Jokes

Daily Jokes is a simple web application that allows users to read and vote for daily jokes. This application uses ReactJS for the frontend and ExpressJS for the backend.

## Installation

1. Clone this repository to your machine.
2. Install dependencies for both frontend and backend:
   cd frontend
   cd server
   npm install
   cd ..
   cd client
   npm install
## Usage
1. Start the backend server:
  cd server
  npm start
  npm run dev
  The server will run on port 3300.
2. Start the frontend application:
 cd client
 npm run build
 npm run dev
3. You will see a webpage displaying a joke. You can click on the "This is funny!" button if you find the joke amusing, or "This is not funny." if you don't like it. The page will then display a new joke. If the user has voted, the app will use cookies to save it, the user will not be able to vote again for that joke. If you want to vote again, please delete your cookies.

## Technologies Used
- ReactJS
- ExpressJS
- TypeScript
- MongoDB (used for backend)
- Tailwind CSS
- Axios
- React Hot Toast
- Vite
  
