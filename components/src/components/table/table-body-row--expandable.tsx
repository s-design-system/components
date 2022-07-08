import { Component, h } from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row-expendable',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableBodyRowExpandable {
  render() {
    const content = [
      <sdds-table-body-row>
        <slot />
      </sdds-table-body-row>,
      <sdds-table-body-row>
        <td class="sdds-table__body-cell" colSpan={4}>
          <slot name="expend-data" />
        </td>
      </sdds-table-body-row>,
    ];
    return content;
  }
}
