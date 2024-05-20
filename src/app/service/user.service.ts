import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../util/constant";
import { User } from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${API_URL}users`);
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${API_URL}users`, user);
  }
}
