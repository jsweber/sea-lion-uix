# `react-code`

Code 是一个用于展示代码片段的组件，提供了多种风格和尺寸选项，使代码内容与上下文区分、更加醒目。

## 安装

```sh
pnpm add @sea-lion/react-code
# 或者
npm install @sea-lion/react-code
yarn add @sea-lion/react-code
```

## 使用

在代码中引入组件：

```tsx
import { Code } from '@sea-lion/react-code';
```

### 基本用法

```jsx
<Code>const x = 1;</Code>
<Code size="2" variant="soft">代码片段</Code>
```

## 何时使用

- 在文本中展示代码片段或命令
- 需要突出显示技术名称或变量
- 在文档或教程中标记代码语法
- 展示配置项、参数名称或技术术语

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
