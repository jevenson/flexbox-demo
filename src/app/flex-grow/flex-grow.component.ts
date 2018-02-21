import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'flex-grow',
  templateUrl: 'flex-grow.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
    }

    ::ng-deep .child {
      flex-grow: 0;
    }
  `]
})
export class FlexGrowComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    const childSelector: string = event.propertyValue === '0' || event.propertyValue === '1' ? '.child' : undefined;

    console.log(childSelector);

    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true, childSelector);
  }
}
