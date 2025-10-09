# My CV

A modern, responsive CV/portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern and responsive design
- Built with Next.js 15 and React 19
- TypeScript for type safety
- Tailwind CSS for styling
- Email contact form integration
- Docker support for containerization
- Comprehensive testing setup with Vitest
- ESLint and Stylelint for code quality
- Prettier for code formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest, Testing Library
- **Form Handling**: React Hook Form
- **Email**: EmailJS
- **Containerization**: Docker

## 📦 Prerequisites

- Node.js (LTS version recommended)
- Yarn package manager
- Docker (optional)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/fadihanna123/my-cv
   cd my-cv
   ```

2. **Install dependencies**
   ```bash
   yarn setup
   ```

3. **Development**
   ```bash
   yarn dev
   ```
   The application will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   yarn build
   ```

5. **Preview production build**
   ```bash
   yarn preview
   ```

## 🐳 Docker Support

The project includes Docker configuration for easy deployment:

```bash
# Build the Docker image
docker-compose build

# Run the container
docker-compose up
```

## 🧪 Testing

Run tests using:
```bash
yarn test
```

## 🔍 Code Quality

- **Linting**: `yarn lint`
- **Type Checking**: `yarn type-check`
- **Formatting**: `yarn format`

## 🌐 Deployment

The project is configured for deployment on Netlify.

## 📁 Project Structure

```
my-cv/
├── app/                # Next.js app directory
│   ├── components/    # Reusable components
│   ├── containers/    # Page containers
│   ├── functions/     # Utility functions
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   └── tests/         # Test files
├── public/            # Static assets
└── ...config files
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project and is not open for contributions at this time.

