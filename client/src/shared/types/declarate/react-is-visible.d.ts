declare module 'react-is-visible' {
  import type { ComponentType, ElementType as ReactElementType } from 'react';

  export type ElementType = ReactElementType;

  export interface VisibleProps {
    children: (isVisible: boolean) => React.ReactNode;
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;
    partialVisibility?: boolean;
    trackVisibility?: boolean;
  }

  const Visible: ComponentType<VisibleProps>;
  export default Visible;
}