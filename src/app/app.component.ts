import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Date();
  appareils: any;
  constructor(private AppareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  turnOn(){
    this.AppareilService.OnTarget()
  }
  turnOff(){
    this.AppareilService.OffTarget()
  }


  ngOnInit(): void {
    this.appareils = this.AppareilService.appareils
  }
}
