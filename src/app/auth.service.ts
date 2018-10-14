import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe((auth) => {
      this.user = auth;
      console.log(this.user)
    });
   }
  signup(email, pass) {
   return this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, pass)
  }
  login(email, pass) {
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, pass)
  }
  logout() {
   return this.firebaseAuth.auth.signOut()
  }
}
