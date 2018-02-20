import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'align-self',
  templateUrl: 'align-self.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
      align-items: center;
      height: 300px;
    }
  `]
})
export class AlignSelfComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true);
  }
}
