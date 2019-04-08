import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { ApInfo } from '../../models/appInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  LoginForm: FormGroup;
  usernameShow: Boolean = false;
  usernameInfo: string;
  passwordShow: Boolean = false;
  passwordInfo: string;
  password2Show: Boolean = false;
  password2Info: string;
  invite_codeShow: Boolean = false;
  invite_codeInfo: string;

  constructor(public fb: FormBuilder,public configSer: ConfigService) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]],
      invite_code: [null, [Validators.required]]
    });
  }

  // 注册
  goInvitation() {
    this.usernameShow = this.passwordShow = this.password2Show = this.invite_codeShow = false;
    if (!this.LoginForm.value.username){
      this.usernameInfo = '手机号码不能为空';
      this.usernameShow = true;
      return;
    } 
    if (!this.LoginForm.value.password) {
      this.passwordInfo = '密码不能为空';
      this.passwordShow = true;
      return;
    }
    if (!this.LoginForm.value.password2) {
      this.password2Info = '确认密码不能为空';
      this.password2Show = true;
      return;
    }
    if (this.LoginForm.value.password !== this.LoginForm.value.password2) {
      this.password2Info = '两次密码不一致';
      this.password2Show = true;
      return;
    }
    console.log(ApInfo.url.register)
    this.LoginForm.value['nickname'] = this.LoginForm.value.username;
    this.configSer.httpPost(ApInfo.url.register, this.LoginForm.value, (rs: any) => {
      console.log(rs)
    })
  }

}
