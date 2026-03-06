# `react-progress`

Progress is a component that indicates the completion status of an operation or task.

## Installation

```sh
$ yarn add @sea-lion/react-progress
# or
$ npm install @sea-lion/react-progress
```

## Basic Usage

```jsx
import { Progress } from "@sea-lion/react-progress";

export default () => <Progress value={40} />;
```

## Different Sizes

Progress component offers three sizes:

```jsx
<Progress size="1" value={60} />
<Progress size="2" value={60} /> {/* Default size */}
<Progress size="3" value={60} />
```

## Different Variants

Progress component offers three variants:

```jsx
<Progress variant="classic" value={60} />
<Progress variant="surface" value={60} /> {/* Default variant */}
<Progress variant="soft" value={60} />
```

## Custom Colors

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="green" />
<Progress value={60} color="red" />
<Progress value={60} color="purple" />
<Progress value={60} color="orange" />
<Progress value={60} color="amber" />
```

## Border Radius

Use the `radius` prop to customize the progress bar's border radius:

```jsx
<Progress value={60} radius="none" />
<Progress value={60} radius="small" />
<Progress value={60} radius="medium" />
<Progress value={60} radius="large" />
<Progress value={60} radius="full" />
```

## Indeterminate State

When no `value` prop is provided, Progress shows an indeterminate loading indicator:

```jsx
<Progress />
<Progress color="blue" />
<Progress color="green" />
```

## Custom Animation Duration

```jsx
<Progress duration="2s" />   {/* Fast */}
<Progress duration="5s" />   {/* Default */}
<Progress duration="10s" />  {/* Slow */}
```

## High Contrast Mode

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="blue" highContrast />
```

## Dynamic Progress Bar

```jsx
import { useState, useEffect } from "react";
import { Progress } from "@sea-lion/react-progress";

export default () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) { setIsRunning(false); return 100; }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <Progress value={progress} />
      <button onClick={() => { setProgress(0); setIsRunning(true); }}>
        Start
      </button>
      <span>{progress}%</span>
    </div>
  );
};
```

## Practical Use Cases

### File Upload Progress

```jsx
<div>
  <Progress value={uploadProgress} color="blue" size="2" />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Uploading...</span>
    <span>{uploadProgress}%</span>
  </div>
</div>
```

### Loading State

```jsx
<div>
  <p>Loading data, please wait...</p>
  <Progress color="purple" variant="surface" size="2" />
</div>
```

## When to Use

- When you need to display the completion progress of a task or operation
- When you need to indicate a loading state or processing workflow
- For showing file upload or download progress
- When you need to provide visual feedback to users that a task is in progress

## Props

| Prop         | Description              | Type                                               | Default   |
| ------------ | ------------------------ | -------------------------------------------------- | --------- |
| size         | Size of the progress bar | '1' \| '2' \| '3'                                  | '2'       |
| variant      | Variant style            | 'classic' \| 'surface' \| 'soft'                   | 'surface' |
| color        | Color                    | Standard colors                                    | -         |
| highContrast | High contrast mode       | boolean                                            | false     |
| radius       | Border radius            | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         |
| duration     | Animation duration       | `${number}s` \| `${number}ms`                      | '5s'      |
| value        | Current progress value   | number                                             | -         |
| max          | Maximum progress value   | number                                             | 100       |

## Learn More

See the [Radix UI documentation](https://www.radix-ui.com/themes/docs/components/progress) for the full API reference and design guidelines.
