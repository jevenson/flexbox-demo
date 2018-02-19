import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { PropertyButtonComponent } from './property-button/property-button.component';
import { PropertyButtonContainerComponent } from './property-button-container/property-button-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlexContainerComponent,
    PropertyButtonComponent,
    PropertyButtonContainerComponent
  ],
  exports: [
    FlexContainerComponent,
    PropertyButtonComponent,
    PropertyButtonContainerComponent
  ]
})
export class SharedModule { }
