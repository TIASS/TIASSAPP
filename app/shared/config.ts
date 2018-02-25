import { Injectable } from "@angular/core";
import { LoginDataClient } from "./auth/auth";
@Injectable()
export class Config {
  static apiUrl = "http://10.0.3.2:8080/TiassControllers/tiasss/";
  private static _LCD: LoginDataClient = undefined;

  public setLDC(data: any) {
    if (data && data.success && data.tiassResults)
      this.LCD = data.tiassResults;
  }
  public set LCD(data: LoginDataClient) {

    Config._LCD = data
  }
  public get LCD(): LoginDataClient {

    return Config._LCD;
  }
} 