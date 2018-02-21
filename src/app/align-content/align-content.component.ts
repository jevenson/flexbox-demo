import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'align-content',
  templateUrl: 'align-content.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
      flex-wrap: wrap;
      height: 50vh;
    }

    ::ng-deep .child {
      width: 8%;
    }
  `]
})
export class AlignContentComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue);
  }
}
