import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  public login(uname: string, pword: string) {
    if (uname === 'suren' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }
  public logout() {
    this.router.navigate(['login'])
  }
}
