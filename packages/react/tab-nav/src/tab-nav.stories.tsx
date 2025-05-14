import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';
import * as TabNav from '@sea-lion/react-tab-nav';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { 
  TabNavRootPropsComponent, 
  TabNavLinkPropsComponent 
} from './tab-nav-props-table';

/**
 * ## 介绍
 * 
 * TabNav 是一个导航菜单组件，用于创建导航栏和标签式导航。
 * 
 * ## 何时使用
 * 
 * - 需要在页面之间导航时
 * - 创建顶部或侧边导航栏
 * - 当页面需要分成多个部分时
 */
const meta: Meta<typeof TabNav.Root> = {
  title: '导航/TabNav',
  component: TabNav.Root,
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

export const BasicUsage = () => {
  return (
    <Box>
      <Heading size="3" mb="4">基本用法</Heading>
      <Text mb="5">最基本的导航菜单组件。</Text>
      
      <TabNav.Root>
        <TabNav.Link href="#home" active>首页</TabNav.Link>
        <TabNav.Link href="#products">产品</TabNav.Link>
        <TabNav.Link href="#docs">文档</TabNav.Link>
        <TabNav.Link href="#about">关于我们</TabNav.Link>
      </TabNav.Root>
    </Box>
  );
};

BasicUsage.storyName = '基本用法';

export const DifferentSizes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">不同尺寸</Heading>
      <Text mb="5">TabNav 组件提供三种尺寸。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">尺寸 1（最小）</Text>
          <TabNav.Root size="1">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">尺寸 2（默认）</Text>
          <TabNav.Root size="2">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">尺寸 3（最大）</Text>
          <TabNav.Root size="3">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

DifferentSizes.storyName = '不同尺寸';

export const DifferentVariants = () => {
  return (
    <Box>
      <Heading size="3" mb="4">不同变体</Heading>
      <Text mb="5">TabNav 支持多种变体样式。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">默认变体</Text>
          <TabNav.Root variant="surface">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">下划线变体</Text>
          <TabNav.Root variant="underline">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

DifferentVariants.storyName = '不同变体';

export const ColorVariants = () => {
  return (
    <Box>
      <Heading size="3" mb="4">颜色变体</Heading>
      <Text mb="5">TabNav 支持多种颜色。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">蓝色（默认）</Text>
          <TabNav.Root color="blue">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">绿色</Text>
          <TabNav.Root color="green">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">红色</Text>
          <TabNav.Root color="red">
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

ColorVariants.storyName = '颜色变体';

export const HighContrastNav = () => {
  return (
    <Box>
      <Heading size="3" mb="4">高对比度</Heading>
      <Text mb="5">启用高对比度模式使导航更加醒目。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">正常对比度</Text>
          <TabNav.Root>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">高对比度</Text>
          <TabNav.Root highContrast>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

HighContrastNav.storyName = '高对比度';

export const JustifyAlignment = () => {
  return (
    <Box>
      <Heading size="3" mb="4">对齐方式</Heading>
      <Text mb="5">控制导航项的对齐方式。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">左对齐（默认）</Text>
          <TabNav.Root justify="start" style={{ width: '100%', border: '1px dashed var(--gray-6)', padding: '1px' }}>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">居中对齐</Text>
          <TabNav.Root justify="center" style={{ width: '100%', border: '1px dashed var(--gray-6)', padding: '1px' }}>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">右对齐</Text>
          <TabNav.Root justify="end" style={{ width: '100%', border: '1px dashed var(--gray-6)', padding: '1px' }}>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

JustifyAlignment.storyName = '对齐方式';

export const WrapModes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">换行模式</Heading>
      <Text mb="5">控制导航项在空间不足时的换行行为。</Text>
      
      <Flex direction="column" gap="8">
        <Box>
          <Text size="2" mb="2" color="gray">不换行（默认）</Text>
          <TabNav.Root wrap="nowrap" style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '1px' }}>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
            <TabNav.Link href="#about">关于我们</TabNav.Link>
            <TabNav.Link href="#contact">联系我们</TabNav.Link>
          </TabNav.Root>
        </Box>
        
        <Box>
          <Text size="2" mb="2" color="gray">允许换行</Text>
          <TabNav.Root wrap="wrap" style={{ width: '300px', border: '1px dashed var(--gray-6)', padding: '1px' }}>
            <TabNav.Link href="#home" active>首页</TabNav.Link>
            <TabNav.Link href="#products">产品</TabNav.Link>
            <TabNav.Link href="#docs">文档</TabNav.Link>
            <TabNav.Link href="#about">关于我们</TabNav.Link>
            <TabNav.Link href="#contact">联系我们</TabNav.Link>
          </TabNav.Root>
        </Box>
      </Flex>
    </Box>
  );
};

WrapModes.storyName = '换行模式';

export const TabNavAPI = () => {
  return (
    <Theme>
      <Box style={{ padding: 'var(--space-5)' }}>
        <Heading size="4" mb="5">API 参考</Heading>
        
        <TabNavRootPropsComponent />
        <TabNavLinkPropsComponent />
        
        <Box mt="4" style={{ maxWidth: '900px' }}>
          <Text size="2" mt="3" color="gray">所有组件还支持标准的外边距（margin）属性。</Text>
        </Box>
      </Box>
    </Theme>
  );
};

TabNavAPI.storyName = '组件 API'; 