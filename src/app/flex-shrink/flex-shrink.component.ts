import { Component, ViewChild } from '@angular/core';
import { FlexContainerComponent } from './../shared/flex-container/flex-container.component';

@Component({
  moduleId: module.id,
  selector: 'flex-shrink',
  templateUrl: 'flex-shrink.component.html',
  styles: [`
    ::ng-deep .flex-container {
      justify-content: space-between;
      resize: horizontal;
      overflow: auto;
    }

    ::ng-deep .child:nth-child(1) {
      flex: 1 0 30vw;
    }

    ::ng-deep .child:nth-child(2) {
      flex: 0 2 30vw;
    }

    ::ng-deep .child:nth-child(3) {
      flex: 0 3 30vw;
    }
  `]
})
export class FlexShrinkComponent { }
