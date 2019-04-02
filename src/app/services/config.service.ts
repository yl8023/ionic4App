import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config/config';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ApInfo } from '../models/appInfo';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(
    public localSer: LocalstorageService,
    public http: HttpClient,
    public loading: LoadingController,
    public toast: ToastController,
    public alert: AlertController,
    public router: Router
  ) { }
  validationStatus() {
    let user = this.localSer.getLocal(ApInfo.localInfo.userInfo)
    let login_status = user ? user.login_status : false
    return login_status;
  }
  mk_url(info: Array<object>) {
    let parameter: string = '?';
    info.forEach((val, key) => {
      for (let k in val) {
        let str = k + '=' + val[k]
        if (key > 0) {
          str = '&' + str
        }
        parameter += str
      }
    });
    return parameter
  }

  httpGet(url: string, info: Array<object>, fun: any) {//get 请求  fun为回调函数 参数格式为数组对象[{}..]
    let par = this.mk_url(info)
    this.http.get(Config.baseurl + url + par).subscribe((rs: any) => {
      // console.log(rs)
      fun(rs);
    })
  }
  httpPost(url: string, par: object, fun: any) {//post 请求  fun为回调函数 参数格式为对象 {}

    this.http.post(Config.baseurl + url, par).subscribe((rs: any) => {

      fun(rs);
    })
  }

  async loadingFun(str: string) {//加载中..
    const loading = await this.loading.create({
      spinner: null,
      // duration: 150000,
      message: str,
      translucent: true,
      cssClass: ['custom-class', 'custom-loading']
    });
    loading.present()
    // return loading;
  }
  async preToast(str: string) {// toast提示消息，2秒
    const toast = await this.toast.create({
      message: str,
      duration: 2500
    });
    toast.present();
  }
  async preToastOp(str: string, direction: any = 'top', second: number = 2000, showBtn: boolean = true) {// toast提示消息，可关闭
    const toast = await this.toast.create({
      message: str,
      showCloseButton: true,
      position: direction,
      duration: second,
      closeButtonText: '关闭'
    });
    toast.present();
  }
  async preAlert(head: string, msg: string, confirmFn?: any, cancelFn?: any) {// alert确认框，可关闭
    let _this = this;
    const alert = await this.alert.create({
      header: head,
      message: msg,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
            confirmFn(_this)
          }
        }
      ]
    });
    await alert.present();
  }
}
