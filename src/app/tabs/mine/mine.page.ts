import { Component, OnInit } from '@angular/core';
// import { ApInfo } from '../../models/appInfo';
// import { LocalstorageService } from '../../services/localstorage.service';
import { ConfigService } from '../../services/config.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

  constructor(
    public configSer: ConfigService
    ) { }

  ngOnInit() {
    
  }
  outLogin() {
    this.configSer.preAlert('不要走！', '您确认要退出当前账号嘛？', this.configOut)
    
  }
  configOut(t: any) {
    t.localSer.removeAll();
    t.router.navigate(['/login']);
  }
}
