import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private successAlertSubject = new BehaviorSubject<string | null>(null);
  successAlert$ = this.successAlertSubject.asObservable();

  private errorAlertSubject = new BehaviorSubject<string | null>(null);
  errorAlert$ = this.errorAlertSubject.asObservable();

  showSuccess(message: string) {
    this.successAlertSubject.next(message);
  }

  showError(message: string) {
    this.errorAlertSubject.next(message);
  }
}
