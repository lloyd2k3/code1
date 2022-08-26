import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

login(uname: string, pword: string) {
  if (uname === 'suren' && pword === '1234') {
    return 200;
  } else {
    return 403;
  }
}}

