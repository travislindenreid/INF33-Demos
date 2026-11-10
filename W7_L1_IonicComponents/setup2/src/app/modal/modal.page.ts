import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCardContent, IonItem, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonIcon, IonLabel, IonItem, CommonModule, FormsModule]
})
export class ModalPage implements OnInit {

  @Input() itemsPurchased:any[] = [];

  constructor(private modalController:ModalController) {
    addIcons({ cartOutline });
  }

  ngOnInit() {
  }

  dismiss() {
    //TODO: use the modal controller to dismiss this page
  }

}
