import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(){}
  secondes: number | undefined;
  counterSubscription: Subscription | undefined

  ngOnInit(): void {
    const counter = interval(1000)
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value
      }
    )
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }
}
