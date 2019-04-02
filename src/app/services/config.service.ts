import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config/config';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    login_status: boolean;
  constructor(
    public localSer: LocalstorageService,
    public http: HttpClient,
    public loading: LoadingController
    ) { }
  validationStatus() {
    let login = this.localSer.getLocal('login_status') || false;
    this.login_status = login;
    return this.login_status;
  }
  mk_url(info: Array<object>) {
    let parameter: string = '?';
    info.forEach((val, key) => {
      for( let k in val) {
        let str = k+'='+val[k]
        if(key > 0) {
          str = '&' + str
        }
        parameter+=str
      }
    });
    return parameter
  }

  async loadingFun(str: string) {
      const loading = await this.loading.create({
        spinner: null,
        // duration: 150000,
        message:str,
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      loading.present()
      return loading;
  }

  httpGet(url: string, info: Array<object>, fun: any) {//get 请求  fun为回调函数 参数格式为数组对象[{}..]
    let par = this.mk_url(info)
    this.http.get(Config.baseurl + url + par).subscribe((rs: any) => {
      // console.log(rs)
      fun(rs);
    })
  }
  httpPost(url: string, par: object, fun: any) {//post 请求  fun为回调函数 参数格式为对象 {}
    let load = this.loadingFun('登录中..')
    this.http.post(Config.baseurl + url, par).subscribe((rs: any) => {
      this.loading.dismiss()
      fun(rs);
    })
  }
}
