import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'flex-basis',
  templateUrl: 'flex-basis.component.html',
  styles: [`
    ::ng-deep .flex-container {
      resize: horizontal;
      overflow: auto;
      justify-content: space-between;
    }

    // ::ng-deep .child {
    //   flex-grow: 1;
    //   flex-shrink: 0;
    // }
  `]
})
export class FlexBasisComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true);
  }
}
