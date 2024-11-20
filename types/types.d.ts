/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.md';
declare module '*.svg' {
    export function ReactComponent(
        props: React.SVGProps<SVGSVGElement>,
    ): React.ReactElement;
    const url: string;
    export default url;
}

declare interface Window {
    attachEvent: any;
}
declare interface Document {
    mozFullScreen: any;
}
