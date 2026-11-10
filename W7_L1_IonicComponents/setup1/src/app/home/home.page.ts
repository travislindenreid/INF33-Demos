import { Component } from '@angular/core';
import { IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/angular/standalone';
//Don't forget to add imports for the new components!

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonToolbar, IonTitle],
})
export class HomePage {
  shoppingList:any[] = [
    {'item':'Broccoli', 'inCart':false},
    {'item':'Bread', 'inCart':false},
    {'item':'Orange Juice', 'inCart':true},
    {'item':'Apples', 'inCart':false}
  ];

  itemsPurchased:any[] = [];

  constructor() {}

  checkOut() {
    var boughtItems = this.shoppingList.filter((item:any) => {
      return item.inCart;
    });
    var unboughtItems = this.shoppingList.filter((item:any) => {
      return !item.inCart;
    });
    this.shoppingList = unboughtItems;
    boughtItems.forEach((item:any) => {
      this.itemsPurchased.push(item.item);
    });
  }
}
