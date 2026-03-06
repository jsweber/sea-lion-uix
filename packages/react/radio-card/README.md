# `react-radio-card`

RadioCard 是一个卡片式单选按钮组件，用于在一组选项中以卡片的形式选择一个选项。

## 安装

```sh
$ yarn add @sea-lion/react-radio-card
# 或者
$ npm install @sea-lion/react-radio-card
```

## 基本使用

```jsx
import * as RadioCards from "@sea-lion/react-radio-card";

export default () => {
  const [value, setValue] = useState("option1");

  return (
    <RadioCards.Root value={value} onValueChange={setValue}>
      <RadioCards.Item value="option1">选项 1</RadioCards.Item>
      <RadioCards.Item value="option2">选项 2</RadioCards.Item>
      <RadioCards.Item value="option3">选项 3</RadioCards.Item>
    </RadioCards.Root>
  );
};
```

## 不同尺寸

RadioCards 组件提供了三种尺寸：

```jsx
<RadioCards.Root size="1">
  {/* 小尺寸 */}
</RadioCards.Root>

<RadioCards.Root size="2">
  {/* 默认尺寸 */}
</RadioCards.Root>

<RadioCards.Root size="3">
  {/* 大尺寸 */}
</RadioCards.Root>
```

## 不同变体

RadioCards 组件提供了两种变体样式：

```jsx
<RadioCards.Root variant="surface">
  {/* 默认样式 */}
</RadioCards.Root>

<RadioCards.Root variant="classic">
  {/* 经典样式 */}
</RadioCards.Root>
```

## 自定义颜色

```jsx
<RadioCards.Root color="blue">
  {/* 蓝色主题 */}
</RadioCards.Root>

<RadioCards.Root color="green">
  {/* 绿色主题 */}
</RadioCards.Root>

<RadioCards.Root color="red">
  {/* 红色主题 */}
</RadioCards.Root>
```

## 高对比度模式

```jsx
<RadioCards.Root highContrast>{/* 高对比度模式 */}</RadioCards.Root>
```

## 自定义网格布局

RadioCards 组件支持自定义列布局和间距：

```jsx
<RadioCards.Root columns="2" gap="3">
  {/* 两列布局，间距为3 */}
</RadioCards.Root>

<RadioCards.Root columns="3" gap="4">
  {/* 三列布局，间距为4 */}
</RadioCards.Root>

<RadioCards.Root columns="repeat(auto-fit, minmax(200px, 1fr))" gap="5">
  {/* 响应式布局 */}
</RadioCards.Root>
```

## 带图标的选项

```jsx
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@sea-lion/react-flex";

<RadioCards.Root>
  <RadioCards.Item value="profile">
    <Flex gap="2" align="center">
      <PersonIcon />
      <Text>个人资料</Text>
    </Flex>
  </RadioCards.Item>
  <RadioCards.Item value="settings">
    <Flex gap="2" align="center">
      <GearIcon />
      <Text>设置</Text>
    </Flex>
  </RadioCards.Item>
</RadioCards.Root>;
```

## 禁用状态

```jsx
<RadioCards.Root>
  <RadioCards.Item value="option1">选项 1</RadioCards.Item>
  <RadioCards.Item value="option2" disabled>
    选项 2 (禁用)
  </RadioCards.Item>
  <RadioCards.Item value="option3">选项 3</RadioCards.Item>
</RadioCards.Root>
```

## Root 属性

| 参数          | 说明               | 类型                    | 默认值                               | 版本  |
| ------------- | ------------------ | ----------------------- | ------------------------------------ | ----- |
| size          | 卡片尺寸           | '1' \| '2' \| '3'       | '2'                                  | 0.2.0 |
| variant       | 变体样式           | 'surface' \| 'classic'  | 'surface'                            | 0.2.0 |
| color         | 颜色               | 标准颜色                | -                                    | 0.2.0 |
| highContrast  | 高对比度模式       | boolean                 | false                                | 0.2.0 |
| columns       | 网格列布局         | string                  | repeat(auto-fit, minmax(160px, 1fr)) | 0.2.0 |
| gap           | 网格间距           | string                  | '4'                                  | 0.2.0 |
| value         | 选中的值           | string                  | -                                    | 0.2.0 |
| defaultValue  | 默认选中的值       | string                  | -                                    | 0.2.0 |
| onValueChange | 值变化时的回调函数 | (value: string) => void | -                                    | 0.2.0 |

## Item 属性

| 参数     | 说明     | 类型    | 默认值 | 版本  |
| -------- | -------- | ------- | ------ | ----- |
| value    | 选项的值 | string  | -      | 0.2.0 |
| disabled | 是否禁用 | boolean | false  | 0.2.0 |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/radio-cards) 获取完整 API 与设计规范。
