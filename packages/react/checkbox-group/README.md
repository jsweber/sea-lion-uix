# `react-checkbox-group`

CheckboxGroup 是一组复选框组件，用于从一组数据中选择多个值。与单独使用的 Checkbox 相比，提供统一的值管理和布局控制，更适合成组使用。

## 安装

```sh
pnpm add @sea-lion/react-checkbox-group
# 或者
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
```

### 基本用法

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">选项 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

## 何时使用

- 当用户需要从一组数据中选择多个选项时
- 当用户需要在开/关状态之间切换多个选项时
- 需要与表单一起使用，收集多个选项值的情况
- 适用于配置项的选择、多条件筛选、数据列表的批量操作等场景

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
