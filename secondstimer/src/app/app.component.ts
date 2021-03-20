import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  max = 1;
  current = 0;

  //start the timer
  start() {

    interval(100).pipe(
      takeWhile(x => !this.isFinished),
      tap(i => this.current += 0.1)
    ).subscribe();

    // const interval = interval(100);

    // interval
    //   .takeWhile(_ => !this.isFinished)
    //   .do(i => this.current += 0.1)
    //   .subscribe();
  }

  //finish timer
  finish() {
    this.current = this.max;
  }

  //reset timer
  reset() {
    this.current = 0;
  }

  //getters to prevent NaN errors

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }

}
