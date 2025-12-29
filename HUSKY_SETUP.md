# Husky Setup

This project uses [Husky](https://typicode.github.io/husky/) to run Git hooks that ensure code quality before commits.

## What It Does

On every commit, Husky automatically runs:

1. **ESLint** - Lints staged JavaScript/TypeScript files and auto-fixes issues
2. **TypeScript Type Check** - Runs `tsc --noEmit` to catch all TypeScript errors
3. **Prettier** - Formats JSON, Markdown, YAML, and CSS files

## How It Works

- **Pre-commit hook** (`.husky/pre-commit`): Runs before every commit
- **lint-staged**: Only processes files that are staged for commit (fast!)
- **Type checking**: Runs a full TypeScript check to catch build errors

## What Happens If Checks Fail?

If any check fails:

- The commit is **blocked**
- You'll see error messages explaining what's wrong
- Fix the errors and try committing again

## Manual Commands

You can also run these checks manually:

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix

# Run TypeScript type check
npm run type-check

# Format code with Prettier
npx prettier --write .
```

## Bypassing Hooks (Not Recommended)

If you absolutely need to bypass the hooks (e.g., for a WIP commit), use:

```bash
git commit --no-verify
```

⚠️ **Warning**: Only use this if you're sure the code will build successfully!

## Setup for New Team Members

When a new team member clones the repo:

1. Run `npm install` - This automatically sets up Husky hooks via the `prepare` script
2. That's it! Hooks are now active

## Configuration Files

- `.husky/pre-commit` - The pre-commit hook script
- `package.json` - Contains `lint-staged` configuration
- `.prettierrc` - Prettier formatting rules
- `.eslintrc.json` - ESLint rules
