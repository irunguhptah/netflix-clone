/// <reference types="react" />
/// <reference types="react-dom" />

declare module "react" {
  export = React;
  export as namespace React;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}