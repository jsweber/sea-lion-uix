import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as CheckboxCards from './checkbox-cards';
import { Theme } from '@sea-lion/react-theme';
import { Text } from '@sea-lion/react-text';
import { Flex } from '@sea-lion/react-flex';
import { InfoCircledIcon, RocketIcon, GearIcon } from '@radix-ui/react-icons';

/**
 * CheckboxCards 是一个卡片式复选框组件，用于在网格布局中进行多选操作。
 * 它结合了卡片的视觉效果和复选框的功能。
 * 
 * 主要特点：
 * - 支持三种尺寸：1-3
 * - 提供两种视觉变体：surface、classic
 * - 支持网格布局
 * - 支持高对比度模式
 */

const meta = {
  title: '数据录入/CheckboxCards',
  component: CheckboxCards.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxCards.Root>;

export default meta;
type Story = StoryObj<typeof CheckboxCards.Root>;

// 基本用法示例
export const Basic: Story = {
  name: '基本用法',
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['1', '2', '3'],
      description: '卡片尺寸："1" | "2" | "3"',
    },
    variant: {
      control: 'inline-radio',
      options: ['surface', 'classic'],
      description: '视觉变体："surface" | "classic"',
    },
    color: {
      control: 'select',
      options: ['gray', 'gold', 'bronze', 'red', 'blue', 'green'],
      description: '颜色主题',
    },
    highContrast: {
      control: 'boolean',
      description: '是否使用高对比度',
    }
  },
  args: {
    size: '2',
    variant: 'surface',
    color: 'blue',
    highContrast: false,
  },
  render: (props) => (
    <Theme>
      <CheckboxCards.Root {...props}>
        <CheckboxCards.Item value="option1">
          <InfoCircledIcon width="20" height="20" />
          <Text>选项一</Text>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="option2">
          <RocketIcon width="20" height="20" />
          <Text>选项二</Text>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="option3">
          <GearIcon width="20" height="20" />
          <Text>选项三</Text>
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </Theme>
  )
};

// 不同尺寸示例
export const Sizes: Story = {
  name: '不同尺寸',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['1', '2', '3'].map((size) => (
          <CheckboxCards.Root key={size} size={size as any}>
            <CheckboxCards.Item value="option1">
              <InfoCircledIcon width={size === '3' ? '24' : '20'} height={size === '3' ? '24' : '20'} />
              <Text>尺寸 {size}</Text>
            </CheckboxCards.Item>
            <CheckboxCards.Item value="option2">
              <RocketIcon width={size === '3' ? '24' : '20'} height={size === '3' ? '24' : '20'} />
              <Text>示例选项</Text>
            </CheckboxCards.Item>
          </CheckboxCards.Root>
        ))}
      </Flex>
    </Theme>
  )
};

// 不同变体示例
export const Variants: Story = {
  name: '不同变体',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['surface', 'classic'].map((variant) => (
          <CheckboxCards.Root key={variant} variant={variant as any}>
            <CheckboxCards.Item value="option1">
              <InfoCircledIcon width="20" height="20" />
              <Text>{variant} 变体</Text>
            </CheckboxCards.Item>
            <CheckboxCards.Item value="option2">
              <RocketIcon width="20" height="20" />
              <Text>示例选项</Text>
            </CheckboxCards.Item>
          </CheckboxCards.Root>
        ))}
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
          <CheckboxCards.Root key={color} color={color as any}>
            <CheckboxCards.Item value="option1">
              <InfoCircledIcon width="20" height="20" />
              <Text>{color} 主题</Text>
            </CheckboxCards.Item>
            <CheckboxCards.Item value="option2">
              <RocketIcon width="20" height="20" />
              <Text>示例选项</Text>
            </CheckboxCards.Item>
          </CheckboxCards.Root>
        ))}
      </Flex>
    </Theme>
  )
};

// 实际应用示例
export const UseCases: Story = {
  name: '实际应用',
  render: () => {
    const [values, setValues] = React.useState<string[]>([]);
    return (
      <Theme>
        <Flex direction="column" gap="4">
          <Text size="3" weight="bold">选择功能模块：</Text>
          
          <CheckboxCards.Root 
            value={values}
            onValueChange={setValues}
            color="blue"
          >
            <CheckboxCards.Item value="analytics">
              <InfoCircledIcon width="20" height="20" />
              <Flex direction="column" gap="1">
                <Text weight="bold">数据分析</Text>
                <Text size="2" color="gray">提供详细的数据分析报告</Text>
              </Flex>
            </CheckboxCards.Item>
            
            <CheckboxCards.Item value="automation">
              <RocketIcon width="20" height="20" />
              <Flex direction="column" gap="1">
                <Text weight="bold">自动化处理</Text>
                <Text size="2" color="gray">自动执行重复性任务</Text>
              </Flex>
            </CheckboxCards.Item>
            
            <CheckboxCards.Item value="settings">
              <GearIcon width="20" height="20" />
              <Flex direction="column" gap="1">
                <Text weight="bold">系统设置</Text>
                <Text size="2" color="gray">自定义系统配置选项</Text>
              </Flex>
            </CheckboxCards.Item>
          </CheckboxCards.Root>
          
          <Text size="2" color="gray">
            已选择: {values.length ? values.join(', ') : '未选择任何选项'}
          </Text>
        </Flex>
      </Theme>
    );
  }
};

// 高对比度示例
export const HighContrast: Story = {
  name: '高对比度',
  render: () => (
    <Theme>
      <CheckboxCards.Root highContrast>
        <CheckboxCards.Item value="option1">
          <InfoCircledIcon width="20" height="20" />
          <Text>高对比度选项一</Text>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="option2">
          <RocketIcon width="20" height="20" />
          <Text>高对比度选项二</Text>
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </Theme>
  )
}; 