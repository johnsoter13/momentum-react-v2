import { Props as PopoverProps } from '../Popover/Popover.types';

export type Props = Pick<
  PopoverProps,
  | 'boundary'
  | 'children'
  | 'className'
  | 'color'
  | 'delay'
  | 'id'
  | 'offsetDistance'
  | 'offsetSkidding'
  | 'onAfterUpdate'
  | 'onBeforeUpdate'
  | 'onClickOutside'
  | 'onCreate'
  | 'onDestroy'
  | 'onHidden'
  | 'onHide'
  | 'onMount'
  | 'onShow'
  | 'onShown'
  | 'onTrigger'
  | 'onUntrigger'
  | 'placement'
  | 'strategy'
  | 'style'
  | 'triggerComponent'
  | 'variant'
  | 'setInstance'
>;
