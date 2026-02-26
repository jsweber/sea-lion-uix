# `react-checkbox-group`

CheckboxGroup is a set of checkboxes for selecting multiple values from a group. Compared to a single Checkbox, it provides unified value management and layout control, and is better for group usage.

## Installation

```sh
pnpm add @sea-lion/react-checkbox-group
# or
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## Usage

Import the component in your code:

```tsx
import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
```

### Basic Usage

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

## When to Use

- When users need to select multiple options from a set
- When users need to toggle multiple on/off options
- When used with forms to collect multiple option values
- For config selection, multi-criteria filtering, batch operations on lists, etc.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
