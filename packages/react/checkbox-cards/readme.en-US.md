# `react-checkbox-cards`

CheckboxCards is a card-style checkbox component for multi-select in a grid layout, combining card visuals with checkbox behavior.

Features:

- Three sizes: 1, 2, 3
- Two variants: surface, classic
- Grid layout and high contrast mode

## Installation

```sh
pnpm add @sea-lion/react-checkbox-cards
# or
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxCards from '@sea-lion/react-checkbox-cards';
```

### Basic Usage

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">Option A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">Option B</CheckboxCards.Item>
</CheckboxCards.Root>
```

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
