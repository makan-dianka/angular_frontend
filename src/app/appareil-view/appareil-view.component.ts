import { Component } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent {
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
