# `react-scroll-area`

ScrollArea is a custom scrollable area component that provides an elegant cross-browser scrolling experience with customizable scrollbars.

## Installation

```sh
$ yarn add @sea-lion/react-scroll-area
# or
$ npm install @sea-lion/react-scroll-area
```

## Basic Usage

```jsx
import { ScrollArea } from "@sea-lion/react-scroll-area";

export default () => {
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <ScrollArea>
        <div style={{ padding: "15px" }}>
          <p>
            This is a long text content. When the content exceeds the container
            size, custom scrollbars will be displayed.
          </p>
          <p>
            The custom scrollbars are aesthetically pleasing and can be
            configured in size, style, and direction.
          </p>
          {/* More content... */}
        </div>
      </ScrollArea>
    </div>
  );
};
```

## Sizes

ScrollArea supports three scrollbar sizes:

```jsx
<ScrollArea size="1">{/* Content */}</ScrollArea>
<ScrollArea size="2">{/* Content */}</ScrollArea>
<ScrollArea size="3">{/* Content */}</ScrollArea>
```

## Scrollbar Direction

You can control which scrollbars to display:

```jsx
{/* Vertical scrollbar only */}
<ScrollArea scrollbars="vertical">{/* Content */}</ScrollArea>

{/* Horizontal scrollbar only */}
<ScrollArea scrollbars="horizontal">{/* Content */}</ScrollArea>

{/* Both vertical and horizontal scrollbars */}
<ScrollArea scrollbars="both">{/* Content */}</ScrollArea>
```

## Scrollbar Type

Use the `type` prop to control when scrollbars are visible:

```jsx
{/* Auto: scrollbars appear only when content overflows */}
<ScrollArea type="auto">{/* Content */}</ScrollArea>

{/* Always: scrollbars are always visible regardless of content overflow */}
<ScrollArea type="always">{/* Content */}</ScrollArea>

{/* Scroll: scrollbars appear only while scrolling */}
<ScrollArea type="scroll">{/* Content */}</ScrollArea>

{/* Hover (default): scrollbars appear when hovering over the container */}
<ScrollArea type="hover">{/* Content */}</ScrollArea>
```

## Border Radius

Use the `radius` prop to set the scrollbar border radius. Supported values:

```jsx
<ScrollArea radius="none">{/* No border radius */}</ScrollArea>
<ScrollArea radius="small">{/* Small border radius */}</ScrollArea>
<ScrollArea radius="medium">{/* Medium border radius */}</ScrollArea>
<ScrollArea radius="large">{/* Large border radius */}</ScrollArea>
<ScrollArea radius="full">{/* Fully rounded */}</ScrollArea>
```

## Practical Use Cases

### Content Card

```jsx
<div style={{ width: "350px", height: "400px", border: "1px solid var(--gray-6)", borderRadius: "8px", overflow: "hidden" }}>
  <div style={{ padding: "16px", borderBottom: "1px solid var(--gray-4)" }}>
    <h3>Article Title</h3>
  </div>
  <div style={{ height: "calc(400px - 61px)" }}>
    <ScrollArea>
      <div style={{ padding: "16px" }}>
        {/* Long article content */}
      </div>
    </ScrollArea>
  </div>
</div>
```

### Sidebar Menu

```jsx
<div style={{ width: "200px", height: "400px" }}>
  <ScrollArea>
    <div style={{ padding: "16px" }}>
      {menuItems.map((item, i) => (
        <div key={i} style={{ padding: "8px 12px", marginBottom: "4px" }}>
          {item}
        </div>
      ))}
    </div>
  </ScrollArea>
</div>
```

## When to Use

- When you need custom scrollbar styles
- When you need a consistent scrolling experience across different browsers
- When you need to control scrollbar visibility behavior
- In fixed-height containers with long content (sidebar menus, article lists, etc.)

## Props

| Prop            | Description               | Type                                        | Default |
| --------------- | ------------------------- | ------------------------------------------- | ------- |
| size            | Scrollbar size            | '1' \| '2' \| '3'                           | '1'     |
| radius          | Scrollbar border radius   | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -  |
| scrollbars      | Scrollbars to display     | 'vertical' \| 'horizontal' \| 'both'        | 'both'  |
| type            | Scrollbar type            | 'auto' \| 'always' \| 'scroll' \| 'hover'   | 'hover' |
| scrollHideDelay | Scrollbar hide delay (ms) | number                                      | -       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/scroll-area) for the full API reference and design guidelines.
