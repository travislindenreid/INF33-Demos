import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage';

// you'll need to import the Angular Forms model to use [(ngModel)] in Ion form components
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonPicker, IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonPickerColumn, IonPickerColumnOption],
})
export class HomePage {
  // Q for students: why is namedSaved a signal, but not nameKey?
  namedSaved = signal<boolean>(false);
  nameKey:string = "name";
  name:string = "";

  pickerValue:string = "Spring";
  decorativeText:string = "";

  springText:string = '\u{1F326}\u{1F490}\u{1F430}';
  summerText:string = '\u{1F33B}\u{1F31E}\u{1F30A}';
  fallText:string = '\u{1F342}\u{1F341}\u{1F383}';
  winterText:string = '\u{2744}\u{1F384}\u{26C4}';

  seasonKey:string = "season";

  constructor(private storage:StorageService) {
    // load preferences data
    Preferences.get({
      key: this.nameKey
    }).then((resultName) => {
      console.log(`name: ${resultName.value}`);
      // result value is a string | null,
      // so:
      // 1. ensure nameValue is not null
      // 2. use JavaScript String() fn to convert it to string
      if(resultName.value)
      {
        console.log(`${resultName.value} not null`);
        this.name = String(resultName.value);
        this.namedSaved.set(true);
      }
    });

    this.init();
  }

  async init () {
    // load IndexedDB data
    let val = await this.storage.get(this.seasonKey);
    console.log("found season value: " + val);
    if(val)
    {
      console.log("VALID season value: " + val);
      this.pickerValue = val;
      this.setDecorativeText();
    }
  }

  async saveName() {
    console.log(`saved name: ${this.name}`);
    try {
      await Preferences.set({
        key: 'name',
        value: this.name,
      });

      this.namedSaved.set(true);
    } catch (e)
    {
      console.log(e);
    }
  }

  async clearData() {
    // clear Preferences data
    await Preferences.remove({
      key: this.nameKey
    });

    this.namedSaved.set(false);
    this.name = "";

    // clear ionic storage data
    this.storage.reset();

    this.pickerValue = "";
    this.decorativeText = "";
  }

  onIonChange(event: CustomEvent) {
    this.pickerValue = event.detail.value;
    this.setDecorativeText();
    this.storage.set(this.seasonKey, this.pickerValue);
  }

  setDecorativeText () {
    switch(this.pickerValue)
    {
      case "Spring": this.decorativeText = this.springText; break;
      case "Summer": this.decorativeText = this.summerText; break;
      case "Fall": this.decorativeText = this.fallText; break;
      case "Winter": this.decorativeText = this.winterText; break;
    }
  }
}
