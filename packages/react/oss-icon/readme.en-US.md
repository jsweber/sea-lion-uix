# `react-oss-icon`

OssIcon (IconFont) is an icon component based on the [iconfont platform](https://www.iconfont.cn/). It loads icons via **Font-class** (.css) or **Symbol** (.js) resource URLs.

## Installation

```sh
pnpm add @sea-lion/react-oss-icon
# or
npm install @sea-lion/react-oss-icon
yarn add @sea-lion/react-oss-icon
```

## Usage

Import the component in your code:

```tsx
import { IconFont } from '@sea-lion/react-oss-icon';
```

### Basic Usage

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl={cssUrl} icon="icon-name" size="2" color="blue" />
```

### Integrating with iconfont

- **Font-class**: pass the project’s **.css** URL to `ossUrl`, and use `<IconFont icon="icon-name" />`.
- **Symbol**: pass the project’s **.js** URL to `ossUrl`; the component will inject the script.
- Protocol-relative URLs (`//...`) are supported and will be completed with `https:`.

## When to Use

- When using icons from your team’s iconfont project
- When staying consistent with an existing iconfont setup
- When you need lightweight, color- and size-configurable icons

## Learn More

View the [documentation](https://gitee.com/summer_sleep/ui-lib-monorepo-template) for more information.
