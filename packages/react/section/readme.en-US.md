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
// Small size (24px padding)
<Section size="1">{/* Content */}</Section>

// Medium size (40px padding)
<Section size="2">{/* Content */}</Section>

// Large size (64px padding, default)
<Section size="3">{/* Content */}</Section>

// Extra large size (80px padding)
<Section size="4">{/* Content */}</Section>
```

## Display Control

Use the `display` prop to control the section's visibility:

```jsx
// Hide section
<Section display="none">{/* Content */}</Section>

// Show section (default)
<Section display="initial">{/* Content */}</Section>
```

## Responsive Design

Section component supports responsive props, allowing you to adjust padding and visibility based on screen size:

```jsx
// Use smaller padding on small screens, larger padding on big screens
<Section size={{ sm: '2', lg: '4' }}>{/* Content */}</Section>

// Hide on small screens, show on large screens
<Section display={{ sm: 'none', lg: 'initial' }}>{/* Content */}</Section>
```

## Props

| Prop    | Description             | Type                     | Default | Version |
| ------- | ----------------------- | ------------------------ | ------- | ------- |
| size    | Vertical padding size   | '1' \| '2' \| '3' \| '4' | '3'     | 0.2.0   |
| display | Section visibility      | 'none' \| 'initial'      | -       | 0.2.0   |
| asChild | Render as child element | boolean                  | false   | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
