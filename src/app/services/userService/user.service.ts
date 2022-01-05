import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  loginuser(reqPayload){
    console.log(reqPayload);
    let httpsOpetions={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
  //  return this.httpService.PostService('',reqPayload,false,httpsOpetions)
    

  }

  loginUser(reqdata) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };
    return this.httpService.postService('user/login', reqdata, false, httpAuthOptions)

  }
  registertaion(reqData){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };
    return this.httpService.postService('user/userSignUp', reqData, false, httpAuthOptions)

  }
}
