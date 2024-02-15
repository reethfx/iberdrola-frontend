import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';  

@Component({
  selector: 'app-error-message',
  templateUrl: './error.component.html',
  standalone: true,
  imports: [NgIf],
})
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null;

  clearErrorMessage() {
    this.errorMessage = null;
  }
}
