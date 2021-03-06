import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { DisplayFlexComponent } from './display-flex/display-flex.component';
import { FlexDirectionComponent } from './flex-direction/flex-direction.component';
import { JustifyContentComponent } from './justify-content/justify-content.component';
import { AlignItemsComponent } from './align-items/align-items.component';
import { AlignSelfComponent } from './align-self/align-self.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';
import { AlignContentComponent } from './align-content/align-content.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexShrinkComponent } from './flex-shrink/flex-shrink.component';
import { FlexBasisComponent } from './flex-basis/flex-basis.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'display-flex', component: DisplayFlexComponent },
  { path: 'flex-direction', component: FlexDirectionComponent },
  { path: 'justify-content', component: JustifyContentComponent },
  { path: 'align-items', component: AlignItemsComponent },
  { path: 'align-self', component: AlignSelfComponent },
  { path: 'flex-wrap', component: FlexWrapComponent },
  { path: 'align-content', component: AlignContentComponent },
  { path: 'flex-grow', component: FlexGrowComponent },
  { path: 'flex-shrink', component: FlexShrinkComponent },
  { path: 'flex-basis', component: FlexBasisComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  IndexComponent,
  DisplayFlexComponent,
  FlexDirectionComponent,
  JustifyContentComponent,
  AlignItemsComponent,
  AlignSelfComponent,
  FlexWrapComponent,
  AlignContentComponent,
  FlexGrowComponent,
  FlexShrinkComponent,
  FlexBasisComponent,
  OrderComponent
];
