import { Component } from '@angular/core';
import { RigDiceService } from './rig-dice.service';
import { DieComponent } from './die/die.component';

@Component({
  selector: 'app-root',
  imports: [DieComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  die1:number = 0;
  die2:number = 0;

  constructor(private rigDice:RigDiceService) {

  }

  rollDice() {
    //TODO: use the rigDice service to roll the dice
    this.die1 = this.rigDice.rollDie1();
    this.die2 = this.rigDice.rollDie2();
  }
}
