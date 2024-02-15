import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContratoHeaderComponent } from '../../components/contrato/contrato-header/contrato-header.component';
import { ContratoSearchBarComponent } from '../../components/contrato/contrato-search-bar/contrato-search-bar.component';
import { ContratoTableComponent } from '../../components/contrato/contrato-table/contrato-table.component';
import { DataSharingService } from '../../components/contrato/services/data-sharing.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'db-contratos',
    templateUrl: './contratos.component.html',
    standalone: true,
    imports: [
        NgFor,
        ContratoTableComponent,
        ContratoHeaderComponent,
        ContratoSearchBarComponent,
    ],
})
export class ContratoComponent {
  private apiBaseUrl = 'http://localhost:8080'

  constructor(
    private dataSharingService: DataSharingService,
    private httpClient: HttpClient
  ) {
    this.dataSharingService.dni$.subscribe((dni) => {
      this.getContratoByDniFromBackend(dni);
    });
  }

  private getContratoByDniFromBackend(dni: string): void {
    const apiUrl = `${this.apiBaseUrl}/contracts/client/${dni}`;
    this.httpClient.get(apiUrl).subscribe(
      (contrato) => {
        this.dataSharingService.sendContrato(contrato);
      },
      (error) => {
        console.error('Error al obtener el contrato por DNI', error);
      }
    );
  }
}