import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit, AfterViewInit {

  updateOpen = false;
  readMoreText = "Mehr lesen";
  readMoreStyle;
  headerData = {
    title: "Update-News",
    subtitle: "Moin Leude, hier gibts bald <br> <u>WÖCHENTLICHE UPDATES</u>",
    backgroundImageUrl: "../../../assets/img/Banner.png"
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.getElementsByClassName("update-wrapper")
  }

  readMore() {
    this.updateOpen = !this.updateOpen;
    if (this.updateOpen) {
      this.readMoreText = "Weniger lesen";
      this.readMoreStyle = "color: green;";
    } else {
      this.readMoreText = "Mehr lesen";
    }
  }

}
