import readme from './readme.md';
import readmeDropdownOption from './dropdown-option-v2/readme.md';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Dropdown-v2',
  parameters: {
    layout: 'centered',
    notes: { 'Dropdown': readme, 'Dropdown option': readmeDropdownOption },
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
    error: {
      name: 'Error',
      description: 'Sets the dropdown in an error state.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    filter: {
      name: 'Filter',
      description: 'Adds filter functionality to the dropdown.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    multiselect: {
      name: 'Multiselect',
      description: 'Adds multiselect functionality to the dropdown.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      name: 'Size',
      description: 'Size of the dropdown',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Placeholder text when no option is selected',
    },
    labelPosition: {
      name: 'Label position',
      description: 'Label text position',
      control: {
        type: 'radio',
      },
      options: ['Outside', 'Inside', 'None'],
      table: {
        defaultValue: { summary: 'outside' },
      },
    },
    labelText: {
      name: 'Label text',
      control: 'text',
      description: 'Label text helps to describe what the dropdown contains',
      if: { arg: 'labelPosition', neq: 'None' },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the component',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      name: 'Helper text',
      description: 'Helper text assists the user with additional information about the dropdown',
      control: 'text',
    },
    childType: {
      name: 'Child type',
      description:
        'Render the child elements either via the data prop, or passing them as children to the dropdown.',
      control: 'radio',
      options: ['Elements', 'Data'],
    },
    defaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option.',
      control: {
        type: 'radio',
      },
      options: ['No default', 'Option 1', 'Option 2', 'Option 3'],
      if: { arg: 'multiselect', eq: false },
    },
    multiDefaultOption: {
      name: 'Default options',
      description: 'Sets a pre-selected option.',
      control: {
        type: 'check',
      },
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 3'],
      if: { arg: 'multiselect', eq: true },
    },
    openDirection: {
      name: 'Open direction',
      description: 'The direction the dropdown will open.',
      control: {
        type: 'radio',
      },
      options: ['Auto', 'Up', 'Down'],
      table: {
        summary: {
          defaultValue: 'auto',
        },
      },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    size: 'Large',
    placeholder: 'Placeholder',
    labelText: 'Label text',
    labelPosition: 'Outside',
    disabled: false,
    error: false,
    filter: false,
    multiselect: false,
    helperText: 'Helper text',
    childType: 'Elements',
    defaultOption: 'No default',
    openDirection: 'Auto',
  },
};

const sizeLookUp = {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm',
};

const defaultOptionLookUp = {
  'Option 1': 'option-1',
  'Option 2': 'option-2',
  'Option 3': 'option-3',
};

const getMultiselectDefaultValue = (multiDefaultOption: string[]) =>
  multiDefaultOption.map((item) => defaultOptionLookUp[item]);

const data = [
  {
    label: 'Option 1',
    value: 'option-1',
    disabled: 'false',
  },
  {
    label: 'Option 2',
    value: 'option-2',
    disabled: 'false',
  },
  {
    label: 'Option 3',
    value: 'option-3',
    disabled: 'false',
  },
];

const Template = ({
  placeholder,
  labelText,
  labelPosition,
  helperText,
  size,
  error,
  filter,
  multiselect,
  openDirection,
  modeVariant,
  disabled,
  childType,
  defaultOption,
  multiDefaultOption,
}) =>
  formatHtmlPreview(`
  <style>
  /* demo-wrapper is for demonstration purposes only*/
  .demo-wrapper {
    width: 300px;
    height:200px;
  }
  </style>

    <div class="demo-wrapper">
        <form>
          <sdds-dropdown-v2
          ${
            defaultOption && defaultOption !== 'No default'
              ? `default-value="${defaultOptionLookUp[defaultOption]}"`
              : ''
          }
          ${
            multiDefaultOption
              ? `default-value="${getMultiselectDefaultValue(multiDefaultOption)}"`
              : ''
          }
          ${
            modeVariant !== 'Inherit from parent'
              ? `mode-variant="${modeVariant.toLowerCase()}"`
              : ''
          }
            name="dropdown"
            label="${labelText}"
            ${
              labelPosition && labelPosition !== 'None'
                ? `label-position="${labelPosition.toLowerCase()}"`
                : ''
            }
            placeholder="${placeholder}"
            helper="${helperText}"
            size="${sizeLookUp[size]}"
            ${error ? 'error' : ''}
            ${filter ? 'filter' : ''}
            ${multiselect ? 'multiselect' : ''}
            ${disabled ? 'disabled' : ''}
            open-direction="${openDirection.toLowerCase()}"
            ${childType === 'Data' ? `data='${JSON.stringify(data)}'` : ''}
            >
            ${
              childType === 'Elements'
                ? `<sdds-dropdown-option-v2 value="option-1">
                Option 1
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 disabled value="option-2">
                  Option 2
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 value="option-3">
                  Option 3
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 value="option-4">
                  Option 4
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 value="option-5">
                  Option 5
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 value="option-6">
                  Option 6
               </sdds-dropdown-option-v2>
               <sdds-dropdown-option-v2 value="option-7">
                  Option 7
               </sdds-dropdown-option-v2>`
                : ''
            }
          </sdds-dropdown-v2>
          <input
                type="submit"
                value="Submit form"
            />
        </form>
    </div>
    <!-- JUST FOR DEMO ON FORMS -->
    <script>
    form = document.querySelector('form')
    form.addEventListener('submit', (event) => {

    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(form)
    formData.forEach((value, key) => {
        console.log('Key:', key, 'Value:', value);
    });
  });

    dropdown = document.querySelector('sdds-dropdown-v2')
    dropdown.addEventListener('sddsChange', (event) => {
      console.log(event)
    })
    </script>
        
  `);

export const WebComponent = Template.bind({});

// eslint-disable-next-line no-lone-blocks
{
  /*

            <sdds-dropdown-option-v2 selected value="option-1">
              Option 1
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 disabled value="option-2">
              Option 2
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 value="option-3">
              Option 3
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 value="option-4">
              Option 4
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 value="option-5">
              Option 5
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 value="option-6">
              Option 6
            </sdds-dropdown-option-v2>
            <sdds-dropdown-option-v2 value="option-7">
              Option 7
            </sdds-dropdown-option-v2>

*/
}
