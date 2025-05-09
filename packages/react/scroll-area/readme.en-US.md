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
// Vertical scrollbar only
<ScrollArea scrollbars="vertical">{/* Content */}</ScrollArea>

// Horizontal scrollbar only
<ScrollArea scrollbars="horizontal">{/* Content */}</ScrollArea>

// Both vertical and horizontal scrollbars
<ScrollArea scrollbars="both">{/* Content */}</ScrollArea>
```

## Border Radius

Use the `radius` prop to set the scrollbar border radius:

```jsx
<ScrollArea radius="full">{/* Content */}</ScrollArea>
<ScrollArea radius="large">{/* Content */}</ScrollArea>
```

## Props

| Prop            | Description               | Type                                      | Default | Version |
| --------------- | ------------------------- | ----------------------------------------- | ------- | ------- |
| size            | Scrollbar size            | '1' \| '2' \| '3'                         | '1'     | 0.2.0   |
| radius          | Scrollbar border radius   | Standard radius values                    | -       | 0.2.0   |
| scrollbars      | Scrollbars to display     | 'vertical' \| 'horizontal' \| 'both'      | 'both'  | 0.2.0   |
| type            | Scrollbar type            | 'auto' \| 'always' \| 'scroll' \| 'hover' | 'hover' | 0.2.0   |
| scrollHideDelay | Scrollbar hide delay (ms) | number                                    | -       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
