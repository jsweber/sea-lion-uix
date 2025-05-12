# `react-separator`

Separator is a component that visually separates different content areas.

## Installation

```sh
$ yarn add @sea-lion/react-separator
# or
$ npm install @sea-lion/react-separator
```

## Basic Usage

```jsx
import { Separator } from "@sea-lion/react-separator";

export default () => (
  <div>
    <h2>First Section</h2>
    <p>Here is some content.</p>

    <Separator my="4" />

    <h2>Second Section</h2>
    <p>Here is some more content.</p>
  </div>
);
```

## Orientation

Separator supports both horizontal and vertical orientations:

```jsx
// Horizontal separator (default)
<Separator orientation="horizontal" />

// Vertical separator
<Separator orientation="vertical" />
```

## Sizes

Separator comes in four sizes:

```jsx
// Size 1 (smallest)
<Separator size="1" />

// Size 2 (default)
<Separator size="2" />

// Size 3 (medium-large)
<Separator size="3" />

// Size 4 (full container)
<Separator size="4" />
```

## Colors

Separator supports custom colors:

```jsx
// Gray (default)
<Separator color="gray" />

// Blue
<Separator color="blue" />

// Red
<Separator color="red" />
```

## Vertical Separator Example

To use a vertical separator, make sure to set a height on the container:

```jsx
<div style={{ display: "flex", height: "40px", alignItems: "center" }}>
  <span>Left content</span>
  <Separator orientation="vertical" mx="2" />
  <span>Right content</span>
</div>
```

## Decorative

By default, Separator is treated as a decorative element. If the separator semantically separates content, you can set it as non-decorative:

```jsx
<Separator decorative={false} />
```

## Props

| Prop        | Description   | Type                       | Default      | Version |
| ----------- | ------------- | -------------------------- | ------------ | ------- |
| orientation | Direction     | 'horizontal' \| 'vertical' | 'horizontal' | 0.2.0   |
| size        | Size          | '1' \| '2' \| '3' \| '4'   | '1'          | 0.2.0   |
| color       | Color         | Standard colors            | 'gray'       | 0.2.0   |
| decorative  | Is decorative | boolean                    | true         | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
