import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { authGuard } from './services/auth.guard.service';

const appRoutes: Routes = [
  {path: 'appareil', component: AppareilViewComponent}, // canActivate: [authGuard],
  {path: 'appareil/:id', component: SingleAppareilComponent}, //  canActivate: [authGuard],
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent}, // canActivate: [authGuard],
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: "/not-found"},
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    authGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
