import { Component, OnInit, OnDestroy } from '@angular/core';import { Contrato } from '../../../models/contrato';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContratoService } from '../services/contrato.service'
import { DataSharingService } from '../services/data-sharing.service';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../../../shared/components/alerts/services/alert.service'; 

@Component({
  selector: 'db-contrato-table',
  templateUrl: './contrato-table.component.html',
  standalone: true,
  imports: [NgFor, AngularSvgIconModule, NgIf, RouterModule],
})

export class ContratoTableComponent implements OnInit, OnDestroy {
  
  contratoData: any;
  private dniSubscription: Subscription | undefined;

  contratos : Array<Contrato> = []

  constructor(
    private contractService: ContratoService, 
    private dataSharingService: DataSharingService, 
    private httpClient: HttpClient,
    private alertService: AlertService) {}

  getContractsList() {
    this.contractService.getContractsByDni(this.contratoData?.dni_cliente).subscribe(
      (contratos) => {
        this.contratos = contratos;
        console.log('Contratos encontrados con éxito.');
        this.alertService.showSuccess('Contratos encontrados con éxito.');
      },
      (error) => {
        console.error('Error al buscar contratos:', error);
        this.alertService.showError('No se encontraron contratos para el cliente.');
      }
    );
  }

  deleteContract(id: any) {
    this.contractService.deleteContract(id).subscribe(res => {
      console.log(res);
      this.getContractsList();
    });
  }
  
  getContractByDni(dni: string | null) {
    const dniToSearch = dni === null || dni === undefined ? '1' : dni;

    this.contractService.getContractsByDni(dniToSearch).subscribe(
      (contratos) => {
        this.contratoData = contratos.length > 0 ? contratos[0] : null;
        console.log('Contrato encontrado con éxito.');
        this.getContractsList();
      },
      (error) => {
        console.error('Error al buscar contrato:', error);
        this.alertService.showError('No puedes buscar un cliente sin contratos!');
      }
    );
  }

  ngOnInit() {
  this.dniSubscription = this.dataSharingService.currentDni$.subscribe((dni) => {
      this.getContractByDni(dni);
      console.log(this.contratoData?.id);
    });
  }

  ngOnDestroy() {
    if (this.dniSubscription) {
      this.dniSubscription.unsubscribe();
    }
  }
}