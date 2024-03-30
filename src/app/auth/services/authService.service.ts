import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(data: any) {
    let url = environment.apiUrl + '/register'
    console.log(url);

    console.log("User registered")
    return this.http.post(url, data)
  }
}
