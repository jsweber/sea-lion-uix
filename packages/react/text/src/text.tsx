import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';
import { textPropDefs } from './text.props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type TextElement = React.ElementRef<'span'>;
type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;
interface CommonTextProps extends MarginProps, TextOwnProps { }
type TextSpanProps = { as?: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type TextDivProps = { as: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type TextLabelProps = { as: 'label' } & ComponentPropsWithout<'label', RemovedProps>;
type TextPProps = { as: 'p' } & ComponentPropsWithout<'p', RemovedProps>;
type TextProps = CommonTextProps & (TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = React.forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild,
    as: Tag = 'span',
    color,
    ...textProps
  } = extractProps(props, textPropDefs, marginPropDefs);
  return (
    <Slot
      data-accent-color={color}
      {...textProps}
      ref={forwardedRef}
      className={classNames('rt-Text', className)}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = 'Text';

export { Text };
export type { TextProps };
