import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
}
