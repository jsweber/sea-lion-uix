import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Section } from '@sea-lion/react-section';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { SectionPropsComponent } from './section-props-table';

/**
 * ## 介绍
 * 
 * Section 是一个布局组件，用于创建具有预设垂直内边距的区域，帮助组织页面内容的层次结构。
 * 
 * ## 何时使用
 * 
 * - 需要在页面上划分不同的内容区域
 * - 需要为内容区域添加统一的垂直内边距
 * - 需要创建有层次感的页面布局
 */
const meta: Meta<typeof Section> = {
  component: Section,
  title: 'Section',
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

// 创建示例内容
const SectionContent = () => (
  <Box style={{ padding: '0 16px' }}>
    <Heading size="3" mb="3">区域标题</Heading>
    <Text as="p" mb="3">
      这是一个 Section 区域的内容示例。Section 组件会为内容添加预设的垂直内边距，使页面布局更加规整和有层次感。
    </Text>
    <Text as="p">
      每个 Section 可以包含标题、段落、表单、图片等任何内容元素，是构建页面的基础容器组件。
    </Text>
  </Box>
);

export const Basic = () => {
  return (
    <Box>
      <Heading size="3" mb="4">基础用法</Heading>
      <Text mb="3">Section 组件为内容区域提供预设的垂直内边距，是构建页面布局的基础容器组件。</Text>
      
      <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
        <Section>
          <SectionContent />
        </Section>
      </Box>
    </Box>
  );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">尺寸</Heading>
      <Text mb="3">Section 组件支持四种尺寸，控制垂直内边距的大小。</Text>
      
      <Flex gap="6" direction="column">
        <Box>
          <Text weight="bold" mb="2">小尺寸 (size="1", 24px 内边距)：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
            <Section size="1">
              <SectionContent />
            </Section>
          </Box>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">中等尺寸 (size="2", 40px 内边距)：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
            <Section size="2">
              <SectionContent />
            </Section>
          </Box>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">大尺寸 (size="3", 64px 内边距，默认)：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
            <Section size="3">
              <SectionContent />
            </Section>
          </Box>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">超大尺寸 (size="4", 80px 内边距)：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
            <Section size="4">
              <SectionContent />
            </Section>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

Sizes.storyName = '尺寸';

export const Display = () => {
  return (
    <Box>
      <Heading size="3" mb="4">显示控制</Heading>
      <Text mb="3">使用 display 属性控制 Section 的显示状态。</Text>
      
      <Flex gap="6" direction="column">
        <Box>
          <Text weight="bold" mb="2">显示 (display="initial", 默认)：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
            <Section display="initial">
              <SectionContent />
            </Section>
          </Box>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">隐藏 (display="none")：</Text>
          <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px', minHeight: '50px' }}>
            <Section display="none">
              <SectionContent />
            </Section>
            <Text size="1" style={{ textAlign: 'center', padding: '15px' }} color="gray">
              Section 被隐藏，此处不显示任何内容
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

Display.storyName = '显示控制';

export const Responsive = () => {
  return (
    <Box>
      <Heading size="3" mb="4">响应式设计</Heading>
      <Text mb="3">Section 组件支持响应式属性，可以根据屏幕尺寸调整内边距和显示状态。</Text>
      <Text mb="3" color="gray">请调整浏览器窗口大小来查看效果。</Text>
      
      <Box>
        <Text weight="bold" mb="2">响应式尺寸：</Text>
        <Text size="1" mb="2" color="gray">小屏幕使用 size="1"，中等屏幕使用 size="2"，大屏幕使用 size="3"</Text>
        <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px' }}>
          <Section size={{ initial: '1', sm: '2', md: '3' }}>
            <SectionContent />
          </Section>
        </Box>
      </Box>
      
      <Box mt="6">
        <Text weight="bold" mb="2">响应式显示：</Text>
        <Text size="1" mb="2" color="gray">小屏幕隐藏，中等及以上屏幕显示</Text>
        <Box style={{ border: '1px dashed var(--gray-6)', borderRadius: '8px', minHeight: '50px' }}>
          <Section display={{ initial: 'none', md: 'initial' }}>
            <SectionContent />
          </Section>
          <Text size="1" style={{ textAlign: 'center', padding: '15px' }} color="gray">
            在小屏幕上，此 Section 被隐藏
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

Responsive.storyName = '响应式设计';

export const UseCases = () => {
  return (
    <Box>
      <Heading size="3" mb="4">实用案例</Heading>
      <Text mb="5">以下是 Section 组件在实际应用中的一些常见用法。</Text>
      
      <Box mb="8">
        <Heading size="2" mb="3">页面布局</Heading>
        <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
          {/* 页眉 */}
          <Box style={{ backgroundColor: 'var(--accent-9)', padding: '16px' }}>
            <Text color="gray" weight="bold">网站标题</Text>
          </Box>
          
          {/* 主内容区 */}
          <Section size="2">
            <Heading size="3" mb="4">欢迎使用</Heading>
            <Text mb="3">这是一个使用 Section 组件的页面布局示例。Section 组件帮助我们创建具有一致内边距的内容区域。</Text>
            <Text>每个 Section 可以有不同的尺寸，用于划分不同的内容块。</Text>
          </Section>
          
          {/* 特性区 */}
          <Section size="3" style={{ backgroundColor: 'var(--gray-2)' }}>
            <Heading size="3" mb="4">产品特性</Heading>
            <Flex gap="4">
              <Box style={{ flex: 1 }}>
                <Heading size="4" mb="2">特性一</Heading>
                <Text>特性一的详细描述内容</Text>
              </Box>
              <Box style={{ flex: 1 }}>
                <Heading size="4" mb="2">特性二</Heading>
                <Text>特性二的详细描述内容</Text>
              </Box>
              <Box style={{ flex: 1 }}>
                <Heading size="4" mb="2">特性三</Heading>
                <Text>特性三的详细描述内容</Text>
              </Box>
            </Flex>
          </Section>
          
          {/* 页脚 */}
          <Box style={{ backgroundColor: 'var(--gray-9)', padding: '16px' }}>
            <Text color="gray" size="1">© 2023 版权所有</Text>
          </Box>
        </Box>
      </Box>
      
      <Box>
        <Heading size="2" mb="3">卡片容器</Heading>
        <Flex gap="4">
          <Box style={{ width: '300px', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
            <Box style={{ height: '150px', backgroundColor: 'var(--blue-5)' }} />
            <Section size="1">
              <Heading size="4" mb="2">产品标题</Heading>
              <Text size="2" mb="3">这是一个使用 Section 组件作为卡片内容容器的示例。</Text>
              <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Text size="1" color="blue">了解更多</Text>
              </Box>
            </Section>
          </Box>
          
          <Box style={{ width: '300px', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
            <Box style={{ height: '150px', backgroundColor: 'var(--green-5)' }} />
            <Section size="1">
              <Heading size="4" mb="2">服务标题</Heading>
              <Text size="2" mb="3">Section 组件可以为卡片内容提供一致的内边距。</Text>
              <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Text size="1" color="green">查看详情</Text>
              </Box>
            </Section>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

UseCases.storyName = '实用案例';

export const SectionAPI = () => {
  return (
    <Theme>
      <div>
        <div className="api-table-title">Section API</div>
        <SectionPropsComponent />
      </div>
    </Theme>
  );
};

SectionAPI.storyName = '组件 API'; 