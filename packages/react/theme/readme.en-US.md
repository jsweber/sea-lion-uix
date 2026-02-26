# `react-theme`

Theme is a provider that supplies a unified design system to the app, including colors, typography, spacing, and other design tokens.

## Installation

```sh
pnpm add @sea-lion/react-theme
# or
npm install @sea-lion/react-theme
yarn add @sea-lion/react-theme
```

## Usage

Import the component in your code:

```tsx
import { Theme } from '@sea-lion/react-theme';
```

### Basic Usage

```jsx
<Theme appearance="light">
  <App />
</Theme>
<Theme appearance="dark">
  <App />
</Theme>
```

## When to Use

- When applying a consistent design system across the app
- When implementing theme switching (e.g. light/dark mode)
- When customizing the app’s visual style

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
