import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-collapsible',
  templateUrl: './news-collapsible.component.html',
  styleUrls: ['./news-collapsible.component.scss']
})
export class NewsCollapsibleComponent implements OnInit, AfterViewInit {

  @Input() updateData;
  openUpdates: HTMLCollection = document.getElementsByClassName("update-open");

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
      clickedUpdate.classList.add("update-open"); //add class update-open
      setTimeout(function(){
        clickedUpdate.lastChild.innerText = "Weniger lesen";
      }, 500);
    } else {
      this.closeUpdate(clickedUpdate); //close Update-Wrapper
    }
  }
  closeUpdate(closingUpdate) { //close Update-Wrapper
    closingUpdate.style.setProperty('Height', '300px'); //Update-Wrapper Height --> 300px
    closingUpdate.classList.remove("update-open"); //remove class update-open
    setTimeout(function() {
      closingUpdate.lastChild.innerText = "Mehr lesen";
    }, 500)
  }

}
