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

    .sub-prop-container {
      display: flex;
      justify-content: space-between;
      width: 86vw;
      margin: 10px 5vw;
    }

    prop-button-container h2 {
      color: black;
    }

    prop-button-container {
      width: 47%;
    }

    ::ng-deep .sub-prop-container .button-container {
      width: 100%;
      margin: 0;
    }
  `]
})
export class FlexBasisComponent {

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true);
  }
}
