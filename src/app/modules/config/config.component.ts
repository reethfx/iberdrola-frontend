import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    standalone: true,
    imports: [RouterOutlet, MatTabsModule, ProfileComponent, UserComponent],
})
export class ConfigComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
}
