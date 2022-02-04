import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './Models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
 constructor(public authService: AuthService,
  private router: Router){}
  user: any;
  ngOnInit () {
    this.user = localStorage.getItem('userId');
    console.log(this.user);
    let isloggedin: string;
    let loggedUser:string;
    let userPrenom:string;
    let isAdminn,isEtud,isEng:boolean;
    let userId: String;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    userPrenom = localStorage.getItem('userPrenom');
    userId = localStorage.getItem('userId');
    isAdminn =   JSON.parse(localStorage.getItem('isAdminn'));
    isEtud =  JSON.parse(localStorage.getItem('isEtud'));
    isEng =  JSON.parse(localStorage.getItem('isEng'));
    if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser,userPrenom,isAdminn,isEtud,isEng,Number(userId));
    }
onLogout(){
  this.authService.onLogout();
}
}


