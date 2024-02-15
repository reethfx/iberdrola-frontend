import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class DataSharingService {
  private dniSource = new Subject<string>();
  dni$ = this.dniSource.asObservable();

  private contratoSource = new Subject<any>();
  contrato$ = this.contratoSource.asObservable();

  private currentDniSource = new Subject<string>();
  currentDni$ = this.currentDniSource.asObservable();

  sendDni(dni: string) {
    this.dniSource.next(dni);
    this.currentDniSource.next(dni);
  }

  sendContrato(contrato: any) {
    this.contratoSource.next(contrato);
  }
}
