import readme from './readme.md';
import readmeOption from './dropdown-option/readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    notes: { 'Dropdown': readme, 'Dropdown option': readmeOption },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9754%3A22916&t=M7Ova7xZaoeMwb5e-1',
      },
    ],
  },
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant of the component.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    errorState: {
      name: 'Error state',
      description: 'Puts the component in error state.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    size: {
      name: 'Size',
      description: 'Sets the size of the dropdown.',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      table: {
        defaultValue: {
          summary: 'Large',
        },
      },
    },
    openDirection: {
      name: 'Open direction',
      description: 'Sets the direction in which the dropdown will open.',
      control: {
        type: 'radio',
      },
      options: ['Up', 'Down', 'Auto'],
      table: {
        defaultValue: {
          summary: 'Auto',
        },
      },
    },
    defaultOption: {
      if: { arg: 'type', neq: 'Multiselect' },
      name: 'Default option',
      description: 'Sets a pre-selected option and replaces placeholder.',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
      table: {
        defaultValue: {
          summary: 'Option 1',
        },
      },
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Sets a placeholder text when no option is selected.',
      control: {
        type: 'text',
      }
    },
    labelPosition: {
      name: 'Label position',
      description: 'Sets label text position.',
      control: {
        type: 'radio',
      },
      options: ['None', 'Inside', 'Outside'],
      table: {
        defaultValue: {
          summary: 'None',
        },
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Label text helps to describe what the dropdown contains.',
      control: {
        type: 'text',
      },
      if: { arg: 'labelPosition', neq: 'None' },
    },
    helper: {
      name: 'Add helper text',
      description: 'Adds a helper text.',
      control: {
        type:  'boolean',
      }, 
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown.',
      control: {
        type: 'text', 
      }, 
      if: { arg: 'helper', eq: true },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    size: 'Large',
    errorState: false,
    openDirection: 'Auto',
    defaultOption: 'Option 1',
    placeholder: 'Placeholder',
    labelPosition: 'None',
    labelText: 'Label text',
    helper: false,
    helperText: 'Helper text',
    disabled: false,
  },
};

const Template = ({
  modeVariant,
  errorState = false,
  size,
  openDirection,
  defaultOption,
  placeholder,
  labelPosition,
  labelText,
  helper,
  helperText,
  disabled = false,
}) => {
  const stateValue = errorState === true ? 'error' : 'default';
  const sizeLookup = { Large: 'lg', Medium: 'md', Small: 'sm' };
  const labelPosLookup = { None: 'no-default', Inside: 'inside', Outside: 'outside' };
  const defaultOptionLookup = {
    'No default': 'no-default',
    'Option 1': 'option-1',
    'Option 2': 'option-2',
    'Option 3': 'option-3',
  };

  return formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
  </style>

    <div class="demo-wrapper">
        <sdds-dropdown
          ${
            modeVariant !== 'Inherit from parent'
              ? `mode-variant="${modeVariant.toLowerCase()}".sdds-option-label {
            `
              : ''
          }
          id="sdds-dropdown-reg"
          size="${sizeLookup[size]}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          open-direction="${openDirection.toLowerCase()}"
          label-position="${labelPosLookup[labelPosition]}"
          ${labelPosLookup[labelPosition] !== 'no-default' ? `label="${labelText}"` : ''}
          ${helper ? `helper="${helperText}"` : ''}
          state="${stateValue}"
          type="default"
          default-option="${defaultOptionLookup[defaultOption]}" >
          <sdds-dropdown-option value="option-1" tabindex="0" disabled>Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" tabindex="0">Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3" tabindex="0">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
  `);
};

export const WebComponentDefault = Template.bind({});
