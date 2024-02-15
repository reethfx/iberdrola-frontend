import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor, NgIf } from '@angular/common';
import { ContratoService } from '../services/contrato.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrato } from '../../../models/contrato';
import { ErrorMessageComponent } from '../../error/error.component';
import { Contador } from '../../../models/contador';

@Component({
  selector: 'db-contrato-add',
  templateUrl: './contrato-add.component.html',
  standalone: true,
  imports: [NgFor, NgIf, AngularSvgIconModule, FormsModule, ErrorMessageComponent],
})
export class ContratoAddComponent {
  contadores: Contador[] = [];

  @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;
  
  id!: number;
  dni_cliente!: number;
  cups!: number;
  id_tarifa!: number;
  homologado: boolean = true;
  isButtonDisabled: boolean = false;

  errorFromServer: string | null = null;
  errorMessage: string | null = null;

  constructor(private contractService: ContratoService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadCounters();
  }

  loadCounters() {
    this.contractService.getContadores().subscribe(
        (contadores) => {
            this.contadores = contadores;
        },
        (error) => {
            console.error('Error al cargar contadores:', error);
        });
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  onCupsChange(event: any) {
    if (event && event.value !== undefined) {
    this.cups = event.target.value;
  }
}
  
  onIdTarifaChange(event: any) {
    if (event && event.value !== undefined) {
    this.id_tarifa = event.target.value;
  }
}

  onHomologadoChange(event: any) {
    if (event && event.value !== undefined) {
      this.homologado = event.value;
    }
  }

  saveContratoData() {
    this.isButtonDisabled = true;
    console.log('Respuesta completa antes:', { cups: this.cups, id_tarifa: this.id_tarifa });

    var contrato: Contrato = {
      id: +this.id, 
      cups: +this.cups, 
      id_tarifa: +this.id_tarifa, 
      dni_cliente: +this.dni_cliente, 
      homologado: this.homologado,        
    }

    console.log('Respuesta completa después:', { cups: this.cups, id_tarifa: this.id_tarifa });


    this.contractService.saveContract(contrato).subscribe(
      res => {
        console.log('Respuesta completa:', contrato);
        console.log('Contrato agregado correctamente');
        this.router.navigate(['/dashboard/contratos']);
        this.isButtonDisabled = false;
      },

      error => {
        console.error('Error al agregar el contrato', error);
        if (error && error.error && error.error.message && this.errorMessageComponent) {
          this.errorMessageComponent.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Error desconocido al agregar el contrato.';
        }
        this.cdr.detectChanges();
        this.isButtonDisabled = false;
      }
    );
  }
}
