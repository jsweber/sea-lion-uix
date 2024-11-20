import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { codePropDefs } from './code.props';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { marginPropDefs } from '@ui-lib-monorepo-template/react-props';

import type { MarginProps, GetPropDefTypes } from '@ui-lib-monorepo-template/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@ui-lib-monorepo-template/react-helpers';

type CodeElement = React.ElementRef<'code'>;
type CodeOwnProps = GetPropDefTypes<typeof codePropDefs>;
interface CodeProps
  extends ComponentPropsWithout<'code', RemovedProps>,
  MarginProps,
  CodeOwnProps { }
const Code = React.forwardRef<CodeElement, CodeProps>((props, forwardedRef) => {
  const { asChild, className, color, ...codeProps } = extractProps(
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
      {...codeProps}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-Code', className)}
    />
  );
});
Code.displayName = 'Code';

export { Code };
export type { CodeProps };
