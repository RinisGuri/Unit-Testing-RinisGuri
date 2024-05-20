import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Tab} from "./interface/tab";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  tabList: Tab[] = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
  ]
}
