# Dollbrick Landing Page - AI Coding Instructions

## Architecture Overview

This is a **zero-build, ESM-only React website** that runs entirely in the browser. There is no bundler, no transpiler, and no build step - all code is pure JavaScript served statically.

### Tech Stack
- **React 18.3.1** imported via ESM from `esm.sh`
- **HTM** (JSX alternative) for component syntax using tagged template literals
- **react-simple-card** for card UI components
- Static file server (Node's `serve`, Python's http.server, or VS Code's Live Preview)

### Key Files
- [public/index.html](public/index.html) - Main landing page entry point
- [public/index.js](public/index.js) - Main React app with show listing
- [public/support.html](public/support.html) - Support/donate page
- [public/support.js](public/support.js) - Support page React app
- [public/data/shows.js](public/data/shows.js) - Show data and scheduling logic
- [public/style.css](public/style.css) - Global styles with dark mode support

## Development Workflow

### Running the Dev Server
```bash
# Option 1: Node (preferred, matches package.json)
npm start
# or: npx serve public/

# Option 2: Python
cd public && python3 -m http.server 8080

# Option 3: VS Code Live Preview extension
# F1 → "Live Preview: Start Server"
```

**Important**: Always serve from the `public/` directory - all paths are relative to it.

### No Build Process
- Edit files directly and refresh browser
- No package.json dependencies to install
- No compilation or transpilation
- All imports use CDN URLs (`https://esm.sh/`)

## Code Patterns & Conventions

### Component Syntax
Use HTM tagged templates instead of JSX:
```javascript
import htm from "https://esm.sh/htm@3.1.1";
const html = htm.bind(React.createElement);

const MyComponent = ({ prop }) => html`
  <div className="my-class">
    ${prop}
  </div>
`;
```

### Show Data Structure
Shows are defined in [public/data/shows.js](public/data/shows.js) using:
- `getDate()` helper for consistent date creation (handles AM/PM)
- Reusable show templates (e.g., `spoonsIn`, `indieProv`, `vermillion`)
- Shows array sorted by date - split into future/past in UI

**When adding shows**: Use object spread with templates, override specific fields:
```javascript
{
    ...spoonsIn,
    location: 'Different Venue',
    date: getDate(2026, 'Mar', 15, 7, 30, 'PM'),
    tickets: 'https://...'
}
```

### Styling
- CSS custom properties for theming in [public/style.css](public/style.css)
- Automatic dark mode via `@media (prefers-color-scheme: dark)`
- Font families: "Caveat" for headers, "Sixtyfour Convergence" for logo
- Component styles use BEM-like naming (e.g., `hero-banner`, `hero-banner-image`)

### File Organization
- All source files live in `public/` (the web root)
- Images: `public/assets/images/`
- Favicons: `public/assets/favicon/`
- Data: `public/data/`

## Common Tasks

### Adding a New Show
1. Edit [public/data/shows.js](public/data/shows.js)
2. Use existing templates or create new show object
3. Add to `shows` array (auto-sorts by date)
4. Optional: Add custom image to `public/assets/images/`

### Creating a New Page
1. Create new HTML file in `public/` (e.g., `newpage.html`)
2. Create corresponding JS file (e.g., `newpage.js`)
3. Follow same ESM import pattern as [public/index.html](public/index.html)
4. Reuse `Header` and `Footer` components or create new ones

### Image Assets
- Place in `public/assets/images/`
- Reference with relative paths: `./assets/images/filename.png`
- Default fallback: `./assets/images/hero-image.png`

## Project-Specific Notes

- **No TypeScript**, but JSDoc comments are used in [public/data/shows.js](public/data/shows.js)
- Social links hardcoded in [public/index.js](public/index.js) (Instagram, Facebook, Donate)
- Date filtering logic splits shows into "Upcoming" and "Past" based on current time
- Jet City collaboration shows marked with `jetCity: true` flag
