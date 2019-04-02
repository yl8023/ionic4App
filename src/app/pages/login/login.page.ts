import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ApInfo } from '../../models/appInfo';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  constructor(
    public localSer: LocalstorageService,
    public fb: FormBuilder,
    public configSer: ConfigService,
    public router: Router
    ) { }

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
      this.configSer.loadingFun('登录中..')
      this.configSer.httpPost(ApInfo.url.login,this.LoginForm.value, (rs: any) =>{//请求接口并通过回调函数返回数据
          console.log(rs)
          let status: object = {login_status:true}
          this.localSer.setLocal(ApInfo.localInfo.userInfo,Object.assign(rs.data, status))
          this.configSer.loading.dismiss()
          this.router.navigate(['']);
          this.configSer.preToastOp(rs.error)
        }
      )
    }
  }
  

}
