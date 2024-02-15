import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FacturaHeaderComponent } from '../../components/factura/factura-header/factura-header.component';
import { FacturaTableComponent } from '../../components/factura/factura-table/factura-table.component';

@Component({
    selector: 'app-factura',
    templateUrl: './factura.component.html',
    standalone: true,
    imports: [
      FacturaHeaderComponent,
      FacturaTableComponent,
      NgFor,
    ],
})
export class FacturaComponent {

}
