# `react-callout`

Callout is a component for displaying important information, tips, and warnings. It includes icon and text, with support for different visual styles, sizes, and color themes.

Features:

- Three sizes: 1, 2, 3
- Three variants: soft, surface, outline
- Customizable color theme and high contrast mode
- Subcomponents: Icon and Text

## Installation

```sh
pnpm add @sea-lion/react-callout
# or
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## Usage

Import the component in your code:

```tsx
import * as Callout from '@sea-lion/react-callout';
```

### Basic Usage

```jsx
<Callout.Root size="2" variant="soft">
  <Callout.Icon />
  <Callout.Text>This is a callout message.</Callout.Text>
</Callout.Root>
```

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
