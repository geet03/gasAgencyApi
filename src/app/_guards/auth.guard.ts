import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { AuthenticateService } from '../_services/index';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router){}    //, private authenticateService: AuthenticateService

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
  	console.log('inside the guard......');
  	if(localStorage.getItem('currentUser')){
  		return true;
  	}

  	console.log('inside the guard');
  	this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
