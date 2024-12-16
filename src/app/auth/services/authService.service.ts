import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { LoginRequestInterface } from '../types/LoginRequest.interface';
import { RegisterRequestInterface } from '../types/RegisterRequest.interface';
import { AuthResponseInterface } from '../types/AuthResponse.interface';
import { currentUserInterface } from '../../shared/types/CurrentUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<currentUserInterface> {
    let url = environment.apiUrl + '/register'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.data))
  }

  login(data: LoginRequestInterface) {
    let url = environment.apiUrl + '/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.data))
  }
}
