import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputUsername: string = '';
  inputPassword: string = '';

  username: string = '';
  //password: string = '';
  name: string = '';

  sedangLogin = false;
  warningMessage = "Username atau Password tidak sesuai!"
  public alertButtons = ["Tutup"]

  constructor(private router: Router, private accountservice: AccountserviceService) { }


  ngOnInit() {
  }

  login(){
    var berhasil = false;
    if(this.accountservice.checkLogin(this.inputUsername, this.inputPassword)){
      this.sedangLogin = this.accountservice.sedangLogin;
      this.name = this.accountservice.currentLoginName;
      this.username = this.accountservice.currentLoginUsername;
      this.router.navigate(['/home'])
    }

    return berhasil
  }
}
