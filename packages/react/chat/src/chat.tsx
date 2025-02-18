'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';
import type { ChatProps } from './chat.props';

const Chat = ({ messages, ...props }: ChatProps) => {
  return (<div {...props}>Chat Component</div>);
};
Chat.displayName = 'SealLionChat';

export { Chat };