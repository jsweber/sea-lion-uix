import {
  asChildPropDef,
  colorPropDef,
  highContrastPropDef,
  leadingTrimPropDef,
  textAlignPropDef,
  textWrapPropDef,
  truncatePropDef,
  weightPropDef
} from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const as = ['span', 'div', 'label', 'p'] as const;
const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const textPropDefs = {
  as: { type: 'enum', values: as, default: 'span' },
  ...asChildPropDef,
  size: {
    type: 'enum',
    className: 'rt-r-size',
    values: sizes,
    responsive: true,
  },
  ...weightPropDef,
  ...textAlignPropDef,
  ...leadingTrimPropDef,
  ...truncatePropDef,
  ...textWrapPropDef,
  ...colorPropDef,
  ...highContrastPropDef,
  textAlign: { 
    type: 'enum', 
    className: 'rt-text-align', 
    values: ['left', 'center', 'right'] 
  },
} satisfies {
  as: PropDef<(typeof as)[number]>;
  size: PropDef<(typeof sizes)[number]>;
  textAlign: PropDef<'left' | 'center' | 'right'>;
};

export { textPropDefs };
