import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'order',
  templateUrl: 'order.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
    }
  `]
})
export class OrderComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true);
  }
}
