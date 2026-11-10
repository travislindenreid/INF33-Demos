import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCheckbox, IonButton, AlertController, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';
import { ModalPage } from '../modal/modal.page';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCheckbox, IonButton, FormsModule],
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

  addItem() {
    this.alertController.create({
      header: 'What would you like to add?',
      inputs: [
        {
          name: 'item',
          type: 'text',
          placeholder: 'Add an item'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            //No need to do anything
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            this.shoppingList.push({'item':data.item, 'inCart':false});
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  deleteItems() {
   //TODO: use the alert controller to create and display a set of checkboxes for each item in the shopping list.
   //For each item checked, delete the item from the list.
   var inputs:any[] = this.shoppingList.map((item:any) => {
      return {name:'toRemove', type:'checkbox', label:item.item, value:item.item};
    });

   this.alertController.create({
      header: 'Which would you like to delete?',
      inputs: inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            //No need to do anything
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            this.shoppingList = this.shoppingList.filter((item) => {
              return !data.includes(item.item);
            });
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  checkOut() {
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

    this.modalController.create({
    	component: ModalPage,
    	componentProps: { itemsPurchased: itemsPurchased }
    }).then((modal) => {
    	modal.present();
    });
  }
}
