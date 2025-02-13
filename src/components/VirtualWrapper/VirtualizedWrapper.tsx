import React, { RefObject, forwardRef, useCallback, useEffect, useState } from 'react';

import { Props } from './VirtualizedWrapper.types';
import { VirtualizedList as MdcVirtualizedList } from '@momentum-design/components/dist/react';

import './VirtualizedWrapper.style.scss';
import { VirtualizedList } from '@momentum-design/components';

const VirtualizedWrapper = forwardRef((props: Props, ref: RefObject<VirtualizedList>) => {
  const { className, handleScroll, setListData, children, ...virtualizerProps } = props;

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
      handlescroll={handleScroll}
    >
      {children}
    </MdcVirtualizedList>
  );
});

VirtualizedWrapper.displayName = 'VirtualizedWrapper';

export default VirtualizedWrapper;
