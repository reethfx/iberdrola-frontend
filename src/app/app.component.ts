import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertService } from './shared/components/alerts/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgClass, 
    RouterOutlet, 
    ResponsiveHelperComponent, 
    HttpClientModule, 
    FormsModule,    ],
})

export class AppComponent {

  successMessage: string = '';
  errorMessage: string = '';

  title = 'Proyecto Iberdrola';

  constructor(public themeService: ThemeService, public alertService: AlertService) {}
}
