# InnovateX - Modern React Application

A modern, responsive React application built with authentication, routing, and beautiful UI components.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and functional components
- **Authentication System**: Complete login/signup functionality with protected routes
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Routing**: Client-side routing with React Router DOM
- **Beautiful UI**: Modern design with Lucide React icons
- **Component Library**: Reusable components for buttons, cards, and layouts

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── FeatureCard.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── context/            # React Context for state management
│   └── AuthContext.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Services.jsx
│   └── SignUp.jsx
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles with Tailwind imports
```

## 🔐 Authentication

The application includes a complete authentication system:

- **Login**: Users can sign in with email and password
- **Sign Up**: New user registration
- **Protected Routes**: Certain pages require authentication
- **Persistent Sessions**: User sessions are maintained in localStorage

## 🎨 UI Components

### Pages
- **Home**: Landing page with hero section and features
- **About**: Company information and team details
- **Services**: Available services and offerings
- **Contact**: Contact form and information
- **Login/SignUp**: Authentication pages

### Components
- **Navbar**: Responsive navigation with authentication state
- **Footer**: Site footer with links and social media
- **Button**: Reusable button component with variants
- **FeatureCard**: Card component for displaying features
- **Layout**: Main layout wrapper for all pages

## 🚦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icons
- Create React App for the build setup
