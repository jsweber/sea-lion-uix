# `react-text-area`

TextArea 是一个多行文本输入组件，用于用户输入较长的文本内容。组件支持多种尺寸、变体样式以及自定义调整大小方式。

## 安装

```sh
$ yarn add @sea-lion/react-text-area
# 或者
$ npm install @sea-lion/react-text-area
```

## 基本使用

```jsx
import { TextArea } from "@sea-lion/react-text-area";

export default () => {
  return (
    <>
      <TextArea placeholder="请输入描述..." />
    </>
  );
};
```

## 不同尺寸

TextArea 组件支持三种尺寸：

```jsx
<TextArea size="1" placeholder="小尺寸文本框" />
<TextArea size="2" placeholder="中等尺寸文本框（默认）" />
<TextArea size="3" placeholder="大尺寸文本框" />
```

## 不同变体

TextArea 组件支持三种视觉变体：

```jsx
<TextArea variant="surface" placeholder="Surface 变体（默认）" />
<TextArea variant="classic" placeholder="Classic 变体" />
<TextArea variant="soft" placeholder="Soft 变体" color="blue" />
```

## 调整大小方式

您可以控制文本框的调整大小方式：

```jsx
<TextArea resize="none" placeholder="不可调整大小" />
<TextArea resize="vertical" placeholder="可垂直调整大小" />
<TextArea resize="horizontal" placeholder="可水平调整大小" />
<TextArea resize="both" placeholder="可自由调整大小" />
```

## 颜色

TextArea 组件支持多种颜色，尤其是 soft 变体能很好地展示颜色：

```jsx
<TextArea variant="soft" color="blue" placeholder="蓝色文本框" />
<TextArea variant="soft" color="green" placeholder="绿色文本框" />
<TextArea variant="soft" color="red" placeholder="红色文本框" />
<TextArea variant="soft" color="purple" placeholder="紫色文本框" />
```

## 禁用和只读状态

```jsx
<TextArea disabled placeholder="禁用状态" />
<TextArea readOnly value="只读内容" />
```

## 自定义圆角

您可以自定义文本框的圆角大小：

```jsx
<TextArea radius="none" placeholder="无圆角" />
<TextArea radius="small" placeholder="小圆角" />
<TextArea radius="medium" placeholder="中等圆角" />
<TextArea radius="large" placeholder="大圆角" />
<TextArea radius="full" placeholder="完全圆角" />
```

## 默认值和受控组件

```jsx
// 非受控组件（使用默认值）
<TextArea defaultValue="默认文本内容" />;

// 受控组件
const [value, setValue] = React.useState("");
<TextArea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="请输入..."
/>;
```

## 属性

| 参数         | 说明           | 类型                                               | 默认值    | 版本  |
| ------------ | -------------- | -------------------------------------------------- | --------- | ----- |
| size         | 文本框尺寸     | '1' \| '2' \| '3'                                  | '2'       | 0.2.0 |
| variant      | 视觉变体       | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0 |
| resize       | 调整大小方式   | 'none' \| 'vertical' \| 'horizontal' \| 'both'     | -         | 0.2.0 |
| color        | 文本框颜色     | string                                             | -         | 0.2.0 |
| radius       | 圆角大小       | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0 |
| defaultValue | 默认值         | string                                             | -         | 0.2.0 |
| value        | 当前值（受控） | string                                             | -         | 0.2.0 |
| disabled     | 是否禁用       | boolean                                            | false     | 0.2.0 |
| readOnly     | 是否只读       | boolean                                            | false     | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
