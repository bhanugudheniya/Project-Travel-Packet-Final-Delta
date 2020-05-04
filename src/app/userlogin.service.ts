import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private user : UserregisterService, private router:Router) { }
  canActivate(){
    return this.user.getJwt()? true : this.router.parseUrl('/login');
  }
}
