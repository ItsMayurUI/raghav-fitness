import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;   // ✅ REQUIRED for mobile menu
  isSticky = false;   // ✅ REQUIRED for sticky navbar

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.pageYOffset > 80;
  }
}
