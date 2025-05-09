import type { Meta } from '@storybook/react';
import { Theme } from '../../theme/src';

import { Reset } from '@sea-lion/react-reset';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { ResetPropsComponent } from './reset-props-table';

/**
 * ## 介绍
 * 
 * Reset 是一个样式重置组件，用于清除 HTML 元素的默认样式，确保在不同浏览器中的一致外观。
 * 
 * ## 何时使用
 * 
 * - 需要移除元素默认样式时
 * - 作为自定义组件的基础
 * - 需要确保跨浏览器样式一致性时
 */
const meta: Meta<typeof Reset> = {
  component: Reset,
  title: 'Reset',
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
    <Box>
      <Heading size="3" mb="4">基础用法</Heading>
      <Text mb="3">Reset 组件用于清除 HTML 元素的默认样式，使其在不同浏览器中具有一致的外观。</Text>
      
      <Flex direction="column" gap="6">
        <Box>
          <Text weight="bold" mb="2">按钮重置前后对比：</Text>
          <Flex align="center" gap="6">
            <Flex direction="column" gap="2" align="center">
              <button style={{ padding: '5px 10px' }}>未重置的按钮</button>
              <Text size="1" color="gray">原始按钮</Text>
            </Flex>
            <Flex direction="column" gap="2" align="center">
              <Reset>
                <button style={{ padding: '5px 10px' }}>重置后的按钮</button>
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">输入框重置前后对比：</Text>
          <Flex align="center" gap="6">
            <Flex direction="column" gap="2" align="center">
              <input type="text" placeholder="未重置的输入框" />
              <Text size="1" color="gray">原始输入框</Text>
            </Flex>
            <Flex direction="column" gap="2" align="center">
              <Reset>
                <input type="text" placeholder="重置后的输入框" />
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export const HTMLElements = () => {
  return (
    <Box>
      <Heading size="3" mb="4">HTML 元素重置</Heading>
      <Text mb="3">Reset 组件可以应用于各种 HTML 元素，以下展示了部分常见元素的重置效果。</Text>
      
      <Flex direction="column" gap="6">
        <Box>
          <Text weight="bold" mb="2">链接：</Text>
          <Flex align="center" gap="6">
            <Flex direction="column" gap="2" align="center">
              <a href="#" onClick={(e) => e.preventDefault()}>未重置的链接</a>
              <Text size="1" color="gray">原始链接</Text>
            </Flex>
            <Flex direction="column" gap="2" align="center">
              <Reset>
                <a href="#" onClick={(e) => e.preventDefault()}>重置后的链接</a>
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">列表：</Text>
          <Flex align="start" gap="6">
            <Flex direction="column" gap="2">
              <ul>
                <li>列表项 1</li>
                <li>列表项 2</li>
                <li>列表项 3</li>
              </ul>
              <Text size="1" color="gray">原始列表</Text>
            </Flex>
            <Flex direction="column" gap="2">
              <Reset>
                <ul>
                  <li>列表项 1</li>
                  <li>列表项 2</li>
                  <li>列表项 3</li>
                </ul>
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">单选按钮：</Text>
          <Flex align="center" gap="6">
            <Flex direction="column" gap="2" align="center">
              <input type="radio" name="original" />
              <Text size="1" color="gray">原始单选按钮</Text>
            </Flex>
            <Flex direction="column" gap="2" align="center">
              <Reset>
                <input type="radio" name="reset" />
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">复选框：</Text>
          <Flex align="center" gap="6">
            <Flex direction="column" gap="2" align="center">
              <input type="checkbox" />
              <Text size="1" color="gray">原始复选框</Text>
            </Flex>
            <Flex direction="column" gap="2" align="center">
              <Reset>
                <input type="checkbox" />
              </Reset>
              <Text size="1" color="gray">使用 Reset 组件</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export const CombinedUsage = () => {
  return (
    <Box>
      <Heading size="3" mb="4">组合使用</Heading>
      <Text mb="3">Reset 组件常作为其他组件的基础使用，可以与其他组件结合构建复杂的 UI。</Text>
      
      <Flex direction="column" gap="6">
        <Box>
          <Text weight="bold" mb="2">与 Box 组件结合：</Text>
          <Reset>
            <Box 
              p="4"
              style={{ 
                width: '200px', 
                borderRadius: '8px',
                backgroundColor: 'var(--gray-3)'
              }}
            >
              <button style={{ 
                width: '100%', 
                padding: '8px', 
                textAlign: 'center',
                background: 'var(--blue-9)',
                color: 'white',
                borderRadius: '4px'
              }}>
                自定义按钮
              </button>
            </Box>
          </Reset>
          <Text size="1" color="gray" mt="2">Reset + Box + button</Text>
        </Box>
        
        <Box>
          <Text weight="bold" mb="2">自定义表单元素：</Text>
          <Reset>
            <Flex direction="column" gap="3" style={{ maxWidth: '300px' }}>
              <input 
                type="text" 
                placeholder="自定义输入框" 
                style={{ 
                  padding: '10px',
                  border: '1px solid var(--gray-7)',
                  borderRadius: '4px',
                }}
              />
              <select
                style={{ 
                  padding: '10px',
                  border: '1px solid var(--gray-7)',
                  borderRadius: '4px',
                  background: 'white'
                }}
              >
                <option>选项 1</option>
                <option>选项 2</option>
                <option>选项 3</option>
              </select>
            </Flex>
          </Reset>
          <Text size="1" color="gray" mt="2">使用 Reset 构建自定义表单元素</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export const UseCases = () => {
  return (
    <Theme>
      <Box p="5">
        <Heading size="4" mb="6">实用案例</Heading>
        <Text mb="5">Reset 组件在实际应用中的一些示例。</Text>
        
        <Flex direction="column" gap="7">
          {/* 自定义按钮案例 */}
          <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
            <Heading size="3" mb="3">自定义按钮</Heading>
            <Flex gap="4">
              <Reset>
                <button 
                  style={{ 
                    padding: '8px 16px',
                    background: 'var(--blue-9)',
                    color: 'white',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--blue-10)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'var(--blue-9)' }}
                >
                  确认
                </button>
              </Reset>
              
              <Reset>
                <button 
                  style={{ 
                    padding: '8px 16px',
                    background: 'transparent',
                    color: 'var(--gray-11)',
                    border: '1px solid var(--gray-7)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gray-3)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                  取消
                </button>
              </Reset>
            </Flex>
            <Text size="2" mt="4" color="gray">使用 Reset 组件构建自定义样式的按钮</Text>
          </Box>
          
          {/* 自定义表单案例 */}
          <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
            <Heading size="3" mb="3">自定义表单</Heading>
            <Reset>
              <form style={{ maxWidth: '400px' }}>
                <Flex direction="column" gap="3">
                  <Flex direction="column" gap="1">
                    <label style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-12)' }}>用户名</label>
                    <input 
                      type="text" 
                      placeholder="请输入用户名" 
                      style={{ 
                        padding: '10px',
                        border: '1px solid var(--gray-7)',
                        borderRadius: '4px',
                        width: '100%'
                      }}
                    />
                  </Flex>
                  
                  <Flex direction="column" gap="1">
                    <label style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-12)' }}>密码</label>
                    <input 
                      type="password" 
                      placeholder="请输入密码" 
                      style={{ 
                        padding: '10px',
                        border: '1px solid var(--gray-7)',
                        borderRadius: '4px',
                        width: '100%'
                      }}
                    />
                  </Flex>
                  
                  <Flex gap="2" mt="2">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      style={{ 
                        width: '16px',
                        height: '16px',
                        accentColor: 'var(--blue-9)'
                      }}
                    />
                    <label 
                      htmlFor="remember" 
                      style={{ 
                        fontSize: '14px',
                        color: 'var(--gray-11)',
                        cursor: 'pointer'
                      }}
                    >
                      记住我
                    </label>
                  </Flex>
                  
                  <button 
                    type="button" 
                    style={{ 
                      marginTop: '10px',
                      padding: '10px',
                      background: 'var(--blue-9)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    登录
                  </button>
                </Flex>
              </form>
            </Reset>
            <Text size="2" mt="4" color="gray">使用 Reset 组件构建自定义表单</Text>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

UseCases.storyName = '实用案例';

export const ResetAPI = () => {
  return (
    <Theme>
      <div>
        <div className="api-table-title">Reset API</div>
        <ResetPropsComponent />
      </div>
    </Theme>
  );
};

ResetAPI.storyName = '组件 API'; 