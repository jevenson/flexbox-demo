import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'flex-wrap',
  templateUrl: 'flex-wrap.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
    }

    ::ng-deep .child {
      width: 8%;
    }
  `]
})
export class FlexWrapComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue);
  }
}
