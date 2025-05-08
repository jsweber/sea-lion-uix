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
      <Text size="4" weight="bold" mt="6" mb="3">{title}</Text>
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

// Popover.Root 组件属性
export const rootProps = [
  { param: 'open', desc: '控制弹出的打开状态', type: 'boolean', defaultValue: '-', version: '0.2.1' },
  { param: 'defaultOpen', desc: '默认的打开状态', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
  { param: 'onOpenChange', desc: '开关状态改变时的回调', type: '(open: boolean) => void', defaultValue: '-', version: '0.2.1' },
  { param: 'modal', desc: '是否为模态，阻止与外部的交互', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
];

// Popover.Content 组件属性
export const contentProps = [
  { param: 'size', desc: '弹出内容的尺寸', type: "'1' | '2' | '3' | '4'", defaultValue: "'2'", version: '0.2.1' },
  { param: 'width', desc: '宽度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'minWidth', desc: '最小宽度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'maxWidth', desc: '最大宽度', type: 'string', defaultValue: "'480px'", version: '0.2.1' },
  { param: 'height', desc: '高度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'minHeight', desc: '最小高度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'maxHeight', desc: '最大高度', type: 'string', defaultValue: '-', version: '0.2.1' },
  { param: 'forceMount', desc: '强制加载组件', type: 'boolean', defaultValue: '-', version: '0.2.1' },
  { param: 'container', desc: '指定挂载容器', type: 'HTMLElement', defaultValue: '-', version: '0.2.1' },
  { param: 'asChild', desc: '将组件的样式和行为应用于子元素', type: 'boolean', defaultValue: 'false', version: '0.2.1' },
];

// Popover.Trigger 组件属性
export const triggerProps = [
  { param: 'asChild', desc: '将组件的样式和行为应用于子元素', type: 'boolean', defaultValue: 'true', version: '0.2.1' },
];

// Popover.Close 组件属性
export const closeProps = [
  { param: 'asChild', desc: '将组件的样式和行为应用于子元素', type: 'boolean', defaultValue: 'true', version: '0.2.1' },
];

// API文档组件
export const PopoverPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Popover.Root Props" data={rootProps} />
      <ApiTable title="Popover.Content Props" data={contentProps} />
      <ApiTable title="Popover.Trigger Props" data={triggerProps} />
      <ApiTable title="Popover.Close Props" data={closeProps} />
    </Box>
  );
}; 