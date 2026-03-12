# `react-oss-icon`

OssIcon (IconFont) is an icon component based on the [iconfont platform](https://www.iconfont.cn/). It loads icons via **Font-class** (.css) or **Symbol** (.js) resource URLs. When no URL is provided, it uses built-in default links and you can switch between single-color and multicolor modes with `useSymbol`.

## Installation

```sh
pnpm add @sea-lion/react-oss-icon
# or
npm install @sea-lion/react-oss-icon
yarn add @sea-lion/react-oss-icon
```

## Usage

Import the component in your code:

```tsx
import { IconFont, defaultOssIconCssUrl, defaultOssIconJsUrl } from '@sea-lion/react-oss-icon';
```

### Basic usage (built-in links)

When `ossUrl` is not passed, the component uses the built-in Font-class (single-color) or Symbol (multicolor) link, controlled by `useSymbol`. Default is `useSymbol: false` (single-color).

```jsx
// Single-color (Font-class, default)
<IconFont icon="icon-xxx" />
<IconFont icon="icon-xxx" color="#1890ff" fontSize="24px" />

// Multicolor (Symbol)
<IconFont icon="icon-guanjianzhen" useSymbol style={{ fontSize: 28 }} />
```

### Custom resource URL

When `ossUrl` is provided, the component infers the mode from the URL: `.js` → Symbol (multicolor), `.css` → Font-class (single-color). In this case `useSymbol` is ignored.

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.js" icon="icon-xxx" />
```

### Integrating with iconfont

- **Built-in links**: Without `ossUrl`, the component uses `defaultOssIconCssUrl` (Font-class) or `defaultOssIconJsUrl` (Symbol), toggled by **useSymbol** (default `false`).
- **Font-class**: Single-color icons; you can set `color` and `fontSize`. Use as `<IconFont icon="icon-name" />`.
- **Symbol**: Multicolor icons; the component renders with SVG `<use>` and keeps the icon’s original colors. Use as `<IconFont icon="icon-name" useSymbol />`.
- **Custom ossUrl**: When `ossUrl` is set, the mode is inferred from the URL suffix (.js → Symbol, otherwise → Font-class).
- Protocol-relative URLs (`//...`) are supported and are completed with `https:`.

## API

| Prop       | Type      | Default       | Description |
|------------|-----------|---------------|-------------|
| icon       | string    | —             | Icon name, e.g. `icon-xxx` |
| ossUrl     | string    | see below     | Resource URL; when omitted, built-in link is used (see useSymbol) |
| useSymbol  | boolean   | false         | Use Symbol multicolor rendering; only applies when ossUrl is not set |
| color      | string    | currentColor  | Icon color (Font-class mode) |
| fontSize   | string    | 1em           | Icon size |
| style      | CSSProperties | —          | Inline style |
| className  | string    | —             | CSS class name |

Exported constants:

- `defaultOssIconCssUrl`: Built-in Font-class resource (.css)
- `defaultOssIconJsUrl`: Built-in Symbol resource (.js)
- `defaultOssIconUrl`: Deprecated, same as `defaultOssIconCssUrl`; kept for compatibility
- `isSymbolOssUrl(url)`: Returns whether the URL is a Symbol (.js) resource

## When to Use

- When using icons from your team’s iconfont project
- When staying consistent with an existing iconfont setup
- When you need lightweight, color- and size-configurable icons
- When you need multicolor icons: use `useSymbol` or pass a .js `ossUrl`
