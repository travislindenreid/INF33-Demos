import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonLabel, IonCheckbox, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonLabel, IonCheckbox, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, FormsModule],
})
export class HomePage {
  shoppingList:any[] = [
    {'item':'Broccoli', 'inCart':false},
    {'item':'Bread', 'inCart':false},
    {'item':'Orange Juice', 'inCart':true},
    {'item':'Apples', 'inCart':false}
  ];

  itemsPurchased:any[] = [];

  constructor() {
    addIcons({ cartOutline });
  }

  checkOut() {
    var boughtItems = this.shoppingList.filter((item:any) => {
      console.log(item);
      return item.inCart;
    });
    var unboughtItems = this.shoppingList.filter((item:any) => {
      return !item.inCart;
    });
    console.log(boughtItems);
    boughtItems.forEach((item:any) => {
      this.itemsPurchased.push(item.item);
    });
    this.shoppingList = unboughtItems;
  }
}
