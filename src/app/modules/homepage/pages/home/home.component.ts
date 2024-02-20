import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'home-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [RouterLink],
})
export class HomeComponent implements OnInit {
  
    constructor(public themeService: ThemeService) {}
  
    ngOnInit(): void {}
  
    toggleTheme() {
      this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
    }
  }