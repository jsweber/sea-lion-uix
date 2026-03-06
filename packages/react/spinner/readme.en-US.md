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
    <span>Loading...</span>
  </div>
);
```

## Different Sizes

Spinner component comes in three sizes:

```jsx
{/* Size 1 (smallest) */}
<Spinner size="1" />

{/* Size 2 (default) */}
<Spinner size="2" />

{/* Size 3 (largest) */}
<Spinner size="3" />
```

## Custom Colors

Customize the Spinner color by setting the color on the parent element:

```jsx
<div style={{ color: 'var(--blue-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--red-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--green-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--purple-9)' }}>
  <Spinner />
</div>
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

## Combined with Button

Spinner can be combined with a button to indicate submission or processing state:

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { Button } from "@sea-lion/react-button";

{/* Button in loading state */}
<Button disabled>
  <Spinner size="1" />
  Submitting
</Button>

{/* Normal state */}
<Button>Submit</Button>
```

## Loading Card

```jsx
<div style={{ border: '1px solid var(--gray-5)', borderRadius: '6px', padding: '16px', width: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
    <Spinner size="1" />
    <span>Loading data...</span>
  </div>
</div>
```

## Custom Styling

```jsx
{/* Add margins */}
<Spinner mt="4" mb="4" />

{/* Custom color (via parent element) */}
<div style={{ color: "var(--blue-9)" }}>
  <Spinner />
</div>
```

## When to Use

- When a page or component is loading data
- When an operation takes time to complete (e.g., form submission, file upload)
- When you need to inform users to wait and prevent accidental interactions
- Combined with buttons to indicate that an operation is in progress

## Props

| Prop    | Description   | Type              | Default |
| ------- | ------------- | ----------------- | ------- |
| size    | Size          | '1' \| '2' \| '3' | '2'     |
| loading | Loading state | boolean           | true    |

Also supports all standard margin properties such as `m`, `mt`, `mb`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/spinner) for the full API reference and design guidelines.
