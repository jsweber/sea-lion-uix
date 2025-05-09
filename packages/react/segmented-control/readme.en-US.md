# `react-segmented-control`

SegmentedControl is a component that allows users to select a single option from a group of related options. It provides a visual indicator showing the currently selected option.

## Installation

```sh
$ yarn add @sea-lion/react-segmented-control
# or
$ npm install @sea-lion/react-segmented-control
```

## Basic Usage

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";

export default () => {
  return (
    <SegmentedControl.Root defaultValue="daily">
      <SegmentedControl.Item value="daily">Daily</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">Weekly</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## Sizes

SegmentedControl component supports three sizes that control the control's dimensions:

```jsx
// Small size
<SegmentedControl.Root size="1">
  {/* items */}
</SegmentedControl.Root>

// Medium size (default)
<SegmentedControl.Root size="2">
  {/* items */}
</SegmentedControl.Root>

// Large size
<SegmentedControl.Root size="3">
  {/* items */}
</SegmentedControl.Root>
```

## Variants

SegmentedControl component provides two visual variants:

```jsx
// Surface variant (default)
<SegmentedControl.Root variant="surface">
  {/* items */}
</SegmentedControl.Root>

// Classic variant
<SegmentedControl.Root variant="classic">
  {/* items */}
</SegmentedControl.Root>
```

## Radius

Use the `radius` prop to control the component's border radius:

```jsx
<SegmentedControl.Root radius="none">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="small">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="medium">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="large">
  {/* items */}
</SegmentedControl.Root>

<SegmentedControl.Root radius="full">
  {/* items */}
</SegmentedControl.Root>
```

## Controlled Mode

SegmentedControl can be used as a controlled component using the `value` and `onValueChange` props:

```jsx
import * as SegmentedControl from "@sea-lion/react-segmented-control";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("daily");

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.Item value="daily">Daily</SegmentedControl.Item>
      <SegmentedControl.Item value="weekly">Weekly</SegmentedControl.Item>
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
```

## Props

### Root Props

| Prop          | Description            | Type                                               | Default   | Version |
| ------------- | ---------------------- | -------------------------------------------------- | --------- | ------- |
| size          | Control size           | '1' \| '2' \| '3'                                  | '2'       | 0.2.0   |
| variant       | Visual variant         | 'surface' \| 'classic'                             | 'surface' | 0.2.0   |
| radius        | Border radius          | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0   |
| value         | Current selected value | string                                             | -         | 0.2.0   |
| defaultValue  | Default selected value | string                                             | -         | 0.2.0   |
| onValueChange | Value change callback  | (value: string) => void                            | -         | 0.2.0   |

### Item Props

| Prop  | Description  | Type   | Default | Version |
| ----- | ------------ | ------ | ------- | ------- |
| value | Option value | string | -       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
