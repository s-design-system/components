import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-chip',
  styleUrl: 'sdds-chip.scss',
  shadow: false,
  scoped: true,
})
export class SddsChip {
  /** Type of chip, depends on usage */
  @Prop() inputType: 'button' | 'radio' | 'checkbox' = 'button';

  @Prop() size: 'sm' | 'lg' = 'lg';

  /** ID used for internal chip functionality and events, must be unique.
   *
   * **NOTE**: If you're listening for input events you need to set this ID yourself to identify the input, as the default ID is random and will be different every time.
   */
  @Prop() chipId: string = crypto.randomUUID();

  /** Setting it to true set component state to checked. Valid only for inputType checkbox and radio. */
  @Prop() checked: boolean = false;

  /** Name for the checkbox or radio input element. Also creates a reference between label and input. Not valid and used in if inputType is button. */
  @Prop() name: string;

  /** Value of input. */
  @Prop() value: string;

  /** Sends unique chip identifier and value when it is changed (checked/unchecked). If no ID is specified a random one will be generated. To use this listener don't use the randomized ID, use a specific one of your choosing. */
  @Event({
    eventName: 'sddsChange',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    chipId: string;
    value: string;
  }>;

  private handleChange = () => {
    this.sddsChange.emit({
      chipId: this.chipId,
      value: this.value,
    });
  };

  @Event({
    eventName: 'sddsClick',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  sddsClick: EventEmitter<{
    chipId: string;
  }>;

  private handleClick = () => {
    this.sddsClick.emit({
      chipId: this.chipId,
    });
  };

  private renderInputAttributes() {
    if (this.inputType !== 'button') {
      return {
        value: this.value,
        checked: this.checked,
        name: this.name,
        onChange: () => this.handleChange(),
      };
    }
    return {
      onClick: () => this.handleClick(),
    };
  }

  render() {
    const inputAttributes = this.renderInputAttributes();

    return (
      <Host>
        <div class="component">
          <div class={`sdds-chip-component ${this.size}`}>
            <input type={this.inputType} id={this.chipId} {...inputAttributes}></input>
            <label htmlFor={this.chipId}>
              <slot name="label" />
            </label>
          </div>
        </div>
      </Host>
    );
  }
}
