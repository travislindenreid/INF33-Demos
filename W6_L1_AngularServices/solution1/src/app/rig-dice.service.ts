import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RigDiceService {
  die1:number[] = [];
  die2:number[] = [];
  die1Index:number = 0;
  die2Index:number = 0;

  constructor(private http:HttpClient) {
    //TODO: use the HTTP client to get the rigged die rolls from the JSON file in the assets folder
    //Add the values to the arrays for die1 and die2
    firstValueFrom(this.http.get('rigged_rolls.json', {responseType: 'json'})).then((data:any) => {
      data.forEach((dieRolls:any) => {
        this.die1.push(dieRolls['die1']);
        this.die2.push(dieRolls['die2']);
      });
    });
  }

  //TODO: first, have the service roll fair dice by using Math.random() to roll.
  // return Math.floor(Math.random() * 6 + 1);

  //Then, update the service to return the rigged die rolls in order.
  rollDie1():number {
    // first, use return this.die1[0] just to test loading first entry of array
    // then:
    return this.die1[(this.die1Index++)%this.die1.length];
  }

  rollDie2():number {
    // first, use return this.die2[0] just to test loading first entry of array
    // then:
    return this.die2[(this.die2Index++)%this.die2.length];
  }
}
