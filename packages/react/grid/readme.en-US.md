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
import { Text } from "@sea-lion/react-text";

export default () => (
  <Grid columns="3" gap="4">
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>Item 1</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>Item 2</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>Item 3</Text>
    </Box>
    <Box
      p="3"
      style={{ backgroundColor: "var(--blue-5)", borderRadius: "6px" }}
    >
      <Text style={{ color: "white" }}>Item 4</Text>
    </Box>
  </Grid>
);
```

## Grid Layouts

The Grid component supports all major CSS Grid layout options:

```jsx
// Basic grid with 3 equal-width columns
<Grid columns="3" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>

// Custom column widths
<Grid columns="100px 1fr 2fr" gap="3">
  <Box>Fixed width</Box>
  <Box>1 part space</Box>
  <Box>2 parts space</Box>
</Grid>

// Using grid areas
<Grid
  areas={`"header header"
          "sidebar content"
          "footer footer"`}
  columns="200px 1fr"
  rows="auto 1fr auto"
  gap="3"
>
  <Box style={{ gridArea: 'header' }}>Header</Box>
  <Box style={{ gridArea: 'sidebar' }}>Sidebar</Box>
  <Box style={{ gridArea: 'content' }}>Content area</Box>
  <Box style={{ gridArea: 'footer' }}>Footer</Box>
</Grid>

// Responsive grid
<Grid
  columns={{ base: '1', md: '2', lg: '3' }}
  gap={{ base: '2', md: '4' }}
>
  <Box>Single column on small screens, two columns on medium screens, three columns on large screens</Box>
  <Box>With different spacing</Box>
</Grid>
```

## Props

### Grid

| Prop    | Description                        | Type                                                          | Default   | Version |
| ------- | ---------------------------------- | ------------------------------------------------------------- | --------- | ------- |
| as      | HTML element to render             | 'div' \| 'span'                                               | 'div'     | 0.2.0   |
| asChild | Whether to pass component as child | boolean                                                       | false     | 0.2.0   |
| display | CSS display property               | 'none' \| 'inline-grid' \| 'grid'                             | 'grid'    | 0.2.0   |
| areas   | CSS grid-template-areas property   | string                                                        | -         | 0.2.0   |
| columns | CSS grid-template-columns property | '1' - '9' \| string                                           | -         | 0.2.0   |
| rows    | CSS grid-template-rows property    | '1' - '9' \| string                                           | -         | 0.2.0   |
| flow    | CSS grid-auto-flow property        | 'row' \| 'column' \| 'dense' \| 'row-dense' \| 'column-dense' | -         | 0.2.0   |
| align   | CSS align-items property           | 'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'       | 'stretch' | 0.2.0   |
| justify | CSS justify-content property       | 'start' \| 'center' \| 'end' \| 'between'                     | 'start'   | 0.2.0   |
| gap     | Space between grid items           | '1' - '9'                                                     | -         | 0.2.0   |

The Grid component also supports all standard margin and layout props, such as `m`, `mt`, `width`, `height`, etc.

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
