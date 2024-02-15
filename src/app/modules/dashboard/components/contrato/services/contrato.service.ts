import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Contrato } from "../../../models/contrato";
import { Cliente } from "../../../models/cliente";
import { AlertService } from "../../../../../shared/components/alerts/services/alert.service";
import { Contador } from "../../../models/contador";


@Injectable({
    providedIn: 'any'
})
export class ContratoService {
    urlClients: string  = "http://localhost:8080/clients"
    baseUrl: string = "http://localhost:8080/contracts";

    constructor(private httpClient: HttpClient, private alertService: AlertService) { }
    
    getContractsByDni(dni: string): Observable<Contrato[]> {
        const url = `${this.baseUrl}/client/${dni}`;
        return this.httpClient.get<Contrato[]>(url).pipe(
          catchError(error => {
            this.alertService.showError('No se encontraron contratos para el DNI proporcionado.');
            return throwError(error);
          })
        );
      }

    getContracts(): Observable<Contrato[]> {
        return this.httpClient.get<Contrato[]>(this.baseUrl);
    }

    getContadores(): Observable<Contador[]> {
        const url = "http://localhost:8080/counters";
        return this.httpClient.get<Contador[]>(url);
    }

    getClients(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(this.urlClients);
    }
    
    getClient(dni: any): Observable<Cliente> {
        var url = this.urlClients+"/"+dni;
        return this.httpClient.get<Cliente>(url);
    }

    saveContract(contrato: Contrato): Observable<Contrato> {
        var url = this.baseUrl + "/add";
        return this.httpClient.post<Contrato>(url, contrato);
    }

    getContract(id: any): Observable<Contrato> {
        var url = this.baseUrl+"/"+id;
        return this.httpClient.get<Contrato>(url);
    }

    updateContract(contrato: Contrato): Observable<Contrato> {
        var url = `${this.baseUrl}/${contrato.id}`;
        return this.httpClient.put<Contrato>(url, contrato);
    }

    deleteContract(id: any) {       
        var url = this.baseUrl+"/delete/"+id;
        return this.httpClient.delete(url);
    }
}
