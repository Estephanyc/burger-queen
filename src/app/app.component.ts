import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-queen';
  constructor(private authService: AuthService){
    console.log(this.authService.user)
  }
  logout() {
    this.authService.logout().then(() => {
    })
  }
}
