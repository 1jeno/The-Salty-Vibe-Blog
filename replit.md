# Overview

The Salty Vibe is a lifestyle blog application focused on coastal living, travel, and food content. Built with a modern React frontend and Express backend, the application showcases blog posts with a feminine aesthetic inspired by coastal brands like Anthropologie and lifestyle blogs like Goop. The design emphasizes visual storytelling through high-quality imagery, elegant typography, and a sophisticated color palette featuring coral pink, seafoam, and sandy beige tones.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a component-based architecture with shadcn/ui for the design system. The application uses Vite as the build tool for fast development and optimized production builds.

**Routing**: Implemented with Wouter for lightweight client-side routing, supporting pages for home, about, category filtering, and individual blog posts.

**State Management**: Uses TanStack Query (React Query) for server state management and data fetching, with local component state for UI interactions.

**Styling**: Tailwind CSS provides utility-first styling with a custom design system based on the coastal aesthetic. CSS variables enable theme switching between light and dark modes.

**Component Library**: shadcn/ui components provide accessible, customizable UI primitives including cards, buttons, forms, navigation, and layout components.

## Backend Architecture
The server-side uses Express.js with TypeScript in ESM format, designed as a REST API with middleware for request logging and error handling.

**Database Layer**: Configured for PostgreSQL using Drizzle ORM for type-safe database operations. Currently includes a basic user schema with plans for blog post management.

**Storage Interface**: Implements an abstraction layer with both memory-based storage (for development) and database storage capabilities, making it easy to switch between storage implementations.

**Session Management**: Configured for PostgreSQL session storage using connect-pg-simple, though authentication is not yet implemented.

## Data Storage Solutions
**Database**: PostgreSQL with Neon Database serverless connection for production deployment.

**ORM**: Drizzle ORM provides type-safe database operations with Zod integration for runtime validation.

**Migration Strategy**: Uses Drizzle Kit for database schema migrations and type generation.

## Content Management
**Blog Posts**: Currently uses mock data with a structured BlogPost interface including metadata like category, reading time, publication date, and slug-based routing.

**Categories**: Supports lifestyle, travel, and food categories with emoji-based visual differentiation.

**Image Handling**: References both external Unsplash images and local generated assets for hero sections and blog imagery.

## Development Workflow
**Build Process**: Vite handles frontend bundling while esbuild compiles the backend for production deployment.

**Type Safety**: Comprehensive TypeScript configuration with path aliases for clean imports and shared types between frontend and backend.

**Development Server**: Vite development server with HMR integration and Replit-specific tooling for cloud development.

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library for UI elements
- **Google Fonts**: Typography using Playfair Display, Poppins, and Source Sans Pro

## Database and Backend
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **Express.js**: Web application framework for REST API
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Frontend build tool with development server
- **TypeScript**: Type safety across frontend and backend
- **esbuild**: Fast bundler for backend compilation
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Data fetching and caching for React

## Image and Content
- **Unsplash**: External image service for blog post imagery
- **Local Assets**: Generated coastal-themed images stored in attached_assets directory

## Optional Integrations
The application is structured to easily integrate additional services for:
- Newsletter management (currently mock implementation)
- Social media APIs (placeholder functionality)
- Content management systems
- Analytics and tracking
- Comment systems
- Search functionality