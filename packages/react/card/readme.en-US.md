# `react-card`

Card is a versatile container component for organizing and displaying content. It supports different visual styles and sizes, and can be used as a container, button, or link.

## Installation

```sh
pnpm add @sea-lion/react-card
# or
npm install @sea-lion/react-card
yarn add @sea-lion/react-card
```

## Usage

Import the component in your code:

```tsx
import { Card } from '@sea-lion/react-card';
```

### Basic Usage

```jsx
<Card>Card content</Card>
<Card variant="surface" size="2">With variant and size</Card>
<Card asChild><a href="/">Clickable card link</a></Card>
```

Supports sizes `"1"` through `"5"`, variants `surface` | `classic` | `ghost`.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
