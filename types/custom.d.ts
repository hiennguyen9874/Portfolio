import { JSXElementConstructor, ReactElement } from 'react';

declare global {
  namespace JSX {
    interface Element extends ReactElement<unknown, JSXElementConstructor<unknown>> {
      props: unknown;
      type: JSXElementConstructor<unknown>;
    }
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
