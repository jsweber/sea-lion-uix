# `react-select`

Select is a dropdown component that allows users to choose a value from a predefined list of options. The component supports grouping options, disabling options, and custom placeholders.

## Installation

```sh
$ yarn add @sea-lion/react-select
# or
$ npm install @sea-lion/react-select
```

## Basic Usage

```jsx
import * as Select from "@sea-lion/react-select";

export default () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## Sizes

The Select component supports three sizes:

```jsx
// Small size
<Select.Root size="1">
  {/* items */}
</Select.Root>

// Medium size (default)
<Select.Root size="2">
  {/* items */}
</Select.Root>

// Large size
<Select.Root size="3">
  {/* items */}
</Select.Root>
```

## Trigger Variants

The Select.Trigger component supports four visual variants:

```jsx
// Surface variant (default)
<Select.Trigger variant="surface" />

// Classic variant
<Select.Trigger variant="classic" />

// Soft variant
<Select.Trigger variant="soft" />

// Ghost variant
<Select.Trigger variant="ghost" />
```

## Content Variants

The Select.Content component supports two visual variants:

```jsx
// Solid variant (default)
<Select.Content variant="solid" />

// Soft variant
<Select.Content variant="soft" />
```

## Grouping Options

You can group options using Group and Label components:

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>Vegetables</Select.Label>
      <Select.Item value="carrot">Carrot</Select.Item>
      <Select.Item value="potato">Potato</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

## Placeholder

```jsx
<Select.Root>
  <Select.Trigger placeholder="Please select..." />
  <Select.Content>{/* options */}</Select.Content>
</Select.Root>
```

## Disabled Options

```jsx
<Select.Root defaultValue="apple">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="orange">Orange</Select.Item>
    <Select.Item value="grape" disabled>
      Grape
    </Select.Item>
  </Select.Content>
</Select.Root>
```

## Controlled Mode

```jsx
import * as Select from "@sea-lion/react-select";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("apple");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
```

## Props

### Root Props

| Prop          | Description                 | Type                    | Default | Version |
| ------------- | --------------------------- | ----------------------- | ------- | ------- |
| size          | Component size              | '1' \| '2' \| '3'       | '2'     | 0.2.4   |
| value         | Current selected value      | string                  | -       | 0.2.4   |
| defaultValue  | Default selected value      | string                  | -       | 0.2.4   |
| onValueChange | Value change callback       | (value: string) => void | -       | 0.2.4   |
| open          | Control dropdown open state | boolean                 | -       | 0.2.4   |
| defaultOpen   | Default open state          | boolean                 | -       | 0.2.4   |
| onOpenChange  | Open state change callback  | (open: boolean) => void | -       | 0.2.4   |
| disabled      | Disable the select          | boolean                 | false   | 0.2.4   |

### Trigger Props

| Prop        | Description      | Type                                               | Default   | Version |
| ----------- | ---------------- | -------------------------------------------------- | --------- | ------- |
| variant     | Visual variant   | 'classic' \| 'surface' \| 'soft' \| 'ghost'        | 'surface' | 0.2.4   |
| color       | Color            | string                                             | -         | 0.2.4   |
| radius      | Border radius    | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.4   |
| placeholder | Placeholder text | string                                             | -         | 0.2.4   |

### Content Props

| Prop         | Description        | Type              | Default | Version |
| ------------ | ------------------ | ----------------- | ------- | ------- |
| variant      | Visual variant     | 'solid' \| 'soft' | 'solid' | 0.2.4   |
| color        | Color              | string            | -       | 0.2.4   |
| highContrast | High contrast mode | boolean           | false   | 0.2.4   |

### Item Props

| Prop     | Description        | Type    | Default | Version |
| -------- | ------------------ | ------- | ------- | ------- |
| value    | Option value       | string  | -       | 0.2.4   |
| disabled | Disable the option | boolean | false   | 0.2.4   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
