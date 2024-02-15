import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ClienteTableComponent } from './components/cliente/cliente-table/cliente-table.component';
import { DatabaseComponent } from './pages/database/database.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ContratoComponent } from './pages/contratos/contratos.component';
import { ClienteAddComponent } from './components/cliente/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { ContratoAddComponent } from './components/contrato/contrato-add/contrato-add.component';
import { ContratoEditComponent } from './components/contrato/contrato-edit/contrato-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
      { path: 'clientes', component: ClienteTableComponent },
      { path: 'clientes/add', component: ClienteAddComponent },
      { path: 'clientes/edit/:dni', component: ClienteEditComponent },
      { path: 'facturas', component: FacturaComponent },
      { path: 'contratos', component: ContratoComponent },
      { path: 'contratos/add', component: ContratoAddComponent },
      { path: 'contratos/edit/:id', component: ContratoEditComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
