import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Data Table/Native',
  argTypes: {
    modeVariant: {
      name: 'Mode variant',
      description: 'Mode variant adjusts component colors to have better visibility depending on global mode and background.',
      control: {
        type: 'radio',
      },
      options: ['Inherit from parent', 'Primary', 'Secondary'],
      table: {
        defaultValue: { summary: 'Inherit from parent' },
      },
    },
    isCompact: {
      name: 'Compact design',
      description: 'Enables compact design of the table, rows with less height.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    responsiveTable: {
      name: 'Responsive table',
      description: 'Enables table to take 100% of available width. For column values less then 192px, "No minimum width" has to be enabled too. ',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    tableTitle: {
      name: 'Table title',
      description: 'Sets text that appears in table caption area.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    dividers: {
      name: 'Vertical dividers',
      description: 'Enables vertical dividers between table columns.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    noMinWidthArg: {
      name: 'No minimum width',
      description: 'Resets min-width rule and enables setting column width value to less than 192px which is the default. When enabled, controls for column width will show here.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    column1Width: {
      name: 'Column 1 width',
      description:'Value of width for column 1. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
    column2Width: {
      name: 'Column 2 width',
      description: 'Value of width for column 2. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
    column3Width: {
      name: 'Column 3 width',
      description: 'Value of width for column 3. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: '192px',
        },
      },
      if: { arg: 'noMinWidthArg', eq: true },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    isCompact: false,
    responsiveTable: false,
    tableTitle: 'Native table',
    dividers: false,
    noMinWidthArg: false,
    column1Width: '',
    column2Width: '',
    column3Width: '',
  },
};

const Template = ({
  modeVariant,
  isCompact,
  responsiveTable,
  tableTitle,
  dividers,
  noMinWidthArg,
  column1Width,
  column2Width,
  column3Width,
}) =>
  formatHtmlPreview(`
    <table class="
        sdds-table
        ${modeVariant === 'Primary' ? 'sdds-mode-variant-primary' : ''}
        ${modeVariant === 'Secondary' ? 'sdds-mode-variant-secondary' : ''}
        ${isCompact ? 'sdds-table--compact' : ''}
        ${dividers ? 'sdds-table--divider' : ''}
        ${noMinWidthArg ? 'sdds-table--no-min-width' : ''}
        ${responsiveTable ? 'sdds-table--responsive' : ''}
    ">
    ${tableTitle && `<caption>${tableTitle}</caption>`}
    <thead>
      <tr>
        <th ${column1Width ? `style="width: ${column1Width};"` : ''}>Header</th>
        <th ${column2Width ? `style="width: ${column2Width};"` : ''}>Header</th>
        <th ${column3Width ? `style="width: ${column3Width};"` : ''}>Header</th>
      </tr>
    </thead>
     <tbody>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
      <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
      </tr>
    </tbody>
  </table>
    `);

export const Default = Template.bind({});
Default.args = {};
