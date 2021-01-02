import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(public angularFireAuth: AngularFireAuth) { }

  async googleSigning() {
    this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  async login(email: string, password: string) {
    await this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
     
          localStorage.setItem('user', JSON.stringify(response.user))
      }
        );
  }

  async signup(email: string, password: string) {
    await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          localStorage.setItem('user', JSON.stringify(response.user))
      }
        );
  }

  logout() {
    this.angularFireAuth.signOut();
    localStorage.removeItem('user');
  }

  isSignedIn(){
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false
    }
  }

}
