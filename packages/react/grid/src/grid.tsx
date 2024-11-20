import * as React from 'react';
import classNames from 'classnames';

import { Slot } from '@radix-ui/react-slot';
import { gridPropDefs } from './grid.props';
import { extractProps } from '@ui-lib-monorepo-template/react-helpers';
import { layoutPropDefs, marginPropDefs } from '@ui-lib-monorepo-template/react-props';

import type { LayoutProps, MarginProps } from '@ui-lib-monorepo-template/react-props';
import type { GridOwnProps } from './grid.props';
import type { ComponentPropsWithout, RemovedProps } from '@ui-lib-monorepo-template/react-helpers';

type GridElement = React.ElementRef<'div'>;
interface CommonGridProps extends MarginProps, LayoutProps, GridOwnProps { }
type GridDivProps = { as?: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type GridSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
type GridProps = CommonGridProps & (GridSpanProps | GridDivProps);

const Grid = React.forwardRef<GridElement, GridProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    as: Tag = 'div',
    ...gridProps
  } = extractProps(props, gridPropDefs, layoutPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : Tag;
  return <Comp {...gridProps} ref={forwardedRef} className={classNames('rt-Grid', className)} />;
});
Grid.displayName = 'Grid';

export { Grid };
export type { GridProps };
