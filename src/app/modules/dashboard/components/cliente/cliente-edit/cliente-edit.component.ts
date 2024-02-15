import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClientService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'db-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})

 export class ClienteEditComponent {
  dni!: number;
  cliente: any;
  loading: boolean = false;
  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.dni = this.route.snapshot.params['dni'];

    this.clientService.getClient(this.dni).subscribe(res => {
      this.cliente = res;
      console.log(res)

      this.loading = false;
    });
  }

  updateClientData() {
    var cliente : Cliente = {
      dni: this.cliente.dni,
      nombre: this.cliente.nombre,
      apellido: this.cliente.apellido,
      direccion: this.cliente.direccion,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      cliente_antiguo: this.cliente.cliente_antiguo
    }

    this.clientService.updateClient(cliente).subscribe(
      res => {
        console.log('Respuesta completa:', res);
        this.router.navigate(['/dashboard/clientes']);
      },
      error => {
        console.error('Error al actualizar el cliente', error);
      }
    );
  }

  updateCheckbox() {
    if (this.cliente.cliente_antiguo === null) {
      this.cliente.cliente_antiguo = true; 
    } else {
      this.cliente.cliente_antiguo = !this.cliente.cliente_antiguo;
    }
  
    this.cdr.detectChanges();
  }
  
}
