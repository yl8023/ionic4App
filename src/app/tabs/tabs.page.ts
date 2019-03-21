import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  config: boolean;
  constructor (public configSer: ConfigService, public router: Router) {
    this.config = this.configSer.validationStatus();
    if(!this.config){
      this.router.navigate(['/login']);
    }
  }
}
