# `react-spinner`

Spinner is a loading indicator component used to indicate that content is loading.

## Installation

```sh
$ yarn add @sea-lion/react-spinner
# or
$ npm install @sea-lion/react-spinner
```

## Basic Usage

```jsx
import { Spinner } from "@sea-lion/react-spinner";

export default () => (
  <div>
    <Spinner />
  </div>
);
```

## Different Sizes

Spinner component comes in three sizes:

```jsx
// Size 1 (smallest)
<Spinner size="1" />

// Size 2 (default)
<Spinner size="2" />

// Size 3 (largest)
<Spinner size="3" />
```

## Wrapping Content

Spinner can wrap other content, showing a loading animation during loading and displaying the content when loading is complete:

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Spinner loading={loading}>
      <div>Content to display when loading is complete</div>
    </Spinner>
  );
};
```

## Custom Styling

```jsx
// Add margins
<Spinner mt="4" mb="4" />

// Custom color
<div style={{ color: "red" }}>
  <Spinner />
</div>
```

## Props

| Prop    | Description   | Type              | Default | Version |
| ------- | ------------- | ----------------- | ------- | ------- |
| size    | Size          | '1' \| '2' \| '3' | '2'     | 0.2.0   |
| loading | Loading state | boolean           | true    | 0.2.0   |

Also supports all standard margin properties.

## Learn More

View the [documentation](https://www.radix-ui.com/themes/docs/theme/overview) for more information.
