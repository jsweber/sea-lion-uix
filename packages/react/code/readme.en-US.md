# `react-code`

Code is a component for displaying code snippets. It provides multiple styles and size options, making code content visually distinct from surrounding text.

## Installation

```sh
pnpm add @sea-lion/react-code
# or
npm install @sea-lion/react-code
yarn add @sea-lion/react-code
```

## Usage

Import the component in your code:

```tsx
import { Code } from '@sea-lion/react-code';
```

### Basic Usage

Embed a code snippet inside text:

```jsx
<Text as="p" size="3">
  In a React component, the <Code>useState</Code> hook is used to create state variables.
</Text>
```

### Sizes

Supports sizes `"1"` through `"9"`:

```jsx
<Flex direction="column" gap="4">
  <Code size="1">npm install @sea-lion/react-code</Code>
  <Code size="2">npm install @sea-lion/react-code</Code>
  <Code size="3">npm install @sea-lion/react-code</Code>
  <Code size="4">npm install @sea-lion/react-code</Code>
  <Code size="5">npm install @sea-lion/react-code</Code>
</Flex>
```

### Variants

Use the `variant` prop to set the visual style of the code snippet:

```jsx
<Flex direction="column" gap="4">
  <Code variant="soft">{"import { useState } from 'react';"}</Code>
  <Code variant="solid">{"import { useState } from 'react';"}</Code>
  <Code variant="outline">{"import { useState } from 'react';"}</Code>
  <Code variant="ghost">{"import { useState } from 'react';"}</Code>
</Flex>
```

### Colors

Use the `color` prop to set the code color:

```jsx
<Flex direction="column" gap="4">
  <Code color="blue">{"const Component = () => {};"}</Code>
  <Code color="crimson">{"const Component = () => {};"}</Code>
  <Code color="green">{"const Component = () => {};"}</Code>
  <Code color="orange">{"const Component = () => {};"}</Code>
</Flex>
```

### Font Weight

Use the `weight` prop to control font weight:

```jsx
<Flex direction="column" gap="4">
  <Code weight="light">const data = [1, 2, 3, 4];</Code>
  <Code weight="regular">const data = [1, 2, 3, 4];</Code>
  <Code weight="medium">const data = [1, 2, 3, 4];</Code>
  <Code weight="bold">const data = [1, 2, 3, 4];</Code>
</Flex>
```

### High Contrast

Enable high contrast mode with the `highContrast` prop:

```jsx
<Flex direction="column" gap="4">
  <Code color="blue" variant="soft">{"function example() { return true; }"}</Code>
  <Code color="blue" variant="soft" highContrast>{"function example() { return true; }"}</Code>
</Flex>
```

### Text Truncation and Wrapping

Use the `truncate` and `textWrap` props to control how code text is displayed:

```jsx
<div style={{ width: '300px' }}>
  {/* Single-line truncation */}
  <Code truncate>{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>

  {/* No wrapping */}
  <div style={{ overflow: 'auto' }}>
    <Code textWrap="nowrap">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
  </div>

  {/* Balanced wrapping */}
  <Code textWrap="balance">{"function calculateFactorial(n) { if (n === 0) return 1; return n * calculateFactorial(n - 1); }"}</Code>
</div>
```

### In-context Usage

Code is commonly used for inline code annotations in documentation and tutorials:

```jsx
<Box>
  <Text as="p" size="3">
    In a React component, the <Code>useState</Code> hook creates state variables. For example:
  </Text>
  <Box mt="2" p="3" style={{ backgroundColor: 'var(--gray-3)' }}>
    <Code variant="ghost">
      const [count, setCount] = useState(0);
    </Code>
  </Box>
  <Text as="p" size="3" mt="2">
    You can then update the state with <Code>setCount</Code> and read it with <Code>count</Code>.
  </Text>
</Box>
```

## When to Use

- Display code snippets or commands inline within text
- Highlight technical names or variable names
- Mark code syntax in documentation or tutorials
- Display configuration keys, parameter names, or technical terms

## Props / API

### Code

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| `size` | Font size of the code | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `"2"` |
| `variant` | Visual variant | `"solid" \| "soft" \| "outline" \| "ghost"` | `"soft"` |
| `color` | Color theme | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| ...` | `"blue"` |
| `weight` | Font weight | `"light" \| "regular" \| "medium" \| "bold"` | `"regular"` |
| `highContrast` | Use high contrast color | `boolean` | `false` |
| `truncate` | Truncate text to a single line | `boolean` | `false` |
| `textWrap` | Text wrap mode | `"wrap" \| "nowrap" \| "balance" \| "pretty"` | - |
| `children` | Code content | `React.ReactNode` | - |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/code) for the full API reference and design guidelines.
