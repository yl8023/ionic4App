import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { HttpClient } from '@angular/common/http';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Config } from '../../../config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  // public LoginForm: FormGroup;
  LoginFormInfo: any = { username: '', password: '' };
  constructor(public localSer: LocalstorageService, public http: HttpClient) { }

  ngOnInit() {

  }
  ngOnDestroy() {
  }
  goLogin() {
    this.http.post(Config.baseurl + '/api/auth', this.LoginFormInfo).subscribe((rs: any) => {
      console.log(rs);
    })
  }
  userBlur(val) {
    console.log(val)
    // ^\w+$
  }

}
