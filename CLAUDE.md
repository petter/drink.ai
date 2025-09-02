# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Drink.AI is a tropical cocktail recipe generator built with Next.js 15 and the AI SDK. Users input drink preferences and receive AI-generated cocktail recipes.

## Development Commands

```bash
# Start development server with Turbopack
bun dev

# Build for production with Turbopack
bun run build

# Start production server
bun start

# Run ESLint
bun lint
```

## Architecture

- **Framework**: Next.js 15 with App Router and React 19
- **AI Integration**: Uses AI SDK with OpenAI provider for text generation
- **Styling**: Tailwind CSS with custom gradients and backdrop blur effects
- **Font**: Geist Sans and Geist Mono from Google Fonts

### Key Components

- `app/page.tsx` - Main landing page with drink prompt input form
- `app/recipe/[prompt]/page.tsx` - Dynamic recipe page that displays user prompt
- `app/recipe/[prompt]/drink-title.tsx` - Server component that generates cocktail names using OpenAI's gpt-4o-mini

### Route Structure

- `/` - Home page with drink prompt form
- `/recipe/[prompt]` - Recipe page for specific drink requests (prompt is URL encoded)

## Technical Details

- Uses `useTransition` for smooth navigation with loading states
- Server-side AI text generation in React Server Components
- TypeScript with strict configuration
- ESLint configured with Next.js core web vitals and TypeScript rules
