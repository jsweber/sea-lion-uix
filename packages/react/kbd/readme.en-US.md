# `react-kbd`

Kbd is a component for displaying keyboard keys or shortcuts, useful for tutorials, help documentation, and similar contexts.

## Installation

```sh
$ yarn add @sea-lion/react-kbd
# or
$ npm install @sea-lion/react-kbd
```

## Basic Usage

```jsx
import { Kbd } from "@sea-lion/react-kbd";

export default () => (
  <div>
    Press <Kbd>Tab</Kbd> to switch focus
  </div>
);
```

## Different Sizes

The Kbd component offers various size options:

```jsx
<Kbd size="1">Esc</Kbd>
<Kbd size="2">Ctrl</Kbd>
<Kbd size="3">Alt</Kbd>
<Kbd size="4">Shift</Kbd>
<Kbd size="5">Enter</Kbd>
<Kbd size="6">Tab</Kbd>
<Kbd size="7">⌘</Kbd>
<Kbd size="8">↓</Kbd>
<Kbd size="9">F1</Kbd>
```

## Combinations

Display key combinations:

```jsx
<div>
  Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  Copy: <Kbd>⌘</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  Paste: <Kbd>⌘</Kbd> + <Kbd>V</Kbd>
</div>
```

## With Other Components

```jsx
<p>
  Press <Kbd>Esc</Kbd> to exit fullscreen mode
</p>

<div>
  Use <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> to control character movement
</div>
```

## Props

### Kbd

| Prop    | Description                                        | Type                                                        | Default | Version |
| ------- | -------------------------------------------------- | ----------------------------------------------------------- | ------- | ------- |
| size    | Key size                                           | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -       | 0.2.0   |
| asChild | Apply the styles and behavior to the child element | boolean                                                     | false   | 0.2.0   |

The Kbd component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.).

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
