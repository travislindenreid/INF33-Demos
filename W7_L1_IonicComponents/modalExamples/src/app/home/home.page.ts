import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalExamplePage } from '../modal-example/modal-example.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ModalExamplePage],
})
export class HomePage {
  constructor(
    public toastController: ToastController,
    public alertController:AlertController,
    public actionSheetController:ActionSheetController,
    public modalController:ModalController
  ) {}

	presentToast() {
    this.toastController.create({
      message: 'Hello, world!',
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }

  presentAlert() {
    this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    }).then((alert) => {
      alert.present();
    });
  }

  presentActionSheet() {
    this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then((actionSheet) => {
      actionSheet.present();
    });
  }

  presentModal() {
    this.modalController.create({
    	component: ModalExamplePage,
    	componentProps: { name: "IN4MATX 133" }
    }).then((modal) => {
    	modal.present();
    });
	}
}
