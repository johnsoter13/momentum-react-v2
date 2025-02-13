import { VirtualizedList } from '@momentum-design/components';
import { SetListDataProps, VirtualizerProps } from '@momentum-design/components/dist/components/virtualizedlist/virtualizedlist.types.js';
import { ReactNode, UIEventHandler } from 'react';

export interface Props extends VirtualizerProps {
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
  setListData: (props: SetListDataProps) => void;

  /**
   * Passes current target back to client for handling
   * @param currentTarget
   */
  onScroll?: UIEventHandler<VirtualizedList>;

  /**
   * React node to render
   */
  children?: ReactNode;
}