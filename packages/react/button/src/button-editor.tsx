import { FC } from 'react';
import { Heading } from '@sea-lion/react-heading';
import { Container } from '@sea-lion/react-container';
import { Section } from '@sea-lion/react-section';
import { Flex } from '@sea-lion/react-flex';
import { Box } from '@sea-lion/react-box';
import { Button } from '@sea-lion/react-button';
import * as Input from '@sea-lion/react-input';
import * as Select from '@sea-lion/react-select';

import './style/button-editor.less';


interface ButtonEditorProps {

}

const ButtonEditor: FC<ButtonEditorProps> = () => {
    return (
        <Container className="button-editor-container">
            <Heading className="button-editor-header">修改button样式</Heading>
            <div className="button-editor-row">
                <Flex gap="3">
                    <Box>
                        <div className="button-editor-label">按钮高度</div>
                    </Box>
                    <Box>
                        <Input.Root placeholder="输入数字" onChange={(...args) => console.log(...args)} />
                    </Box>
                    <Box>
                        <Select.Root defaultValue="px" onValueChange={(...args) => console.log(...args)}>
                            <Select.Trigger />
                            <Select.Content>
                                <Select.Item value="px">px</Select.Item>
                                <Select.Item value="rem">rem</Select.Item>
                                <Select.Item value="em">em</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Box>
                    <Box>
                        <Button>修改</Button>
                    </Box>
                </Flex>
            </div>

        </Container>
    );
}

export {
    ButtonEditor,
}

export type {
    ButtonEditorProps,
}
