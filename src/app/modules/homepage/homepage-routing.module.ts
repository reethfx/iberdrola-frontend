import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule { }
