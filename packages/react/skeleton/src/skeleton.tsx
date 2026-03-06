import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { inert, extractProps } from '@sea-lion/react-helpers';
import { marginPropDefs } from '@sea-lion/react-props';
import { skeletonPropDefs } from './skeleton.props';

import type { MarginProps, GetPropDefTypes } from '@sea-lion/react-props';
import type { ComponentPropsWithout, RemovedProps } from '@sea-lion/react-helpers';

type SkeletonElement = React.ElementRef<'span'>;
type SkeletonOwnProps = GetPropDefTypes<typeof skeletonPropDefs>;
interface SkeletonProps
  extends ComponentPropsWithout<'span', RemovedProps>,
  MarginProps,
  SkeletonOwnProps { }
const Skeleton = React.forwardRef<SkeletonElement, SkeletonProps>((props, forwardedRef) => {
    const { children, className, loading, ...skeletonProps } = extractProps(
        props,
        skeletonPropDefs,
        marginPropDefs,
    );

    if (!loading) return children;

    const Tag = React.isValidElement(children) ? Slot : 'span';

    return (
        <Tag
            ref={forwardedRef}
            aria-hidden
            className={classNames('rt-Skeleton', className)}
            data-inline-skeleton={React.isValidElement(children) ? undefined : true}
            tabIndex={-1}
            // @ts-ignore
            inert={inert}
            {...skeletonProps}
        >
            {children}
        </Tag>
    );
});
Skeleton.displayName = 'Skeleton';

export { Skeleton };
export type { SkeletonProps };
