# Local Development Setup

## Prerequisites

- **Node.js** 18.0 or higher
- **npm** (comes with Node.js) or **yarn**

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

That's it! The site should now be running locally.

## Available Scripts

- `npm run dev` - Starts the development server (with hot reload)
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server (run `build` first)
- `npm run lint` - Runs ESLint to check for code issues

## Troubleshooting

### Port 3000 is already in use
If port 3000 is taken, Next.js will automatically try the next available port (3001, 3002, etc.) and display it in the terminal.

### Dependencies not installing
Make sure you have Node.js 18+ installed:
```bash
node --version
```

If you need to update Node.js, visit [nodejs.org](https://nodejs.org/)

### TypeScript errors
The project uses TypeScript. If you see type errors, they're likely just warnings during development. The site should still run.

## Development Tips

- The site uses **hot reload** - changes to files will automatically refresh in the browser
- Check the terminal for any errors or warnings
- Recipe data is in `data/recipes.ts` - you can add/edit recipes there
- Components are in the `components/` folder
- Pages are in the `app/` folder

