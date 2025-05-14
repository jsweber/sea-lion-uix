import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Grid } from '@sea-lion/react-grid';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';
import { GridPropsComponent } from './grid-props-table';

/**
 * ## 介绍
 * 
 * Grid 是一个基于 CSS Grid 布局的容器组件，用于创建灵活的二维布局，能够同时控制行和列。
 * 
 * ## 何时使用
 * 
 * - 创建复杂的二维布局结构
 * - 需要按行和列排列元素
 * - 构建响应式网格系统
 * - 制作卡片布局、图片画廊、仪表盘等界面
 * - 实现传统表格式布局但具有更灵活的控制
 */
const meta: Meta<typeof Grid> = {
  component: Grid,
  title: '布局/Grid',
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

type Story = StoryObj<typeof Grid>;

export const GridWithProps: Story = {
  name: 'Grid 属性',
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'span'],
      description: '要渲染的 HTML 元素: "div" | "span"',
    },
    display: {
      control: 'inline-radio',
      options: ['none', 'inline-grid', 'grid'],
      description: 'CSS display 属性',
    },
    columns: {
      control: 'text', 
      description: 'CSS grid-template-columns 属性',
    },
    rows: {
      control: 'text',
      description: 'CSS grid-template-rows 属性',
    },
    areas: {
      control: 'text',
      description: 'CSS grid-template-areas 属性',
    },
    flow: {
      control: 'inline-radio',
      options: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
      description: 'CSS grid-auto-flow 属性',
    },
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'CSS align-items 属性',
    },
    justify: {
      control: 'inline-radio',
      options: ['start', 'center', 'end', 'between'],
      description: 'CSS justify-content 属性',
    },
    gap: {
      control: 'inline-radio',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: '子元素之间的间距',
    },
  },
  args: {
    as: 'div',
    display: 'grid',
    columns: '1fr 1fr 1fr',
    rows: 'auto',
    align: 'stretch',
    justify: 'start',
    gap: '3',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
          <Text style={{ color: 'white' }}>网格项 {num}</Text>
        </Box>
      ))}
    </Grid>
  ),
};

// 基本用法示例
export const GridBasic = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">基本网格布局</div>
          <Box mb="4">
            <Text size="2">一个简单的三列网格，具有等宽列和间距：</Text>
          </Box>
          <Grid columns="3" gap="3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                <Text style={{ color: 'white' }}>项目 {num}</Text>
              </Box>
            ))}
          </Grid>
        </div>
      </div>
    </Theme>
  );
};

GridBasic.storyName = '基本用法';

// 不同列数和间距
export const GridColumnsAndGap = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">不同列数和间距</div>
          <Flex direction="column" gap="5">
            <Box>
              <Text size="2" weight="bold" mb="2">两列网格 (间距: 2)</Text>
              <Grid columns="2" gap="2">
                {[1, 2, 3, 4].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">四列网格 (间距: 3)</Text>
              <Grid columns="4" gap="3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">五列网格 (间距: 4)</Text>
              <Grid columns="5" gap="4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <Box key={num} p="2" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Flex>
        </div>
      </div>
    </Theme>
  );
};

GridColumnsAndGap.storyName = '列数和间距';

// 自定义列宽
export const GridCustomColumns = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">自定义列宽</div>
          <Flex direction="column" gap="5">
            <Box>
              <Text size="2" weight="bold" mb="2">固定宽度与弹性宽度混合</Text>
              <Grid columns="200px 1fr 1fr" gap="3">
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>固定宽度 (200px)</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>弹性宽度 (1fr)</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>弹性宽度 (1fr)</Text>
                </Box>
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">不同比例的弹性宽度</Text>
              <Grid columns="1fr 2fr 1fr" gap="3">
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>1 份</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>2 份</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>1 份</Text>
                </Box>
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">最小最大宽度限制</Text>
              <Grid columns="minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr)" gap="3">
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>最小 100px，最大 1fr</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>最小 200px，最大 2fr</Text>
                </Box>
                <Box p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                  <Text style={{ color: 'white' }}>最小 100px，最大 1fr</Text>
                </Box>
              </Grid>
            </Box>
          </Flex>
        </div>
      </div>
    </Theme>
  );
};

GridCustomColumns.storyName = '自定义列宽';

// 网格区域示例
export const GridAreas = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">网格区域布局</div>
          <Box mb="4">
            <Text size="2">使用 grid-template-areas 创建布局区域：</Text>
          </Box>
          <Grid
            areas={`"header header header"
                    "sidebar content content"
                    "sidebar footer footer"`}
            columns="200px 1fr 1fr"
            rows="auto 1fr auto"
            gap="3"
            style={{ height: '400px' }}
          >
            <Box style={{ 
              gridArea: 'header', 
              backgroundColor: 'var(--blue-5)', 
              padding: '16px', 
              borderRadius: '6px'
            }}>
              <Text style={{ color: 'white' }}>页头区域</Text>
            </Box>
            <Box style={{ 
              gridArea: 'sidebar', 
              backgroundColor: 'var(--purple-5)', 
              padding: '16px', 
              borderRadius: '6px'
            }}>
              <Text style={{ color: 'white' }}>侧边栏区域</Text>
            </Box>
            <Box style={{ 
              gridArea: 'content', 
              backgroundColor: 'var(--green-5)', 
              padding: '16px', 
              borderRadius: '6px'
            }}>
              <Text style={{ color: 'white' }}>内容区域</Text>
            </Box>
            <Box style={{ 
              gridArea: 'footer', 
              backgroundColor: 'var(--amber-5)', 
              padding: '16px', 
              borderRadius: '6px'
            }}>
              <Text style={{ color: 'white' }}>页脚区域</Text>
            </Box>
          </Grid>
        </div>
      </div>
    </Theme>
  );
};

GridAreas.storyName = '网格区域';

// 对齐和对齐方式
export const GridAlignAndJustify = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">对齐和对齐方式</div>
          <Flex direction="column" gap="5">
            <Box>
              <Text size="2" weight="bold" mb="2">align="start" (默认)</Text>
              <Grid 
                columns="3" 
                gap="3" 
                align="start"
                style={{ backgroundColor: 'var(--gray-3)', padding: '16px', borderRadius: '6px', height: '150px' }}
              >
                {[1, 2, 3].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px', height: `${num * 30}px` }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">align="center"</Text>
              <Grid 
                columns="3" 
                gap="3" 
                align="center"
                style={{ backgroundColor: 'var(--gray-3)', padding: '16px', borderRadius: '6px', height: '150px' }}
              >
                {[1, 2, 3].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px', height: `${num * 30}px` }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">align="end"</Text>
              <Grid 
                columns="3" 
                gap="3" 
                align="end"
                style={{ backgroundColor: 'var(--gray-3)', padding: '16px', borderRadius: '6px', height: '150px' }}
              >
                {[1, 2, 3].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px', height: `${num * 30}px` }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box>
              <Text size="2" weight="bold" mb="2">justify="between"</Text>
              <Grid 
                columns="3" 
                gap="3" 
                justify="between"
                style={{ backgroundColor: 'var(--gray-3)', padding: '16px', borderRadius: '6px' }}
              >
                {[1, 2, 3].map((num) => (
                  <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                    <Text style={{ color: 'white' }}>项目 {num}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Flex>
        </div>
      </div>
    </Theme>
  );
};

GridAlignAndJustify.storyName = '对齐方式';

// 响应式网格
export const GridResponsive = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">响应式网格</div>
          <Box mb="4">
            <Text size="2">尝试调整浏览器窗口大小，观察网格布局的变化：</Text>
          </Box>
          <Grid
            columns={{ initial: '1', sm: '2', md: '3', lg: '4' }}
            gap={{ initial: '2', md: '4' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Box key={num} p="3" style={{ backgroundColor: 'var(--blue-5)', borderRadius: '6px' }}>
                <Text style={{ color: 'white' }}>项目 {num}</Text>
              </Box>
            ))}
          </Grid>
        </div>
      </div>
    </Theme>
  );
};

GridResponsive.storyName = '响应式网格';

// 实用案例
export const GridPractical = () => {
  return (
    <Theme>
      <div className="story-book-container">
        <div className="story-book-margin-top-20">
          <div className="story-book-label">实用案例</div>
          <Flex direction="column" gap="6">
            <Box>
              <Text size="2" weight="bold" mb="2">照片画廊</Text>
              <Grid 
                columns={{ initial: '2', sm: '3', md: '4' }} 
                gap="2"
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <Box 
                    key={i} 
                    style={{ 
                      backgroundColor: 'var(--gray-5)', 
                      borderRadius: '6px',
                      paddingTop: '100%', // 1:1 宽高比
                      position: 'relative'
                    }}
                  >
                    <Box 
                      style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: 'white'
                      }}
                    >
                      {i + 1}
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
            
            <Box>
              <Text size="2" weight="bold" mb="2">仪表板布局</Text>
              <Grid
                areas={{
                  initial: `"header"
                           "main"
                           "secondary"
                           "footer"`,
                  md: `"header header"
                       "main secondary"
                       "footer footer"`
                }}
                columns={{ initial: '1fr', md: '2fr 1fr' }}
                rows={{ initial: 'auto auto auto auto', md: 'auto 1fr auto' }}
                gap="3"
              >
                <Box 
                  style={{ 
                    gridArea: 'header', 
                    backgroundColor: 'var(--blue-5)', 
                    borderRadius: '6px', 
                    padding: '16px'
                  }}
                >
                  <Text style={{ color: 'white' }}>仪表板头部</Text>
                </Box>
                <Box 
                  style={{ 
                    gridArea: 'main', 
                    backgroundColor: 'var(--green-5)', 
                    borderRadius: '6px', 
                    padding: '16px',
                    minHeight: '200px'
                  }}
                >
                  <Text style={{ color: 'white' }}>主要内容区域</Text>
                </Box>
                <Box 
                  style={{ 
                    gridArea: 'secondary', 
                    backgroundColor: 'var(--purple-5)', 
                    borderRadius: '6px', 
                    padding: '16px',
                    minHeight: '150px'
                  }}
                >
                  <Text style={{ color: 'white' }}>侧边区域</Text>
                </Box>
                <Box 
                  style={{ 
                    gridArea: 'footer', 
                    backgroundColor: 'var(--gray-5)', 
                    borderRadius: '6px', 
                    padding: '16px'
                  }}
                >
                  <Text style={{ color: 'white' }}>页脚</Text>
                </Box>
              </Grid>
            </Box>
            
            <Box>
              <Text size="2" weight="bold" mb="2">产品卡片布局</Text>
              <Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Box 
                    key={i} 
                    style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                      overflow: 'hidden'
                    }}
                  >
                    <Box 
                      style={{ 
                        paddingTop: '60%', 
                        backgroundColor: 'var(--blue-3)',
                        position: 'relative'
                      }}
                    >
                      <Box 
                        style={{ 
                          position: 'absolute', 
                          inset: 0, 
                          display: 'flex', 
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--blue-11)'
                        }}
                      >
                        产品图片
                      </Box>
                    </Box>
                    <Box p="3">
                      <Text size="3" weight="bold">产品名称 {i + 1}</Text>
                      <Text size="2" color="gray" mt="1">产品描述信息</Text>
                      <Flex justify="between" align="center" mt="3">
                        <Text size="3" weight="bold">¥{99 + i * 10}.00</Text>
                        <Button size="1">购买</Button>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Flex>
        </div>
      </div>
    </Theme>
  );
};

GridPractical.storyName = '实用案例';

// API 文档
export const GridAPI = () => {
  return (
    <Theme>
      <div>
        <div className="api-table-title">Grid props</div>
        <GridPropsComponent />
      </div>
    </Theme>
  );
};

GridAPI.storyName = '组件 API'; 