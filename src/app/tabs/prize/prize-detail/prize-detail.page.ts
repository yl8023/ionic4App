import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ApInfo } from '../../../models/appInfo';

@Component({
  selector: 'app-prize-detail',
  templateUrl: './prize-detail.page.html',
  styleUrls: ['./prize-detail.page.scss'],
})
export class PrizeDetailPage implements OnInit {
  lottoId: string;
  codeList: any;
  title: string;
  constructor(private router: ActivatedRoute,private localSer: LocalstorageService) { }

  ngOnInit() {
    this.lottoId = this.router.snapshot.paramMap.get('lottoid')
    this.getCodeList()
  }
  getCodeList() {
    let list = this.localSer.getLocal(ApInfo.localInfo.lottoCodeList)
    list.forEach(val => {
      if(val.lotteryid === this.lottoId){
        this.codeList = val
        this.title = val.lotteryname
      }
    });
  }

}
