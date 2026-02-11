import type { Meta } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Theme } from '../../theme/src';

import { Progress } from '@sea-lion/react-progress';
import { Box } from '@sea-lion/react-box';
import { Flex } from '@sea-lion/react-flex';
import { Text } from '@sea-lion/react-text';
import { Heading } from '@sea-lion/react-heading';
import { Button } from '@sea-lion/react-button';
import { ProgressPropsComponent } from './progress-props-table';

/**
 * ## 介绍
 *
 * Progress 是一个进度指示器组件，用于显示操作完成的进度或加载状态。
 *
 * ## 何时使用
 *
 * - 需要显示任务或操作的完成进度
 * - 需要表示加载状态或处理过程
 * - 需要给用户提供视觉反馈，表明任务正在进行中
 * - 需要展示文件上传、下载或处理的进度
 */
const meta: Meta<typeof Progress> = {
    component: Progress,
    title: '数据展示/Progress',
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
        <Theme>
            <Box p="5">
                <Text mb="4">基本的进度条：</Text>
                <Box style={{ width: '300px' }}>
                    <Progress value={40} />
                </Box>
            </Box>
        </Theme>
    );
};

Basic.storyName = '基础用法';

export const Sizes = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">尺寸</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="1"</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress size="1" value={60} />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="2"</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress size="2" value={60} />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>size="3"</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress size="3" value={60} />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Sizes.storyName = '尺寸';

export const Variants = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">变体</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>surface</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress variant="surface" value={60} />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>classic</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress variant="classic" value={60} />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '100px' }}>
                            <Text>soft</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress variant="soft" value={60} />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

Variants.storyName = '变体';

export const Colors = () => {
    const colors = ['gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky'];

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">颜色</Text>
                <Flex direction="column" gap="3">
                    {colors.map((color) => (
                        <Flex key={color} align="center" gap="4">
                            <Box style={{ width: '100px' }}>
                                <Text>{color}</Text>
                            </Box>
                            <Box style={{ width: '300px' }}>
                                <Progress color={color as any} value={60} />
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Theme>
    );
};

Colors.storyName = '颜色';

export const HighContrast = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">高对比度</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>默认</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress value={60} color="blue" />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>高对比度</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress value={60} color="blue" highContrast />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

HighContrast.storyName = '高对比度';

export const Indeterminate = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">不确定进度</Text>
                <Flex direction="column" gap="4">
                    <Box style={{ width: '300px' }}>
                        <Progress />
                    </Box>
                    <Box style={{ width: '300px' }}>
                        <Progress color="blue" />
                    </Box>
                    <Box style={{ width: '300px' }}>
                        <Progress color="green" />
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

Indeterminate.storyName = '不确定进度';

export const AnimationDuration = () => {
    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">动画持续时间</Text>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>默认 (5s)</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>快速 (2s)</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress duration="2s" />
                        </Box>
                    </Flex>

                    <Flex align="center" gap="4">
                        <Box style={{ width: '150px' }}>
                            <Text>缓慢 (10s)</Text>
                        </Box>
                        <Box style={{ width: '300px' }}>
                            <Progress duration="10s" />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

AnimationDuration.storyName = '动画持续时间';

export const DynamicProgress = () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setIsRunning(false);
                        return 100;
                    }
                    return prev + 5;
                });
            }, 300);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning]);

    const startProgress = () => {
        setProgress(0);
        setIsRunning(true);
    };

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">动态进度条</Text>
                <Flex direction="column" gap="4">
                    <Box style={{ width: '400px' }}>
                        <Progress value={progress} />
                    </Box>
                    <Flex gap="2">
                        <Button onClick={startProgress} disabled={isRunning}>
                            {isRunning ? '进行中...' : '开始进度'}
                        </Button>
                        <Text>{progress}%</Text>
                    </Flex>
                </Flex>
            </Box>
        </Theme>
    );
};

DynamicProgress.storyName = '动态进度条';

export const UseCases = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        let uploadTimer: NodeJS.Timeout;
        if (isUploading) {
            uploadTimer = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        setIsUploading(false);
                        return 100;
                    }
                    return prev + Math.floor(Math.random() * 10) + 1;
                });
            }, 500);
        }

        let downloadTimer: NodeJS.Timeout;
        if (isDownloading) {
            downloadTimer = setInterval(() => {
                setDownloadProgress((prev) => {
                    if (prev >= 100) {
                        setIsDownloading(false);
                        return 100;
                    }
                    return prev + Math.floor(Math.random() * 8) + 1;
                });
            }, 300);
        }

        return () => {
            if (uploadTimer) clearInterval(uploadTimer);
            if (downloadTimer) clearInterval(downloadTimer);
        };
    }, [isUploading, isDownloading]);

    const startUpload = () => {
        setUploadProgress(0);
        setIsUploading(true);
    };

    const startDownload = () => {
        setDownloadProgress(0);
        setIsDownloading(true);
    };

    return (
        <Theme>
            <Box p="5">
                <Text size="4" weight="bold" mb="4">实用案例</Text>
                <Flex direction="column" gap="6">
                    {/* 文件上传案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">文件上传</Heading>
                        <Box style={{ width: '100%', marginBottom: '12px' }}>
                            <Progress
                                value={uploadProgress}
                                color="blue"
                                size="2"
                            />
                        </Box>
                        <Flex justify="between" align="center">
                            <Button
                                onClick={startUpload}
                                disabled={isUploading}
                                color="blue"
                            >
                                {isUploading ? '上传中...' : uploadProgress === 100 ? '上传完成' : '上传文件'}
                            </Button>
                            <Text>{uploadProgress}%</Text>
                        </Flex>
                        <Text size="2" mt="4" color="gray">上传大型文件时显示进度</Text>
                    </Box>

                    {/* 下载进度案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">下载进度</Heading>
                        <Flex direction="column" gap="2">
                            <Flex align="center" gap="2">
                                <Text size="2" style={{ width: '100px' }}>report.pdf</Text>
                                <Box style={{ width: '300px' }}>
                                    <Progress
                                        value={downloadProgress}
                                        color="green"
                                        size="1"
                                        variant="soft"
                                    />
                                </Box>
                                <Text size="2">{downloadProgress}%</Text>
                            </Flex>
                            <Button
                                onClick={startDownload}
                                disabled={isDownloading}
                                color="green"
                                size="1"
                            >
                                {isDownloading ? '下载中' : downloadProgress === 100 ? '已下载' : '下载'}
                            </Button>
                        </Flex>
                        <Text size="2" mt="4" color="gray">下载文件时显示进度</Text>
                    </Box>

                    {/* 加载中状态案例 */}
                    <Box style={{ maxWidth: '700px', border: '1px solid var(--gray-5)', borderRadius: '8px', padding: '16px' }}>
                        <Heading size="3" mb="3">加载状态</Heading>
                        <Flex direction="column" gap="3">
                            <Text>正在加载数据，请稍候...</Text>
                            <Box style={{ width: '100%' }}>
                                <Progress
                                    color="purple"
                                    variant="surface"
                                    size="2"
                                />
                            </Box>
                        </Flex>
                        <Text size="2" mt="4" color="gray">加载数据时显示不确定进度</Text>
                    </Box>
                </Flex>
            </Box>
        </Theme>
    );
};

UseCases.storyName = '实用案例';

export const ProgressAPI = () => {
    return (
        <Theme>
            <div>
                <div className="api-table-title">Progress API</div>
                <ProgressPropsComponent />
            </div>
        </Theme>
    );
};

ProgressAPI.storyName = '组件 API';
