import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../../../models/cliente";

@Injectable({
    providedIn: 'any'
})
export class ClientService {

    baseUrl: string = "http://localhost:8080/clients";

    constructor(private httpClient: HttpClient) { }

    getClients(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(this.baseUrl);
    }

    saveClient(cliente: Cliente): Observable<Cliente> {
        var url = this.baseUrl + "/add";
        return this.httpClient.post<Cliente>(url, cliente);
    }


    getClient(dni: any): Observable<Cliente> {
        var url = this.baseUrl+"/"+dni;
        return this.httpClient.get<Cliente>(url);
    }

    updateClient(cliente: Cliente): Observable<Cliente> {
        var url = `${this.baseUrl}/${cliente.dni}`;
        return this.httpClient.put<Cliente>(url, cliente);
    }

    deleteClient(dni: any) {       
        var url = this.baseUrl+"/delete/"+dni;
        return this.httpClient.delete(url);
    }
}
