export default {
  title: 'Component/Data Table/Web Component',
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
    batchArea: {
      name: 'Batch code',
      control: {
        type: 'text',
      },
      defaultValue:
        ' <button\n               slot="sdds-table__actionbar"\n               class="sdds-table__actionbar-btn"\n             >\n                 <svg\n                   class="sdds-table__actionbar-btn-icon"\n                   fill="none"\n                   xmlns="http://www.w3.org/2000/svg"\n                   viewBox="0 0 32 32"\n                 >\n                   <path\n                     fill-rule="evenodd"\n                     clip-rule="evenodd"\n                     d="m13.787 6.803.935-2.823h2.444l.934 2.818.493.152c.567.174 1.115.391 1.63.649l.456.228 2.753-1.428 1.71 1.71-1.37 2.652.282.476c.363.614.649 1.295.866 2.02l.15.498 2.822.935v2.476l-2.82.934-.15.496c-.202.66-.474 1.303-.8 1.885l-.264.47 1.284 2.48-1.71 1.711-2.475-1.281-.467.256c-.608.333-1.24.605-1.894.804l-.495.15-.935 2.82h-2.445l-.935-2.804-.494-.15a9.596 9.596 0 0 1-1.885-.8l-.47-.263-2.48 1.284-1.711-1.71 1.281-2.476-.256-.467a10.015 10.015 0 0 1-.804-1.893l-.15-.496-2.82-.934v-2.461l2.806-.936.15-.497a9.903 9.903 0 0 1 .874-2.034l.267-.47-1.36-2.648 1.722-1.722 2.766 1.435.463-.244a8.826 8.826 0 0 1 1.603-.653l.499-.15Zm.682-4.823c-.724 0-1.328.456-1.559 1.11l-.003.009-.696 2.1c-.336.119-.662.251-.983.4L9.165 4.53a1.623 1.623 0 0 0-1.937.285L5.145 6.897a1.65 1.65 0 0 0-.313 1.912l.996 1.94c-.239.467-.45.957-.628 1.463l-2.086.695-.009.003a1.644 1.644 0 0 0-1.109 1.558v2.967c0 .724.456 1.328 1.11 1.559l.009.003 2.104.697c.158.444.342.875.548 1.293l-.907 1.752a1.623 1.623 0 0 0 .285 1.936l2.098 2.097.014.014a1.672 1.672 0 0 0 1.883.27l1.774-.918c.418.208.854.391 1.297.548l.696 2.088.003.009c.23.653.835 1.109 1.559 1.109h2.95c.724 0 1.328-.456 1.559-1.11l.003-.009.697-2.104c.444-.158.875-.342 1.293-.548l1.752.907a1.623 1.623 0 0 0 1.937-.285l2.097-2.098.013-.014a1.672 1.672 0 0 0 .27-1.883l-.918-1.774c.208-.418.392-.853.548-1.296l2.104-.697.009-.003a1.644 1.644 0 0 0 1.109-1.559v-2.982c0-.724-.456-1.328-1.11-1.559l-.008-.003-2.1-.696c-.174-.5-.38-.992-.625-1.466l.98-1.896a1.623 1.623 0 0 0-.286-1.936l-2.097-2.097-.015-.014a1.672 1.672 0 0 0-1.883-.27l-.007.004-2.091 1.085c-.318-.142-.643-.271-.972-.387L18.981 3.1l-.003-.01A1.644 1.644 0 0 0 17.42 1.98h-2.951Zm-2.632 13.956a4.108 4.108 0 1 1 8.215 0 4.108 4.108 0 0 1-8.215 0Zm4.107-6.108a6.107 6.107 0 1 0 0 12.215 6.107 6.107 0 0 0 0-12.215Z"\n                     fill="currentColor"\n                   />\n                 </svg>\n            </button>\n            <sdds-button\n               slot="sdds-table__actionbar"\n               type="primary"\n               size="sm"\n               text="Download"\n              ></sdds-button>  ',
    },
  },
};

const BatchActionTemplate = ({
  verticalDivider,
  compactDesign,
  onWhiteBackground,
  batchArea,
  responsiveDesign,
}) => `
  <h3>Batch action</h3>
   <sdds-table 
        id="actionbar-table" 
        enable-multiselect
        vertical-dividers="${verticalDivider}"
        compact-design="${compactDesign}"   
        white-background="${onWhiteBackground}"
        enable-responsive="${responsiveDesign}"
      >
          <sdds-table-toolbar table-title="Users buttons - actionbar">   
          ${batchArea}       
                     
        </sdds-table-toolbar>
          <sdds-table-header>
              <sdds-header-cell column-key='truck' column-title='Truck type'></sdds-header-cell>
              <sdds-header-cell column-key='driver' column-title='Driver name'></sdds-header-cell>
              <sdds-header-cell column-key='country' column-title='Country'></sdds-header-cell>
              <sdds-header-cell column-key='mileage' column-title='Mileage' text-align='right'></sdds-header-cell> 
          </sdds-table-header>       
          <sdds-table-body enable-dummy-data>                      
          </sdds-table-body>
  </sdds-table>`;

export const BatchAction = BatchActionTemplate.bind({});
BatchAction.args = {};
