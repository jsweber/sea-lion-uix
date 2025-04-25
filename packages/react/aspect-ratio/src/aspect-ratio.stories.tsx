import type { Meta, StoryObj } from '@storybook/react';
import * as AspectRatio from './aspect-ratio';
import { Theme } from '@sea-lion/react-theme';
import { Text } from '@sea-lion/react-text';

const meta = {
  title: 'AspectRatio',
  component: AspectRatio.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio.Root>;

export default meta;
type Story = StoryObj<typeof AspectRatio.Root>;

// 基本用法示例
export const Basic: Story = {
  name: '基本用法',
  argTypes: {
    ratio: {
      control: 'number',
      description: '宽高比，例如 16/9、4/3 等',
    }
  },
  args: {
    ratio: 16 / 9
  },
  render: (props) => (
    <Theme>
      <div style={{ width: '500px' }}>
        <AspectRatio.Root {...props}>
          <img
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="风景照片"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </AspectRatio.Root>
        <Text size="2" style={{ marginTop: '8px' }}>16:9 宽高比的图片容器</Text>
      </div>
    </Theme>
  )
};

// 不同宽高比示例
export const DifferentRatios: Story = {
  name: '不同宽高比',
  render: () => (
    <Theme>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { ratio: 16/9, name: '16:9' },
          { ratio: 4/3, name: '4:3' },
          { ratio: 1, name: '1:1' },
          { ratio: 9/16, name: '9:16' }
        ].map(({ ratio, name }) => (
          <div key={name} style={{ width: '200px' }}>
            <AspectRatio.Root ratio={ratio}>
              <img
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="风景照片"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </AspectRatio.Root>
            <Text size="2" style={{ marginTop: '8px' }}>{name} 宽高比</Text>
          </div>
        ))}
      </div>
    </Theme>
  )
};

// 视频容器示例
export const VideoContainer: Story = {
  name: '视频容器',
  render: () => (
    <Theme>
      <div style={{ width: '500px' }}>
        <AspectRatio.Root ratio={16/9}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio.Root>
        <Text size="2" style={{ marginTop: '8px' }}>16:9 视频播放器</Text>
      </div>
    </Theme>
  )
};

// 背景内容示例
export const BackgroundContent: Story = {
  name: '背景内容',
  render: () => (
    <Theme>
      <div style={{ width: '300px' }}>
        <AspectRatio.Root ratio={1}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--accent-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text size="5">1:1</Text>
          </div>
        </AspectRatio.Root>
        <Text size="2" style={{ marginTop: '8px' }}>带背景色的正方形容器</Text>
      </div>
    </Theme>
  )
}; 