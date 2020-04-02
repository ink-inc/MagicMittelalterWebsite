import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarIsHidden = true;
  dropdownIsShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideNavbar() {
    this.navbarIsHidden = !this.navbarIsHidden;
  }

  showDropdown() {
    this.dropdownIsShown = !this.dropdownIsShown;
  }

}
