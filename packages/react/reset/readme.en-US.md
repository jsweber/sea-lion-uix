# `react-reset`

Reset is a style reset component used to clear default styles of HTML elements, ensuring consistent appearance across different browsers.

## Installation

```sh
$ yarn add @sea-lion/react-reset
# or
$ npm install @sea-lion/react-reset
```

## Basic Usage

```jsx
import { Reset } from "@sea-lion/react-reset";

export default () => {
  return (
    <Reset>
      <button>This is a button without default styles</button>
    </Reset>
  );
};
```

## HTML Element Reset

The Reset component can be applied to various HTML elements to clear their default styles:

```jsx
{/* Reset an input */}
<Reset>
  <input type="text" placeholder="Input without default styles" />
</Reset>

{/* Reset a list */}
<Reset>
  <ul>
    <li>List item 1 without default styles</li>
    <li>List item 2 without default styles</li>
  </ul>
</Reset>

{/* Reset a link */}
<Reset>
  <a href="#">Link without default styles</a>
</Reset>

{/* Reset a radio button */}
<Reset>
  <input type="radio" />
</Reset>

{/* Reset a checkbox */}
<Reset>
  <input type="checkbox" />
</Reset>
```

## Combined Usage

The Reset component often serves as a foundation for other components and can be combined with other style components:

```jsx
import { Reset } from "@sea-lion/react-reset";
import { Box } from "@sea-lion/react-box";

export default () => {
  return (
    <Reset>
      <Box padding="4" background="gray-3" borderRadius="3">
        <button>Button with combined styles</button>
      </Box>
    </Reset>
  );
};
```

## Building Custom Forms

Use the Reset component to build forms with fully custom styles, free from browser default styling:

```jsx
<Reset>
  <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
    <input
      type="text"
      placeholder="Username"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <input
      type="password"
      placeholder="Password"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <button
      style={{
        padding: '10px',
        background: 'var(--blue-9)',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Login
    </button>
  </form>
</Reset>
```

## Custom Button Example

```jsx
<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'var(--blue-9)',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Confirm
  </button>
</Reset>

<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'transparent',
      color: 'var(--gray-11)',
      border: '1px solid var(--gray-7)',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Cancel
  </button>
</Reset>
```

## When to Use

- When you need to build HTML elements with fully custom styles from scratch
- As a foundation for custom UI components, ensuring cross-browser style consistency
- When you need to override the browser's User-Agent Stylesheet
- Building highly customized form elements (inputs, buttons, selects, etc.)
- When you need to remove default decorative styles from links, lists, and other elements

## Props

| Prop     | Description                        | Type            | Default |
| -------- | ---------------------------------- | --------------- | ------- |
| children | Content to reset styles            | React.ReactNode | -       |
| asChild  | Whether to render as child element | boolean         | false   |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/reset) for the full API reference and design guidelines.
