# MenuIcon Fix Documentation

## Problem
You were encountering TypeScript and ESLint errors when trying to use `MenuIcon`:
- **TypeScript Error**: `S2304: Cannot find name MenuIcon`
- **ESLint Error**: `react/jsx-no-undef: 'MenuIcon' is not defined`

## Root Cause
The `MenuIcon` component is part of Material-UI (MUI), which was not installed in your project.

## Solution Applied

### 1. Installed Material-UI Packages
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

**Packages installed:**
- `@mui/material` (v7.3.7) - Core Material-UI components
- `@emotion/react` (v11.14.0) - Emotion CSS-in-JS library (required by MUI)
- `@emotion/styled` (v11.14.1) - Emotion styled components
- `@mui/icons-material` (v7.3.7) - Material-UI icons including MenuIcon

### 2. Updated navbar.tsx
Added the proper import statement:
```tsx
import MenuIcon from '@mui/icons-material/Menu';
```

### 3. Implemented MenuIcon in Component
```tsx
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">Portfolio</div>
      <button 
        className="md:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
```

## Verification Steps Completed
✅ ESLint check passed - no errors  
✅ TypeScript type check passed  
✅ Next.js build completed successfully  
✅ MenuIcon is now properly imported and available

## Important Notes

### About @mui-mcp
There is **no package called `@mui-mcp`**. The correct Material-UI packages are:
- For MUI v5+: `@mui/material` and `@mui/icons-material`
- For MUI v4 (legacy): `@material-ui/core` and `@material-ui/icons`

### MUI vs Tailwind CSS
Your project uses **Tailwind CSS** for styling. Material-UI icons can still be used alongside Tailwind, but you may want to consider:

**Alternative: Using Heroicons (Tailwind-native)**
If you prefer to keep your dependencies minimal and stay within the Tailwind ecosystem:

```bash
npm install @heroicons/react
```

```tsx
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">Portfolio</div>
      <button className="md:hidden" aria-label="Open menu">
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
```

**Alternative: Custom SVG Icon**
For maximum control and minimal dependencies:

```tsx
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">Portfolio</div>
      <button className="md:hidden" aria-label="Open menu">
        <MenuIcon />
      </button>
    </nav>
  );
};
```

## Security Notes

A high-severity vulnerability was detected in Next.js (v16.1.2). This is unrelated to the MenuIcon fix but can be addressed with:

```bash
npm audit fix --force
```

This will update Next.js to v16.1.6 which includes security patches.

## Common Import Patterns for MUI Icons

```tsx
// Menu icon
import MenuIcon from '@mui/icons-material/Menu';

// Close icon
import CloseIcon from '@mui/icons-material/Close';

// Home icon
import HomeIcon from '@mui/icons-material/Home';

// Search icon
import SearchIcon from '@mui/icons-material/Search';

// Arrow icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
```

## References
- [Material-UI Icons Documentation](https://mui.com/material-ui/material-icons/)
- [Material-UI Installation Guide](https://mui.com/material-ui/getting-started/installation/)
- [Next.js with Material-UI](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
