import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: 'http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor(private http: HttpClient) { }
BaseUrl=environment.baseUrl

  PostService(url: '', payload: object = {}, token: boolean = false, httpsHeadersOptions: object = {}) {
    console.log(payload);
    return this.http.post(this.BaseUrl, payload, token && httpsHeadersOptions)

  }

  postService(url: string = '', payload: any = null, tokenRequired: boolean = false, httpOptions = null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.post(this.BaseUrl + url, payload, tokenRequired && httpOptions);
  }
  PutService() {

  }
  DeleteService() {

  }
  GetService() {

  }


}
