import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Tooltip } from '@sea-lion/react-tooltip';
import { Button } from '@sea-lion/react-button';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { useState } from 'react';
import { TooltipPropsComponent } from './tooltip-props-table';

/**
 * ## 介绍
 * 
 * Tooltip 是一个提示组件，当用户将鼠标悬停在元素上时显示简短的说明文本。
 * 组件支持自定义内容、宽度和位置等属性。
 * 
 * ## 何时使用
 * 
 * - 当需要为用户提供额外的上下文或解释时
 * - 当元素需要简短的辅助说明时
 * - 当界面空间有限，无法直接显示所有信息时
 * - 用于展示非关键信息，不影响用户主要任务的完成
 */
const meta: Meta<typeof Tooltip> = {
  title: '反馈/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '提示内容'
    },
    width: {
      control: 'text',
      description: '提示框宽度'
    },
    minWidth: {
      control: 'text',
      description: '提示框最小宽度'
    },
    maxWidth: {
      control: 'text',
      description: '提示框最大宽度',
      defaultValue: '360px'
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
      description: '提示显示位置',
      defaultValue: 'top'
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
      description: '提示与目标元素的对齐方式',
      defaultValue: 'center'
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '显示延迟时间(毫秒)',
      defaultValue: 700
    },
    sideOffset: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
      description: '提示与目标元素的偏移量',
      defaultValue: 4
    },
    disableHoverableContent: {
      control: 'boolean',
      description: '是否禁用内容悬停',
      defaultValue: true
    },
    open: {
      control: 'boolean',
      description: '是否显示提示'
    },
    defaultOpen: {
      control: 'boolean',
      description: '默认是否显示提示',
      defaultValue: false
    }
  }
};

export default meta;

export const Basic = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">基本使用</Heading>
        
        <Flex gap="4" wrap="wrap">
          <Tooltip content="这是一个简单的提示文本">
            <Button>悬停查看提示</Button>
          </Tooltip>
        </Flex>
      </Box>
    </Theme>
  );
};

Basic.storyName = '基本使用';

export const Positions = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">不同位置</Heading>
        
        <Flex gap="4" wrap="wrap">
          <Tooltip content="顶部提示" side="top">
            <Button variant="outline">顶部</Button>
          </Tooltip>
          
          <Tooltip content="右侧提示" side="right">
            <Button variant="outline">右侧</Button>
          </Tooltip>
          
          <Tooltip content="底部提示" side="bottom">
            <Button variant="outline">底部</Button>
          </Tooltip>
          
          <Tooltip content="左侧提示" side="left">
            <Button variant="outline">左侧</Button>
          </Tooltip>
        </Flex>
      </Box>
    </Theme>
  );
};

Positions.storyName = '不同位置';

export const Alignments = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">不同对齐方式</Heading>
        
        <Flex direction="column" gap="5">
          <Flex gap="4" wrap="wrap">
            <Box width="100px">
              <Text size="2">顶部对齐：</Text>
            </Box>
            <Tooltip content="起始对齐" side="top" align="start">
              <Button variant="outline">起始对齐</Button>
            </Tooltip>
            
            <Tooltip content="居中对齐" side="top" align="center">
              <Button variant="outline">居中对齐</Button>
            </Tooltip>
            
            <Tooltip content="末端对齐" side="top" align="end">
              <Button variant="outline">末端对齐</Button>
            </Tooltip>
          </Flex>
          
          <Flex gap="4" wrap="wrap">
            <Text size="2" style={{ width: '100px' }}>左侧对齐：</Text>
            <Tooltip content="起始对齐" side="left" align="start">
              <Button variant="outline">起始对齐</Button>
            </Tooltip>
            
            <Tooltip content="居中对齐" side="left" align="center">
              <Button variant="outline">居中对齐</Button>
            </Tooltip>
            
            <Tooltip content="末端对齐" side="left" align="end">
              <Button variant="outline">末端对齐</Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Theme>
  );
};

Alignments.storyName = '不同对齐方式';

export const Delays = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">自定义延迟</Heading>
        
        <Flex gap="4" wrap="wrap">
          <Tooltip content="立即显示" delayDuration={0}>
            <Button variant="outline">无延迟</Button>
          </Tooltip>
          
          <Tooltip content="短延迟显示（300ms）" delayDuration={300}>
            <Button variant="outline">短延迟</Button>
          </Tooltip>
          
          <Tooltip content="默认延迟显示（700ms）">
            <Button variant="outline">默认延迟</Button>
          </Tooltip>
          
          <Tooltip content="长延迟显示（1500ms）" delayDuration={1500}>
            <Button variant="outline">长延迟</Button>
          </Tooltip>
        </Flex>
      </Box>
    </Theme>
  );
};

Delays.storyName = '自定义延迟';

export const CustomWidth = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">自定义宽度</Heading>
        
        <Flex gap="4" wrap="wrap">
          <Tooltip 
            content="固定宽度为 150px 的提示文本"
            width="150px"
          >
            <Button variant="outline">固定宽度</Button>
          </Tooltip>
          
          <Tooltip 
            content="最小宽度为 200px 的提示文本"
            minWidth="200px"
          >
            <Button variant="outline">最小宽度</Button>
          </Tooltip>
          
          <Tooltip 
            content="这是一个较长的提示文本，设置了最大宽度为 200px，内容会自动换行显示。当内容超过最大宽度时，文本会自动换行。"
            maxWidth="200px"
          >
            <Button variant="outline">最大宽度</Button>
          </Tooltip>
        </Flex>
      </Box>
    </Theme>
  );
};

CustomWidth.storyName = '自定义宽度';

export const HoverableContent = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">可悬停内容</Heading>
        
        <Flex gap="4" wrap="wrap">
          <Tooltip 
            content="这个提示不可悬停，鼠标移出触发元素后立即关闭"
            disableHoverableContent={true}
          >
            <Button variant="outline">默认（不可悬停）</Button>
          </Tooltip>
          
          <Tooltip 
            content="这个提示可以悬停，请尝试将鼠标移动到这个提示上"
            disableHoverableContent={false}
          >
            <Button variant="outline">可悬停提示</Button>
          </Tooltip>
        </Flex>
      </Box>
    </Theme>
  );
};

HoverableContent.storyName = '可悬停内容';

export const ControlledState = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">控制开关状态</Heading>
        
        <Flex direction="column" gap="5">
          <Box>
            <Heading as="h2" size="3" mb="3">按钮点击触发</Heading>
            <Tooltip 
              content="受控提示"
              open={open1}
              onOpenChange={setOpen1}
            >
              <Button variant="outline" onClick={() => setOpen1(!open1)}>
                {open1 ? "关闭提示" : "打开提示"}
              </Button>
            </Tooltip>
          </Box>
          
          <Box>
            <Heading as="h2" size="3" mb="3">外部控制</Heading>
            <Flex gap="4" align="center">
              <Tooltip 
                content="这个提示由外部控制"
                open={open2}
                onOpenChange={setOpen2}
              >
                <Button variant="soft">悬停或点击下方按钮</Button>
              </Tooltip>
              
              <Button 
                variant="outline" 
                color={open2 ? "red" : "green"} 
                onClick={() => setOpen2(!open2)}
              >
                {open2 ? "关闭提示" : "打开提示"}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

ControlledState.storyName = '控制开关状态';

export const UseCases = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">实用案例</Heading>
        
        <Box mb="6">
          <Heading as="h2" size="4" mb="4">表单辅助提示</Heading>
          <Box style={{ maxWidth: '500px', padding: '20px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
            <Flex direction="column" gap="4">
              <Box>
                <Flex align="center" gap="1" mb="2">
                  <Text size="2" weight="medium">用户名</Text>
                  <Tooltip content="用户名必须是 3-16 个字符，只能包含字母、数字和下划线">
                    <Text size="2" color="gray">(?)</Text>
                  </Tooltip>
                </Flex>
                <input type="text" placeholder="请输入用户名" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--gray-7)' }} />
              </Box>
              
              <Box>
                <Flex align="center" gap="1" mb="2">
                  <Text size="2" weight="medium">密码</Text>
                  <Tooltip 
                    content="密码必须包含至少 8 个字符，包括大小写字母、数字和特殊字符"
                    side="right"
                  >
                    <Text size="2" color="gray">(?)</Text>
                  </Tooltip>
                </Flex>
                <input type="password" placeholder="请输入密码" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--gray-7)' }} />
              </Box>
            </Flex>
          </Box>
        </Box>
        
        <Box mb="6">
          <Heading as="h2" size="4" mb="4">功能按钮提示</Heading>
          <Box style={{ padding: '20px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
            <Flex gap="3">
              <Tooltip content="添加新项目">
                <Button variant="soft" size="1">+</Button>
              </Tooltip>
              
              <Tooltip content="刷新列表">
                <Button variant="soft" size="1">↻</Button>
              </Tooltip>
              
              <Tooltip content="导出为 Excel">
                <Button variant="soft" size="1">⤓</Button>
              </Tooltip>
              
              <Tooltip content="设置">
                <Button variant="soft" size="1">⚙</Button>
              </Tooltip>
              
              <Tooltip content="帮助中心" side="bottom">
                <Button variant="soft" size="1">?</Button>
              </Tooltip>
            </Flex>
          </Box>
        </Box>
        
        <Box mb="6">
          <Heading as="h2" size="4" mb="4">截断文本提示</Heading>
          <Box style={{ maxWidth: '500px', padding: '20px', border: '1px solid var(--gray-5)', borderRadius: '8px' }}>
            <Flex direction="column" gap="4">
              <Box>
                <Text size="2" weight="medium" mb="1">产品名称</Text>
                <Tooltip content="高级企业客户关系管理解决方案与数据分析平台">
                  <div style={{ 
                    maxWidth: '200px', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    border: '1px solid var(--gray-7)',
                    padding: '8px',
                    borderRadius: '4px'
                  }}>
                    高级企业客户关系管理解决方案与数据分析平台
                  </div>
                </Tooltip>
              </Box>
              
              <Box>
                <Text size="2" weight="medium" mb="1">详细描述</Text>
                <Tooltip 
                  content="这是一个完整的企业级解决方案，提供客户管理、销售跟踪、数据分析和报表生成功能，支持多用户协作和云端部署，适合中大型企业使用。" 
                  maxWidth="300px"
                >
                  <div style={{ 
                    maxWidth: '200px', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    border: '1px solid var(--gray-7)',
                    padding: '8px',
                    borderRadius: '4px'
                  }}>
                    这是一个完整的企业级解决方案，提供客户管理、销售跟踪、数据分析和报表生成功能，支持多用户协作和云端部署，适合中大型企业使用。
                  </div>
                </Tooltip>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Theme>
  );
};

UseCases.storyName = '实用案例';

export const API = () => {
  return (
    <Theme>
      <Box p="4">
        <Heading as="h1" size="5" mb="5">API 参考</Heading>
        <TooltipPropsComponent />
      </Box>
    </Theme>
  );
};

API.storyName = '组件 API';

// TooltipAPI 部分将在 tooltip-props-table.tsx 中创建 