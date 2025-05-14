# `react-switch`

Switch is a toggle component used to switch between two states.

## Installation

```sh
$ yarn add @sea-lion/react-switch
# or
$ npm install @sea-lion/react-switch
```

## Basic Usage

```jsx
import { Switch } from "@sea-lion/react-switch";

export default () => (
  <div>
    <Switch />
  </div>
);
```

## Controlled Component

```jsx
import { Switch } from "@sea-lion/react-switch";
import { useState } from "react";

export default () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};
```

## Default Checked

```jsx
<Switch defaultChecked />
```

## Different Sizes

Switch component comes in three sizes:

```jsx
// Size 1 (smallest)
<Switch size="1" />

// Size 2 (default)
<Switch size="2" />

// Size 3 (largest)
<Switch size="3" />
```

## Different Variants

Switch component supports multiple style variants:

```jsx
// Classic variant
<Switch variant="classic" />

// Surface variant (default)
<Switch variant="surface" />

// Soft variant
<Switch variant="soft" />
```

## Custom Colors

```jsx
// Blue (default)
<Switch color="blue" />

// Red
<Switch color="red" />

// Green
<Switch color="green" />
```

## High Contrast

```jsx
// Enable high contrast mode
<Switch highContrast />
```

## Disabled State

```jsx
// Disable the switch
<Switch disabled />
```

## Props

| Prop            | Description                | Type                             | Default   | Version |
| --------------- | -------------------------- | -------------------------------- | --------- | ------- |
| size            | Switch size                | '1' \| '2' \| '3'                | '2'       | 0.2.0   |
| variant         | Switch variant style       | 'classic' \| 'surface' \| 'soft' | 'surface' | 0.2.0   |
| color           | Switch color               | string                           | 'blue'    | 0.2.0   |
| radius          | Border radius              | string                           | -         | 0.2.0   |
| highContrast    | Use high contrast          | boolean                          | false     | 0.2.0   |
| checked         | Current state (controlled) | boolean                          | -         | 0.2.0   |
| defaultChecked  | Default checked state      | boolean                          | false     | 0.2.0   |
| onCheckedChange | State change callback      | (checked: boolean) => void       | -         | 0.2.0   |
| disabled        | Whether disabled           | boolean                          | false     | 0.2.0   |

Also supports all standard margin properties.

## Learn More

View the [documentation](https://www.radix-ui.com/themes/docs/theme/overview) for more information.
