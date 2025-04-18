import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { codePropDefs } from './code.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type CodeElement = React.ElementRef<'code'>;
type CodeOwnProps = GetPropDefTypes<typeof codePropDefs>;
interface CodeProps
  extends ComponentPropsWithout<'code', RemovedProps>,
  MarginProps,
  CodeOwnProps {
    textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty';
  }
const Code = React.forwardRef<CodeElement, CodeProps>((props, forwardedRef) => {
  const { asChild, className, color, textWrap, ...codeProps } = extractProps(
    props,
    codePropDefs,
    marginPropDefs
  );
  // Code ghost color prop should work as text color by default
  const resolvedColor = props.variant === 'ghost' ? color || undefined : color;
  const Comp = asChild ? Slot : 'code';
  return (
    <Comp
      data-accent-color={resolvedColor}
      data-text-wrap={textWrap}
      {...codeProps}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-Code', className)}
    />
  );
});
Code.displayName = 'Code';

export { Code };
export type { CodeProps };
