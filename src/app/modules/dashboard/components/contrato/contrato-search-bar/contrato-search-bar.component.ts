import { Component } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'db-contrato-sb',
    templateUrl: './contrato-search-bar.component.html',
    standalone: true,
    imports: [FormsModule]
})

export class ContratoSearchBarComponent {
  dni: string = '';

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.searchDefault();
  }

  searchDefault() {
    const defaultDni = '1';
    this.dataSharingService.sendDni(defaultDni);
    console.log('Buscar DNI:', defaultDni);
  }

  search() {
    const dniToSearch = this.dni.trim() !== '' ? this.dni : '1';

    this.dataSharingService.sendDni(dniToSearch);
    console.log('Buscar DNI:', dniToSearch);
  }
}