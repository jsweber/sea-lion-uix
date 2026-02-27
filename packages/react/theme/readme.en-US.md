# `react-theme`

Theme is a provider that supplies a unified design system to the app, including colors, typography, spacing, and other design tokens. Wrap your application or a section of it in `<Theme>` to apply design tokens consistently, with support for light/dark mode and nested theme overrides.

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

Wrap your entire app or a page section in `<Theme>` to apply design tokens globally:

```jsx
<Theme>
  <App />
</Theme>
```

### Light / Dark Appearance

Switch between light and dark themes using the `appearance` prop:

```jsx
{/* Light theme */}
<Theme appearance="light">
  <App />
</Theme>

{/* Dark theme */}
<Theme appearance="dark">
  <App />
</Theme>
```

### Accent Color

Set a global accent color with `accentColor`, affecting buttons, links, selected states, and more:

```jsx
<Theme accentColor="blue">
  <App />
</Theme>

<Theme accentColor="purple">
  <App />
</Theme>

<Theme accentColor="green">
  <App />
</Theme>
```

Available accent colors include: `blue`, `red`, `green`, `purple`, `orange`, `gray`, and more.

### Gray Color

Adjust the global gray palette with `grayColor`, affecting borders, backgrounds, and secondary text:

```jsx
<Theme grayColor="gray">
  <App />
</Theme>

<Theme grayColor="slate">
  <App />
</Theme>

<Theme grayColor="mauve">
  <App />
</Theme>
```

### Radius

Set the global border-radius style with `radius`:

```jsx
<Theme radius="none">
  <App />
</Theme>

<Theme radius="small">
  <App />
</Theme>

<Theme radius="medium">
  <App />
</Theme>

<Theme radius="large">
  <App />
</Theme>

<Theme radius="full">
  <App />
</Theme>
```

### Scaling

Uniformly scale all component sizes and spacing with `scaling`:

```jsx
<Theme scaling="90%">
  <App />
</Theme>

<Theme scaling="100%">
  <App />
</Theme>

<Theme scaling="110%">
  <App />
</Theme>
```

### Nested Themes

`Theme` can be nested — a child `Theme` overrides the parent's props for its subtree:

```jsx
<Theme appearance="light" accentColor="blue">
  {/* Uses global blue accent */}
  <Button>Blue Button</Button>

  <Theme accentColor="red">
    {/* Only the accent color is overridden to red */}
    <Button>Red Button</Button>
  </Theme>

  <Theme accentColor="green">
    {/* Accent color overridden to green */}
    <Button>Green Button</Button>
  </Theme>
</Theme>
```

### Combined Configuration

Set multiple props together to create a complete visual style:

```jsx
<Theme
  appearance="dark"
  accentColor="purple"
  grayColor="mauve"
  radius="large"
  scaling="100%"
>
  <App />
</Theme>
```

### Practical Example: App-level Theme

```jsx
import { Theme } from '@sea-lion/react-theme';

function App() {
  return (
    <Theme appearance="light" accentColor="blue" radius="medium">
      <main>
        {/* The entire app automatically uses the unified design tokens */}
        <Header />
        <Content />
        <Footer />
      </main>
    </Theme>
  );
}
```

## When to Use

- When applying a consistent design system across the app
- When implementing theme switching (e.g. light/dark mode)
- When customizing the app's visual style
- When applying a different theme to a specific section (via nested Theme)

## Props / API

### Theme

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `appearance` | Theme appearance (light/dark) | `"light" \| "dark"` | `"light"` |
| `accentColor` | Global accent color | `"blue" \| "red" \| "green" \| "purple" \| "orange" \| "gray" \| ...` | `"blue"` |
| `grayColor` | Global gray palette | `"gray" \| "slate" \| "mauve"` | `"gray"` |
| `radius` | Global border-radius style | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"medium"` |
| `scaling` | Global scale factor | `"90%" \| "95%" \| "100%" \| "105%" \| "110%"` | `"100%"` |
| `children` | Child content | `React.ReactNode` | — |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/theme/overview) for the full API reference and design guidelines.
