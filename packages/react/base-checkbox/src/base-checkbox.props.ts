import { colorPropDef, highContrastPropDef } from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3'] as const;
const variants = ['classic', 'surface', 'soft'] as const;

const baseCheckboxPropDefs = {
    size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
    variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'surface' },
    ...colorPropDef,
    ...highContrastPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { baseCheckboxPropDefs };
