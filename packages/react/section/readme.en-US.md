# `react-section`

Section is a layout component that creates areas with preset vertical padding, helping to organize page content hierarchy.

## Installation

```sh
$ yarn add @sea-lion/react-section
# or
$ npm install @sea-lion/react-section
```

## Basic Usage

```jsx
import { Section } from "@sea-lion/react-section";

export default () => {
  return (
    <Section>
      <h2>Section Title</h2>
      <p>
        This is an area with preset vertical padding, used to organize content.
      </p>
    </Section>
  );
};
```

## Sizes

Section component supports four sizes that control the vertical padding:

```jsx
{/* Small size (24px padding) */}
<Section size="1">{/* Content */}</Section>

{/* Medium size (40px padding) */}
<Section size="2">{/* Content */}</Section>

{/* Large size (64px padding, default) */}
<Section size="3">{/* Content */}</Section>

{/* Extra large size (80px padding) */}
<Section size="4">{/* Content */}</Section>
```

## Display Control

Use the `display` prop to control the section's visibility:

```jsx
{/* Hide section */}
<Section display="none">{/* Content */}</Section>

{/* Show section (default) */}
<Section display="initial">{/* Content */}</Section>
```

## Responsive Design

Section component supports responsive props, allowing you to adjust padding and visibility based on screen size:

```jsx
{/* Use smaller padding on small screens, larger padding on large screens */}
<Section size={{ initial: '1', sm: '2', md: '3' }}>{/* Content */}</Section>

{/* Hide on small screens, show on medium screens and above */}
<Section display={{ initial: 'none', md: 'initial' }}>{/* Content */}</Section>
```

## Practical Use Cases

### Page Layout

Use different sized Sections to build a hierarchical page structure:

```jsx
{/* Header area */}
<Section size="2">
  <h1>Website Title</h1>
</Section>

{/* Main content area */}
<Section size="3">
  <h2>Welcome</h2>
  <p>This is the main content area.</p>
</Section>

{/* Features section (with background) */}
<Section size="3" style={{ backgroundColor: 'var(--gray-2)' }}>
  <h2>Product Features</h2>
  <div style={{ display: 'flex', gap: '24px' }}>
    <div>Feature One</div>
    <div>Feature Two</div>
    <div>Feature Three</div>
  </div>
</Section>
```

### Card Content Container

Section can be used as a container for card content to provide consistent padding:

```jsx
<div style={{ width: '300px', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
  <div style={{ height: '150px', backgroundColor: 'var(--blue-5)' }} />
  <Section size="1">
    <h3>Product Title</h3>
    <p>A brief description of the product.</p>
    <a href="#">Learn more</a>
  </Section>
</div>
```

## When to Use

- When you need to divide different content areas on a page
- When you need to add consistent vertical padding to content regions
- Building hierarchical layouts such as landing pages and documentation pages
- When you need to control section visibility or padding based on screen size

## Props

| Prop    | Description             | Type                     | Default |
| ------- | ----------------------- | ------------------------ | ------- |
| size    | Vertical padding size   | '1' \| '2' \| '3' \| '4' | '3'     |
| display | Section visibility      | 'none' \| 'initial'      | -       |
| asChild | Render as child element | boolean                  | false   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/section) for the full API reference and design guidelines.
