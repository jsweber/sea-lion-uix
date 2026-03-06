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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="选项1"
          checked={value === "选项1"}
          onValueChange={setValue}
          name="radio-group"
        />
        选项1
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          value="选项2"
          checked={value === "选项2"}
          onValueChange={setValue}
          name="radio-group"
        />
        选项2
      </div>
    </div>
  );
};
```

## 不同尺寸

Radio 组件提供了三种尺寸：

```jsx
<Radio size="1" value="s1" defaultChecked name="s1" /> {/* 小尺寸 */}
<Radio size="2" value="s2" defaultChecked name="s2" /> {/* 默认尺寸 */}
<Radio size="3" value="s3" defaultChecked name="s3" /> {/* 大尺寸 */}
```

## 自定义颜色

```jsx
<Radio value="default" defaultChecked name="c1" />           {/* 默认颜色 */}
<Radio value="blue" color="blue" defaultChecked name="c2" /> {/* 蓝色 */}
<Radio value="green" color="green" defaultChecked name="c3" /> {/* 绿色 */}
<Radio value="red" color="red" defaultChecked name="c4" /> {/* 红色 */}
<Radio value="purple" color="purple" defaultChecked name="c5" /> {/* 紫色 */}
<Radio value="orange" color="orange" defaultChecked name="c6" /> {/* 橙色 */}
```

## 禁用状态

```jsx
<Radio disabled value="d1" name="d1" />             {/* 禁用未选中 */}
<Radio disabled defaultChecked value="d2" name="d2" /> {/* 禁用已选中 */}
```

## 高对比度模式

```jsx
<Radio value="c1" defaultChecked name="contrast1" />                    {/* 普通对比度 */}
<Radio value="c2" highContrast defaultChecked name="contrast2" />        {/* 高对比度 */}
<Radio value="c3" color="blue" defaultChecked name="contrast3" />        {/* 普通对比度（蓝色）*/}
<Radio value="c4" color="blue" highContrast defaultChecked name="contrast4" /> {/* 高对比度（蓝色） */}
```

## 分组使用

当需要在一组选项中选择一个时，可以使用相同的 `name` 属性将它们分组：

```jsx
const [fruit, setFruit] = useState("apple");

<div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="apple" checked={fruit === "apple"} onValueChange={setFruit} />
    苹果
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="banana" checked={fruit === "banana"} onValueChange={setFruit} />
    香蕉
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Radio name="fruits" value="orange" checked={fruit === "orange"} onValueChange={setFruit} />
    橙子
  </div>
</div>
```

## 实用场景

### 个人信息表单

```jsx
const [gender, setGender] = useState("male");
const [education, setEducation] = useState("bachelor");

<form>
  <div>
    <p>性别</p>
    <div style={{ display: 'flex', gap: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="male" checked={gender === "male"} onValueChange={setGender} />
        男
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio name="gender" value="female" checked={gender === "female"} onValueChange={setGender} />
        女
      </label>
    </div>
  </div>

  <div>
    <p>最高学历</p>
    {['高中', '本科', '硕士', '博士'].map((level, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <Radio name="education" value={level} checked={education === level} onValueChange={setEducation} />
        {level}
      </label>
    ))}
  </div>
</form>
```

### 选项偏好切换

```jsx
const [preference, setPreference] = useState("option1");

<div>
  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
    {['选项一', '选项二', '选项三'].map((opt, i) => (
      <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Radio
          size="3"
          color="purple"
          name="preference"
          value={`option${i + 1}`}
          checked={preference === `option${i + 1}`}
          onValueChange={setPreference}
        />
        {opt}
      </label>
    ))}
  </div>
  <div style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: '4px' }}>
    当前选中：{preference}
  </div>
</div>
```

## 何时使用

- 用户需要在一组互斥选项中做单选时
- 选项数量较少且可全部显示时（通常不超过 7 个）
- 需要立即提交选择结果，无需确认操作时
- 相比下拉框，需要让用户直观地看到所有可选项时

## 属性

| 参数           | 说明                     | 类型                    | 默认值 |
| -------------- | ------------------------ | ----------------------- | ------ |
| size           | 单选按钮尺寸             | '1' \| '2' \| '3'       | '2'    |
| color          | 颜色                     | 标准颜色                | -      |
| highContrast   | 高对比度模式             | boolean                 | false  |
| value          | 单选按钮的值             | string                  | -      |
| checked        | 是否选中                 | boolean                 | false  |
| defaultChecked | 默认是否选中             | boolean                 | false  |
| disabled       | 是否禁用                 | boolean                 | false  |
| name           | 单选按钮名称（用于分组） | string                  | -      |
| onValueChange  | 值变化时的回调函数       | (value: string) => void | -      |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/radio) 获取完整 API 与设计规范。
