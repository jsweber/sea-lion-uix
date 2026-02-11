import { colorPropDef, paddingPropDefs, radiusPropDef } from '@sea-lion/react-props';
import { flexPropDefs } from '@sea-lion/react-flex';

import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3'] as const;
const variants = ['classic', 'surface', 'soft'] as const;

const inputRootPropDefs = {
    size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
    variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'surface' },
    ...colorPropDef,
    ...radiusPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

const sides = ['left', 'right'] as const;

const inputFieldSlotPropDefs = {
    side: { type: 'enum', values: sides },
    ...colorPropDef,
    gap: flexPropDefs.gap,
    px: paddingPropDefs.px,
    pl: paddingPropDefs.pl,
    pr: paddingPropDefs.pr,
} satisfies {
  side: PropDef<(typeof sides)[number]>;
  gap: typeof flexPropDefs.gap;
  px: typeof paddingPropDefs.px;
  pl: typeof paddingPropDefs.pl;
  pr: typeof paddingPropDefs.pr;
};

export {
    inputRootPropDefs, inputFieldSlotPropDefs,
};
