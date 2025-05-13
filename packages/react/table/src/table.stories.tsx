import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import * as Table from '@sea-lion/react-table';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { Badge } from '@sea-lion/react-badge';
import { Button } from '@sea-lion/react-button';
import { Avatar } from '@sea-lion/react-avatar';
import { TablePropsComponent } from './table-props-table';

/**
 * ## 介绍
 * 
 * Table 是一个表格组件，用于以行和列的形式展示数据。组件支持不同尺寸、变体样式、自定义布局以及单元格对齐方式。
 * 
 * ## 何时使用
 * 
 * - 需要展示大量结构化数据时
 * - 需要对数据进行分类、排序、筛选时
 * - 需要通过表格形式展示数据之间的关系时
 * - 需要创建不同风格的数据表格时
 */
const meta: Meta<typeof Table.Root> = {
  title: 'Table',
  component: Table.Root,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['1', '2', '3'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['surface', 'ghost'],
      control: { type: 'radio' }
    },
    layout: {
      options: ['auto', 'fixed'],
      control: { type: 'radio' }
    }
  },
};

export default meta;

export const Default = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="6" mb="5">表格 Table</Heading>
        <Box mb="6">
          <Heading as="h2" size="5" mb="4">基本用法</Heading>
          <Flex direction="column" gap="4">
            <Box style={{ maxWidth: '600px' }}>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>姓名</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>年龄</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>职业</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>张三</Table.Cell>
                    <Table.Cell>25</Table.Cell>
                    <Table.Cell>工程师</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>李四</Table.Cell>
                    <Table.Cell>32</Table.Cell>
                    <Table.Cell>设计师</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>王五</Table.Cell>
                    <Table.Cell>28</Table.Cell>
                    <Table.Cell>产品经理</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Flex>
        </Box>

        <Box mb="6">
          <Heading as="h2" size="5" mb="4">不同尺寸</Heading>
          <Flex direction="column" gap="4">
            <Box mb="3">
              <Text size="3" weight="bold" mb="2">小尺寸 (size="1")</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root size="1">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>项目</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>状态</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>完成度</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>项目 A</Table.Cell>
                      <Table.Cell>进行中</Table.Cell>
                      <Table.Cell>60%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>项目 B</Table.Cell>
                      <Table.Cell>已完成</Table.Cell>
                      <Table.Cell>100%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>

            <Box mb="3">
              <Text size="3" weight="bold" mb="2">中等尺寸 (size="2", 默认)</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root size="2">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>项目</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>状态</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>完成度</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>项目 A</Table.Cell>
                      <Table.Cell>进行中</Table.Cell>
                      <Table.Cell>60%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>项目 B</Table.Cell>
                      <Table.Cell>已完成</Table.Cell>
                      <Table.Cell>100%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>

            <Box>
              <Text size="3" weight="bold" mb="2">大尺寸 (size="3")</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root size="3">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>项目</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>状态</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>完成度</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>项目 A</Table.Cell>
                      <Table.Cell>进行中</Table.Cell>
                      <Table.Cell>60%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>项目 B</Table.Cell>
                      <Table.Cell>已完成</Table.Cell>
                      <Table.Cell>100%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box mb="6">
          <Heading as="h2" size="5" mb="4">不同变体</Heading>
          <Flex direction="column" gap="4">
            <Box mb="3">
              <Text size="3" weight="bold" mb="2">Ghost 变体 (variant="ghost", 默认)</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root variant="ghost">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>产品</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>价格</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>库存</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>产品 A</Table.Cell>
                      <Table.Cell>¥99</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>产品 B</Table.Cell>
                      <Table.Cell>¥199</Table.Cell>
                      <Table.Cell>25</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>

            <Box>
              <Text size="3" weight="bold" mb="2">Surface 变体 (variant="surface")</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root variant="surface">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>产品</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>价格</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>库存</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>产品 A</Table.Cell>
                      <Table.Cell>¥99</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>产品 B</Table.Cell>
                      <Table.Cell>¥199</Table.Cell>
                      <Table.Cell>25</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box mb="6">
          <Heading as="h2" size="5" mb="4">表格布局</Heading>
          <Flex direction="column" gap="4">
            <Box mb="3">
              <Text size="3" weight="bold" mb="2">自动布局 (layout="auto", 默认)</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root layout="auto">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>产品名称</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>描述</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>智能手表</Table.Cell>
                      <Table.Cell>这是一款功能全面的智能手表，支持心率监测、睡眠追踪等多种功能。</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>002</Table.Cell>
                      <Table.Cell>无线耳机</Table.Cell>
                      <Table.Cell>高音质无线耳机，配备主动降噪功能，提供沉浸式音频体验。</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>

            <Box>
              <Text size="3" weight="bold" mb="2">固定布局 (layout="fixed")</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root layout="fixed">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell width="20%">ID</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell width="30%">产品名称</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell width="50%">描述</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>智能手表</Table.Cell>
                      <Table.Cell>这是一款功能全面的智能手表，支持心率监测、睡眠追踪等多种功能。</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>002</Table.Cell>
                      <Table.Cell>无线耳机</Table.Cell>
                      <Table.Cell>高音质无线耳机，配备主动降噪功能，提供沉浸式音频体验。</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box mb="6">
          <Heading as="h2" size="5" mb="4">单元格对齐</Heading>
          <Flex direction="column" gap="4">
            <Box mb="3">
              <Text size="3" weight="bold" mb="2">水平对齐</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root variant="surface">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>左对齐 (默认)</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell justify="center">居中对齐</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell justify="end">右对齐</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>文本靠左</Table.Cell>
                      <Table.Cell justify="center">文本居中</Table.Cell>
                      <Table.Cell justify="end">文本靠右</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>数据 1</Table.Cell>
                      <Table.Cell justify="center">数据 2</Table.Cell>
                      <Table.Cell justify="end">数据 3</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>

            <Box>
              <Text size="3" weight="bold" mb="2">垂直对齐</Text>
              <Box style={{ maxWidth: '600px' }}>
                <Table.Root variant="surface" size="3">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>顶部对齐</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>居中对齐</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>底部对齐</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>顶部</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>默认</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>默认</Text>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row align="center">
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>居中</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>居中</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>居中</Text>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row align="end">
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>底部</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>底部</Text>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div style={{ height: '80px' }}>
                          <Text>底部</Text>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Theme>
  );
};

Default.storyName = '基础示例';

export const UseCases = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="6" mb="5">实用案例</Heading>
        <Flex direction="column" gap="8">
          <Box>
            <Heading as="h2" size="4" mb="4">用户列表</Heading>
            <Box style={{ maxWidth: '800px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell width="50px"></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>用户</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>邮箱</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>状态</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>角色</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width="100px">操作</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Avatar
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="LZ"
                        size="2"
                      />
                    </Table.Cell>
                    <Table.Cell>李智</Table.Cell>
                    <Table.Cell>lzhi@example.com</Table.Cell>
                    <Table.Cell><Badge color="green">在线</Badge></Table.Cell>
                    <Table.Cell>管理员</Table.Cell>
                    <Table.Cell><Button variant="soft" size="1">详情</Button></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Avatar
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="WY"
                        size="2"
                      />
                    </Table.Cell>
                    <Table.Cell>王妍</Table.Cell>
                    <Table.Cell>wyan@example.com</Table.Cell>
                    <Table.Cell><Badge color="gray">离线</Badge></Table.Cell>
                    <Table.Cell>编辑</Table.Cell>
                    <Table.Cell><Button variant="soft" size="1">详情</Button></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Avatar
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="ZM"
                        size="2"
                      />
                    </Table.Cell>
                    <Table.Cell>张敏</Table.Cell>
                    <Table.Cell>zmin@example.com</Table.Cell>
                    <Table.Cell><Badge color="yellow">闲置</Badge></Table.Cell>
                    <Table.Cell>用户</Table.Cell>
                    <Table.Cell><Button variant="soft" size="1">详情</Button></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
            <Text size="2" mt="4" color="gray">用户管理界面的用户列表</Text>
          </Box>

          <Box>
            <Heading as="h2" size="4" mb="4">产品报表</Heading>
            <Box style={{ maxWidth: '800px', padding: '16px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.RowHeaderCell></Table.RowHeaderCell>
                    <Table.ColumnHeaderCell justify="end">一月</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell justify="end">二月</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell justify="end">三月</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell justify="end">本季度总计</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell>产品 A</Table.RowHeaderCell>
                    <Table.Cell justify="end">¥12,500</Table.Cell>
                    <Table.Cell justify="end">¥18,800</Table.Cell>
                    <Table.Cell justify="end">¥15,300</Table.Cell>
                    <Table.Cell justify="end">¥46,600</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>产品 B</Table.RowHeaderCell>
                    <Table.Cell justify="end">¥8,900</Table.Cell>
                    <Table.Cell justify="end">¥10,200</Table.Cell>
                    <Table.Cell justify="end">¥12,400</Table.Cell>
                    <Table.Cell justify="end">¥31,500</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>产品 C</Table.RowHeaderCell>
                    <Table.Cell justify="end">¥7,200</Table.Cell>
                    <Table.Cell justify="end">¥6,800</Table.Cell>
                    <Table.Cell justify="end">¥9,500</Table.Cell>
                    <Table.Cell justify="end">¥23,500</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>月度总计</Table.RowHeaderCell>
                    <Table.Cell justify="end">¥28,600</Table.Cell>
                    <Table.Cell justify="end">¥35,800</Table.Cell>
                    <Table.Cell justify="end">¥37,200</Table.Cell>
                    <Table.Cell justify="end">¥101,600</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
            <Text size="2" mt="4" color="gray">季度销售报表</Text>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

UseCases.storyName = '实用案例';

export const TableAPI = () => {
  return (
    <Theme>
      <div>
        <div className="api-table-title">Table API</div>
        <TablePropsComponent />
      </div>
    </Theme>
  );
};

TableAPI.storyName = '组件 API'; 