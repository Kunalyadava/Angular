import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getdata(){
    return{
      name:"Kunal",
      age:"25",
      class:"Bsc",
      id:"10"

    }
  }
}
