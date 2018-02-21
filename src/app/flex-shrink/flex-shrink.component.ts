import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'flex-shrink',
  templateUrl: 'flex-shrink.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
    }

    ::ng-deep .child {
      flex-grow: 1;
    }

    .math-container {
      display: flex;
      font-size: 30px;
      justify-content: space-around;
    }

    .child {
      border: 2px solid black;
      padding: 2.5%;
    }
  `]
})
export class FlexShrinkComponent {

  public readonly elementCount: number = 4;

  public allFlexGrowValue: number = 0;
  public individualFlexGrowValue: number = 0;

  public get allWidth(): number {
    return this.totalWidth === 0 ? 0 : this.allFlexGrowValue / this.totalWidth;
  }

  public get individualWidth(): number {
    return this.totalWidth === 0 ? 0 : this.individualFlexGrowValue / this.totalWidth;
  }

  private totalWidth: number = 0;

  @ViewChild(FlexContainerComponent) public flexContainer: FlexContainerComponent;

  public onPropertyValuechange(event): void {
    let childSelector: string | undefined = undefined;

    let requestFlexValue: number = Number.parseInt(event.propertyValue);

    if (requestFlexValue === 0 || requestFlexValue === 1) {
      childSelector = '.child';

      this.allFlexGrowValue = requestFlexValue;

      this.totalWidth = this.allFlexGrowValue * this.elementCount;
    }
    else {
      this.totalWidth = this.allFlexGrowValue * (this.elementCount - 1) + requestFlexValue;
    }

    this.individualFlexGrowValue = requestFlexValue;

    console.log('total ' + this.totalWidth);

    this.flexContainer.applyStyle(event.propertyName, event.propertyValue, true, childSelector);
  }
}
