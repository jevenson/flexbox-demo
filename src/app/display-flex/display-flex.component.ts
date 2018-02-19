import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'display-flex',
  template: `
    <h1>display: flex</h1>
    <prop-button-container (propertyValueChange)="onPropertyValuechange($event)">
      <prop-button propertyValue="flex"></prop-button>
    </prop-button-container>
    <flex-container [childCount]="3" [enableFlex]="enableFlex"></flex-container>

  `,
  styles: [``]
})
export class DisplayFlexComponent {

  public enableFlex: boolean = false;

  public onPropertyValuechange(event): void {
    this.enableFlex = !this.enableFlex;
  }
}
