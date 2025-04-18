# `react-code`

Code 组件用于展示代码片段，提供多种风格和尺寸选项。

## 安装

```sh
$ yarn add @sea-lion/react-code
# 或者
$ npm install @sea-lion/react-code
```

## 基本使用

```jsx
import { Code } from "@sea-lion/react-code";
import { Text } from "@sea-lion/react-text";

export default () => (
  <Text>
    这是使用示例：<Code>console.log('Hello World')</Code>
  </Text>
);
```

## 何时使用

- 在文本中展示代码片段或命令
- 需要突出显示技术名称或变量
- 在文档或教程中标记代码语法
- 展示配置项、参数名称或技术术语

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
