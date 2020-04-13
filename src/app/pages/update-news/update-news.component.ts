import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit, AfterViewInit {

  openUpdates: HTMLCollection = document.getElementsByClassName("update-open");
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

  readMore(clickedUpdate) {
    if (clickedUpdate.classList.length == 2) { //open Update-Wrapper
      if (this.openUpdates.length > 0) { //check for opened Update-Wrappers
        for (let i = 0; i < this.openUpdates.length; i++) {
          this.closeUpdate(this.openUpdates[i]); //close other Update-Wrappers
        }
      }
      clickedUpdate.style.setProperty('Height', clickedUpdate.children[1].offsetHeight + 'px'); //Update-Wrapper Height --> like right-side
      clickedUpdate.lastChild.innerText = "Weniger lesen";
      clickedUpdate.classList.add("update-open"); //add class update-open
    } else {
      this.closeUpdate(clickedUpdate); //close Update-Wrapper
    }
  }
  closeUpdate(closingUpdate) { //close Update-Wrapper
    closingUpdate.style.setProperty('Height', '300px'); //Update-Wrapper Height --> 300px
    closingUpdate.lastChild.innerText = "Mehr lesen";
    closingUpdate.classList.remove("update-open"); //remove class update-open
  }
}
