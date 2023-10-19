import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from 'src/app/cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bacacerbung',
  templateUrl: './bacacerbung.page.html',
  styleUrls: ['./bacacerbung.page.scss'],
})
export class BacacerbungPage implements OnInit {

  id = 0;
  cerbungs:any[] = []
  //cerbungsevice:CerbungserviceService;

  constructor(private route: ActivatedRoute, private cerbungservice:CerbungserviceService) { 
    //this.cerbungsevice = cerbungservice
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    })

    this.cerbungs = this.cerbungservice.cerbungs
  }

}
