// import type { calloutRootPropDefs } from '../components/callout.props.js';
// import type { spinnerPropDefs } from '../components/spinner.props.js';
// import type { textPropDefs } from '../components/text.props.js';
import type { Responsive } from '@sea-lion/react-props';

function mapResponsiveProp<Input extends string, Output>(
    propValue: Responsive<Input> | undefined,
    mapValue: (value: Input) => Output
): Responsive<Output> | undefined {
    if (propValue === undefined) return undefined;
    if (typeof propValue === 'string') {
        return mapValue(propValue);
    }
    return Object.fromEntries(
        Object.entries(propValue).map(([key, value]) => [key, mapValue(value)])
    );
}

// function mapCalloutSizeToTextSize(
//     size: (typeof calloutRootPropDefs.size.values)[number]
// ): (typeof textPropDefs.size.values)[number] {
//     return size === '3' ? '3' : '2';
// }



export { mapResponsiveProp };
