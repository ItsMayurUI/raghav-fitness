import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  showButton = false;

  ngAfterViewInit() {
    // Run reveal once when page loads
    this.revealElements();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
    this.revealElements();
  }

  revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el: any) => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
