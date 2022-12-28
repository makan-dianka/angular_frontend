import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean = false
  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  btnLogIn(){
    this.authService.login()
    .then(
      () => {
        console.log("Connexion réussie!")
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareil'])
      }
    )
  }

  btnLogOut(){
    this.authService.logOut()
    console.log("Déconnexion reussi!")
    this.authStatus = this.authService.isAuth;
  }
}
