import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrizePage } from './prize.page';

import { PrizeDetailPage } from './prize-detail/prize-detail.page'

const routes: Routes = [
  {
    path: '',
    component: PrizePage
  },
  { 
    path: 'prize-detail/:lottoid',
    component: PrizeDetailPage 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrizePage,PrizeDetailPage]
})
export class PrizePageModule {}
