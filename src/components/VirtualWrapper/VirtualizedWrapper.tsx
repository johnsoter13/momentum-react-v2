import React, { RefObject, forwardRef, useCallback, useEffect, useState } from 'react';

import { Props } from './VirtualizedWrapper.types';
import { VirtualizedList as MdcVirtualizedList } from '@momentum-design/components/dist/react';

import './VirtualizedWrapper.style.scss';
import { VirtualizedList } from '@momentum-design/components';

const VirtualizedWrapper = forwardRef((props: Props, ref: RefObject<VirtualizedList>) => {
  const { className, handleScroll, renderList, ...virtualizerProps } = props;
  const [listData, setListData] = useState({
    virtualItems: [],
    measureElement: null,
    listStyle: {},
  });

  const handleListDataChange = useCallback(
    ({ virtualItems, measureElement, listStyle }) => {
      if (listData.virtualItems !== virtualItems) {
        setListData({ virtualItems, measureElement, listStyle });
      }
    },
    [listData.virtualItems]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.virtualizerprops = virtualizerProps;
    }
  }, [ref, virtualizerProps]);

  const { virtualItems, measureElement, listStyle } = listData;

  return (
    <MdcVirtualizedList
      className={className}
      ref={ref}
      setlistdata={handleListDataChange}
      handlescroll={handleScroll}
    >
      {renderList(virtualItems, measureElement, listStyle)}
    </MdcVirtualizedList>
  );
});

VirtualizedWrapper.displayName = 'VirtualizedWrapper';

export default VirtualizedWrapper;
