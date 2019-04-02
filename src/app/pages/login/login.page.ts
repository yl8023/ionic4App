import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
// import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Http } from '../../models/http';
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  constructor(public localSer: LocalstorageService, public fb: FormBuilder, public configSer: ConfigService) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  goLogin() {//登录
    for (const i in this.LoginForm.controls) {//登录前验证
      this.LoginForm.controls[i].markAsDirty();
      this.LoginForm.controls[i].updateValueAndValidity();
    }
    if(this.LoginForm.valid) {
      this.configSer.httpPost(Http.url.login,this.LoginForm.value, (rs =>{//请求接口并通过回调函数返回数据
          console.log(rs)
        })
      )
    }
  }

}
