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
```

## Indeterminate State

When no `value` prop is provided, Progress shows an indeterminate loading indicator:

```jsx
<Progress />
```

## Custom Animation Duration

```jsx
<Progress duration="2s" />
<Progress duration="500ms" />
```

## High Contrast Mode

```jsx
<Progress value={60} highContrast />
```

## Props

| Prop         | Description              | Type                                               | Default   | Version |
| ------------ | ------------------------ | -------------------------------------------------- | --------- | ------- |
| size         | Size of the progress bar | '1' \| '2' \| '3'                                  | '2'       | 0.2.0   |
| variant      | Variant style            | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0   |
| color        | Color                    | Standard colors                                    | -         | 0.2.0   |
| highContrast | High contrast mode       | boolean                                            | false     | 0.2.0   |
| radius       | Border radius            | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0   |
| duration     | Animation duration       | `${number}s` \| `${number}ms`                      | '5s'      | 0.2.0   |
| value        | Current progress value   | number                                             | -         | 0.2.0   |
| max          | Maximum progress value   | number                                             | 100       | 0.2.0   |

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
