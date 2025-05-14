import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from '../../theme/src';
import { Slider } from '@sea-lion/react-slider';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { SliderPropsComponent } from './slider-props-table';

/**
 * ## 介绍
 * 
 * Slider 是一个滑动输入控件，允许用户在一个范围内选择值。
 * 
 * ## 何时使用
 * 
 * - 需要在连续或离散的区间内选择值
 * - 需要快速调整数值
 * - 当操作需要立即反馈时
 */
const meta: Meta<typeof Slider> = {
  title: '数据录入/Slider',
  component: Slider,
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
      <Text mb="5">最基本的滑块控件。</Text>
      
      <Box style={{ width: '300px' }}>
        <Slider defaultValue={[50]} />
      </Box>
    </Box>
  );
};

BasicUsage.storyName = '基本用法';

export const RangeSlider = () => {
  return (
    <Box>
      <Heading size="3" mb="4">范围选择</Heading>
      <Text mb="5">可以设置最小值、最大值和步长，也可以使用多个滑块创建范围选择器。</Text>
      
      <Box style={{ width: '300px' }}>
        <Text size="2" mb="2">步长为 10</Text>
        <Slider defaultValue={[30]} min={0} max={100} step={10} mb="5" />
        
        <Text size="2" mb="2">自定义范围 (-5 到 5)</Text>
        <Slider defaultValue={[2]} min={-5} max={5} step={1} mb="5" />
        
        <Text size="2" mb="2">范围选择</Text>
        <Slider defaultValue={[20, 80]} mb="5" />
        
        <Text size="2" mb="2">多点选择</Text>
        <Slider defaultValue={[10, 50, 90]} />
      </Box>
    </Box>
  );
};

RangeSlider.storyName = '范围选择';

export const SliderSizes = () => {
  return (
    <Box>
      <Heading size="3" mb="4">不同尺寸</Heading>
      <Text mb="5">Slider 组件提供三种不同的尺寸。</Text>
      
      <Box style={{ width: '300px' }}>
        <Text size="2" mb="2">尺寸 1（最小）</Text>
        <Slider size="1" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">尺寸 2（默认）</Text>
        <Slider size="2" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">尺寸 3（最大）</Text>
        <Slider size="3" defaultValue={[50]} />
      </Box>
    </Box>
  );
};

SliderSizes.storyName = '不同尺寸';

export const SliderVariants = () => {
  return (
    <Box>
      <Heading size="3" mb="4">不同变体</Heading>
      <Text mb="5">Slider 组件支持多种变体样式。</Text>
      
      <Box style={{ width: '300px' }}>
        <Text size="2" mb="2">经典变体</Text>
        <Slider variant="classic" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">表面变体（默认）</Text>
        <Slider variant="surface" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">柔和变体</Text>
        <Slider variant="soft" defaultValue={[50]} />
      </Box>
    </Box>
  );
};

SliderVariants.storyName = '不同变体';

export const SliderColors = () => {
  return (
    <Box>
      <Heading size="3" mb="4">自定义颜色</Heading>
      <Text mb="5">Slider 组件可以使用不同的颜色。</Text>
      
      <Box style={{ width: '300px' }}>
        <Text size="2" mb="2">蓝色（默认）</Text>
        <Slider color="blue" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">红色</Text>
        <Slider color="red" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">绿色</Text>
        <Slider color="green" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">紫色</Text>
        <Slider color="purple" defaultValue={[50]} mb="5" />
        
        <Text size="2" mb="2">高对比度</Text>
        <Slider highContrast defaultValue={[50]} />
      </Box>
    </Box>
  );
};

SliderColors.storyName = '自定义颜色';

export const VerticalSlider = () => {
  return (
    <Box>
      <Heading size="3" mb="4">垂直方向</Heading>
      <Text mb="5">Slider 组件可以设置为垂直方向。</Text>
      
      <Flex gap="4">
        <Box style={{ height: '200px' }}>
          <Slider orientation="vertical" defaultValue={[50]} />
        </Box>
        
        <Box style={{ height: '200px' }}>
          <Slider orientation="vertical" defaultValue={[30, 70]} color="green" />
        </Box>
        
        <Box style={{ height: '200px' }}>
          <Slider orientation="vertical" size="3" defaultValue={[50]} color="purple" />
        </Box>
      </Flex>
    </Box>
  );
};

VerticalSlider.storyName = '垂直方向';

export const DisabledSlider = () => {
  return (
    <Box>
      <Heading size="3" mb="4">禁用状态</Heading>
      <Text mb="5">禁用状态的滑块不可交互。</Text>
      
      <Box style={{ width: '300px' }}>
        <Slider disabled defaultValue={[50]} mb="5" />
        
        <Slider disabled defaultValue={[20, 80]} color="red" />
      </Box>
    </Box>
  );
};

DisabledSlider.storyName = '禁用状态';

export const ControlledSlider = () => {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  
  return (
    <Box>
      <Heading size="3" mb="4">受控组件</Heading>
      <Text mb="5">使用 React 状态控制滑块值。</Text>
      
      <Box style={{ width: '300px' }}>
        <Text size="2" mb="2">单点滑块：{value[0]}</Text>
        <Slider 
          value={value} 
          onValueChange={(newValue) => setValue(newValue)} 
          mb="5"
        />
        
        <Text size="2" mb="2">范围滑块：{rangeValue[0]} - {rangeValue[1]}</Text>
        <Slider 
          value={rangeValue} 
          onValueChange={(newValue) => setRangeValue(newValue)} 
          color="green"
        />
      </Box>
    </Box>
  );
};

ControlledSlider.storyName = '受控组件';

export const SliderAPI = () => {
  return (
    <Theme>
      <Box style={{ padding: 'var(--space-5)' }}>
        <Heading size="4" mb="5">API 参考</Heading>
        
        <SliderPropsComponent />
        <Box mt="4" style={{ maxWidth: '900px' }}>
          <Text size="2" mt="3" color="gray">除了上述属性外，Slider 组件还支持所有标准的外边距（margin）属性。</Text>
        </Box>
      </Box>
    </Theme>
  );
};

SliderAPI.storyName = '组件 API'; 