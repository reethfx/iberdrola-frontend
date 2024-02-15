import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClienteTableComponent } from '../../components/cliente/cliente-table/cliente-table.component';

@Component({
    selector: 'dashboard-database',
    templateUrl: './database.component.html',
    standalone: true,
    imports: [
        HttpClientModule,
        ClienteTableComponent
    ],
})
export class DatabaseComponent implements OnInit {

  ngOnInit(): void {}
}
