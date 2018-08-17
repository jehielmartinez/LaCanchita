import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { AuthenticationService } from './services/auth/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  loggedUser;
  // tslint:disable-next-line:max-line-length
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, private authService: AuthenticationService, private router: Router) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    this.authService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.loggedUser = result.email;
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
    });
  }
  Users = this.authService.getUsersData();


  logOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
