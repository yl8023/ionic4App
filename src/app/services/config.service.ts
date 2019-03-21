import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
// import { ConfigModel } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    login_status: boolean;
  constructor(public localSer: LocalstorageService) { }

  validationStatus() {
    let login = this.localSer.getLocal('login_status') || false;
    this.login_status = login;
    return this.login_status;
  }
}
