# `react-checkbox-group`

复选框组是一组复选框组件，用于从一组数据中选择多个值。

## 安装

```sh
$ yarn add @sea-lion/react-checkbox-group
# 或者
$ npm install @sea-lion/react-checkbox-group
```

## 基本使用

```jsx
import * as CheckboxGroup from "@sea-lion/react-checkbox-group";

export default () => (
  <CheckboxGroup.Root defaultValue={["apple", "banana"]}>
    <CheckboxGroup.Item value="apple">苹果</CheckboxGroup.Item>
    <CheckboxGroup.Item value="banana">香蕉</CheckboxGroup.Item>
    <CheckboxGroup.Item value="orange">橙子</CheckboxGroup.Item>
    <CheckboxGroup.Item value="pear">梨</CheckboxGroup.Item>
  </CheckboxGroup.Root>
);
```

## 何时使用

- 当用户需要从一组数据中选择多个选项时
- 当用户需要在开/关状态之间切换多个选项时
- 需要与表单一起使用，收集多个选项值的情况
- 适用于配置项的选择、多个条件筛选、数据列表的批量操作等场景

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
