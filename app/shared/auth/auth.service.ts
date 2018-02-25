import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { LoginData, SigninData, MobileData } from "./auth";
import { Config } from "../config";
export * from "../config";
export * from "./auth";

@Injectable()
export class AuthService {
  constructor(private http: Http, private config: Config) { }
  mukin(auth: MobileData, catchError: Function) {
    return this.http.post(
      Config.apiUrl + "auth/mukin",
      JSON.stringify(auth),
      { headers: this.getCommonHeaders() }
    )
      .map(response => response.json())
      .do(data => this.config.setLDC(data)) 
      .catch((err, an) => catchError(err));
  }
  login(auth: LoginData, catchError: Function) { 
    return this.http.post(
      Config.apiUrl + "auth/login",
      JSON.stringify(auth),
      { headers: this.getCommonHeaders() }
    )
      .map(response => response.json())
      .do(data => this.config.setLDC(data))
      .catch((err, an) => catchError(err));
  }
  register(auth: SigninData, catchError: Function) {
    return this.http.post(
      Config.apiUrl + "auth/signin",
      JSON.stringify(auth),
      { headers: this.getCommonHeaders() }
    )
      .map(response => response.json())
      .do(data => this.config.setLDC(data))
      .catch((err, an) => catchError(err));
    // .catch(this.handleErrors);
  }


  handleErrors(error: Response) {
    console.log('error : catch');
    return 'server-error ';// Observable.throw(error);
  }


  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
