import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-inline-tab',
  styleUrl: 'sdds-inline-tab.scss',
  shadow: true,
})
export class SddsInlineTab {
  /** The label text for the tab. */
  @Prop() label: string;

  /** Indicates the selected/current tab. */
  @Prop() selected: boolean = false;

  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host
        role="listitem"
        class={`
      ${this.selected && 'selected'}
      ${this.disabled && 'disabled'}
      `}
      >
        <button>
          <div class={`tab-text-container`}>{this.label}</div>
        </button>
      </Host>
    );
  }
}
