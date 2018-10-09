import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = null;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private router: Router,private firebaseAuth: AngularFireAuth, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firebaseAuth.authState.subscribe((auth) => {
      this.user = auth;
      console.log(this.user)
    });
  }
  signup() {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(()=>{
         console.log('exitoso')
        this.router.navigate(['TakeOrder']);
      }).catch(()=>{
        this.snackBar.open('Error de registro, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          })
      })
      this.loginForm.reset()
  }

  login() {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
      console.log('exitoso')
        this.router.navigate(['TakeOrder']);
    }).catch(() => {
      this.snackBar.open('Error de registro, trata otra vez'
        , null/*No necesitamos botón en el aviso*/
        , {
          duration: 3000
        })
    })
    this.loginForm.reset()
  }

  logout() {
    this.firebaseAuth.auth.signOut()
    this.router.navigate(['login']);
  }

}
