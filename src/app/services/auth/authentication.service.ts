import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth, private angularFireStore: AngularFirestore) {
    this.isLogged();
  }
  usersRef = this.angularFireStore.collection('Users');


  public signup(user) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        console.log('User registred');
        this.uploadUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private uploadUser(user) {
    this.usersRef.doc(user.createdAt).set({
      name: user.name,
      age: user.age,
      type: user.type,
      email: user.email,
      createdAt: user.createdAt
    })
      .then(function () {
        console.log('User succesfully stored on DB');
      })
      .catch(function (error) {
        console.error('Error Creating User: ', error);
      });
  }

  public signin(user) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        console.log('User Logged in');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public getCurrentUser() {
    return this.angularFireAuth.auth;
  }
  public isLogged() {
    return this.angularFireAuth.authState;
  }
  public logOut() {
    this.angularFireAuth.auth.signOut();
  }
  public getUserData(email) {
    // const currentEmail = this.getCurrentUser().currentUser.email;
    let currentUser = null;
    this.usersRef.ref.where('email', '==', email).get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          currentUser = doc.data();
          console.log(currentUser);
          return currentUser;
        });
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  }
}
