import { Injectable } from '@angular/core';
import { CanDisable } from '@angular/material/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate, CanDeactivate<any> {
  constructor(private userService: UserService,
              private router: Router){
  }
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("can desactivate");
    return this.userService.isConnected();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.userService.isConnected()){
      this.router.navigate(["register"]) 
      return false;
    }
    return true;
  }

  
}
