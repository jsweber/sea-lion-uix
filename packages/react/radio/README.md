# `react-radio`

Radio 是一个单选按钮组件，用于在一组选项中选择一个选项。

## 安装

```sh
$ yarn add @sea-lion/react-radio
# 或者
$ npm install @sea-lion/react-radio
```

## 基本使用

```jsx
import { Radio } from "@sea-lion/react-radio";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("选项1");

  return (
    <div>
      <div>
        <Radio
          value="选项1"
          checked={value === "选项1"}
          onValueChange={setValue}
          name="radio-group"
        />{" "}
        选项1
      </div>
      <div>
        <Radio
          value="选项2"
          checked={value === "选项2"}
          onValueChange={setValue}
          name="radio-group"
        />{" "}
        选项2
      </div>
    </div>
  );
};
```

## 不同尺寸

Radio 组件提供了三种尺寸：

```jsx
<Radio size="1" /> {/* 小尺寸 */}
<Radio size="2" /> {/* 默认尺寸 */}
<Radio size="3" /> {/* 大尺寸 */}
```

## 自定义颜色

```jsx
<Radio color="blue" />
<Radio color="green" />
<Radio color="red" />
<Radio color="purple" />
```

## 禁用状态

```jsx
<Radio disabled />
<Radio disabled checked />
```

## 高对比度模式

```jsx
<Radio highContrast />
```

## 分组使用

当需要在一组选项中选择一个时，可以使用相同的 `name` 属性将它们分组：

```jsx
<div>
  <div>
    <Radio name="fruits" value="apple" /> 苹果
  </div>
  <div>
    <Radio name="fruits" value="banana" /> 香蕉
  </div>
  <div>
    <Radio name="fruits" value="orange" /> 橙子
  </div>
</div>
```

## 属性

| 参数           | 说明                     | 类型                    | 默认值 | 版本  |
| -------------- | ------------------------ | ----------------------- | ------ | ----- |
| size           | 单选按钮尺寸             | '1' \| '2' \| '3'       | '2'    | 0.2.0 |
| color          | 颜色                     | 标准颜色                | -      | 0.2.0 |
| highContrast   | 高对比度模式             | boolean                 | false  | 0.2.0 |
| value          | 单选按钮的值             | string                  | -      | 0.2.0 |
| checked        | 是否选中                 | boolean                 | false  | 0.2.0 |
| defaultChecked | 默认是否选中             | boolean                 | false  | 0.2.0 |
| disabled       | 是否禁用                 | boolean                 | false  | 0.2.0 |
| name           | 单选按钮名称（用于分组） | string                  | -      | 0.2.0 |
| onValueChange  | 值变化时的回调函数       | (value: string) => void | -      | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
