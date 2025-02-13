import React, { useCallback, useRef, useState } from 'react';

import { Template } from '../../storybook/helper.stories.templates';
import VirtualizedList from './VirtualizedList';
import { VirtualizedListProps } from '.';
import { VirtualizedList as MdcVirtualizedList } from '@momentum-design/components';
import List from '../List';
import ListItemBase from '../ListItemBase';

export default {
  title: 'Momentum UI/VirtualizedWrapper',
  component: VirtualizedList,
  parameters: {
    expanded: true,
    // docs: {
    //   page: DocumentationPage(Documentation, StyleDocs),
    //   source: { type: 'code' },
    // },
  },
};

const TEST_LIST_SIZE = 500;

const Common = Template<VirtualizedListProps>(() => {
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
  const virtualizedRef = useRef<MdcVirtualizedList>();

  const renderList = ({virtualItems, measureElement, listStyle}) => (
    <List listSize={TEST_LIST_SIZE} shouldFocusOnPress shouldItemFocusBeInset style={listStyle}>
      {virtualItems.map((virtualRow) => {
        return (
          <ListItemBase
            itemIndex={virtualRow.index}
            ref={measureElement}
            key={virtualRow.key as string}
            data-index={virtualRow.index}
          >
            {`List Item: ${virtualRow.index}`}
          </ListItemBase>
        );
      })}
    </List>
  );
  return (
    <VirtualizedList
      ref={virtualizedRef}
      setListData={handleListDataChange}
      count={TEST_LIST_SIZE}
      estimateSize={() => 20}
    >
      {renderList(listData)}
    </VirtualizedList>
  );
}).bind({});

export { Common };