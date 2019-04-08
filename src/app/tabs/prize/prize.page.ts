import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ApInfo } from '../../models/appInfo';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.page.html',
  styleUrls: ['./prize.page.scss'],
})
export class PrizePage implements OnInit {
  get_info: any;
  openList: any;
  constructor(public configSer: ConfigService) { }

  ngOnInit() {
    let userInfo = this.configSer.localSer.getLocal(ApInfo.localInfo.userInfo);
    if(userInfo) this.get_info = [{api_token: userInfo.token},{count:10}];
    this.getOpenList();
  }

  getOpenList() {
    let openLoad = this.configSer.loadingFun('开奖信息加载..')
    this.configSer.httpGet(ApInfo.url.allOpenList,this.get_info,(rs: any)=>{
      openLoad.then((re)=>{
        re.dismiss();
      })
      this.openList = rs.data
    })
  }
}
