# React + Vite

T# StackGuard

StackGuard is a secure authentication and configuration management system built with React that provides robust user authentication and environment configuration capabilities.

## Features

- 🔒 Secure user authentication 
- 🔑 Public key generation and verification
- ✨ Interactive UI with animated text effects
- 🛡️ Protected routes and session management
- 🎨 Modern design with Tailwind CSS
- 🔐 Password strength validation
- 📱 Responsive layout

## Tech Stack

- React v19
- React Router v7
- Tailwind CSS v4
- GSAP Animation
- UUID for key generation
- Vite build tool

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/stackguard.git
cd stackguard
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Register**: Create a new account with email and secure password
2. **Login**: Access your account with credentials
3. **Configuration**: Use your generated public key to verify environment
4. **Dashboard**: Manage your security settings and monitor activity

## Project Structure

```
stackguard/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Route components
│   ├── lib/           # Utility functions
│   └── data/          # Data management
├── public/            # Static assets
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.