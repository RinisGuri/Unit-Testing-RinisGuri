import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
})
export class MyComponentComponent {

  public title = 'TITLE';

  public getMyCity(city: string) {

    if (city === 'Prizren') {
      return true;
    } else {
      return  false;
    }

  }

}
