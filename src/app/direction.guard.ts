import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)    
    {
      /*
      if (this.authService.isAdmin())
      return true;
      else
      {
        this.router.navigate(['forbidden']);
        return false;
      }*/
      let isAdminn =   JSON.parse(localStorage.getItem('isAdminn'));
      
      if (isAdminn)
        return true;
      else{
        this.router.navigate(['forbidden']);
        return false;
      }
    }
}
  

