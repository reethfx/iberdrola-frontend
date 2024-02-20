import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
    selector: 'home-pricing',
    templateUrl: './pricing.component.html',
    standalone: true,
})
export class PricingComponent implements OnInit {
  
    constructor(public themeService: ThemeService) {}
  
    ngOnInit(): void {}
  
    toggleTheme() {
      this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
    }
  }