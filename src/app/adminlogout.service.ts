import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AdminregisterService } from './adminregister.service';

@Injectable({
  providedIn: 'root'
})
export class AdminlogoutService {

  constructor(private admin : AdminregisterService, private router:Router) { }
  canActivate(){
    return this.admin.getJwt() ? this.router.parseUrl('/admindashboard'):true;
  }
}
