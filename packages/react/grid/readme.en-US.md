# `react-grid`

Grid is a container component based on CSS Grid layout, used to create flexible two-dimensional layouts, controlling both rows and columns simultaneously.

## Installation

```sh
$ yarn add @sea-lion/react-grid
# or
$ npm install @sea-lion/react-grid
```

## Basic Usage

```jsx
import { Grid } from "@sea-lion/react-grid";
import { Box } from "@sea-lion/react-box";

export default () => (
  <Grid columns="3" gap="4">
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>Item 1</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>Item 2</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>Item 3</Box>
    <Box p="3" style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}>Item 4</Box>
  </Grid>
);
```

## Columns and Gap

Grid supports equal-width column counts from 1 to 9, with multiple gap levels:

```jsx
{/* Two-column grid with small gap */}
<Grid columns="2" gap="2">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Grid>

{/* Three-column grid with medium gap */}
<Grid columns="3" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>

{/* Four-column grid with larger gap */}
<Grid columns="4" gap="4">
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## Custom Column Widths

Use CSS grid-template-columns syntax to set custom column widths:

```jsx
{/* Mix of fixed and flexible widths */}
<Grid columns="200px 1fr 1fr" gap="3">
  <Box>Fixed width (200px)</Box>
  <Box>Flexible width (1fr)</Box>
  <Box>Flexible width (1fr)</Box>
</Grid>

{/* Different proportional flexible widths */}
<Grid columns="1fr 2fr 1fr" gap="3">
  <Box>1 part</Box>
  <Box>2 parts</Box>
  <Box>1 part</Box>
</Grid>

{/* Min/max width constraints */}
<Grid columns="minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr)" gap="3">
  <Box>Min 100px, max 1fr</Box>
  <Box>Min 200px, max 2fr</Box>
  <Box>Min 100px, max 1fr</Box>
</Grid>
```

## Grid Area Layout

Use the `areas` prop to create named grid areas for complex page layouts:

```jsx
<Grid
  areas={`"header header header"
          "sidebar content content"
          "sidebar footer footer"`}
  columns="200px 1fr 1fr"
  rows="auto 1fr auto"
  gap="3"
  style={{ height: '400px' }}
>
  <Box style={{ gridArea: 'header', backgroundColor: 'var(--blue-5)', padding: '16px', borderRadius: '6px' }}>Header</Box>
  <Box style={{ gridArea: 'sidebar', backgroundColor: 'var(--purple-5)', padding: '16px', borderRadius: '6px' }}>Sidebar</Box>
  <Box style={{ gridArea: 'content', backgroundColor: 'var(--green-5)', padding: '16px', borderRadius: '6px' }}>Content</Box>
  <Box style={{ gridArea: 'footer', backgroundColor: 'var(--amber-5)', padding: '16px', borderRadius: '6px' }}>Footer</Box>
</Grid>
```

## Alignment

```jsx
{/* Top-aligned (default) */}
<Grid columns="3" gap="3" align="start" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>Item {n}</Box>)}
</Grid>

{/* Vertically centered */}
<Grid columns="3" gap="3" align="center" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>Item {n}</Box>)}
</Grid>

{/* Bottom-aligned */}
<Grid columns="3" gap="3" align="end" style={{ height: '150px', backgroundColor: 'var(--gray-3)' }}>
  {[1, 2, 3].map(n => <Box key={n} style={{ height: `${n * 30}px`, backgroundColor: 'var(--blue-5)' }}>Item {n}</Box>)}
</Grid>
```

## Responsive Grid

```jsx
{/* Responsive columns: 1 on mobile, 2 on tablet, 3 on desktop, 4 on large screens */}
<Grid
  columns={{ initial: '1', sm: '2', md: '3', lg: '4' }}
  gap={{ initial: '2', md: '4' }}
>
  {items.map((item, i) => <Box key={i}>{item}</Box>)}
</Grid>
```

## Practical Use Cases

### Product Card Grid

```jsx
<Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="4">
  {products.map((product, i) => (
    <div key={i} style={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <div style={{ height: '200px', backgroundColor: 'var(--blue-3)' }} />
      <div style={{ padding: '16px' }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  ))}
</Grid>
```

### Photo Gallery

```jsx
<Grid columns={{ initial: '2', sm: '3', md: '4' }} gap="2">
  {photos.map((photo, i) => (
    <div key={i} style={{ paddingTop: '100%', position: 'relative', backgroundColor: 'var(--gray-5)', borderRadius: '6px' }}>
      <img src={photo.url} alt={photo.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
    </div>
  ))}
</Grid>
```

## When to Use

- Creating complex two-dimensional layout structures (controlling both rows and columns)
- When you need to precisely arrange elements in rows and columns
- Building responsive grid systems (card lists, photo galleries, etc.)
- Implementing dashboards, admin panels, and other interfaces needing flexible layouts

## Props

### Grid

| Prop    | Description                        | Type                                                          | Default   |
| ------- | ---------------------------------- | ------------------------------------------------------------- | --------- |
| as      | HTML element to render             | 'div' \| 'span'                                               | 'div'     |
| asChild | Whether to pass component as child | boolean                                                       | false     |
| display | CSS display property               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    |
| areas   | CSS grid-template-areas property   | string                                                        | -         |
| columns | CSS grid-template-columns property | '1' - '9' \| string                                           | -         |
| rows    | CSS grid-template-rows property    | '1' - '9' \| string                                           | -         |
| flow    | CSS grid-auto-flow property        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         |
| align   | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' |
| justify | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   |
| gap     | Space between grid items           | '1' - '9'                                                     | -         |

The Grid component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/grid) for the full API reference and design guidelines.
