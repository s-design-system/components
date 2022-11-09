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
    verticalDivider: {
      name: 'Vertical dividers',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    compactDesign: {
      name: 'Compact Design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onWhiteBackground: {
      name: 'On white background',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    responsiveDesign: {
      name: 'Responsive design',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    column_1_sortable: {
      name: 'Column 1 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_2_sortable: {
      name: 'Column 2 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_3_sortable: {
      name: 'Column 3 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    column_4_sortable: {
      name: 'Column 4 is sortable',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};

const SortingTemplate = ({ verticalDivider, compactDesign, onWhiteBackground, responsiveDesign, column_1_sortable, column_2_sortable, column_3_sortable, column_4_sortable }) =>
  formatHtmlPreview(`
  <h3>Sorting example</h3>
   <sdds-table
      id="sorting-table"
      vertical-dividers="${verticalDivider}"
      compact-design="${compactDesign}"
      white-background="${onWhiteBackground}"
      enable-responsive="${responsiveDesign}"
      >
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type' sortable="${column_1_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name' sortable="${column_2_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country' sortable="${column_3_sortable}"></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' sortable="${column_4_sortable}" text-align='right'></sdds-header-cell>
          </sdds-table-header>
          <sdds-table-body enable-dummy-data>
          </sdds-table-body>
  </sdds-table>`);

export const Sorting = SortingTemplate.bind({});
Sorting.args = {};
