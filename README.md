# Iconora

> **Production-grade SVG icon library** — 60+ beautifully crafted icons for React and beyond.

[![npm](https://img.shields.io/npm/v/@iconora/react?color=0f172a&label=%40iconora%2Freact)](https://www.npmjs.com/package/@iconora/react)
[![license](https://img.shields.io/badge/license-MIT-0f172a)](LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@iconora/react?color=0f172a)](https://bundlephobia.com/package/@iconora/react)

---

## ✨ Features

- 🎨 **60+ icons** across 10 categories
- ⚛️ **React-first** — tree-shakeable, typed, and accessible
- 📦 **Raw SVGs** available via `@iconora/core`
- 🔒 **TypeScript** support out of the box
- ♿ **Accessible** — proper ARIA attributes by default
- 🌲 **Tree-shakeable** — import only what you use
- 🎛️ **Configurable** — `size`, `color`, `strokeWidth`, `className`

---

## 📦 Installation

```bash
# React
npm install @iconora/react

# Raw SVGs only
npm install @iconora/core
```

---

## 🚀 Usage

### Named imports (recommended — best tree-shaking)

```tsx
import { HomeIcon, SearchIcon, BellIcon } from '@iconora/react';

export function App() {
  return (
    <nav>
      <HomeIcon size={24} />
      <SearchIcon size={24} color="#3b82f6" />
      <BellIcon size={24} strokeWidth={1.5} className="text-gray-500" />
    </nav>
  );
}
```

### Generic `<Icon>` component

```tsx
import { Icon } from '@iconora/react';

<Icon name="home" size={20} />
<Icon name="heart" size={20} color="red" label="Liked" />
```

### Props

| Prop          | Type                  | Default          | Description                    |
|---------------|-----------------------|------------------|--------------------------------|
| `size`        | `number \| string`    | `24`             | Width and height in px         |
| `color`       | `string`              | `currentColor`   | SVG stroke color               |
| `strokeWidth` | `number \| string`    | `2`              | SVG stroke-width               |
| `label`       | `string`              | —                | Accessible aria-label          |
| `className`   | `string`              | —                | Extra CSS class                |
| `...rest`     | `SVGProps`            | —                | Any valid SVG attribute        |

---

## 🗂️ Icon Categories

| Category        | Count |
|----------------|-------|
| Interface       | 15    |
| Arrows          | 10    |
| Media           | 7     |
| Communication   | 6     |
| Commerce        | 4     |
| Files           | 7     |
| Charts          | 3     |
| Nature          | 3     |
| Devices         | 4     |
| Security        | 6     |

---

## 🔍 Search & Utils

```ts
import { searchIcons, getIconsByCategory, iconNames } from '@iconora/react';

// Search by name or tag
searchIcons('arrow'); // returns matching IconMeta[]

// Get by category
getIconsByCategory('interface');

// All icon names
console.log(iconNames);
```

---

## 📄 License

MIT © [Iconora](https://iconora.dev)
