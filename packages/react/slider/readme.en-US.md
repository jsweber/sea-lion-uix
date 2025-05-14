# `react-slider`

Slider is a sliding input control that allows users to select a value from a range.

## Installation

```sh
$ yarn add @sea-lion/react-slider
# or
$ npm install @sea-lion/react-slider
```

## Basic Usage

```jsx
import { Slider } from "@sea-lion/react-slider";

export default () => (
  <div style={{ width: "300px" }}>
    <Slider defaultValue={[50]} />
  </div>
);
```

## Setting Range

```jsx
// Set min, max and step
<Slider defaultValue={[30]} min={0} max={100} step={10} />

// Use custom range
<Slider defaultValue={[2]} min={-5} max={5} step={1} />
```

## Multiple Thumbs

```jsx
// Use multiple thumbs to create a range selector
<Slider defaultValue={[20, 80]} />

// Set three or more thumbs
<Slider defaultValue={[10, 50, 90]} />
```

## Vertical Orientation

```jsx
<div style={{ height: "200px" }}>
  <Slider orientation="vertical" defaultValue={[50]} />
</div>
```

## Different Sizes

Slider component comes in three sizes:

```jsx
// Size 1 (smallest)
<Slider size="1" defaultValue={[50]} />

// Size 2 (default)
<Slider size="2" defaultValue={[50]} />

// Size 3 (largest)
<Slider size="3" defaultValue={[50]} />
```

## Different Variants

Slider component supports multiple style variants:

```jsx
// Classic variant
<Slider variant="classic" defaultValue={[50]} />

// Surface variant (default)
<Slider variant="surface" defaultValue={[50]} />

// Soft variant
<Slider variant="soft" defaultValue={[50]} />
```

## Custom Colors

```jsx
// Blue (default)
<Slider color="blue" defaultValue={[50]} />

// Red
<Slider color="red" defaultValue={[50]} />

// Green
<Slider color="green" defaultValue={[50]} />
```

## High Contrast

```jsx
// Enable high contrast mode
<Slider highContrast defaultValue={[50]} />
```

## Disabled State

```jsx
// Disable the slider
<Slider disabled defaultValue={[50]} />
```

## Controlled Component

```jsx
import { useState } from "react";

export default () => {
  const [value, setValue] = useState([50]);

  return (
    <Slider value={value} onValueChange={(newValue) => setValue(newValue)} />
  );
};
```

## Props

| Prop          | Description                | Type                             | Default      | Version |
| ------------- | -------------------------- | -------------------------------- | ------------ | ------- |
| size          | Slider size                | '1' \| '2' \| '3'                | '2'          | 0.2.0   |
| variant       | Slider variant style       | 'classic' \| 'surface' \| 'soft' | 'surface'    | 0.2.0   |
| color         | Slider color               | string                           | 'blue'       | 0.2.0   |
| radius        | Border radius              | string                           | -            | 0.2.0   |
| highContrast  | Use high contrast          | boolean                          | false        | 0.2.0   |
| min           | Minimum value              | number                           | 0            | 0.2.0   |
| max           | Maximum value              | number                           | 100          | 0.2.0   |
| step          | Step increment             | number                           | 1            | 0.2.0   |
| orientation   | Orientation                | 'horizontal' \| 'vertical'       | 'horizontal' | 0.2.0   |
| disabled      | Whether disabled           | boolean                          | false        | 0.2.0   |
| value         | Current value (controlled) | number[]                         | -            | 0.2.0   |
| defaultValue  | Default value              | number[]                         | -            | 0.2.0   |
| onValueChange | Value change callback      | (value: number[]) => void        | -            | 0.2.0   |
| onValueCommit | Value commit callback      | (value: number[]) => void        | -            | 0.2.0   |

Also supports all standard margin properties.

## Learn More

View the [documentation](https://www.radix-ui.com/themes/docs/theme/overview) for more information.
