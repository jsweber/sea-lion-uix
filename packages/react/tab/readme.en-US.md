# `react-tab`

Tab is a component that allows users to switch between different content views within the same area.

## Installation

```sh
$ yarn add @sea-lion/react-tab
# or
$ npm install @sea-lion/react-tab
```

## Basic Usage

```jsx
import * as Tabs from "@sea-lion/react-tab";

export default () => (
  <Tabs.Root defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <p>Content of tab 1</p>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <p>Content of tab 2</p>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <p>Content of tab 3</p>
    </Tabs.Content>
  </Tabs.Root>
);
```

## Controlled Component

```jsx
import * as Tabs from "@sea-lion/react-tab";
import { useState } from "react";

export default () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>Current active tab: {activeTab}</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>Current active tab: {activeTab}</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};
```

## Different Sizes

Tabs.List component comes in three sizes:

```jsx
// Size 1 (smallest)
<Tabs.List size="1">...</Tabs.List>

// Size 2 (default)
<Tabs.List size="2">...</Tabs.List>

// Size 3 (largest)
<Tabs.List size="3">...</Tabs.List>
```

## Custom Colors

```jsx
// Blue (default)
<Tabs.List color="blue">...</Tabs.List>

// Red
<Tabs.List color="red">...</Tabs.List>

// Green
<Tabs.List color="green">...</Tabs.List>
```

## High Contrast

```jsx
// Enable high contrast mode
<Tabs.List highContrast>...</Tabs.List>
```

## Different Variants

Tabs.List component supports multiple style variants:

```jsx
// Default variant
<Tabs.List>...</Tabs.List>

// Underline variant
<Tabs.List variant="underline">...</Tabs.List>
```

## Disabled State

You can disable specific tabs:

```jsx
<Tabs.Trigger value="tab1" disabled>
  Disabled Tab
</Tabs.Trigger>
```

## Props

### Tabs.Root Props

| Prop          | Description                       | Type                    | Default | Version |
| ------------- | --------------------------------- | ----------------------- | ------- | ------- |
| defaultValue  | Default selected tab              | string                  | -       | 0.2.1   |
| value         | Current selected tab (controlled) | string                  | -       | 0.2.1   |
| onValueChange | Tab change callback               | (value: string) => void | -       | 0.2.1   |
| asChild       | Use child as root element         | boolean                 | false   | 0.2.1   |

### Tabs.List Props

| Prop         | Description       | Type                     | Default   | Version |
| ------------ | ----------------- | ------------------------ | --------- | ------- |
| size         | Size              | '1' \| '2' \| '3'        | '2'       | 0.2.1   |
| color        | Color             | string                   | 'blue'    | 0.2.1   |
| highContrast | Use high contrast | boolean                  | false     | 0.2.1   |
| variant      | Variant style     | 'surface' \| 'underline' | 'surface' | 0.2.1   |

### Tabs.Trigger Props

| Prop     | Description      | Type    | Default | Version |
| -------- | ---------------- | ------- | ------- | ------- |
| value    | Tab value        | string  | -       | 0.2.1   |
| disabled | Whether disabled | boolean | false   | 0.2.1   |

### Tabs.Content Props

| Prop    | Description               | Type    | Default | Version |
| ------- | ------------------------- | ------- | ------- | ------- |
| value   | Corresponding tab value   | string  | -       | 0.2.1   |
| asChild | Use child as root element | boolean | false   | 0.2.1   |

All components also support standard margin properties.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/tabs) for the full API reference and design guidelines.
