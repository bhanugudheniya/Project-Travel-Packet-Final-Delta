import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminregisterService } from './adminregister.service';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private admin : AdminregisterService, private router:Router) { }
  canActivate(){
    return this.admin.getJwt()? true : this.router.parseUrl('/adminlogin');
  }
}
