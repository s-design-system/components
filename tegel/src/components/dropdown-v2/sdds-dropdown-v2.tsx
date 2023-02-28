import { Component, Host, h, Element, State } from '@stencil/core';
import { HostElement, Method, Prop, Watch } from '@stencil/core/internal';
import { renderHiddenInput } from '../../utils/utils';

@Component({
  tag: 'sdds-dropdown-v2',
  styleUrl: 'sdds-dropdown-v2.scss',
  shadow: true,
})
export class SddsDropdownV2 {
  /** Name for the dropdowns input element. */
  @Prop() name: string;

  /** Sets the dropdown in a disabled state */
  @Prop() disabled: boolean;

  /** Helper text for the dropdown. */
  @Prop() helper: string;

  /** Label text for the dropdown. */
  @Prop() label: string;

  /** Label text position */
  @Prop() labelPosition: 'inside' | 'outside';

  /** Mode variant of the component, based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary';

  /** The direction the dropdown should open, auto if not specified. */
  @Prop() openDirection: 'up' | 'down' | 'auto' = 'auto';

  /** Placeholder text for the dropdown. */
  @Prop() placeholder: string;

  /** The size of the dropdown. */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Sets the dropdown in an error state */
  @Prop() error: boolean;

  /** Enables multiselect in the dropdown. */
  @Prop() multiselect: boolean;

  /** Enables filtration in the dropdown. */
  @Prop() filter: boolean;

  /** Text that is displayed if filter is used and there are no options that matches the search. */
  @Prop() noResultText: string = 'No result';

  @State() open: boolean = false;

  @State() value: Array<string>;

  @State() valueLabels: Array<string>;

  @State() selected: boolean = false;

  @State() filterHasFocus: boolean = false;

  @State() filterResult: number;

  @Element() host: HostElement;

  private dropdownList: HTMLDivElement;

  private children: Array<HTMLSddsDropdownOptionV2Element>;

  /** @internal Method for setting the value of the dropdown. */
  @Method()
  async setValue(newValue: string, newValueLabel: string) {
    if (this.multiselect) {
      this.value = this.value ? (this.value = [...this.value, newValue]) : [newValue];
      this.valueLabels = this.valueLabels
        ? (this.valueLabels = [...this.valueLabels, newValueLabel])
        : [newValueLabel];
    } else {
      this.value = [newValue];
      this.valueLabels = [newValueLabel];
      this.children = this.children.map((element: HTMLSddsDropdownOptionV2Element) => {
        if (element.value !== newValue) {
          element.deselect();
        }
        return element;
      });
    }
  }

  /** @internal Method for removing the value of the dropdown. */
  @Method()
  async removeValue(oldValue: string, oldValueLabel: string) {
    if (this.multiselect) {
      if (this.value) {
        this.value = this.value.filter((item) => item !== oldValue);
        this.valueLabels = this.valueLabels.filter((item) => item !== oldValueLabel);
      }
    } else {
      this.value = null;
    }
  }

  /** Method for closing the dropdown. */
  @Method()
  async close() {
    this.open = false;
  }

  connectedCallback = () => {
    this.getChildren();
  };

  componentDidRender() {
    this.getOpenDirection();
  }

  getChildren = () => {
    this.children = Array.from(this.host.children) as Array<HTMLSddsDropdownOptionV2Element>;
    this.children.map((element) => {
      if (element.selected) {
        this.value = this.value ? (this.value = [...this.value, element.value]) : [element.value];
        this.valueLabels = this.valueLabels
          ? (this.valueLabels = [...this.valueLabels, element.innerHTML])
          : [element.innerHTML];
      }
      return element;
    });
    this.filterResult = this.children.length;
  };

  getOpenDirection = () => {
    if (this.openDirection === 'auto') {
      const dropdownMenuHeight = this.dropdownList.offsetHeight;
      const distanceToBottom = this.host.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (distanceToBottom + dropdownMenuHeight + 57 > viewportHeight) {
        this.openDirection = 'up';
      } else {
        this.openDirection = 'down';
      }
    }
  };

  handleFilter = (event) => {
    const query = event.target.value.toLowerCase();
    this.filterResult = this.children.filter((element) => {
      if (!element.innerHTML.toLowerCase().includes(query.toLowerCase())) {
        element.setAttribute('hidden', '');
      } else {
        element.removeAttribute('hidden');
      }
      return !element.hasAttribute('hidden');
    }).length;
  };

  @Watch('value')
  selectionMade() {
    this.selected = !!this.value;
  }

  render() {
    renderHiddenInput(this.host, this.name, this.value?.toString(), this.disabled);
    console.log(this.filterResult);
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        {this.label && this.labelPosition === 'outside' && (
          <div class="label-outside">{this.label}</div>
        )}
        <div class={`dropdown-select ${this.size}`}>
          {this.filter ? (
            <div class={`filter ${this.disabled ? 'disabled' : ''} ${this.open ? 'focus' : ''}`}>
              <div class="value-wrapper">
                {this.label && this.labelPosition === 'inside' && this.placeholder && (
                  <div class={`label-inside ${this.size}`}>{this.label}</div>
                )}
                {this.label && this.labelPosition === 'inside' && !this.placeholder && (
                  <div
                    class={`
                    label-inside-as-placeholder
                    ${this.size}
                    ${this.value?.length ? 'selected' : ''}
                    ${this.open ? 'focus' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <input
                  class={`${this.labelPosition === 'inside' ? 'placeholder' : ''}`}
                  // eslint-disable-next-line no-return-assign
                  type="text"
                  onInput={(event) => this.handleFilter(event)}
                  placeholder={this.placeholder}
                  value={this.value ? this.valueLabels : null}
                  disabled={this.disabled}
                  onFocus={() => {
                    this.open = true;
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      this.open = false;
                    }
                  }}
                />
              </div>
              <sdds-icon
                onClick={() => {
                  this.open = !this.open;
                }}
                class={`${this.open ? 'open' : 'closed'}`}
                name="chevron_down"
                size="16px"
              ></sdds-icon>
            </div>
          ) : (
            <button
              onClick={() => {
                this.open = !this.open;
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  this.open = false;
                }
              }}
              class={`
                ${this.value ? 'value' : 'placeholder'}
                ${this.open ? 'open' : 'closed'}
                `}
              disabled={this.disabled}
            >
              <div class={`value-wrapper ${this.size}`}>
                {this.label && this.labelPosition === 'inside' && this.placeholder && (
                  <div class={`label-inside ${this.size}`}>{this.label}</div>
                )}
                {this.label && this.labelPosition === 'inside' && !this.placeholder && (
                  <div
                    class={`
                    label-inside-as-placeholder
                    ${this.size}
                    ${this.value?.length ? 'selected' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <div class={`placeholder ${this.size}`}>
                  {this.valueLabels?.length ? this.valueLabels.join(', ') : this.placeholder}
                </div>
                <sdds-icon
                  class={`${this.open ? 'open' : 'closed'}`}
                  name="chevron_down"
                  size="16px"
                ></sdds-icon>
              </div>
            </button>
          )}
        </div>
        {/* DROPDOWN LIST */}
        <div
          ref={(element) => (this.dropdownList = element)}
          class={`dropdown-list
            ${this.size}
            ${this.open ? 'open' : 'closed'}
            ${this.openDirection}
            ${this.label && this.labelPosition === 'outside' ? 'label-outside' : ''}`}
        >
          <slot></slot>
          {this.filterResult === 0 && (
            <div class={`no-result ${this.size}`}>{this.noResultText}</div>
          )}
        </div>
        {/* DROPDOWN LIST */}
        {this.helper && (
          <div class={`helper ${this.error ? 'error' : ''}`}>
            {this.error && <sdds-icon name="error" size="16px"></sdds-icon>}
            {this.helper}
          </div>
        )}
      </Host>
    );
  }
}
