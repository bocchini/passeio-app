import { Router } from '@angular/router';
import { Profile } from './Profile';
import { Component } from '@angular/core';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(private router: Router, private loginService: AuthgoogleService){}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
    this.loginService.login()
  }

  isLoggedIn():boolean{
    this.profile = this.loginService.getLoggetProfile();
    console.log(this.profile);
    return !!this.profile;
  }

}
