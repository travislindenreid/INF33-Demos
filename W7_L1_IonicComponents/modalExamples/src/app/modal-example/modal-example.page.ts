import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.page.html',
  styleUrls: ['./modal-example.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton],
})
export class ModalExamplePage implements OnInit {
  @Input() name:string = "";
  constructor(public modalController:ModalController) { }

  dismiss() {
  		this.modalController.dismiss();
  }

  ngOnInit(): void {
    
  }
}
