import { PartialKeys, VirtualizerOptions } from '@tanstack/react-virtual';
import { ReactNode } from 'react';

export interface Props
  extends PartialKeys<
    VirtualizerOptions<HTMLDivElement, Element>,
    'getScrollElement' | 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
  > {
  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Any list rendered inside of Virtualized Wrapper should accept these parameters
   * @param virtualItems - Array of virtual items to render cliet side
   * @param measureElement  - ref to pass to each item in order to size correctly
   * @param listStyle - style to give to list
   * @returns list with nested listitems
   */
  setListData: (props: any) => void;

  /**
   * Passes current target back to client for handling
   * @param currentTarget
   */
  handleScroll?: (e: Event) => void;

  /**
   * React node to render
   */
  children?: ReactNode;
}
