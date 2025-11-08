## 📁 Project Structure

```plaintext
arent-fe/
├── .husky/                  # Commit lint configuration
├── .vscode/                 # VSCode configuration
├── public/                  # Static assets (images, favicon, fonts, etc.)
├── src/
│   ├── app/                 # Routes, layouts, and pages using Next.js App Router
│   │   ├── layout.tsx       # Global layout
│   │   └── page.tsx         # Main index page
│   ├── components/          # UI components following atomic design
│   │   ├── atoms/           # Basic UI elements (button, input, etc.)
│   │   ├── molecules/       # Group of atoms
│   │   ├── organisms/       # Group of molecules
│   │   └── templates/       # Layout templates for specific screens
│   ├── config/              # General configuration files
│   ├── features/            # Feature-based modules
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API and external service integrations
│   ├── store/               # State management (e.g., Jotai)
│   ├── styles/              # Global styles and CSS variables
│   └── types/               # Global TypeScript type definitions
├── .dockerignore
├── Dockerfile              # Docker image build configuration
├── docker-compose.yml      # Container configuration
├── next.config.ts          # Next.js configuration
├── middleware.ts           # Middleware
├── commitlint.config.js    # Commit lint rules
├── lint-staged.config.js   # Lint-staged configuration
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── README.md               # Project setup guide
```

## 🛠️ Technologies & Tools Used

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS** – UI/UX library
- **Lucide** – Icons library
- **Atomic Design** – UI component architecture
- **Docker & Docker Compose** – Application deployment
- **ESLint + Prettier + Lint-Staged** – Code quality assurance
- **Commitlint** – Commit convention validation

## 🚀 Installation

### 1. Install dependencies

Using [pnpm](https://pnpm.io/):

```bash
pnpm install
```

### 2A. Setup Local

```bash
pnpm dev
```

### 2B. Or Setup Docker

#### 2.1 Environment

Create file `.env.local` from `.env.example`

```bash
cp .env.example .env.local
```

#### 2.2 Run with Docker

```bash
docker-compose up --build
```

Visit: [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for production

```bash
pnpm build
pnpm build:analyze -> Check size bundle
```

## ✅ Lint, Lint Fix & Format

```bash
pnpm lint
pnpm lint:fix
pnpm format
```
