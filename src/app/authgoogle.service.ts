import { Router } from '@angular/router';
import { inject, Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';


import { auth } from './auth.config'

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private outhService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
   }

  initConfiguration(){
    this.outhService.configure(auth);
    this.outhService.setupAutomaticSilentRefresh();
    this.outhService.loadDiscoveryDocumentAndTryLogin().then(() =>{
      if(this.outhService.hasValidAccessToken()){
        this.profile.set(this.outhService.getIdentityClaims());
      }
    })
  }

  login(){
    this.outhService.initImplicitFlow();
  }

  logout(){
    this.outhService.revokeTokenAndLogout();
    this.outhService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

  getLoggetProfile(){
    return this.profile();
  }
}
