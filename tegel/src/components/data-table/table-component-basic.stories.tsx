import { formatHtmlPreview } from '../../utils/utils';
import sddsTable from './table/readme.md';
import sddsTableToolbar from './table-toolbar/readme.md';
import sddsHeader from './table-header/readme.md';
import sddsHeaderCell from './table-header-cell/readme.md';
import sddsTableBody from './table-body/readme.md';
import sddsBodyRow from './table-body-row/readme.md';
import sddsBodyRowExpandable from './table-body-row-expandable/readme.md';
import sddsBodyCell from './table-body-cell/readme.md';
import sddsTableFooter from './table-footer/readme.md';

export default {
  title: 'Components/Data Table/Web Component',
  parameters: {
    notes: {
      'sdds-table': sddsTable,
      'sdds-table-toolbar': sddsTableToolbar,
      'sdds-header': sddsHeader,
      'sdds-header-cell': sddsHeaderCell,
      'sdds-table-body': sddsTableBody,
      'sdds-body-row': sddsBodyRow,
      'sdds-body-row-expandable': sddsBodyRowExpandable,
      'sdds-body-cell': sddsBodyCell,
      'sdds-table-footer': sddsTableFooter,
    },
  },
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
    compactDesign: {
      name: 'Compact design',
      description: 'Enables compact design of the table, rows with less height.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    responsiveDesign: {
      name: 'Responsive table',
      description: 'Enables table to take 100% of available width. For column values less than 192px, "No minimum width" has to be enabled too.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    disablePadding: {
      name: 'Disable cell padding',
      description: 'By default each cell comes with padding. Disabling padding rule can be useful when a users want to insert another HTML element in cell, eg. input.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    verticalDivider: {
      name: 'Vertical dividers',
      description: 'Enables vertical dividers between table columns.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    noMinWidth: {
      name: 'No minimum width',
      description: 'Resets min-width rule and enables setting column width value to less than 192px which is the default. When enabled, controls for column width will show here.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    column1Width: {
      name: 'Column 1 width',
      description:'Value of width for column 1. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
    column2Width: {
      name: 'Column 2 width',
      description: 'Value of width for column 2. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
    column3Width: {
      name: 'Column 3 width',
      description: 'Value of width for column 3. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
    column4Width: {
      name: 'Column 4 width',
      description: 'Value of width for column 4. In order to work correctly "No minimum width" has to be enabled too. When editing please provide a unit next to the value, eg. 200px.',
      control: {
        type: 'text',
      },
      if: { arg: 'noMinWidth', eq: true },
    },
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    responsiveDesign: false,
    disablePadding: false,
    verticalDivider: false,
    noMinWidth: false,
    column1Width: '',
    column2Width: '',
    column3Width: '',
    column4Width: '',
  },
};

const BasicTemplate = ({
  modeVariant,
  compactDesign,
  responsiveDesign,
  disablePadding,
  verticalDivider,
  noMinWidth,
  column1Width,
  column2Width,
  column3Width,
  column4Width,
}) =>
  formatHtmlPreview(`
  <sdds-table
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      enable-responsive="${responsiveDesign}"
      ${noMinWidth ? 'no-min-width' : ''}
      ${modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''}>
      <sdds-table-header>
          <sdds-header-cell ${column1Width ? `style="width: ${column1Width};"` : ''} column-key='truck' column-title='Truck type'></sdds-header-cell>
          <sdds-header-cell ${column2Width ? `style="width: ${column2Width};"` : ''} column-key='driver' column-title='Driver name'></sdds-header-cell>
          <sdds-header-cell ${column3Width ? `style="width: ${column3Width};"` : ''} column-key='country' column-title='Country'></sdds-header-cell>
          <sdds-header-cell ${column4Width ? `style="width: ${column4Width};"` : ''} column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell>
      </sdds-table-header>
      <sdds-table-body>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 1" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 2" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 3" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 4" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
              <sdds-body-cell cell-value="Test value 5" cell-key="truck" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 6" cell-key="driver" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 7" cell-key="country" disable-padding="${disablePadding}"></sdds-body-cell>
              <sdds-body-cell cell-value="Test value 8" cell-key="mileage" disable-padding="${disablePadding}"></sdds-body-cell>
          </sdds-table-body-row>
      </sdds-table-body>
  </sdds-table>`);

export const Default = BasicTemplate.bind({});