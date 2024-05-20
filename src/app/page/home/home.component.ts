import { Component } from '@angular/core';
import { User } from "../../interface/user";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../service/user.service";
import { ButtonComponent } from "../../component/button/button.component";
import { LinkComponent } from "../../component/link/link.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    LinkComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public userList: User[] = [];
  public originalUserList: User[] = [];
  public searchControl = new FormControl('');

  constructor(
    private userService: UserService,
  ) {
    this.getUserList();

    this.searchControl.valueChanges.subscribe((val) => {
      const value = new RegExp(val || '', 'gi')
      this.userList = this.originalUserList.filter((user: User) =>
        user.name.match(value) ||
        user.email.match(value) ||
        user.company.name.match(value) ||
        user.address.street.match(value) ||
        user.address.city.match(value) ||
        user.address.zipcode.match(value)
      );
    })
  }

  public getUserList(): void {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
      this.originalUserList = users;
    })
  }
}
