import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'align-items',
  templateUrl: 'align-items.component.html',
  styles: [`
    ::ng-deep .flex-container {
      height: 200px;
      justify-content: space-between;
    }
  `]
})
export class AlignItemsComponent {

  public mismatch: boolean = false;

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.mismatch = !(event.propertyValue === 'stretch');

    this.flexContainer.applyStyle(event.propertyName, event.propertyValue);
  }
}
