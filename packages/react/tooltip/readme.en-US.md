# `react-tooltip`

Tooltip is a component that displays informative text when a user hovers over an element. The component supports custom content, width, and positioning options.

## Installation

```sh
$ yarn add @sea-lion/react-tooltip
# or
$ npm install @sea-lion/react-tooltip
```

## Basic Usage

```jsx
import { Tooltip } from "@sea-lion/react-tooltip";
import { Button } from "@sea-lion/react-button";

export default () => {
  return (
    <Tooltip content="This is a tooltip text">
      <Button>Hover to see tooltip</Button>
    </Tooltip>
  );
};
```

## Different Positions

Tooltip can be displayed in different positions relative to the target element:

```jsx
<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>
```

## Custom Delay

You can set a delay before showing the tooltip:

```jsx
<Tooltip content="Shows immediately" delayDuration={0}>
  <Button>No delay</Button>
</Tooltip>

<Tooltip content="Shows after a short delay" delayDuration={300}>
  <Button>Short delay</Button>
</Tooltip>

<Tooltip content="Shows after a longer delay" delayDuration={800}>
  <Button>Long delay</Button>
</Tooltip>
```

## Custom Width

You can set the tooltip width using width, minWidth, and maxWidth props:

```jsx
<Tooltip
  content="Tooltip with fixed width"
  width="200px"
>
  <Button>Fixed width</Button>
</Tooltip>

<Tooltip
  content="This is a longer tooltip text with a maximum width, the content will wrap to multiple lines"
  maxWidth="250px"
>
  <Button>Max width</Button>
</Tooltip>
```

## Hoverable Content

By default, tooltips close when the mouse leaves the trigger element. You can enable hoverable content to allow users to move their mouse onto the tooltip without it closing:

```jsx
<Tooltip content="This tooltip can be hovered" disableHoverableContent={false}>
  <Button>Hoverable tooltip</Button>
</Tooltip>
```

## Controlled State

You can control the open state of the tooltip using the open and onOpenChange props:

```jsx
const [open, setOpen] = React.useState(false);

<Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
  <Button onClick={() => setOpen(!open)}>
    {open ? "Close tooltip" : "Open tooltip"}
  </Button>
</Tooltip>;
```

## Props

| Prop                    | Description                      | Type                                   | Default  | Version |
| ----------------------- | -------------------------------- | -------------------------------------- | -------- | ------- |
| content                 | Tooltip content                  | ReactNode                              | -        | 0.2.3   |
| width                   | Tooltip width                    | string                                 | -        | 0.2.3   |
| minWidth                | Minimum tooltip width            | string                                 | -        | 0.2.3   |
| maxWidth                | Maximum tooltip width            | string                                 | '360px'  | 0.2.3   |
| open                    | Whether tooltip is shown         | boolean                                | -        | 0.2.3   |
| defaultOpen             | Default open state               | boolean                                | false    | 0.2.3   |
| onOpenChange            | Callback when open state changes | (open: boolean) => void                | -        | 0.2.3   |
| delayDuration           | Show delay in milliseconds       | number                                 | 700      | 0.2.3   |
| disableHoverableContent | Disable hoverable content        | boolean                                | true     | 0.2.3   |
| side                    | Preferred tooltip position       | 'top' \| 'right' \| 'bottom' \| 'left' | 'top'    | 0.2.3   |
| sideOffset              | Offset from trigger element      | number                                 | 4        | 0.2.3   |
| align                   | Alignment with trigger element   | 'start' \| 'center' \| 'end'           | 'center' | 0.2.3   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
