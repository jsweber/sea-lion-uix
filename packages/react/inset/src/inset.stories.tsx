import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Inset } from '@sea-lion/react-inset';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { InsetPropsComponent } from './inset-props-table';

/**
 * ## 介绍
 * 
 * Inset 是一个容器组件，用于创建负边距效果，可以将内容向外延伸超出父元素的边界。
 * 
 * ## 何时使用
 * 
 * - 需要让图片或其他内容扩展到容器边缘时
 * - 想要创建视觉上打破边界的设计效果时
 * - 创建卡片、面板等组件中的媒体区域时
 */
const meta: Meta<typeof Inset> = {
  component: Inset,
  title: 'Inset',
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
    <Theme>
      <Box p="5">
        <Text mb="4">基本的 Inset 组件示例：</Text>
        <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
          <Inset>
            <img 
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              style={{ display: 'block', width: '100%', height: '250px', objectFit: 'cover' }} 
              alt="示例图片"
            />
          </Inset>
          <Box p="4">
            <Heading size="3" mb="2">使用 Inset 组件</Heading>
            <Text>Inset 组件使图片可以扩展到容器边缘，无需额外边距。这在创建卡片、面板等组件时非常有用。</Text>
          </Box>
        </Box>
      </Box>
    </Theme>
  );
};

Basic.storyName = '基础用法';

export const DifferentSides = () => {
  return (
    <Theme>
      <Box p="5">
        <Text size="4" weight="bold" mb="4">不同边的 Inset</Text>
        
        <Flex direction="column" gap="6">
          <Box>
            <Text size="2" weight="bold" mb="2">顶部 (side="top")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Inset side="top">
                <Box style={{ height: '80px', background: 'var(--blue-5)', width: '100%' }}></Box>
              </Inset>
              <Box p="4">
                <Text>顶部 Inset 示例，常用于顶部横幅或头部图片。</Text>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">底部 (side="bottom")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Box p="4">
                <Text>底部 Inset 示例，常用于底部内容区域或页脚。</Text>
              </Box>
              <Inset side="bottom">
                <Box style={{ height: '80px', background: 'var(--green-5)', width: '100%' }}></Box>
              </Inset>
            </Box>
          </Box>
          
          <Flex gap="4">
            <Box style={{ flex: 1 }}>
              <Text size="2" weight="bold" mb="2">左侧 (side="left")</Text>
              <Box style={{ maxWidth: '250px', height: '200px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)', display: 'flex' }}>
                <Inset side="left">
                  <Box style={{ width: '80px', height: '100%', background: 'var(--amber-5)' }}></Box>
                </Inset>
                <Box p="4" style={{ flex: 1 }}>
                  <Text>左侧 Inset 示例。</Text>
                </Box>
              </Box>
            </Box>
            
            <Box style={{ flex: 1 }}>
              <Text size="2" weight="bold" mb="2">右侧 (side="right")</Text>
              <Box style={{ maxWidth: '250px', height: '200px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)', display: 'flex' }}>
                <Box p="4" style={{ flex: 1 }}>
                  <Text>右侧 Inset 示例。</Text>
                </Box>
                <Inset side="right">
                  <Box style={{ width: '80px', height: '100%', background: 'var(--purple-5)' }}></Box>
                </Inset>
              </Box>
            </Box>
          </Flex>
          
          <Box>
            <Text size="2" weight="bold" mb="2">水平方向 (side="x")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Inset side="x">
                <Box style={{ height: '80px', background: 'var(--red-5)', width: '100%' }}></Box>
              </Inset>
              <Box p="4">
                <Text>仅水平方向应用 Inset，垂直方向保持内边距。</Text>
              </Box>
              <Inset side="x">
                <Box style={{ height: '80px', background: 'var(--red-5)', width: '100%' }}></Box>
              </Inset>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">垂直方向 (side="y")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)', display: 'flex' }}>
              <Inset side="y">
                <Box style={{ width: '80px', height: '200px', background: 'var(--blue-5)' }}></Box>
              </Inset>
              <Box p="4" style={{ flex: 1 }}>
                <Text>仅垂直方向应用 Inset，水平方向保持内边距。</Text>
              </Box>
              <Inset side="y">
                <Box style={{ width: '80px', height: '200px', background: 'var(--blue-5)' }}></Box>
              </Inset>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

DifferentSides.storyName = '不同边的应用';

export const ClippingMethods = () => {
  return (
    <Theme>
      <Box p="5">
        <Text size="4" weight="bold" mb="4">裁剪方式</Text>
        
        <Flex direction="column" gap="6">
          <Box>
            <Text size="2" weight="bold" mb="2">边框盒裁剪 (clip="border-box")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '4px solid var(--gray-5)' }}>
              <Inset clip="border-box">
                <Box style={{ height: '120px', background: 'var(--amber-5)', width: '100%' }}></Box>
              </Inset>
              <Box p="4">
                <Text>边框盒裁剪会考虑边框宽度，Inset 元素会延伸到边框内边缘。</Text>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">内边距盒裁剪 (clip="padding-box")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '4px solid var(--gray-5)' }}>
              <Inset clip="padding-box">
                <Box style={{ height: '120px', background: 'var(--green-5)', width: '100%' }}></Box>
              </Inset>
              <Box p="4">
                <Text>内边距盒裁剪会忽略边框宽度，Inset 元素会延伸到边框外边缘。</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

ClippingMethods.storyName = '裁剪方式';

export const PaddingControl = () => {
  return (
    <Theme>
      <Box p="5">
        <Text size="4" weight="bold" mb="4">内边距控制</Text>
        
        <Flex direction="column" gap="6">
          <Box>
            <Text size="2" weight="bold" mb="2">保持当前内边距 (p="current")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Inset p="current">
                <Box style={{ height: '120px', background: 'var(--blue-5)', width: '100%', padding: '20px' }}>
                  <Text style={{ color: 'white' }}>内容区域，保持 20px 内边距</Text>
                </Box>
              </Inset>
              <Box p="4">
                <Text>使用 p="current" 保持 Inset 内部元素的内边距。</Text>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">移除内边距 (p="0")</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Inset p="0">
                <Box style={{ height: '120px', background: 'var(--purple-5)', width: '100%', padding: '20px' }}>
                  <Text style={{ color: 'white' }}>内容区域，移除内边距效果</Text>
                </Box>
              </Inset>
              <Box p="4">
                <Text>使用 p="0" 移除 Inset 内部元素的内边距效果。</Text>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">特定方向内边距控制</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
              <Inset px="0" py="current">
                <Box style={{ height: '120px', background: 'var(--red-5)', width: '100%', padding: '20px' }}>
                  <Text style={{ color: 'white' }}>水平方向移除内边距，垂直方向保持内边距</Text>
                </Box>
              </Inset>
              <Box p="4">
                <Text>使用 px="0" py="current" 控制特定方向的内边距。</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

PaddingControl.storyName = '内边距控制';

export const UseCases = () => {
  return (
    <Theme>
      <Box p="5">
        <Text size="4" weight="bold" mb="4">实用案例</Text>
        
        <Flex direction="column" gap="6">
          <Box>
            <Text size="2" weight="bold" mb="2">卡片设计</Text>
            <Box style={{ maxWidth: '350px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <Inset>
                <img 
                  src="https://images.unsplash.com/photo-1597655601841-214a4d3f9add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  style={{ display: 'block', width: '100%', height: '180px', objectFit: 'cover' }} 
                  alt="卡片顶部图片"
                />
              </Inset>
              <Box p="4">
                <Heading size="3" mb="2">卡片标题</Heading>
                <Text mb="3">在卡片中使用 Inset 组件，可以让图片扩展到卡片边缘，创建更现代的设计效果。</Text>
                <Flex justify="end">
                  <Text size="1" color="gray">2023-05-15</Text>
                </Flex>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">照片画廊</Text>
            <Flex gap="3" style={{ maxWidth: '700px' }}>
              <Box style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
                <Inset>
                  <img 
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    style={{ display: 'block', width: '100%', height: '200px', objectFit: 'cover' }} 
                    alt="画廊图片1"
                  />
                </Inset>
              </Box>
              <Box style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
                <Inset>
                  <img 
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    style={{ display: 'block', width: '100%', height: '200px', objectFit: 'cover' }} 
                    alt="画廊图片2"
                  />
                </Inset>
              </Box>
              <Box style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)' }}>
                <Inset>
                  <img 
                    src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    style={{ display: 'block', width: '100%', height: '200px', objectFit: 'cover' }} 
                    alt="画廊图片3"
                  />
                </Inset>
              </Box>
            </Flex>
          </Box>
          
          <Box>
            <Text size="2" weight="bold" mb="2">面板设计</Text>
            <Box style={{ maxWidth: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--gray-5)', background: 'white' }}>
              <Box p="4">
                <Heading size="3" mb="2">内容面板</Heading>
                <Text mb="3">这是面板的主要内容区域。下方使用 Inset 组件实现了无缝连接的底部区域。</Text>
              </Box>
              <Inset side="bottom">
                <Box style={{ background: 'var(--gray-2)', padding: '12px', borderTop: '1px solid var(--gray-5)' }}>
                  <Flex justify="end" gap="2">
                    <button style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--gray-5)', borderRadius: '4px' }}>取消</button>
                    <button style={{ padding: '8px 16px', background: 'var(--blue-5)', color: 'white', border: 'none', borderRadius: '4px' }}>确认</button>
                  </Flex>
                </Box>
              </Inset>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

UseCases.storyName = '实用案例';

export const InsetAPI = () => {
  return (
    <Theme>
      <div>
        <div className="api-table-title">Inset props</div>
        <InsetPropsComponent />
      </div>
    </Theme>
  );
};

InsetAPI.storyName = '组件 API'; 