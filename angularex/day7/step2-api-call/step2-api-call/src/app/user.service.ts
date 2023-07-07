import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{    
    constructor( private http:HttpClient ){
        // empty
    }
    getUserData(){
        return this.http.get("https://reqres.in/api/users?page=2")
    }
}