import { Component, OnInit, ViewChild } from '@angular/core';
import { ApInfo } from '../../models/appInfo';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';
// import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  images: Array<string>;
  lotteries: any;
  token_info: Array<Object>;
  quickLink = [
    { url: '../assets/imgs/home/button-rujin-bg.png', text: '充值' },
    { url: '../assets/imgs/home/button-tixian-bg.png', text: '提现' },
    { url: '../assets/imgs/home/button-huodong-bg.png', text: '活动' },
    { url: '../assets/imgs/home/button-kefu-bg.png', text: '客服' }
  ];
  gameicon = {
    "dfmmc": "assets/icon/mmc.png",
    "dfffc": "assets/icon/ticaiduojin.png",
    "txffc": "assets/icon/txffc.png",
    "df3d": "assets/icon/fc3d.png",
    "cqssc": "assets/icon/cqssc.png",
    "jxssc": "assets/imgs/home/game-logo/logo-ssc.png",
    "xjssc": "assets/icon/xjssc.png",
    "dfssc": "assets/imgs/home/game-logo/logo-3fc.png",
    "tjssc": "assets/imgs/home/game-logo/logo-ssc.png",
    "hljssc": "assets/imgs/home/game-logo/logo-ssc.png",
    "sd115": "assets/icon/duojin.png",
    "gd115": "assets/icon/gd11.png",
    "sh115": "assets/icon/sh11.png",
    "jx115": "assets/icon/jx11.png",
    "sx115": "assets/icon/sx11.png",
    "df115": "assets/icon/hy11.png",
    "fc3d": "assets/icon/fc3d.png",
    "p3p5": "assets/icon/pl355.png",
    "shssl": "assets/imgs/home/game-logo/logo-ffc.png",
    "jskl3": "assets/icon/k3.png",
    "ahkl3": "assets/imgs/home/game-logo/logo-k3.png",
    "pk10": "assets/icon/bj10.png",
    "dfpk10": "assets/icon/dn10.png",
    "dnpk10": "assets/icon/dn10.png",
    "hgssc": "assets/icon/1.5fc.png",
    "jspk10": "assets/icon/jspk10.png",  //极速赛车logo
    "xyft": "assets/icon/xyft.png",  //幸运飞艇logo
    "hn5fc": "assets/icon/hn5f.png",  //河内5分logo
    "df30": "assets/imgs/home/game-logo/logo-ssc.png",
    "df28": "assets/imgs/home/game-logo/logo-ssc.png",
    "cq115": "assets/imgs/home/game-logo/logo-11n5.png"
  };
  slideOpts = { // 轮播图配置
    flipEffect: {
      rotate: 30,
      slideShadows: false,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 600
  };
  constructor(
    public configSer: ConfigService,
    public router: Router) { }

  ngOnInit() {
    let userInfo = this.configSer.localSer.getLocal(ApInfo.localInfo.userInfo);
    if (userInfo) {
      this.token_info = [{ api_token: userInfo.token }];
      this.getSlidersImage();
      this.getlottoers();
    };
  }
  doRefresh(event) {
    this.getlottoers(event.target)
  }
  getSlidersImage() {
    this.images = this.configSer.localSer.getLocal(ApInfo.localInfo.images)
    if (!this.images) {
      this.configSer.httpGet(ApInfo.url.banner, this.token_info, (rs: any) => {
        this.images = rs.data;
        this.configSer.localSer.setLocal(ApInfo.localInfo.images, this.images)
      });
    }
  }

  getlottoers(s?) {
    this.lotteries = this.configSer.localSer.getLocal(ApInfo.localInfo.lottoers)
    // if(!this.lotteries){
    if (s) {
      this.configSer.httpGet(ApInfo.url.lotteries, this.token_info, (rs: any) => {
        s.complete();
        this.lotteries = this.objToArray(rs.data);
        this.configSer.localSer.setLocal(ApInfo.localInfo.lottoers, this.lotteries)
      })
    } else {
      let load = this.configSer.loadingFun('获取数据中..');
      this.configSer.httpGet(ApInfo.url.lotteries, this.token_info, (rs: any) => {
        load.then((re) => {
          re.dismiss()
        });
        this.lotteries = this.objToArray(rs.data);
        this.configSer.localSer.setLocal(ApInfo.localInfo.lottoers, this.lotteries)
      });
    }

    // }
  }

  objToArray(Obj: object) {
    let lottoers = this.configSer.getLotto();
    let list: Array<any> = [];
    for (const ob in Obj) {
      let lotto: any;
      Obj[ob].productName = ob;
      Obj[ob].icon = this.gameicon[ob];
      if (lottoers[ob] && Obj[ob]) {
        Object.assign(lottoers[ob], Obj[ob]);
        lotto = lottoers[ob];
      }
      if (ob !== 'hkffc') list.push(lotto)
    }
    return list;
  }
}
