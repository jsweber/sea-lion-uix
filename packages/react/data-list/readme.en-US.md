# `react-data-list`

DataList is a component for displaying key-value lists, commonly used for properties, configuration, and detail information.

## Installation

```sh
pnpm add @sea-lion/react-data-list
# or
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## Usage

Import the component in your code:

```tsx
import * as DataList from '@sea-lion/react-data-list';
```

### Basic Usage

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>Name</DataList.Label>
    <DataList.Value>John Doe</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Email</DataList.Label>
    <DataList.Value>john@example.com</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

Supports props such as `orientation` (horizontal/vertical) and `size`.

## When to Use

- Display object properties or data fields in a structured way
- Show user profiles, product details, configuration items
- Present read-only form data
- When labels and values need to be clearly paired

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
