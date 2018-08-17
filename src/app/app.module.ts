import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


// AngularFire2 imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NewComplexScreenComponent } from './new-complex-screen/new-complex-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { CardsComponent } from './cards/cards.component';
import { AuthenticationService } from './services/auth/authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './services/database/database.service';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';



const appRoutes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'login', component: SigninScreenComponent },
  { path: 'signup', component: SignupScreenComponent },
  { path: 'newcomplex', component: NewComplexScreenComponent },
  { path: 'cards', component: CardsComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NewComplexScreenComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'LaCanchita'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialFileInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [AuthenticationService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
