import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, email: string) {
    return this.http.post<any>('http://localhost:3000/auth/login', { username, email })
         .pipe(map(rtn => {
            //  if (rtn && rtn.access_token) {
            if (rtn) {
                 // store user details and jwt token in local storage to keep user logged in between page refreshes
                 rtn.authdata = window.btoa(username + ":" + email);
                //  localStorage.setItem('loggedIn', JSON.stringify(rtn));
                //  localStorage.setItem('loggedIn', 'true');
                //  this.isLoggedIn$.next(true);
                //  this.setCookie(rtn.access_token);
                console.log("user", username, email)
                return rtn;
             }
             else {
                //  this.isLoginFailed = true;
                 {window.location.reload();}
             }
             return rtn;
         }));
 }
}
