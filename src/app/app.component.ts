import { Component } from '@angular/core';
import { FireStorageService } from './services/fire-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fireStorageService: FireStorageService) {
    fireStorageService.getDownloadURL().then(value => console.log(value));
  }

  title = 'MagicMittelalterWebsite';
}
