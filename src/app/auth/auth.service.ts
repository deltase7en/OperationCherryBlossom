import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { AuthDataLogin } from './auth-data-login.model';

@Injectable({
    providedIn: "root"
})
export class AuthService{
    constructor(private http: HttpClient){}

    createUser(name: string, email: string, password: string){
        const authData: AuthData = {name: name, email: email, password: password}
        this.http.post("http://localhost:3000/api/user/signup", authData).subscribe(response =>{
            console.log(response);
        })
    }

    login(email: string, password: string){
        const authData: AuthDataLogin = {email: email, password: password}
        this.http.post("http://localhost:3000/api/user/login", authData).subscribe(response => {
            console.log(response);
        })
    }
}