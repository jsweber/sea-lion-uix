import type { Meta } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Theme } from '../../theme/src';
import { Spinner } from '@sea-lion/react-spinner';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { Button } from '@sea-lion/react-button';
import { SpinnerPropsComponent } from './spinner-props-table';

/**
 * ## 介绍
 *
 * Spinner 是一个加载指示器组件，用于表示内容正在加载中。
 *
 * ## 安装
 *
 * ```bash
 * pnpm add @sea-lion/react-spinner
 * ```
 *
 * 或使用 npm / yarn：
 *
 * ```bash
 * npm install @sea-lion/react-spinner
 * yarn add @sea-lion/react-spinner
 * ```
 *
 * ## 何时使用
 *
 * - 页面或组件正在加载数据时
 * - 操作需要一段时间才能完成
 * - 需要告知用户等待过程
 */
const meta: Meta<typeof Spinner> = {
    title: '通用/Spinner',
    component: Spinner,
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
            <Text mb="5">最基本的加载指示器。</Text>

            <Flex gap="4" align="center">
                <Spinner />
                <Text>加载中...</Text>
            </Flex>
        </Box>
    );
};

BasicUsage.storyName = '基本用法';

export const SpinnerSizes = () => {
    return (
        <Box>
            <Heading size="3" mb="4">不同尺寸</Heading>
            <Text mb="5">Spinner 组件提供三种不同的尺寸。</Text>

            <Flex gap="6" align="center">
                <Box>
                    <Text size="2" mb="2">尺寸 1（最小）</Text>
                    <Spinner size="1" />
                </Box>

                <Box>
                    <Text size="2" mb="2">尺寸 2（默认）</Text>
                    <Spinner size="2" />
                </Box>

                <Box>
                    <Text size="2" mb="2">尺寸 3（最大）</Text>
                    <Spinner size="3" />
                </Box>
            </Flex>
        </Box>
    );
};

SpinnerSizes.storyName = '不同尺寸';

export const CustomColors = () => {
    return (
        <Box>
            <Heading size="3" mb="4">自定义颜色</Heading>
            <Text mb="5">通过设置父元素的颜色自定义 Spinner 颜色。</Text>

            <Flex gap="6" align="center">
                <Box style={{ color: 'var(--blue-9)' }}>
                    <Spinner />
                </Box>

                <Box style={{ color: 'var(--red-9)' }}>
                    <Spinner />
                </Box>

                <Box style={{ color: 'var(--green-9)' }}>
                    <Spinner />
                </Box>

                <Box style={{ color: 'var(--purple-9)' }}>
                    <Spinner />
                </Box>
            </Flex>
        </Box>
    );
};

CustomColors.storyName = '自定义颜色';

export const WrapContent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleReload = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <Box>
            <Heading size="3" mb="4">包裹内容</Heading>
            <Text mb="5">加载时显示加载指示器，加载完成后显示内容。</Text>

            <Flex direction="column" gap="4">
                <Button onClick={handleReload} disabled={loading} style={{ width: '150px' }}>
                    {loading ? '加载中...' : '重新加载'}
                </Button>

                <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '6px', padding: '24px', width: '300px', height: '200px' }}>
                    <Spinner loading={loading}>
                        <Flex height="100%" align="center" justify="center">
                            <Text>内容已加载完成！</Text>
                        </Flex>
                    </Spinner>
                </Box>
            </Flex>
        </Box>
    );
};

WrapContent.storyName = '包裹内容';

export const WithOtherComponents = () => {
    return (
        <Box>
            <Heading size="3" mb="4">与其他组件组合</Heading>
            <Text mb="5">Spinner 可以与其他组件组合使用。</Text>

            <Flex gap="4" align="center" direction="column">
                <Button disabled style={{ width: '150px' }}>
                    <Spinner size="1" mr="2" /> 提交中
                </Button>

                <Box style={{ border: '1px solid var(--gray-5)', borderRadius: '6px', padding: '16px', width: '300px' }}>
                    <Flex justify="center" align="center" gap="2">
                        <Spinner size="1" />
                        <Text>正在加载数据...</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

WithOtherComponents.storyName = '与其他组件组合';

export const SpinnerAPI = () => {
    return (
        <Theme>
            <Box style={{ padding: 'var(--space-5)' }}>
                <Heading size="4" mb="5">API 参考</Heading>

                <SpinnerPropsComponent />
                <Box mt="4" style={{ maxWidth: '900px' }}>
                    <Text size="2" mt="3" color="gray">除了上述属性外，Spinner 组件还支持所有标准的外边距（margin）属性。</Text>
                </Box>
            </Box>
        </Theme>
    );
};

SpinnerAPI.storyName = '组件 API';
