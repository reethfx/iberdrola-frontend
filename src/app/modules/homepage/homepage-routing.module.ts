import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
     {
        path: 'prices', component: PricingComponent},
    {   path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule { }
