import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() link: (string | number)[] = [''];
  @Input() type: 'primary' | 'secondary' | 'success'  | 'danger' = 'primary';
}
