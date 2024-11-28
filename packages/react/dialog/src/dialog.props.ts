import { asChildPropDef, widthPropDefs, heightPropDefs } from '@sea-lion/react-props';

import type { PropDef, GetPropDefTypes } from '@sea-lion/react-props';

const alignValues = ['start', 'center'] as const;
const contentSizes = ['1', '2', '3', '4'] as const;

const dialogContentPropDefs = {
  ...asChildPropDef,
  align: {
    type: 'enum',
    className: 'rt-r-align',
    values: ['start', 'center'],
    default: 'center',
  },
  size: {
    type: 'enum',
    className: 'rt-r-size',
    values: contentSizes,
    default: '3',
    responsive: true,
  },
  width: widthPropDefs.width,
  minWidth: widthPropDefs.minWidth,
  maxWidth: { ...widthPropDefs.maxWidth, default: '600px' },
  ...heightPropDefs,
} satisfies {
  align: PropDef<(typeof alignValues)[number]>;
  size: PropDef<(typeof contentSizes)[number]>;
  width: PropDef<string>;
  minWidth: PropDef<string>;
  maxWidth: PropDef<string>;
};

type DialogContentOwnProps = GetPropDefTypes<
  typeof dialogContentPropDefs & typeof asChildPropDef & typeof widthPropDefs
>;

export { dialogContentPropDefs };
export type { DialogContentOwnProps };
