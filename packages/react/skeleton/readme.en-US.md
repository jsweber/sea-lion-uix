# `react-skeleton`

Skeleton is a loading placeholder component used to display content outlines during data loading to improve user experience.

## Installation

```sh
$ yarn add @sea-lion/react-skeleton
# or
$ npm install @sea-lion/react-skeleton
```

## Basic Usage

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";

export default () => (
  <div>
    <Skeleton width="200px" height="20px" />
    <Skeleton width="100%" height="20px" my="2" />
    <Skeleton width="80%" height="20px" />
  </div>
);
```

## Wrapping Existing Content

Skeleton can wrap existing content, showing a placeholder during loading and displaying the content when loading is complete:

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Skeleton loading={loading}>
        <h2>Data Loaded Successfully</h2>
        <p>This content is displayed after loading is complete.</p>
      </Skeleton>
    </div>
  );
};
```

## Custom Width and Height

```jsx
// Fixed width
<Skeleton width="200px" height="24px" />

// Responsive width
<Skeleton width={{ initial: "100%", sm: "80%", lg: "50%" }} height="24px" />

// Using preset sizes
<Skeleton width="full" height="5" />
```

## Text Placeholder

When used as an empty element, Skeleton defaults to a block-level element with a height of `--space-3`:

```jsx
// Empty skeleton loaders as text placeholders
<Skeleton />
<Skeleton width="80%" my="2" />
<Skeleton width="60%" />
```

## List Placeholder

```jsx
<div>
  {Array(5)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
      >
        <Skeleton width="40px" height="40px" style={{ borderRadius: "50%" }} />
        <div style={{ marginLeft: "12px", flex: 1 }}>
          <Skeleton height="14px" mb="2" />
          <Skeleton width="60%" height="14px" />
        </div>
      </div>
    ))}
</div>
```

## Card Placeholder

```jsx
<div
  style={{
    width: "300px",
    padding: "16px",
    border: "1px solid #eee",
    borderRadius: "8px",
  }}
>
  <Skeleton width="100%" height="180px" mb="3" />
  <Skeleton width="70%" height="24px" mb="2" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="40%" height="16px" />
</div>
```

## Props

| Prop      | Description                          | Type                       | Default | Version |
| --------- | ------------------------------------ | -------------------------- | ------- | ------- |
| loading   | Whether to show loading placeholder  | boolean                    | true    | 0.2.0   |
| width     | Width (supports responsive)          | CSSProperties['width']     | -       | 0.2.0   |
| minWidth  | Minimum width (supports responsive)  | CSSProperties['minWidth']  | -       | 0.2.0   |
| maxWidth  | Maximum width (supports responsive)  | CSSProperties['maxWidth']  | -       | 0.2.0   |
| height    | Height (supports responsive)         | CSSProperties['height']    | -       | 0.2.0   |
| minHeight | Minimum height (supports responsive) | CSSProperties['minHeight'] | -       | 0.2.0   |
| maxHeight | Maximum height (supports responsive) | CSSProperties['maxHeight'] | -       | 0.2.0   |
| children  | Content to display when loaded       | React.ReactNode            | -       | 0.2.0   |

Also supports all standard margin properties.

## Learn More

View the [documentation](https://www.radix-ui.com/themes/docs/theme/overview) for more information.
