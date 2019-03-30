import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Config } from '../../../config/config'

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
    
  }
}
