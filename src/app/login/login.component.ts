import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private router: Router,private AuthService: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit() {
   
  }
  signup() {
    this.AuthService.signup(this.loginForm.value.email, this.loginForm.value.password)
      .then(()=>{
         console.log('exitoso')
        this.router.navigate(['Home']);
      }).catch((err)=>{
        this.snackBar.open('Error' + err
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          })
      })
      this.loginForm.reset()
  }

  login() {
    this.AuthService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
      console.log('exitoso')
        this.router.navigate(['home']);
    }).catch((err) => {
      this.snackBar.open('Error' + err
        , null/*No necesitamos botón en el aviso*/
        , {
          duration: 3000
        })
    })
    this.loginForm.reset()
  }
}
