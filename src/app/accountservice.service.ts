import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  sedangLogin = false;

  currentLoginUsername: string = '';
  //currentPassword: string = '';
  currentLoginName: string = '';
  currentImage: string = ''

  accounts: any[] = [
    {
      username: "naufal",
      name: "Naufal Muflih",
      password: "1sampai8",
      image: "https://media.tenor.com/FctZm-chbtwAAAAi/pom-pom-honkai-star-rail.gif"
    },
    {
      username: "faiz",
      name: "Faiz Abid",
      password: "1sampai8",
      image: "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
    }
  ]

  constructor() { }

  checkLogin(username: string, password: string) : boolean {
    var berhasil = false;

    for (let account of this.accounts) {
      if (username == account.username && password == account.password) {
        this.sedangLogin = true;
        this.currentLoginName = account.name;
        this.currentImage = account.image
        berhasil = true;        
        break
      }
    }

    return berhasil;
  }
}
