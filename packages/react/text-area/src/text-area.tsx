import * as React from 'react';
import classNames from 'classnames';

import { textAreaPropDefs } from './text-area.props';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { marginPropDefs } from '@ui-lib-monorepo-template/react-props';

import type { MarginProps, GetPropDefTypes } from '@ui-lib-monorepo-template/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@ui-lib-monorepo-template/react-helpers';

type TextAreaElement = React.ElementRef<'textarea'>;
type TextAreaOwnProps = GetPropDefTypes<typeof textAreaPropDefs> & {
  defaultValue?: string;
  value?: string;
};
interface TextAreaProps
  extends ComponentPropsWithout<'textarea', RemovedProps | 'size' | 'value'>,
  MarginProps,
  TextAreaOwnProps { }
const TextArea = React.forwardRef<TextAreaElement, TextAreaProps>((props, forwardedRef) => {
  const { className, color, radius, style, ...textAreaProps } = extractProps(
    props,
    textAreaPropDefs,
    marginPropDefs
  );
  return (
    <div
      data-accent-color={color}
      data-radius={radius}
      className={classNames('rt-TextAreaRoot', className)}
      style={style}
    >
      <textarea className="rt-reset rt-TextAreaInput" ref={forwardedRef} {...textAreaProps} />
    </div>
  );
});
TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
