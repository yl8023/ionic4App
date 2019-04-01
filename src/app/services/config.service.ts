import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    login_status: boolean;
  constructor(public localSer: LocalstorageService,
    public config: ConfigModel,
    public http: HttpClient) { }
  validationStatus() {
    let login = this.localSer.getLocal('login_status') || false;
    this.login_status = login;
    return this.login_status;
  }
  getData() {
    // this.http.get()
  }
}
