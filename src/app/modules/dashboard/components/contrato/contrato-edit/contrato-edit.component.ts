import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from '../../../models/contrato';
import { Contador } from '../../../models/contador';

@Component({
    selector: 'db-contrato-edit',
    templateUrl: './contrato-edit.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule],
})
export class ContratoEditComponent {
  contadores: Contador[] = [];
  isButtonDisabled: boolean = false;


    id!: number;
    contrato: any;
    loading: boolean = false;
    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private contratoService: ContratoService) { }
  
    ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.contratoService.getContract(this.id).subscribe(res => {
      this.contrato = res;
      console.log(res)

      this.loading = false;
      this.loadCounters();
    });
  }

  loadCounters() {
    this.contratoService.getContadores().subscribe(
        (contadores) => {
            this.contadores = contadores;
        },
        (error) => {
            console.error('Error al cargar contadores:', error);
        });
  }

  updateContratoData() {
    this.isButtonDisabled = true;

    var contrato : Contrato = {
      id: this.contrato.id,
      cups: this.contrato.cups,
      id_tarifa: this.contrato.id_tarifa,
      dni_cliente: this.contrato.dni_cliente,
      homologado: this.contrato.homologado,
    }

    this.contratoService.updateContract(contrato).subscribe(
      res => {
        console.log('Respuesta completa:', res);
        this.router.navigate(['/dashboard/contratos']);
        this.isButtonDisabled = false;

      },
      error => {
        console.error('Error al actualizar el contrato', error);
        this.isButtonDisabled = false;

      }
    );
  }
}
