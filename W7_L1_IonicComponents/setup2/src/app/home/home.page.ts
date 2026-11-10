import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCheckbox, IonButton, AlertController, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCheckbox, IonButton],
})
export class HomePage {

  shoppingList:any[] = [
    {'item':'Broccoli', 'inCart':false},
    {'item':'Bread', 'inCart':false},
    {'item':'Orange Juice', 'inCart':true},
    {'item':'Apples', 'inCart':false}
  ];

  constructor(private alertController:AlertController, private modalController:ModalController) {
    addIcons({ cartOutline });
  }

  async addItem() {
    //TODO: use the alert controller to create and display a text input field, and add that to the shopping list.
  }

  async deleteItems() {
   //TODO: use the alert controller to create and display a set of checkboxes for each item in the shopping list.
   //For each item checked, delete the item from the list.
  }

  async checkOut() {
    var boughtItems = this.shoppingList.filter((item:any) => {
      return item.inCart;
    });
    var unboughtItems = this.shoppingList.filter((item:any) => {
      return !item.inCart;
    });
    this.shoppingList = unboughtItems;
    var itemsPurchased = boughtItems.map((item:any) => {
      return item.item;
    });
  }
}
