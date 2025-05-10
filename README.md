# Senior Software Developer Portfolio

A modern, responsive portfolio website built with Next.js, showcasing expertise in Backend Development, DevOps, and Deep Learning.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js, TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Performance Optimized**: Fast loading and smooth animations
- **Dark Theme**: Sleek, professional dark mode design
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: WCAG 2.1 compliant

## 📋 Sections

- **Hero Section**: Impactful introduction with download CV button
- **Skills**: Categorized technical expertise
  - Backend Development
  - DevOps
  - Deep Learning
- **Projects**: Showcase of real-world applications
- **Work Experience**: Professional journey with company logos
- **Blog**: Technical articles and insights
- **Contact**: Professional networking links

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
portfolio/
├── app/                 # Next.js 13+ app directory
├── components/         # Reusable components
├── lib/               # Utility functions
├── public/            # Static assets
├── styles/            # Global styles
└── types/             # TypeScript types
```

## 🛠️ Development Commands

### Basic Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Code Quality Commands

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Run TypeScript type checking
npm run type-check
```

### Git Workflow Commands

```bash
# Create a conventional commit
npm run commit

# Run pre-commit hooks manually
npm run prepare
```

## 🔍 Development Workflow

### Pre-commit Hooks

The project uses Husky to enforce code quality checks before each commit:

1. **Type Checking**: Ensures TypeScript types are valid
2. **ESLint**: Checks for code style and potential issues
3. **Lint-staged**: Runs Prettier and other checks on staged files

### Code Quality Tools

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Stylelint**: CSS/SCSS linting
- **Commitlint**: Conventional commit message validation

### Lint-staged Configuration

The following checks run on staged files:

- JavaScript/TypeScript files: Prettier formatting and ESLint
- JSON/Markdown/YAML files: Prettier formatting
- CSS/SCSS files: Prettier formatting and Stylelint

## 🎨 Design Philosophy

- Clean, minimalistic design
- Dark theme for reduced eye strain
- Subtle animations for enhanced user experience
- Clear information hierarchy
- Professional typography
- Optimized for readability

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Feel free to reach out through:

- Email: hiennguyen9874@gmail.com
- LinkedIn: [hiennguyen9874](https://linkedin.com/in/hiennguyen9874)
- GitHub: [hiennguyen9874](https://github.com/hiennguyen9874)
