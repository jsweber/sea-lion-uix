# `react-data-list`

DataList 是一个用于展示键值对列表的组件，通常用于展示属性、配置和详细信息。支持水平/垂直方向、多种尺寸、自定义对齐方式、标签颜色，以及响应式布局。

## 安装

```sh
pnpm add @sea-lion/react-data-list
# 或者
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## 使用

在代码中引入组件：

```tsx
import * as DataList from '@sea-lion/react-data-list';
```

### 基本用法

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>姓名</DataList.Label>
    <DataList.Value>张三</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>邮箱</DataList.Label>
    <DataList.Value>zhangsan@example.com</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>电话</DataList.Label>
    <DataList.Value>138-0000-0000</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>地址</DataList.Label>
    <DataList.Value>北京市海淀区</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 方向

通过 `orientation` 属性控制标签与值的排列方式：

```jsx
{/* 水平方向（默认）：标签和值在同一行 */}
<DataList.Root orientation="horizontal">
  <DataList.Item>
    <DataList.Label>用户名</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>创建时间</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 垂直方向：标签在值的上方 */}
<DataList.Root orientation="vertical">
  <DataList.Item>
    <DataList.Label>用户名</DataList.Label>
    <DataList.Value>admin</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>创建时间</DataList.Label>
    <DataList.Value>2023-01-01</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 尺寸

支持三种尺寸，通过 `size` 属性设置：

```jsx
{/* 小尺寸 */}
<DataList.Root size="1">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>内存</DataList.Label>
    <DataList.Value>16GB</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 中等尺寸（默认） */}
<DataList.Root size="2">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 大尺寸 */}
<DataList.Root size="3">
  <DataList.Item>
    <DataList.Label>操作系统</DataList.Label>
    <DataList.Value>Windows 11</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 条目对齐方式

通过 `DataList.Item` 的 `align` 属性控制标签与值之间的垂直对齐：

```jsx
{/* 顶部对齐 */}
<DataList.Root>
  <DataList.Item align="start">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 居中对齐 */}
<DataList.Root>
  <DataList.Item align="center">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 底部对齐 */}
<DataList.Root>
  <DataList.Item align="end">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 基线对齐（默认） */}
<DataList.Root>
  <DataList.Item align="baseline">
    <DataList.Label>项目描述</DataList.Label>
    <DataList.Value>这是一段较长的描述文本，会自动换行...</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 标签颜色

通过 `DataList.Label` 的 `color` 属性为不同标签设置语义化颜色：

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="gray">灰色标签（默认）</DataList.Label>
    <DataList.Value>标签默认为灰色</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="blue">蓝色标签</DataList.Label>
    <DataList.Value>用于表示信息或主要内容</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="green">绿色标签</DataList.Label>
    <DataList.Value>用于表示成功或通过状态</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="red">红色标签</DataList.Label>
    <DataList.Value>用于表示错误或警告</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="amber">琥珀色标签</DataList.Label>
    <DataList.Value>用于表示注意或待处理</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 高对比度标签

使用 `highContrast` 提升标签的可见性：

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label color="blue" highContrast>技术栈</DataList.Label>
    <DataList.Value>React, TypeScript, Node.js</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label color="crimson" highContrast>部署环境</DataList.Label>
    <DataList.Value>AWS, Docker, Kubernetes</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 自定义标签宽度

通过内联样式或 `width` 属性控制标签列的宽度：

```jsx
{/* 固定最小宽度 */}
<DataList.Root>
  <DataList.Item>
    <DataList.Label style={{ minWidth: '200px' }}>长标签名称</DataList.Label>
    <DataList.Value>对应的值</DataList.Value>
  </DataList.Item>
</DataList.Root>

{/* 百分比宽度 */}
<DataList.Root style={{ width: '100%' }}>
  <DataList.Item>
    <DataList.Label width="30%">标签</DataList.Label>
    <DataList.Value>值</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### 响应式布局

`orientation` 和 `size` 均支持响应式配置，适配不同屏幕尺寸：

```jsx
<DataList.Root
  orientation={{ initial: 'horizontal', xs: 'vertical', md: 'horizontal' }}
  size={{ initial: '1', sm: '2', lg: '3' }}
>
  <DataList.Item>
    <DataList.Label>产品名称</DataList.Label>
    <DataList.Value>智能手机 X10</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>价格</DataList.Label>
    <DataList.Value>¥3999</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>存储容量</DataList.Label>
    <DataList.Value>128GB</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

## 何时使用

- 需要以结构化方式展示对象属性或数据字段
- 展示用户资料、产品详情、配置项等信息
- 呈现表单数据的只读视图
- 需要清晰标记标签和对应值的场景

## Props / API 属性

### DataList.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `orientation` | 标签与值的排列方向 | `"horizontal" \| "vertical"` 或响应式对象 | `"horizontal"` |
| `size` | 列表尺寸 | `"1" \| "2" \| "3"` 或响应式对象 | `"2"` |
| `trim` | 修剪首尾空白 | `"normal" \| "start" \| "end" \| "both"` | `"normal"` |

### DataList.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `align` | 标签与值的垂直对齐方式 | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"baseline"` |

### DataList.Label

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `color` | 标签颜色 | `"gray" \| "blue" \| "green" \| "red" \| "amber" \| ...` | `"gray"` |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |
| `width` | 标签列宽度 | `string` | — |

### DataList.Value

接受标准 HTML 属性，可内嵌任意内容（如链接、徽章、图标等）。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/data-list) 获取完整 API 与设计规范。
