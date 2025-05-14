import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';
import * as SegmentedControl from '@sea-lion/react-segmented-control';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { useState } from 'react';

/**
 * ## 介绍
 * 
 * SegmentedControl 是一个分段控制器组件，用于在一组相关选项中进行单选。它提供了一个可视化的指示器，显示当前选中的选项。
 * 
 * ## 何时使用
 * 
 * - 需要在有限的选项中进行单项选择
 * - 需要提供明确的视觉反馈以指示当前选择的选项
 * - 选项数量较少（通常2-5个）且相互排斥
 * - 适用于筛选、视图切换、时间单位选择等场景
 */
const meta: Meta<typeof SegmentedControl.Root> = {
  title: '导航/SegmentedControl',
  component: SegmentedControl.Root,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: null,
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <div className="story-book-container">
          <div className="story-book-margin-top-20">
            <Story />
          </div>
        </div>
      </Theme>
    ),
  ],
};

export default meta;

export const Basic = () => {
  return (
    <Box>
      <Heading size="3" mb="4">基础用法</Heading>
      <Text mb="3">
        SegmentedControl 提供了一种在互斥选项之间进行选择的方式。当某一选项被选中时，会显示一个视觉指示器。
      </Text>
      <Box mb="6" style={{ maxWidth: '600px' }}>
        <SegmentedControl.Root defaultValue="daily">
          <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
          <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
          <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
        </SegmentedControl.Root>
      </Box>
    </Box>
  );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">尺寸</Heading>
      <Text mb="3">
        SegmentedControl 提供三种尺寸，适应不同的界面密度和重要程度。
      </Text>
      <Flex direction="column" gap="4" mb="6" style={{ maxWidth: '600px' }}>
        <Box>
          <Text mb="2" size="2" weight="medium">小尺寸 (size="1")</Text>
          <SegmentedControl.Root size="1" defaultValue="apple">
            <SegmentedControl.Item value="apple">苹果</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">香蕉</SegmentedControl.Item>
            <SegmentedControl.Item value="orange">橙子</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">中等尺寸 (size="2")（默认）</Text>
          <SegmentedControl.Root size="2" defaultValue="apple">
            <SegmentedControl.Item value="apple">苹果</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">香蕉</SegmentedControl.Item>
            <SegmentedControl.Item value="orange">橙子</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">大尺寸 (size="3")</Text>
          <SegmentedControl.Root size="3" defaultValue="apple">
            <SegmentedControl.Item value="apple">苹果</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">香蕉</SegmentedControl.Item>
            <SegmentedControl.Item value="orange">橙子</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
      </Flex>
    </Box>
  );
};

Sizes.storyName = '尺寸';

export const Variants = () => {
  return (
    <Box>
      <Heading size="3" mb="4">变体</Heading>
      <Text mb="3">
        SegmentedControl 提供了两种视觉变体，以适应不同的设计风格。
      </Text>
      <Flex direction="column" gap="4" mb="6" style={{ maxWidth: '600px' }}>
        <Box>
          <Text mb="2" size="2" weight="medium">Surface 变体（默认）</Text>
          <SegmentedControl.Root variant="surface" defaultValue="list">
            <SegmentedControl.Item value="list">列表</SegmentedControl.Item>
            <SegmentedControl.Item value="grid">网格</SegmentedControl.Item>
            <SegmentedControl.Item value="table">表格</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">Classic 变体</Text>
          <SegmentedControl.Root variant="classic" defaultValue="list">
            <SegmentedControl.Item value="list">列表</SegmentedControl.Item>
            <SegmentedControl.Item value="grid">网格</SegmentedControl.Item>
            <SegmentedControl.Item value="table">表格</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
      </Flex>
    </Box>
  );
};

Variants.storyName = '变体';

export const Radius = () => {
  return (
    <Box>
      <Heading size="3" mb="4">圆角</Heading>
      <Text mb="3">
        通过 radius 属性可以控制 SegmentedControl 的圆角大小。
      </Text>
      <Flex direction="column" gap="4" mb="6" style={{ maxWidth: '600px' }}>
        <Box>
          <Text mb="2" size="2" weight="medium">无圆角 (radius="none")</Text>
          <SegmentedControl.Root radius="none" defaultValue="yes">
            <SegmentedControl.Item value="yes">是</SegmentedControl.Item>
            <SegmentedControl.Item value="no">否</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">小圆角 (radius="small")</Text>
          <SegmentedControl.Root radius="small" defaultValue="yes">
            <SegmentedControl.Item value="yes">是</SegmentedControl.Item>
            <SegmentedControl.Item value="no">否</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">中等圆角 (radius="medium")</Text>
          <SegmentedControl.Root radius="medium" defaultValue="yes">
            <SegmentedControl.Item value="yes">是</SegmentedControl.Item>
            <SegmentedControl.Item value="no">否</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">大圆角 (radius="large")</Text>
          <SegmentedControl.Root radius="large" defaultValue="yes">
            <SegmentedControl.Item value="yes">是</SegmentedControl.Item>
            <SegmentedControl.Item value="no">否</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
        <Box>
          <Text mb="2" size="2" weight="medium">全圆角 (radius="full")</Text>
          <SegmentedControl.Root radius="full" defaultValue="yes">
            <SegmentedControl.Item value="yes">是</SegmentedControl.Item>
            <SegmentedControl.Item value="no">否</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
      </Flex>
    </Box>
  );
};

Radius.storyName = '圆角';

export const Controlled = () => {
  const [value, setValue] = useState('daily');
  
  return (
    <Box>
      <Heading size="3" mb="4">受控模式</Heading>
      <Text mb="3">
        SegmentedControl 可以作为受控组件使用，通过 value 和 onValueChange 属性来控制选中状态。
      </Text>
      <Box mb="4" style={{ maxWidth: '600px' }}>
        <SegmentedControl.Root 
          value={value} 
          onValueChange={setValue}
        >
          <SegmentedControl.Item value="daily">每日</SegmentedControl.Item>
          <SegmentedControl.Item value="weekly">每周</SegmentedControl.Item>
          <SegmentedControl.Item value="monthly">每月</SegmentedControl.Item>
        </SegmentedControl.Root>
      </Box>
      <Box>
        <Text size="2">当前选中值: <code>{value}</code></Text>
      </Box>
    </Box>
  );
};

Controlled.storyName = '受控模式';

export const UseCases = () => {
  return (
    <Box>
      <Heading size="3" mb="4">实用案例</Heading>
      <Text mb="5">以下是 SegmentedControl 组件在实际应用中的一些常见用法。</Text>
      
      <Box mb="8">
        <Heading size="2" mb="3">时间范围选择器</Heading>
        <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px', maxWidth: '500px' }}>
          <Text size="2" weight="medium" mb="3">数据趋势</Text>
          <SegmentedControl.Root defaultValue="month">
            <SegmentedControl.Item value="day">今日</SegmentedControl.Item>
            <SegmentedControl.Item value="week">本周</SegmentedControl.Item>
            <SegmentedControl.Item value="month">本月</SegmentedControl.Item>
            <SegmentedControl.Item value="year">本年</SegmentedControl.Item>
          </SegmentedControl.Root>
          <Box mt="4" style={{ height: '160px', backgroundColor: 'var(--gray-2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text color="gray">图表区域</Text>
          </Box>
        </Box>
      </Box>
      
      <Box mb="8">
        <Heading size="2" mb="3">视图切换器</Heading>
        <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px', maxWidth: '500px' }}>
          <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }} mb="3">
            <Text size="2" weight="medium">文件列表</Text>
            <SegmentedControl.Root size="1" defaultValue="list">
              <SegmentedControl.Item value="list">列表</SegmentedControl.Item>
              <SegmentedControl.Item value="grid">网格</SegmentedControl.Item>
            </SegmentedControl.Root>
          </Flex>
          <Box style={{ height: '160px', backgroundColor: 'var(--gray-2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text color="gray">内容区域</Text>
          </Box>
        </Box>
      </Box>
      
      <Box>
        <Heading size="2" mb="3">设置选项</Heading>
        <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px', maxWidth: '500px' }}>
          <Text size="2" weight="medium" mb="2">主题设置</Text>
          <SegmentedControl.Root variant="classic" defaultValue="auto">
            <SegmentedControl.Item value="light">浅色</SegmentedControl.Item>
            <SegmentedControl.Item value="dark">深色</SegmentedControl.Item>
            <SegmentedControl.Item value="auto">自动</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
      </Box>
    </Box>
  );
};

UseCases.storyName = '实用案例';

export const SegmentedControlAPI = () => {
  return (
    <Theme>
      <Box p="5" style={{ maxWidth: '900px' }}>
        <Heading size="4" mb="4">组件 API</Heading>
        <Box style={{ overflowX: 'auto' }}>
          <Text size="3" weight="bold" mb="3">Root 属性</Text>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--gray-3)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '15%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '30%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>默认值</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>版本</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                <td style={{ padding: '12px 16px' }}>size</td>
                <td style={{ padding: '12px 16px' }}>控件大小</td>
                <td style={{ padding: '12px 16px' }}>'1' | '2' | '3'</td>
                <td style={{ padding: '12px 16px' }}>'2'</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}>variant</td>
                <td style={{ padding: '12px 16px' }}>视觉变体</td>
                <td style={{ padding: '12px 16px' }}>'surface' | 'classic'</td>
                <td style={{ padding: '12px 16px' }}>'surface'</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                <td style={{ padding: '12px 16px' }}>radius</td>
                <td style={{ padding: '12px 16px' }}>圆角大小</td>
                <td style={{ padding: '12px 16px' }}>'none' | 'small' | 'medium' | 'large' | 'full'</td>
                <td style={{ padding: '12px 16px' }}>-</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}>value</td>
                <td style={{ padding: '12px 16px' }}>当前选中值</td>
                <td style={{ padding: '12px 16px' }}>string</td>
                <td style={{ padding: '12px 16px' }}>-</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                <td style={{ padding: '12px 16px' }}>defaultValue</td>
                <td style={{ padding: '12px 16px' }}>默认选中值</td>
                <td style={{ padding: '12px 16px' }}>string</td>
                <td style={{ padding: '12px 16px' }}>-</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}>onValueChange</td>
                <td style={{ padding: '12px 16px' }}>值变化回调函数</td>
                <td style={{ padding: '12px 16px' }}>{'(value: string) => void'}</td>
                <td style={{ padding: '12px 16px' }}>-</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
            </tbody>
          </table>
          
          <Text size="3" weight="bold" mt="6" mb="3">Item 属性</Text>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--gray-3)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '15%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '30%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>默认值</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', width: '10%', borderBottom: '2px solid var(--gray-5)' }}>版本</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'var(--gray-1)' }}>
                <td style={{ padding: '12px 16px' }}>value</td>
                <td style={{ padding: '12px 16px' }}>选项的值</td>
                <td style={{ padding: '12px 16px' }}>string</td>
                <td style={{ padding: '12px 16px' }}>-</td>
                <td style={{ padding: '12px 16px' }}>0.2.0</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Theme>
  );
};

SegmentedControlAPI.storyName = '组件 API'; 