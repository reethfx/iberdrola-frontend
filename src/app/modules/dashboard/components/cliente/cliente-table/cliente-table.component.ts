import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClientService } from '../services/cliente.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'db-cliente-table',
  templateUrl: './cliente-table.component.html',
  standalone: true,
  imports: [NgFor, AngularSvgIconModule, RouterModule],
})

export class ClienteTableComponent implements OnInit{

  clientes : Array<Cliente> = []

  constructor(private clientService: ClientService) {}
  
  getClientsList() {
    this.clientService.getClients().subscribe(res => {
      this.clientes = res;
      console.log(res);
    });
  }

  deleteClient(dni: any) {
    this.clientService.deleteClient(dni).subscribe(res => {
      console.log(res);
      this.getClientsList();
    });
  }

  ngOnInit(): void {
    this.getClientsList();
  }
  }