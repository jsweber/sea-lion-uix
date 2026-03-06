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
    Press <Kbd>Tab</Kbd> to switch focus, use <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> to switch focus in reverse.
  </div>
);
```

## Different Sizes

The Kbd component offers various size options (1-9):

```jsx
<Kbd size="1">Esc</Kbd>
<Kbd size="2">Tab</Kbd>
<Kbd size="3">Shift</Kbd>
<Kbd size="4">Enter</Kbd>
<Kbd size="5">Space</Kbd>
<Kbd size="6">Backspace</Kbd>
<Kbd size="7">Delete</Kbd>
<Kbd size="8">⌘</Kbd>
<Kbd size="9">F11</Kbd>
```

## Key Combinations

Display keyboard key combinations:

```jsx
<div>
  Save file: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  Copy: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  Paste: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
</div>

<div>
  Select all: <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
</div>

<div>
  Undo: <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
</div>

<div>
  Redo: <Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd> or <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
</div>
```

## Editor Shortcut Panel

```jsx
<div style={{ background: 'var(--gray-2)', padding: '12px', borderRadius: '6px', maxWidth: '400px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>Save file</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>Find text</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>F</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>Replace text</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>H</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Go to line</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>G</Kbd></span>
  </div>
</div>
```

## Game Control Keys

```jsx
<div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <Kbd>W</Kbd>
    <div style={{ display: 'flex', gap: '4px' }}>
      <Kbd>A</Kbd><Kbd>S</Kbd><Kbd>D</Kbd>
    </div>
  </div>
  <p>Use WASD to control character movement</p>
</div>
```

## Web Browsing Shortcuts

```jsx
<p>
  Press <Kbd>Tab</Kbd> to navigate between page elements
</p>

<p>
  Press <Kbd>Space</Kbd> or <Kbd>Page Down</Kbd> to scroll the page
</p>

<p>
  Press <Kbd>Home</Kbd> to go to the top, <Kbd>End</Kbd> to go to the bottom
</p>

<p>
  Press <Kbd>Ctrl</Kbd> + <Kbd>+</Kbd> to zoom in, <Kbd>Ctrl</Kbd> + <Kbd>-</Kbd> to zoom out
</p>

<p>
  Press <Kbd>F11</Kbd> to toggle fullscreen mode
</p>
```

## When to Use

- Displaying keyboard shortcuts in documentation or tutorials
- Hinting available keyboard operations in application UIs
- Showing keyboard navigation instructions in help pages
- Building shortcut reference panels or help centers

## Props

### Kbd

| Prop    | Description                                        | Type                                                        | Default |
| ------- | -------------------------------------------------- | ----------------------------------------------------------- | ------- |
| size    | Key size                                           | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -       |
| asChild | Apply the styles and behavior to the child element | boolean                                                     | false   |

The Kbd component also supports all standard margin properties (such as `m`, `mt`, `mb`, etc.).

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/kbd) for the full API reference and design guidelines.
