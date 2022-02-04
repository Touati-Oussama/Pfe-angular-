import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { AuthService } from '../services/auth.service';
import { DemandeInscriptionService } from './../services/demande-inscription.service';
import { DemandeEnseignantService } from './../services/demande-enseignant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur = 0;
  user: User = new User();
  submitted = false;
  loading = false;
  usersE: any[];
  usersEn: any[];
  users: any[] = [];
  error = '';
  constructor(private authService:AuthService, private router:Router,
    private demandeEnseignantService: DemandeEnseignantService,
    private demandeEtudiant: DemandeInscriptionService) {
      this.demandeEtudiant.listeEtudiants().subscribe(etuds => {
        this.usersE = etuds;
        });
        this.demandeEnseignantService.listeEnseignants().subscribe(ens => {
         this.usersEn = ens;
         });
     }

  ngOnInit(): void {
  }
  get f() { return this.UserData.controls; }
  UserData = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  )
  onLoggedin(){

    this.submitted = true;
    this.loading = true;
    //console.log('entre');

    this.user.email = this.UserData.value['email'];
    this.user.password = this.UserData.value['password'];
    this.users = this.usersE.concat(this.usersEn);
    console.log(this.users);
    const isUserExists = this.users.some(({ email }) => email === this.user.email);
    if (isUserExists){
      this.error = " Votre demande est en cours de traitement !";
    }
    else {
      let isValidUser: Boolean = this.authService.SignIn(this.user);
      console.log(this.authService.roles);
      //console.log("this id: " + this.authService.userId);
      if (isValidUser){
        console.log("ok");
        if(this.authService.roles.indexOf('DIRECTION') > -1)
          this.router.navigate(['/listeDeEtud']);
        else if (this.authService.roles.indexOf('ETUDIANT') > -1){
          this.router.navigate(['/demandeStage']);
          console.log("ja33");
  
        }
          
          else if (this.authService.roles.indexOf('ENSEIGNANT') > -1)
          this.router.navigate(['/listeEncadrementEn']);
      }
      else
        this.erreur = 1;
  
        if (this.UserData.invalid){
          return;
        }
    }

  }
  filte(e){
    this.loading = false;
  }

}
