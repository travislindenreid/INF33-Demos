import { Component } from '@angular/core';
// TODO 4 [after creating die service]: import die service
import { DieComponent } from './die/die.component';

// --------------------------------- LOOK! ----------------------------------
// selector: 'app-root' applies this Component anywhere
//    we use the app-root tag; see index.html
@Component({
  selector: 'app-root',
  imports: [DieComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  die1:number = 0;
  die2:number = 0;

  // TODO 5: add new die service to constructor
  constructor() {

  }

  //TODO 6: use the die roll service instead of Math.random()
  rollDice() {
    this.die1 = Math.floor(Math.random()*6) + 1;
    this.die2 = Math.floor(Math.random()*6) + 1;
  }
}