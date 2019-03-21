import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,OnDestroy {

  constructor(public localSer: LocalstorageService) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.localSer.setLocal('login_status',true)
  }
}
