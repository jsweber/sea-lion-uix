import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './box';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

const meta = {
  title: '布局/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

// 基本用法示例
export const Basic: Story = {
  name: '基本用法',
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'span'],
      description: '渲染的HTML元素："div" | "span"',
    },
    display: {
      control: 'inline-radio',
      options: ['none', 'inline', 'inline-block', 'block'],
      description: '显示方式："none" | "inline" | "inline-block" | "block"',
    },
    asChild: {
      control: 'boolean',
      description: '是否将样式传递给子组件',
    }
  },
  args: {
    as: 'div',
    display: 'block',
    asChild: false,
    style: {
      padding: '20px',
      border: '1px solid var(--gray-a6)',
      borderRadius: 'var(--radius-3)'
    },
    children: '这是一个基础的 Box 容器'
  },
  render: (props) => (
    <Theme>
      <Box {...props} />
    </Theme>
  )
};

// 不同显示方式示例
export const DisplayModes: Story = {
  name: '不同显示方式',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['block', 'inline-block', 'inline'].map((display) => (
          <Flex key={display} align="center" gap="4">
            <Text size="2" style={{ width: '100px' }}>{display}:</Text>
            <Box 
              display={display as any}
              style={{
                padding: '10px',
                border: '1px solid var(--gray-a6)',
                borderRadius: 'var(--radius-2)'
              }}
            >
              Display: {display}
            </Box>
            <Box 
              display={display as any}
              style={{
                padding: '10px',
                border: '1px solid var(--gray-a6)',
                borderRadius: 'var(--radius-2)'
              }}
            >
              第二个 Box
            </Box>
          </Flex>
        ))}
      </Flex>
    </Theme>
  )
};

// 不同HTML元素示例
export const Elements: Story = {
  name: '不同HTML元素',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        <Box as="div" style={{ padding: '20px', border: '1px solid var(--gray-a6)' }}>
          这是一个 div Box
        </Box>
        <Text>
          这是一段文字，包含一个
          <Box 
            as="span" 
            style={{ 
              padding: '0 8px',
              margin: '0 4px',
              backgroundColor: 'var(--accent-a3)',
              borderRadius: 'var(--radius-1)'
            }}
          >
            span Box
          </Box>
          元素
        </Text>
      </Flex>
    </Theme>
  )
};

// 布局示例
export const Layout: Story = {
  name: '布局示例',
  render: () => (
    <Theme>
      <Box 
        style={{
          padding: '20px',
          border: '1px solid var(--gray-a6)',
          borderRadius: 'var(--radius-3)'
        }}
      >
        <Box 
          style={{
            padding: '16px',
            backgroundColor: 'var(--accent-a3)',
            borderRadius: 'var(--radius-2)',
            marginBottom: '16px'
          }}
        >
          <Text size="5">标题区域</Text>
        </Box>
        <Box 
          style={{
            padding: '16px',
            backgroundColor: 'var(--gray-a3)',
            borderRadius: 'var(--radius-2)'
          }}
        >
          <Text>内容区域</Text>
        </Box>
      </Box>
    </Theme>
  )
};

// 响应式示例
export const Responsive: Story = {
  name: '响应式',
  render: () => (
    <Theme>
      <Box
        display={{ initial: 'block', sm: 'inline-block', lg: 'inline' }}
        style={{
          padding: '20px',
          border: '1px solid var(--gray-a6)',
          borderRadius: 'var(--radius-3)'
        }}
      >
        <Text>
          这个 Box 会根据屏幕尺寸改变显示方式：
          小屏幕时为 block，
          中等屏幕时为 inline-block，
          大屏幕时为 inline
        </Text>
      </Box>
    </Theme>
  )
};

// 添加 asChild 示例
export const AsChild: Story = {
  name: '样式传递',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        <Text size="2" mb="2">默认 Box:</Text>
        <Box style={{ padding: '16px', backgroundColor: 'var(--accent-a3)' }}>
          普通文本内容
        </Box>

        <Text size="2" mb="2">使用 asChild 传递样式给按钮:</Text>
        <Box
          asChild
          style={{ 
            padding: '16px', 
            backgroundColor: 'var(--accent-a3)',
            border: 'none',
            borderRadius: 'var(--radius-2)',
            cursor: 'pointer'
          }}
        >
          <button onClick={() => alert('按钮被点击')}>
            可点击的按钮
          </button>
        </Box>
      </Flex>
    </Theme>
  )
}; 