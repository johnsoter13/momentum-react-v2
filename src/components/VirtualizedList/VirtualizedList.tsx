import React, { RefObject, forwardRef, useEffect } from 'react';

import { Props } from './VirtualizedList.types';
import { VirtualizedList as MdcVirtualizedList } from '@momentum-design/components/dist/react';
import { VirtualizedList as VirtualizedListRef } from '@momentum-design/components';

const VirtualizedList = forwardRef((props: Props, ref: RefObject<VirtualizedListRef>) => {
  const { className, onScroll, setListData, children, ...virtualizerProps } = props;

  useEffect(() => {
    if (ref.current) {
      ref.current.virtualizerprops = virtualizerProps;
    }
  }, [ref, virtualizerProps]);

  return (
    <MdcVirtualizedList
      className={className}
      ref={ref}
      setlistdata={setListData}
      onScroll={onScroll}
    >
      {children}
    </MdcVirtualizedList>
  );
});

VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;