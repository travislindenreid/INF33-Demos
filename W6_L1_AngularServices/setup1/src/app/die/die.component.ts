import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-die',
  imports: [],
  templateUrl: './die.component.html',
  styleUrl: './die.component.css'
})
export class DieComponent {
  @Input() value:number = 0;

}
