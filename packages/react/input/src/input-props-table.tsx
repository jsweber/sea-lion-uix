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
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '20%', borderBottom: '2px solid var(--gray-5)' }}>参数</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '35%', borderBottom: '2px solid var(--gray-5)' }}>说明</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', width: '25%', borderBottom: '2px solid var(--gray-5)' }}>类型</th>
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

// Input.Root 组件属性
export const inputRootProps = [
  { param: 'size', desc: '输入框尺寸', type: "'1' | '2' | '3'", defaultValue: "'2'", version: '0.2.0' },
  { param: 'variant', desc: '输入框变体样式', type: "'classic' | 'surface' | 'soft'", defaultValue: "'surface'", version: '0.2.0' },
  { param: 'color', desc: '输入框主题色', type: '主题色', defaultValue: '-', version: '0.2.0' },
  { param: 'radius', desc: '圆角大小', type: "'none' | '1' - '6' | 'full'", defaultValue: '-', version: '0.2.0' },
  { param: 'type', desc: '输入框类型', type: "'text' | 'password' | 'email' | 'number' | ...", defaultValue: "'text'", version: '0.2.0' },
  { param: 'value', desc: '输入框的值', type: 'string | number', defaultValue: '-', version: '0.2.0' },
  { param: 'defaultValue', desc: '输入框的默认值', type: 'string | number', defaultValue: '-', version: '0.2.0' },
];

// Input.Slot 组件属性
export const inputSlotProps = [
  { param: 'side', desc: '插槽位置', type: "'left' | 'right'", defaultValue: '-', version: '0.2.0' },
  { param: 'color', desc: '插槽内容颜色', type: '主题色', defaultValue: '-', version: '0.2.0' },
  { param: 'gap', desc: '插槽内部间距', type: "'1' - '9'", defaultValue: '-', version: '0.2.0' },
  { param: 'px', desc: '水平内边距', type: "'1' - '9'", defaultValue: '-', version: '0.2.0' },
  { param: 'pl', desc: '左内边距', type: "'1' - '9'", defaultValue: '-', version: '0.2.0' },
  { param: 'pr', desc: '右内边距', type: "'1' - '9'", defaultValue: '-', version: '0.2.0' },
];

// API文档组件
export const InputPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Input.Root Props" data={inputRootProps} />
      <ApiTable title="Input.Slot Props" data={inputSlotProps} />
    </Box>
  );
}; 