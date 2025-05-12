import React from 'react';
import { Box } from '@sea-lion/react-box';
import { Text } from '@sea-lion/react-text';

interface TableProps {
  title: string;
  data: {
    param: string;
    desc: string;
    type: string;
    defaultValue: string;
    version: string;
  }[];
}

const ApiTable: React.FC<TableProps> = ({ title, data }) => {
  return (
    <>
      <Text size="3" weight="bold" mt="6" mb="3">{title}</Text>
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
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
            {data.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--gray-1)' : undefined }}>
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.param}</td>
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.desc}</td>
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.type}</td>
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.defaultValue}</td>
                <td style={{ padding: '12px 16px', borderBottom: index < data.length - 1 ? '1px solid var(--gray-4)' : undefined }}>{item.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// Root 组件属性
export const rootProps = [
  { param: 'size', desc: '组件大小', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.4' },
  { param: 'value', desc: '当前选中值', type: "string", defaultValue: "-", version: '0.2.4' },
  { param: 'defaultValue', desc: '默认选中值', type: "string", defaultValue: "-", version: '0.2.4' },
  { param: 'onValueChange', desc: '值变化回调函数', type: "(value: string) => void", defaultValue: "-", version: '0.2.4' },
  { param: 'open', desc: '控制下拉菜单是否打开', type: "boolean", defaultValue: "-", version: '0.2.4' },
  { param: 'defaultOpen', desc: '默认下拉菜单是否打开', type: "boolean", defaultValue: "-", version: '0.2.4' },
  { param: 'onOpenChange', desc: '打开状态变化回调', type: "(open: boolean) => void", defaultValue: "-", version: '0.2.4' },
  { param: 'disabled', desc: '是否禁用', type: "boolean", defaultValue: "false", version: '0.2.4' },
];

// Trigger 组件属性
export const triggerProps = [
  { param: 'variant', desc: '视觉变体', type: "'classic' | 'surface' | 'soft' | 'ghost'", defaultValue: "'surface'", version: '0.2.4' },
  { param: 'color', desc: '颜色', type: "string", defaultValue: "-", version: '0.2.4' },
  { param: 'radius', desc: '圆角大小', type: "'none' | 'small' | 'medium' | 'large' | 'full'", defaultValue: "-", version: '0.2.4' },
  { param: 'placeholder', desc: '占位符文本', type: "string", defaultValue: "-", version: '0.2.4' },
];

// Content 组件属性
export const contentProps = [
  { param: 'variant', desc: '视觉变体', type: "'solid' | 'soft'", defaultValue: "'solid'", version: '0.2.4' },
  { param: 'color', desc: '颜色', type: "string", defaultValue: "-", version: '0.2.4' },
  { param: 'highContrast', desc: '是否高对比度', type: "boolean", defaultValue: "false", version: '0.2.4' },
];

// Item 组件属性
export const itemProps = [
  { param: 'value', desc: '选项值', type: "string", defaultValue: "-", version: '0.2.4' },
  { param: 'disabled', desc: '是否禁用', type: "boolean", defaultValue: "false", version: '0.2.4' },
];

// API文档组件
export const SelectPropsComponent: React.FC = () => {
  return (
    <Box style={{ maxWidth: '900px' }}>
      <ApiTable title="Root 属性" data={rootProps} />
      <ApiTable title="Trigger 属性" data={triggerProps} />
      <ApiTable title="Content 属性" data={contentProps} />
      <ApiTable title="Item 属性" data={itemProps} />
    </Box>
  );
}; 