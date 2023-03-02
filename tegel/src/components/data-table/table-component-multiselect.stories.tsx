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
    enableMultiselect: {
      name: 'Enable multiselect',
      description: 'Enables row selection.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
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
  },
  args: {
    modeVariant: 'Inherit from parent',
    compactDesign: false,
    responsiveDesign: false,
    enableMultiselect: true,
    verticalDivider: false,
    noMinWidth: false,
  },
};

const MultiselectTemplate = ({
  modeVariant,
  compactDesign,
  responsiveDesign,
  enableMultiselect,
  verticalDivider,
  noMinWidth,
}) =>
  formatHtmlPreview(`
<script>
// Note: Script here is only for demo purposes
  function getValue() {
    const element = document.querySelector('#multiselect-table > sdds-table-body');
    const textArea = document.getElementById('selected-rows-value-textarea');
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
          textArea.value = element.getAttribute('data-selected-rows');
        }
      });
    });
    observer.observe(element, {
      attributes: true,
    });
  }
  window.addEventListener('click', () => {
    getValue();
  });

</script>

    <sdds-table
        id="multiselect-table"
        ${enableMultiselect ? 'enable-multiselect' : ''}
        vertical-dividers="${verticalDivider}"
        compact-design="${compactDesign}"
        enable-responsive="${responsiveDesign}"
        ${noMinWidth ? 'no-min-width' : ''}
        ${
          modeVariant !== 'Inherit from parent' ? `mode-variant="${modeVariant.toLowerCase()}"` : ''
        }
    >
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell>
          </sdds-table-header>
          <sdds-table-body enable-dummy-data>
          </sdds-table-body>
  </sdds-table>

  <!-- Note: Code below is just for demo purposes -->
  <div class="sdds-u-mt1" style="width: 450px; background-color: lightblue; padding: 16px;">
    <p class="sdds-u-mt0">Note: This box works only in "Canvas" tab.</p>
    <h6 class="sdds-u-pb0 sdds-u-mb0 sdds-u-mt0">Selected rows data</h6>
    <small>Values here are values found in data-selected-rows attribute of sdds-table-body element. They are shown here just for presentation purposes.</small>
    <textarea id="selected-rows-value-textarea" rows="5" cols="50" readonly></textarea>
  </div>`);

export const Multiselect = MultiselectTemplate.bind({});
Multiselect.args = {};
