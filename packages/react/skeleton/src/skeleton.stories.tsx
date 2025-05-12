import type { Meta } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Theme } from '../../theme/src';
import { Skeleton } from '@sea-lion/react-skeleton';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { Button } from '@sea-lion/react-button';
import { SkeletonPropsComponent } from './skeleton-props-table';

/**
 * ## 介绍
 * 
 * Skeleton 是一个加载占位符组件，用于在数据加载时显示内容的轮廓，提升用户体验。
 * 
 * ## 何时使用
 * 
 * - 内容正在加载中，需要向用户展示页面结构
 * - 需要降低用户等待的焦虑感
 * - 希望提供更好的加载反馈，而不是仅显示加载图标
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
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
      <Text mb="5">最基本的骨架屏加载占位符。</Text>
      
      <Box style={{ width: '300px' }}>
        <Skeleton width="200px" height="20px" />
        <Skeleton width="100%" height="20px" my="2" />
        <Skeleton width="80%" height="20px" />
      </Box>
    </Box>
  );
};

BasicUsage.storyName = '基本用法';

export const WrappingContent = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box>
      <Heading size="3" mb="4">包裹现有内容</Heading>
      <Text mb="5">
        Skeleton 可以包裹现有内容，在加载时显示占位符，加载完成后显示内容。此例中会在3秒后显示实际内容。
      </Text>
      
      <Box style={{ width: '400px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '6px' }}>
        <Skeleton loading={loading}>
          <Heading size="4" mb="2">数据已加载完成</Heading>
          <Text mb="4">这是加载完成后显示的实际内容。Skeleton组件可以在数据加载时提供良好的用户体验。</Text>
          <Button>继续操作</Button>
        </Skeleton>
        
        <Box mt="4">
          <Button onClick={() => setLoading(true)} mr="2">
            重新加载
          </Button>
          <Text as="span" size="2" color="gray">
            加载状态: {loading ? '加载中...' : '已完成'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

WrappingContent.storyName = '包裹现有内容';

export const CustomSizes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">自定义宽度和高度</Heading>
      <Text mb="5">Skeleton 支持自定义宽度和高度，以适应不同的布局。</Text>
      
      <Flex direction="column" gap="4">
        <Box>
          <Text size="2" mb="2">固定宽度</Text>
          <Skeleton width="200px" height="24px" />
        </Box>
        
        <Box>
          <Text size="2" mb="2">百分比宽度</Text>
          <Skeleton width="75%" height="24px" />
        </Box>
        
        <Box>
          <Text size="2" mb="2">自动宽度 (继承父容器)</Text>
          <Skeleton height="24px" />
        </Box>
        
        <Box>
          <Text size="2" mb="2">不同高度</Text>
          <Flex gap="2">
            <Skeleton width="60px" height="16px" />
            <Skeleton width="60px" height="24px" />
            <Skeleton width="60px" height="32px" />
          </Flex>
        </Box>
        
        <Box>
          <Text size="2" mb="2">带最小/最大宽度</Text>
          <Skeleton minWidth="100px" maxWidth="300px" width="50%" height="24px" />
        </Box>
      </Flex>
    </Box>
  );
};

CustomSizes.storyName = '自定义尺寸';

export const TextPlaceholder = () => {
  return (
    <Box>
      <Heading size="3" mb="4">文本占位符</Heading>
      <Text mb="5">当作为空元素使用时，Skeleton 可以作为文本占位符。</Text>
      
      <Box style={{ width: '400px' }}>
        <Skeleton width="60%" mb="3" />
        <Skeleton width="100%" mb="1" />
        <Skeleton width="100%" mb="1" />
        <Skeleton width="90%" mb="1" />
        <Skeleton width="85%" mb="3" />
        
        <Skeleton width="40%" mb="3" />
        <Skeleton width="100%" mb="1" />
        <Skeleton width="95%" mb="1" />
        <Skeleton width="100%" mb="1" />
        <Skeleton width="80%" />
      </Box>
    </Box>
  );
};

TextPlaceholder.storyName = '文本占位符';

export const ListPlaceholder = () => {
  return (
    <Box>
      <Heading size="3" mb="4">列表占位符</Heading>
      <Text mb="5">Skeleton 可以用来创建列表项的加载效果。</Text>
      
      <Box style={{ width: '400px' }}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Flex 
              key={index} 
              align="center" 
              mb="4"
              style={{ 
                padding: '12px', 
                border: '1px solid var(--gray-5)', 
                borderRadius: '6px'
              }}
            >
              <Skeleton 
                width="48px" 
                height="48px" 
                style={{ borderRadius: '50%' }} 
              />
              <Box ml="3" style={{ flex: 1 }}>
                <Skeleton height="16px" width="70%" mb="2" />
                <Skeleton height="14px" width="90%" />
              </Box>
            </Flex>
          ))
        }
      </Box>
    </Box>
  );
};

ListPlaceholder.storyName = '列表占位符';

export const CardPlaceholder = () => {
  return (
    <Box>
      <Heading size="3" mb="4">卡片占位符</Heading>
      <Text mb="5">Skeleton 可以用来创建卡片的加载效果。</Text>
      
      <Flex gap="4" wrap="wrap">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Box 
              key={index}
              style={{
                width: '250px',
                padding: '16px',
                border: '1px solid var(--gray-5)',
                borderRadius: '8px',
              }}
            >
              <Skeleton width="100%" height="150px" mb="3" />
              <Skeleton width="70%" height="24px" mb="2" />
              <Skeleton width="100%" height="16px" mb="1" />
              <Skeleton width="100%" height="16px" mb="1" />
              <Skeleton width="40%" height="16px" mb="3" />
              <Flex justify="between">
                <Skeleton width="80px" height="32px" />
                <Skeleton width="32px" height="32px" style={{ borderRadius: '50%' }} />
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </Box>
  );
};

CardPlaceholder.storyName = '卡片占位符';

export const ComplexLayout = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box>
      <Heading size="3" mb="4">复杂布局</Heading>
      <Text mb="5">
        Skeleton 可以组合使用创建复杂的页面布局占位符。此例中会在3秒后显示实际内容。
      </Text>
      
      <Button onClick={() => setLoading(true)} mb="4">
        重新加载
      </Button>
      
      <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
        {loading ? (
          <Box>
            <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)' }}>
              <Skeleton width="30%" height="28px" mb="3" />
              <Flex gap="2">
                <Skeleton width="100px" height="24px" />
                <Skeleton width="120px" height="24px" />
                <Skeleton width="80px" height="24px" />
              </Flex>
            </Box>
            
            <Flex p="4">
              <Box style={{ width: '30%', borderRight: '1px solid var(--gray-5)', paddingRight: '16px' }}>
                <Skeleton width="80%" height="24px" mb="3" />
                {Array(6).fill(null).map((_, i) => (
                  <Skeleton key={i} width="90%" height="16px" mb="3" />
                ))}
              </Box>
              
              <Box style={{ width: '70%', paddingLeft: '16px' }}>
                <Skeleton width="50%" height="28px" mb="4" />
                
                <Flex mb="4" gap="3">
                  {Array(3).fill(null).map((_, i) => (
                    <Box key={i} style={{ flex: 1 }}>
                      <Skeleton width="100%" height="120px" mb="2" />
                      <Skeleton width="70%" height="16px" mb="1" />
                      <Skeleton width="50%" height="16px" />
                    </Box>
                  ))}
                </Flex>
                
                <Skeleton width="40%" height="24px" mb="3" />
                
                <Flex gap="3" direction="column">
                  {Array(3).fill(null).map((_, i) => (
                    <Flex key={i} gap="3">
                      <Skeleton width="60px" height="60px" />
                      <Box style={{ flex: 1 }}>
                        <Skeleton width="40%" height="18px" mb="2" />
                        <Skeleton width="100%" height="14px" mb="1" />
                        <Skeleton width="90%" height="14px" />
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <Box>
            <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)' }}>
              <Heading size="4" mb="3">产品展示页面</Heading>
              <Flex gap="2">
                <Button size="2" variant="soft">分类</Button>
                <Button size="2" variant="soft">价格</Button>
                <Button size="2" variant="soft">筛选</Button>
              </Flex>
            </Box>
            
            <Flex p="4">
              <Box style={{ width: '30%', borderRight: '1px solid var(--gray-5)', paddingRight: '16px' }}>
                <Heading size="3" mb="3">商品分类</Heading>
                <Flex direction="column" gap="2">
                  <Text>电子产品</Text>
                  <Text>家居用品</Text>
                  <Text>服装配饰</Text>
                  <Text>食品饮料</Text>
                  <Text>健康美容</Text>
                  <Text>运动户外</Text>
                </Flex>
              </Box>
              
              <Box style={{ width: '70%', paddingLeft: '16px' }}>
                <Heading size="3" mb="4">热门商品</Heading>
                
                <Flex mb="4" gap="3">
                  {Array(3).fill(null).map((_, i) => (
                    <Box key={i} style={{ flex: 1 }}>
                      <Box 
                        style={{ 
                          width: '100%', 
                          height: '120px', 
                          backgroundColor: 'var(--gray-3)', 
                          borderRadius: '4px',
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        商品图片 {i+1}
                      </Box>
                      <Text weight="bold">商品名称</Text>
                      <Text size="2" color="gray">¥199.00</Text>
                    </Box>
                  ))}
                </Flex>
                
                <Heading size="3" mb="3">推荐商品</Heading>
                
                <Flex gap="3" direction="column">
                  {Array(3).fill(null).map((_, i) => (
                    <Flex key={i} gap="3">
                      <Box 
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          backgroundColor: 'var(--gray-3)', 
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        图{i+1}
                      </Box>
                      <Box style={{ flex: 1 }}>
                        <Text weight="bold" mb="1">推荐商品 {i+1}</Text>
                        <Text size="2">这是一段关于推荐商品的描述文本，介绍产品的特点和优势。</Text>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

ComplexLayout.storyName = '复杂布局示例';

export const SkeletonAPI = () => {
  return (
    <Theme>
      <Box style={{ padding: 'var(--space-5)' }}>
        <Heading size="4" mb="5">API 参考</Heading>
        
        <SkeletonPropsComponent />
        <Box mt="4" style={{ maxWidth: '900px' }}>
          <Text size="2" mt="3" color="gray">除了上述属性外，Skeleton 组件还支持所有标准的外边距（margin）属性。</Text>
        </Box>
      </Box>
    </Theme>
  );
};

SkeletonAPI.storyName = '组件 API'; 