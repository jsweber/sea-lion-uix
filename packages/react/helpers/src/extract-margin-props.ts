import type { MarginProps } from '@ui-lib-monorepo-template/react-props';

export function extractMarginProps<T extends MarginProps>(props: T) {
  const { m, mx, my, mt, mr, mb, ml, ...rest } = props;
  return { m, mx, my, mt, mr, mb, ml, rest };
}
