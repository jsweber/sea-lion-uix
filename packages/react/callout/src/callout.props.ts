import { asChildPropDef, accentColorPropDef, highContrastPropDef } from '@sea-lion/react-props';
import { textPropDefs } from '@sea-lion/react-text';

import type { PropDef } from '@sea-lion/react-props';

const sizes = ['1', '2', '3'] as const;
const variants = ['soft', 'surface', 'outline'] as const;

const calloutRootPropDefs = {
    ...asChildPropDef,
    size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
    variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
    ...accentColorPropDef,
    ...highContrastPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

function mapCalloutSizeToTextSize(
    size: (typeof calloutRootPropDefs.size.values)[number],
): (typeof textPropDefs.size.values)[number] {
    return size === '3' ? '3' : '2';
}

export { calloutRootPropDefs, mapCalloutSizeToTextSize };
