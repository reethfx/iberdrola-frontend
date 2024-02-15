import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    standalone: true,
    imports: [RouterOutlet, MatTabsModule],
})
export class ConfigComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
}
