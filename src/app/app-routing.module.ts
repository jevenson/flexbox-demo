import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayFlexComponent } from './display-flex/display-flex.component';
import { FlexDirectionComponent } from './flex-direction/flex-direction.component';

const routes: Routes = [
  { path: 'display-flex', component: DisplayFlexComponent },
  { path: 'flex-direction', component: FlexDirectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DisplayFlexComponent,
  FlexDirectionComponent
];