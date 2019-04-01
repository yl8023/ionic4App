import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Config } from '../../../config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  LoginForm: FormGroup;
  // LoginFormInfo: any = { username: '', password: '' };
  constructor(public localSer: LocalstorageService, public http: HttpClient, public fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  ngOnDestroy() {
  }
  goLogin() {
    // this.http.post(Config.baseurl + '/api/auth', this.LoginFormInfo).subscribe((rs: any) => {
    //   console.log(rs);
    // })
  }
  userBlur(val) {
    console.log(val)
  }

}
