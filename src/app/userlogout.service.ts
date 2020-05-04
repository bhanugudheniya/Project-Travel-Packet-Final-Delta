import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Injectable({
  providedIn: 'root'
})
export class UserlogoutService {

  constructor(private user : UserregisterService, private router: Router) { }
  canActivate(){
    return this.user.getJwt() ? this.router.parseUrl('/userdashboard'):true;
  }
}

