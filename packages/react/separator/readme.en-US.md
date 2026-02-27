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

    <Separator my="4" size="4" />

    <h2>Second Section</h2>
    <p>Here is some more content.</p>
  </div>
);
```

## Orientation

Separator supports both horizontal and vertical orientations:

```jsx
{/* Horizontal separator (default) */}
<Separator orientation="horizontal" size="4" />

{/* Vertical separator */}
<Separator orientation="vertical" size="3" mx="3" />
```

## Sizes

Separator comes in four sizes:

```jsx
{/* Size 1 (smallest) */}
<Separator size="1" />

{/* Size 2 */}
<Separator size="2" />

{/* Size 3 (medium-large) */}
<Separator size="3" />

{/* Size 4 (full container) */}
<Separator size="4" />
```

## Colors

Separator supports custom colors:

```jsx
{/* Gray (default) */}
<Separator color="gray" size="4" />

{/* Blue */}
<Separator color="blue" size="4" />

{/* Red */}
<Separator color="red" size="4" />

{/* Green */}
<Separator color="green" size="4" />
```

## Vertical Separator Example

To use a vertical separator, make sure to set a height on the container:

```jsx
<div style={{ display: "flex", alignItems: "center", height: "40px" }}>
  <span>Left content</span>
  <Separator orientation="vertical" size="3" mx="2" />
  <span>Right content</span>
</div>
```

## Decorative

By default, Separator is treated as a decorative element. If the separator semantically separates content, you can set it as non-decorative:

```jsx
<Separator decorative={false} />
```

## Practical Use Cases

### Content Sections

```jsx
<div style={{ maxWidth: '500px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <h3>Company Overview</h3>
  <p>We are a tech company focused on user experience and design systems...</p>

  <Separator size="4" my="4" />

  <h3>Our Mission</h3>
  <p>To provide developers with easy-to-use, efficient, and beautiful component libraries...</p>

  <Separator size="4" my="4" />

  <h3>Contact Us</h3>
  <p>Email: contact@example.com</p>
</div>
```

### Navigation Menu Dividers

```jsx
<div style={{ maxWidth: '250px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <div style={{ padding: '8px 0' }}>Home</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>Products</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>Services</div>
  <Separator size="4" />
  <div style={{ padding: '8px 0' }}>About Us</div>
</div>
```

### Sidebar and Content Area Layout

```jsx
<div style={{ display: 'flex', maxWidth: '600px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
  <div style={{ width: '200px' }}>
    <p>Sidebar Navigation</p>
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
    </ul>
  </div>

  <Separator orientation="vertical" size="4" mx="4" />

  <div style={{ flex: 1 }}>
    <p>Main Content Area</p>
    <p>This is the main content area...</p>
  </div>
</div>
```

## When to Use

- When you need to create a visual separation between different content blocks
- When adding horizontal or vertical dividers to a layout
- Separating different menu items in navigation menus or lists
- Dividing different content sections in articles, cards, and similar content

## Props

| Prop        | Description   | Type                       | Default      |
| ----------- | ------------- | -------------------------- | ------------ |
| orientation | Direction     | 'horizontal' \| 'vertical' | 'horizontal' |
| size        | Size          | '1' \| '2' \| '3' \| '4'   | '1'          |
| color       | Color         | Standard colors            | 'gray'       |
| decorative  | Is decorative | boolean                    | true         |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/separator) for the full API reference and design guidelines.
