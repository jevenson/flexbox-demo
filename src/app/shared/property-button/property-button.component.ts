import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'prop-button',
  template: `
    <button (click)="onButtonClick()">{{ propertyValue }}</button>
  `,
  styleUrls: ['property-button.component.scss']
})
export class PropertyButtonComponent {

  @Input() public propertyValue: string;

  @Output() public click: EventEmitter<string> = new EventEmitter<string>();

  public onButtonClick(): void {
    this.click.emit(this.propertyValue);
  }
}
