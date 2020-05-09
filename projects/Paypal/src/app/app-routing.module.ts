import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServiceSelectionComponent} from './components/service-selection/service-selection.component';
import {PurchaseComponent} from './components/purchase/purchase.component';


const routes: Routes = [
  // {path:"login", component: LoginComponent},
  {path: '', component: ServiceSelectionComponent},
  {path: 'purchase', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
