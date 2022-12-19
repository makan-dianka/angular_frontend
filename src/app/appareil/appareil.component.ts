import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {

    @Input() appareilName: string | undefined;
    @Input() appareilStatus: string | undefined;
  
    getStatus(){
      return this.appareilStatus
    };

    color: string | undefined;

    getColor(){
      if (this.appareilStatus === 'allumé'){
        this.color = 'green'
      }else if (this.appareilStatus === 'éteint'){
        this.color = 'red'
      }
      return this.color
    }
}
