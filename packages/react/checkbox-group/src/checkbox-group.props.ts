import { asChildPropDef } from '@sea-lion/react-props';
import { baseCheckboxPropDefs } from '@sea-lion/react-base-checkbox';

const checkboxGroupRootPropDefs = {
    ...asChildPropDef,
    ...baseCheckboxPropDefs,
};

export { checkboxGroupRootPropDefs };
