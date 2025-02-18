import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { Theme } from '@sea-lion/react-theme';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';

/**
 * Card 是一个多功能的容器组件，用于组织和展示内容。
 * 它提供了不同的视觉样式和尺寸选项，可以用作按钮或链接。
 * 
 * 主要特点：
 * - 支持五种尺寸：1-5
 * - 提供三种视觉变体：surface、classic、ghost
 * - 可以作为容器、按钮或链接使用
 * - 支持响应式布局
 */

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// 基本用法示例
export const Basic: Story = {
  name: '基本用法',
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['1', '2', '3', '4', '5'],
      description: '卡片尺寸："1" | "2" | "3" | "4" | "5"',
    },
    variant: {
      control: 'inline-radio',
      options: ['surface', 'classic', 'ghost'],
      description: '视觉变体："surface" | "classic" | "ghost"',
    },
    asChild: {
      control: 'boolean',
      description: '是否将样式传递给子组件',
    }
  },
  args: {
    size: '2',
    variant: 'surface',
    asChild: false,
  },
  render: (props) => (
    <Theme>
      <Card {...props}>
        <Text as="div" size="3" weight="bold" mb="2">
          卡片标题
        </Text>
        <Text as="div" color="gray">
          这是一个基础的卡片示例，展示了卡片组件的基本用法。
        </Text>
      </Card>
    </Theme>
  )
};

// 不同尺寸示例
export const Sizes: Story = {
  name: '不同尺寸',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {['1', '2', '3', '4', '5'].map((size) => (
          <Card key={size} size={size as any}>
            <Text as="div" size="3" weight="bold" mb="2">
              Size {size}
            </Text>
            <Text as="div" color="gray">
              尺寸 {size} 的卡片示例
            </Text>
          </Card>
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
        {['surface', 'classic', 'ghost'].map((variant) => (
          <Card key={variant} variant={variant as any}>
            <Text as="div" size="3" weight="bold" mb="2">
              {variant} 变体
            </Text>
            <Text as="div" color="gray">
              使用 {variant} 视觉风格的卡片
            </Text>
          </Card>
        ))}
      </Flex>
    </Theme>
  )
};

// 交互示例
export const Interactive: Story = {
  name: '可交互卡片',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {/* 按钮卡片 */}
        <Card asChild>
          <button onClick={() => alert('按钮卡片被点击')}>
            <Text as="div" size="3" weight="bold" mb="2">
              按钮卡片
            </Text>
            <Text as="div" color="gray">
              点击此卡片会触发事件
            </Text>
          </button>
        </Card>

        {/* 链接卡片 */}
        <Card asChild>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <Text as="div" size="3" weight="bold" mb="2">
              链接卡片
            </Text>
            <Text as="div" color="gray">
              这个卡片是一个链接
            </Text>
          </a>
        </Card>
      </Flex>
    </Theme>
  )
};

// 内容布局示例
export const ContentLayout: Story = {
  name: '内容布局',
  render: () => (
    <Theme>
      <Card size="3">
        <Flex direction="column" gap="4">
          <Text as="div" size="6" weight="bold">
            内容布局示例
          </Text>
          
          <Text as="div" color="gray">
            卡片可以容纳各种类型的内容，包括标题、文本、图片等。
            这个示例展示了一个较为复杂的内容布局。
          </Text>
          
          <Flex gap="4" align="center">
            <Text size="2" color="gray">
              标签:
            </Text>
            <Card variant="ghost" size="1">
              示例标签
            </Card>
            <Card variant="ghost" size="1">
              布局演示
            </Card>
          </Flex>
        </Flex>
      </Card>
    </Theme>
  )
};

// 图文卡片示例
export const ImageCard: Story = {
  name: '图文卡片',
  render: () => (
    <Theme>
      <Flex direction="column" gap="4">
        {/* 垂直布局的图文卡片 */}
        <Card size="3">
          <Flex direction="column" gap="3">
            <img
              src="https://images.unsplash.com/photo-1615044606239-76f225b0d0bb?w=600&h=400&auto=format&fit=crop"
              alt="排版设计"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-3)'
              }}
            />
            <Text as="div" size="6" weight="bold">
              排版设计
            </Text>
            <Text as="div" color="gray" size="2">
              Typography is the art and technique of arranging type 
              to make written language legible, readable and appealing when displayed.
            </Text>
          </Flex>
        </Card>

        {/* 水平布局的图文卡片 */}
        <Card size="3">
          <Flex gap="4" align="start">
            <img
              src="https://images.unsplash.com/photo-1615044606239-76f225b0d0bb?w=300&h=300&auto=format&fit=crop"
              alt="排版设计"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-2)',
                flexShrink: 0
              }}
            />
            <Flex direction="column" gap="2">
              <Text as="div" size="5" weight="bold">
                排版设计
              </Text>
              <Text as="div" color="gray" size="2">
                Typography is the art and technique of arranging type 
                to make written language legible, readable and appealing when displayed.
                排版是一门关于如何安排和组织文字的艺术与技术。
              </Text>
            </Flex>
          </Flex>
        </Card>

        {/* 卡片组合布局 */}
        <Flex gap="4">
          {[1, 2, 3].map((i) => (
            <Card key={i} size="2" style={{ flex: 1 }}>
              <Flex direction="column" gap="3">
                <img
                  src="https://images.unsplash.com/photo-1615044606239-76f225b0d0bb?w=300&h=200&auto=format&fit=crop"
                  alt="排版设计"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-2)'
                  }}
                />
                <Text as="div" size="3" weight="bold">
                  排版设计 {i}
                </Text>
                <Text as="div" color="gray" size="2">
                  简短的排版设计说明文字
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Theme>
  )
};

// 简洁图文卡片示例
export const SimpleImageCard: Story = {
  name: '简洁图文卡片',
  render: () => (
    <Theme>
      <Flex gap="4">
        <Card size="2" style={{ width: '300px' }}>
          <Flex direction="column">
            <img
              src="https://images.unsplash.com/photo-1615044606239-76f225b0d0bb?w=300&h=200&auto=format&fit=crop"
              alt="排版设计"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                marginBottom: 'var(--space-3)',
                borderRadius: 'var(--radius-2)'
              }}
            />
            <Text 
              as="div" 
              size="3" 
              weight="medium"
              style={{ marginBottom: 'var(--space-2)' }}
            >
              Typography
            </Text>
            <Text as="div" color="gray" size="2">
              is the art and technique of arranging type to make written language legible, readable and appealing when displayed.
            </Text>
          </Flex>
        </Card>

        <Card size="2" style={{ width: '300px' }}>
          <Flex direction="column">
            <img
              src="https://images.unsplash.com/photo-1615044606239-76f225b0d0bb?w=300&h=200&auto=format&fit=crop"
              alt="排版设计"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                marginBottom: 'var(--space-3)',
                borderRadius: 'var(--radius-2)'
              }}
            />
            <Text 
              as="div" 
              size="3" 
              weight="medium"
              style={{ marginBottom: 'var(--space-2)' }}
            >
              排版设计
            </Text>
            <Text as="div" color="gray" size="2">
              是一门关于如何安排和组织文字的艺术与技术，目标是使文字清晰易读且具有视觉吸引力。
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Theme>
  )
}; 