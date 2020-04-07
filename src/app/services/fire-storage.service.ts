import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class FireStorageService {

  url: any;

  constructor(private storage: AngularFireStorage) {}

  getDownloadURL() {
    const ref = this.storage.ref('rangaWot.png');
    return new Promise(function(resolve) {
      ref.getDownloadURL().subscribe(value => {
        resolve(value);
      });
    });
  }
}