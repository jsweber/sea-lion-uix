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

// 完整的属性列表
export const tooltipProps = [
  { param: 'content', desc: '提示内容', type: 'ReactNode', defaultValue: '-', version: '0.2.3' },
  { param: 'width', desc: '提示框宽度', type: 'string', defaultValue: '-', version: '0.2.3' },
  { param: 'minWidth', desc: '提示框最小宽度', type: 'string', defaultValue: '-', version: '0.2.3' },
  { param: 'maxWidth', desc: '提示框最大宽度', type: 'string', defaultValue: '\'360px\'', version: '0.2.3' },
  { param: 'open', desc: '是否显示提示', type: 'boolean', defaultValue: '-', version: '0.2.3' },
  { param: 'defaultOpen', desc: '默认是否显示提示', type: 'boolean', defaultValue: 'false', version: '0.2.3' },
  { param: 'onOpenChange', desc: '提示显示状态变化时的回调', type: '(open: boolean) => void', defaultValue: '-', version: '0.2.3' },
  { param: 'delayDuration', desc: '显示延迟时间(毫秒)', type: 'number', defaultValue: '700', version: '0.2.3' },
  { param: 'disableHoverableContent', desc: '是否禁用内容悬停', type: 'boolean', defaultValue: 'true', version: '0.2.3' },
  { param: 'side', desc: '提示显示位置', type: '\'top\' | \'right\' | \'bottom\' | \'left\'', defaultValue: '\'top\'', version: '0.2.3' },
  { param: 'sideOffset', desc: '提示与目标元素的偏移量', type: 'number', defaultValue: '4', version: '0.2.3' },
  { param: 'align', desc: '提示与目标元素的对齐方式', type: '\'start\' | \'center\' | \'end\'', defaultValue: '\'center\'', version: '0.2.3' },
  { param: 'container', desc: '提示挂载的容器', type: 'HTMLElement', defaultValue: '-', version: '0.2.3' },
  { param: 'forceMount', desc: '是否强制挂载提示内容', type: 'boolean', defaultValue: '-', version: '0.2.3' },
  { param: 'skipDelayDuration', desc: '跳过延迟的时间阈值(毫秒)', type: 'number', defaultValue: '300', version: '0.2.3' },
  { param: 'hideArrow', desc: '是否隐藏箭头', type: 'boolean', defaultValue: 'false', version: '0.2.3' },
  { param: 'asChild', desc: '是否将样式应用于子元素', type: 'boolean', defaultValue: 'false', version: '0.2.3' },
  { param: 'avoidCollisions', desc: '是否避免碰撞', type: 'boolean', defaultValue: 'true', version: '0.2.3' },
  { param: 'sticky', desc: '粘性定位策略', type: '\'partial\' | \'always\'', defaultValue: 'partial', version: '0.2.3' },
  { param: 'hideWhenDetached', desc: '当脱离视口时是否隐藏', type: 'boolean', defaultValue: 'false', version: '0.2.3' },
];

// API文档组件
export const TooltipPropsComponent: React.FC = () => {
  return (
    <Box p="5" style={{ maxWidth: '900px' }}>
      <ApiTable title="Tooltip Props" data={tooltipProps} />
    </Box>
  );
}; 