import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarIsHidden = true;
  dropdownIsShown = false;
  currentRoute: NavigationEnd = {id: 0, url: '/', urlAfterRedirects: ''};

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val
      }
    })
  }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faDiscord = faDiscord;

  hideNavbar() {
    this.navbarIsHidden = !this.navbarIsHidden;
  }

  showDropdown() {
    this.dropdownIsShown = !this.dropdownIsShown;
  }

}
