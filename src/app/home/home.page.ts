import { Component } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cerbungs:any[] = [];
  genre = "Semua";
  sedangLogin = false;
  accountservice:AccountserviceService;

  constructor(private cerbungservice: CerbungserviceService, accountservice: AccountserviceService) {
    this.accountservice = accountservice
  }

  ngOnInit(){
    this.cerbungs = this.cerbungservice.cerbungs
  }

  ionViewDidEnter(){
    if(this.accountservice.sedangLogin == true){
      //disablebackbutton
    }
  }

  ionViewWillLeave(){
  }
}
