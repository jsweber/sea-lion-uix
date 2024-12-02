import { heightPropDefs, widthPropDefs } from '@sea-lion/react-props';

import type { PropDef } from '@sea-lion/react-props';

const skeletonPropDefs = {
  loading: { type: 'boolean', default: true },
  ...widthPropDefs,
  ...heightPropDefs,
} satisfies {
  loading: PropDef<boolean>;
};

export { skeletonPropDefs };
