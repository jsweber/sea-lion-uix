# `react-inset`

Inset is a container component used to create negative margin effects, allowing content to extend beyond the boundaries of its parent element.

## Installation

```sh
$ yarn add @sea-lion/react-inset
# or
$ npm install @sea-lion/react-inset
```

## Basic Usage

```jsx
import { Inset } from "@sea-lion/react-inset";

export default () => (
  <div style={{ padding: "20px", border: "1px solid", borderRadius: "8px" }}>
    <Inset>
      <img
        src="/example-image.jpg"
        style={{ display: "block", width: "100%" }}
      />
    </Inset>
    <div style={{ padding: "20px" }}>
      <h3>Card with Inset</h3>
      <p>
        The Inset component allows the image to extend to the container edges
        without additional margins
      </p>
    </div>
  </div>
);
```

## Different Sides of Inset

The Inset component can be applied to different sides of a container:

```jsx
// Apply to top
<Inset side="top">
  <img src="/banner.jpg" />
</Inset>

// Apply to bottom
<Inset side="bottom">
  <div className="footer-content" />
</Inset>

// Apply to left
<Inset side="left">
  <div className="sidebar" />
</Inset>

// Apply to right
<Inset side="right">
  <div className="right-panel" />
</Inset>

// Apply horizontally
<Inset side="x">
  <div className="horizontal-content" />
</Inset>

// Apply vertically
<Inset side="y">
  <div className="vertical-content" />
</Inset>
```

## Clipping Methods

Inset supports different clipping methods:

```jsx
// Border box clipping (default)
<Inset clip="border-box">
  <img src="/image.jpg" />
</Inset>

// Padding box clipping
<Inset clip="padding-box">
  <img src="/image.jpg" />
</Inset>
```

## Padding Control

```jsx
// Maintain current padding
<Inset p="current">
  <div className="content" />
</Inset>

// Remove padding
<Inset p="0">
  <div className="content" />
</Inset>

// Control padding in specific directions
<Inset px="0" py="current">
  <div className="content" />
</Inset>
```

## Props

### Inset

| Prop | Description           | Type                                                          | Default      | Version |
| ---- | --------------------- | ------------------------------------------------------------- | ------------ | ------- |
| side | Side to apply inset   | 'all' \| 'x' \| 'y' \| 'top' \| 'bottom' \| 'left' \| 'right' | 'all'        | 0.2.0   |
| clip | Clipping box model    | 'border-box' \| 'padding-box'                                 | 'border-box' | 0.2.0   |
| p    | All direction padding | 'current' \| '0'                                              | -            | 0.2.0   |
| px   | Horizontal padding    | 'current' \| '0'                                              | -            | 0.2.0   |
| py   | Vertical padding      | 'current' \| '0'                                              | -            | 0.2.0   |
| pt   | Top padding           | 'current' \| '0'                                              | -            | 0.2.0   |
| pr   | Right padding         | 'current' \| '0'                                              | -            | 0.2.0   |
| pb   | Bottom padding        | 'current' \| '0'                                              | -            | 0.2.0   |
| pl   | Left padding          | 'current' \| '0'                                              | -            | 0.2.0   |

The Inset component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/inset) for the full API reference and design guidelines.
