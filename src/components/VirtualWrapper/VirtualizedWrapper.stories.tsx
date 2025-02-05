import React, { useRef } from 'react';

import { Template } from '../../storybook/helper.stories.templates';
import VirtualizedWrapper from './VirtualizedWrapper';
import { VirtualizedWrapperProps } from '.';
import { VirtualizedList } from '@momentum-design/components';
import List from '../List';
import ListItemBase from '../ListItemBase';

export default {
  title: 'Momentum UI/VirtualizedWrapper',
  component: VirtualizedWrapper,
  parameters: {
    expanded: true,
    // docs: {
    //   page: DocumentationPage(Documentation, StyleDocs),
    //   source: { type: 'code' },
    // },
  },
};

const TEST_LIST_SIZE = 500;

const Common = Template<VirtualizedWrapperProps>(() => {
  const virtualizedRef = useRef<VirtualizedList>();

  const renderList = (virtualItems, measureElement, listStyle) => (
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
    <VirtualizedWrapper
      ref={virtualizedRef}
      renderList={renderList}
      count={TEST_LIST_SIZE}
      estimateSize={() => 20}
    />
  );
}).bind({});

export { Common };
