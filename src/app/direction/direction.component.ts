import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

 
  idSFE :any;
  sujet: any;
  constructor(public authService: AuthService,/*private SfeService: SfeService,*/
    private router: Router){}

    ngOnInit () {
      let isloggedin: string;
      let loggedUser:string;
      let userPrenom,userId:string;
      let isAdminn,isEtud,isEng:boolean;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      userPrenom = localStorage.getItem('userPrenom');
      isAdminn =   JSON.parse(localStorage.getItem('isAdminn'));
      isEtud =  JSON.parse(localStorage.getItem('isEtud'));
      isEng =  JSON.parse(localStorage.getItem('isEng'));
      userId = localStorage.getItem('userId');
      if (isloggedin!="true" || !loggedUser)
        this.router.navigate(['/login']);
      else
        this.authService.setLoggedUserFromLocalStorage(loggedUser,userPrenom,isAdminn,isEtud,isEng,Number(userId));
      /*this.SfeService.getAllSfeByEtud(Number(userId)).subscribe(res=>{
        console.log(res);
        if(res != undefined){
          this.idSFE = res.id;
          this.sujet = res.sujet;
        }
        else{
          this.idSFE = undefined;
          this.sujet = undefined;
        }
          
      })*/
      }
  onLogout(){
    this.authService.onLogout();
  }

}