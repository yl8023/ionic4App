import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
// import { HttpClient } from '@angular/common/http';
// import { observable } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.page.html',
  styleUrls: ['./trend.page.scss'],
})
export class TrendPage implements OnInit {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'text/plain'
  //   })
  // };

  //  public http: HttpClient
  constructor(public configSer: ConfigService) { }

  ngOnInit() {

  }

  // getlist() {
  //   this.http.post('http://127.0.0.1:7777/getlotto', {
  //     lottoId: 'sd115',
  //     pageCount: 1,
  //     pageSize: 20
  //   }
  //   ).subscribe((res => {
  //     console.log(res)
  //   }))
  // }
}
