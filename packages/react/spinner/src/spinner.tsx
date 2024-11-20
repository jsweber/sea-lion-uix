import * as React from 'react';
import classNames from 'classnames';

import { Flex } from '@sea-lion/react-flex';
import { spinnerPropDefs } from './spinner.props';
import { extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type SpinnerElement = React.ElementRef<'span'>;
type SpinnerOwnProps = GetPropDefTypes<typeof spinnerPropDefs>;
interface SpinnerProps
  extends ComponentPropsWithout<'span', RemovedProps>,
  MarginProps,
  SpinnerOwnProps { }
const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>((props, forwardedRef) => {
  const { className, children, loading, ...spinnerProps } = extractProps(
    props,
    spinnerPropDefs,
    marginPropDefs
  );

  if (!loading) return children;

  const spinner = (
    <span {...spinnerProps} ref={forwardedRef} className={classNames('rt-Spinner', className)}>
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
    </span>
  );

  if (children === undefined) return spinner;

  return (
    <Flex asChild position="relative" align="center" justify="center">
      <span>
        {/**
         * `display: contents` removes the content from the accessibility tree in some browsers,
         * so we force remove it with `aria-hidden`
         */}
        <span
          aria-hidden
          style={{ display: 'contents', visibility: 'hidden' }}
          // @ts-ignore
          inert={undefined}
        >
          {children}
        </span>

        <Flex asChild align="center" justify="center" position="absolute" inset="0">
          <span>{spinner}</span>
        </Flex>
      </span>
    </Flex>
  );
});
Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps };
