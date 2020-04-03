import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router'

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

  hideNavbar() {
    this.navbarIsHidden = !this.navbarIsHidden;
  }

  showDropdown() {
    this.dropdownIsShown = !this.dropdownIsShown;
  }

}
