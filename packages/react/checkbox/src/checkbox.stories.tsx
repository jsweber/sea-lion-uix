import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/**
 * Checkbox 是一个复选框组件，用于在表单中进行多选操作。
 * 它提供了丰富的视觉样式和状态。
 * 
 * 主要特点：
 * - 支持选中、未选中和半选状态
 * - 提供多种颜色主题
 * - 支持禁用状态
 * - 支持高对比度模式
 */

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 基本用法示例
export const Basic: Story = {
  name: '基本用法',
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'gold', 'bronze', 'red', 'blue', 'green'],
      description: '颜色主题',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    highContrast: {
      control: 'boolean',
      description: '是否使用高对比度',
    },
    defaultChecked: {
      control: 'boolean',
      description: '默认是否选中',
    }
  },
  args: {
    color: 'blue',
    disabled: false,
    highContrast: false,
    defaultChecked: false,
  },
  render: (props) => (
    <Theme>
      <Flex align="center" gap="2">
        <Checkbox {...props} />
        <Text>基础复选框</Text>
      </Flex>
    </Theme>
  )
};

// 不同状态示例
export const States: Story = {
  name: '不同状态',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        <Flex align="center" gap="2">
          <Checkbox defaultChecked />
          <Text>选中状态</Text>
        </Flex>
        
        <Flex align="center" gap="2">
          <Checkbox checked="indeterminate" />
          <Text>半选状态</Text>
        </Flex>
        
        <Flex align="center" gap="2">
          <Checkbox disabled />
          <Text color="gray">禁用状态</Text>
        </Flex>
        
        <Flex align="center" gap="2">
          <Checkbox disabled defaultChecked />
          <Text color="gray">禁用且选中</Text>
        </Flex>
      </Flex>
    </Theme>
  )
};

// 不同颜色示例
export const Colors: Story = {
  name: '不同颜色',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
          <Flex key={color} align="center" gap="2">
            <Checkbox color={color as any} defaultChecked />
            <Text>{color} 主题</Text>
          </Flex>
        ))}
      </Flex>
    </Theme>
  )
};

// 高对比度示例
export const HighContrast: Story = {
  name: '高对比度',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
          <Flex key={color} align="center" gap="2">
            <Checkbox color={color as any} highContrast defaultChecked />
            <Text>高对比度 {color}</Text>
          </Flex>
        ))}
      </Flex>
    </Theme>
  )
};

// 表单应用示例
export const FormExample: Story = {
  name: '表单应用',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Theme>
        <Flex direction="column" gap="4">
          <Text size="3" weight="bold">用户协议</Text>
          
          <Flex align="start" gap="2">
            <Checkbox 
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
            />
            <Text size="2">
              我已阅读并同意
              <Text as="span" color="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.alert('打开用户协议')}>
                《用户协议》
              </Text>
              和
              <Text as="span" color="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.alert('打开隐私政策')}>
                《隐私政策》
              </Text>
            </Text>
          </Flex>
          
          <button 
            disabled={!checked}
            style={{
              padding: '8px 16px',
              backgroundColor: checked ? 'var(--accent-9)' : 'var(--gray-a5)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-2)',
              cursor: checked ? 'pointer' : 'not-allowed'
            }}
          >
            下一步
          </button>
        </Flex>
      </Theme>
    );
  }
}; 