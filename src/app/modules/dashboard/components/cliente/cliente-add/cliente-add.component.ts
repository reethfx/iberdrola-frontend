import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor } from '@angular/common';
import { ClientService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { Router } from '@angular/router';



@Component({
  selector: 'db-cliente-add',
  templateUrl: './cliente-add.component.html',
  standalone: true,
  imports: [NgFor, AngularSvgIconModule, FormsModule],
})

export class ClienteAddComponent {
    dni!: number;
    nombre!: string;
    apellido!: string;
    direccion!: string;
    telefono!: number;
    email!: string;
    cliente_antiguo!: boolean;

    constructor(private clientService: ClientService, private router: Router) {}

    saveClienteData() {   
      if(this.dni == null || this.nombre == '' || this.apellido == '' || this.direccion == '' || this.telefono == null || this.email == '') {
        alert("Por favor, rellene todos los campos");
        return false;
      }

      var cliente: Cliente = {
        dni: this.dni, 
        nombre:this.nombre, 
        apellido: this.apellido, 
        direccion:this.direccion, 
        email:this.email, 
        telefono:this.telefono, 
        cliente_antiguo: false
      }

      this.clientService.saveClient(cliente).subscribe(
        res => {
          console.log('Respuesta completa:', res);
          this.router.navigate(['/dashboard/clientes']);
        },
        error => {
          console.error('Error al agregar el cliente', error);
        }
      );
      
  }
}