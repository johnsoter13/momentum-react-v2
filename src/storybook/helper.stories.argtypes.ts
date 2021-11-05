import { ArgTypes } from '@storybook/react';

function extendArgTypes(
  name: string,
  argTypes: ArgTypes,
  removeKeys: Array<string> = []
): ArgTypes {
  return Object.fromEntries(
    Object.entries(argTypes).reduce((accumulation, [key, value]) => {
      if (removeKeys.includes(key)) {
        return accumulation;
      }

      value.table.category = `From <${name} />`;

      accumulation.push([key, value]);

      return accumulation;
    }, [])
  );
}

const commonAriaOverlay = {
  isOpen: {
    control: { type: 'boolean' },
    description: 'Whether the overlay is currently open.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onClose: {
    action: 'onClose',
    description: 'Handler that is called when the overlay should close.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: '() => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  isDismissable: {
    control: { type: 'boolean' },
    description: 'Whether to close the overlay when the user interacts outside it.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  shouldCloseOnBlur: {
    control: { type: 'boolean' },
    description: 'Whether the overlay should close when focus is lost or moves outside it.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  isKeyboardDismissDisabled: {
    control: { type: 'boolean' },
    description: 'Whether pressing the escape key to close the overlay should be disabled.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  shouldCloseOnInteractOutside: {
    description:
      'When user interacts with the argument element outside of the overlay ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the overlay. By default, onClose will always be called on interaction outside the overlay ref.',
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: '(element: HTMLElement) => boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  defaultOpen: {
    description: 'Whether the overlay is open by default (uncontrolled)',
    control: { type: 'boolean' },
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  onOpenChange: {
    action: 'onOpenChange',
    description: "Handler that is called when the overlay's open state changes.",
    table: {
      category: 'React Aria - Overlay',
      type: {
        summary: '(isOpen: boolean) => void',
      },
    },
  },
};

const commonAriaButton = {
  onPress: {
    action: 'onPress',
    description:
      'From [AriaButtonProps](https://react-spectrum.adobe.com/react-aria/useButton.html). Handler that is called when the press is released over the target.',
    table: {
      category: 'React Aria - Button',
      type: {
        summary: '(e: PressEvent) => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  autoFocus: {
    action: 'autoFocus',
    description:
      'From [AriaButtonProps](https://react-spectrum.adobe.com/react-aria/useButton.html). Whether the element should receive focus on render.',
    table: {
      category: 'React Aria - Button',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onKeyDown: {
    action: 'onKeyDown',
    description:
      'From [AriaButtonProps](https://react-spectrum.adobe.com/react-aria/useButton.html). Handler that is called when a key is pressed.',
    table: {
      category: 'React Aria - Button',
      type: {
        summary: '(e: KeyboardEvent) => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  'aria-details': {
    control: { type: 'text' },
    description:
      'From [AriaButtonProps](https://react-spectrum.adobe.com/react-aria/useButton.html). Sets the `aria-details` value.',
    table: {
      category: 'React Aria - Button',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  'aria-label': {
    control: { type: 'text' },
    description:
      'From [AriaButtonProps](https://react-spectrum.adobe.com/react-aria/useButton.html). Sets the `aria-label` value.',
    table: {
      category: 'React Aria - Button',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

const commonStyles = {
  className: {
    description: "If present, this value will be added to the rendered element's `class` attribute",
    control: { type: 'text' },
    table: {
      category: 'Stylization',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  id: {
    description:
      "If present, this value will be this component's the rendered element's `id` attribute",
    control: { type: 'text' },
    table: {
      category: 'Stylization',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  style: {
    description:
      "If present, this value will be this component's the rendered element's `id` attribute",
    control: { type: 'object' },
    table: {
      category: 'Stylization',
      type: {
        summary: 'CSSProperties',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

const commonHTMLAttributes = {
  title: {
    description:
      "If present, this value will be this component's the rendered element's `title` attribute",
    control: { type: 'text' },
    table: {
      category: 'HTML Global Attributes',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

export { commonAriaButton, commonHTMLAttributes, commonStyles, commonAriaOverlay, extendArgTypes };
