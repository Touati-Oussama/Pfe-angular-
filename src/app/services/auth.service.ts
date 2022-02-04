import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { DirectionService } from './direction.service';
import { EnseignantService } from './enseignant.service';
import { EtudiantService } from './etudiant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit{

  public userPrenom: string;
  public userId: number;
  public loggedUser:string;
  public TelephoneUser: number;
  public isloggedIn: Boolean = false;
  public isAdminn: Boolean = false; isEtud : Boolean = false; isEng: Boolean = false;
  public roles:string;
  private users: any[] = [];
  private usersE: any[] = [];
  private usersEn: any[] = [];
  private usersD: any[] = [];

  constructor(private etudiantService: EtudiantService,
              private enseignantService: EnseignantService,
              private directionService: DirectionService,
              private router: Router) { 

                this.etudiantService.listeEtudiants().subscribe(etuds => {
                 this.usersE = etuds;
                 });
                 this.enseignantService.listeEnseignants().subscribe(ens => {
                  this.usersEn = ens;
                  });
                 this.directionService.listeDirections().subscribe(directs => {

                  this.usersD = directs;
                });

  }
  ngOnInit(): void {
    //this.users = this.usersD.concat(this.usersE);
  }

  
  SignIn(user :User):Boolean{
    this.users = (this.usersD.concat(this.usersE)).concat(this.usersEn);
    //console.log( this.users);
    let validUser: Boolean = false;
    //console.log(this.users);
    this.users.forEach((curUser) => {
      if(user.email === curUser.email && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.nom;
        //this.userId = curUser.id;
        this.TelephoneUser = curUser.telephone;
        this.userPrenom = curUser.prenom;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        this.isAdminn = this.isAdmin();
        this.isEtud = this.isEtudiant();
        this.isEng = this.isEnseignant();
        localStorage.setItem('userPrenom',this.userPrenom);
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
        localStorage.setItem('isAdminn',String(this.isAdminn));
        localStorage.setItem('isEtud',String(this.isEtud));
        localStorage.setItem('isEng',String(this.isEng));
      }
    });
    console.log(this.userId);
    if (this.isEnseignant()){
      console.log(this.usersEn);
      this.usersEn.forEach((curUser)=>{
        if(user.email === curUser.email && user.password==curUser.password){
          this.userId =  curUser.ncen;
        }
          
      })
    }
    else if (this.isEtudiant()){
      console.log(this.usersE);
      this.usersE.forEach((curUser)=>{
        if(user.email === curUser.email && user.password==curUser.password)
        {
          console.log("Entre id: " + curUser.id);
          this.userId =  curUser.id;
        }
          
      })
    }
    else if (this.isAdmin()){
      console.log(this.usersD);
      this.usersD.forEach((curUser)=>{
        if(user.email === curUser.email && user.password==curUser.password)
          this.userId =  curUser.ncdr;
      })
    }
    console.log(this.userId);
    localStorage.setItem('userId',String(this.userId));
    return validUser;
  }

  isEtudiant():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ETUDIANT') >-1) ;
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('DIRECTION') >-1) ;
  }

  isEnseignant():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ENSEIGNANT') >-1) ;
  }
  
  onLogout(){
    this.userPrenom = undefined;
    this.TelephoneUser = undefined;
    this.userId = undefined;
    this.loggedUser = undefined;
    this.isloggedIn = false;
    this.isAdminn = false;
    this.isEtud = false;
    this.isEng = false;
    this.roles = undefined;
    this.router.navigate(['/login']);
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('userPrenom');
    localStorage.removeItem('userId');
    localStorage.setItem('isAdminn',String(this.isAdminn));
    localStorage.setItem('isEtud',String(this.isEtud));
    localStorage.setItem('isEng',String(this.isEng));
    localStorage.setItem('isloggedIn',String(this.isloggedIn));


    
  }

  setLoggedUserFromLocalStorage(login : string, p: string, admin: boolean, etud: boolean, eng: boolean, id:number) {
    this.loggedUser = login;
    this.userPrenom = p;
    this.isloggedIn = true;
    this.isAdminn = admin;
    this.isEtud = etud;
    this.isEng = eng;
    this.userId = id;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){
    this.users.forEach((curUser) => {
      if( curUser.nom == username ) {
        this.roles = curUser.roles;
      }
    });
  }
}
