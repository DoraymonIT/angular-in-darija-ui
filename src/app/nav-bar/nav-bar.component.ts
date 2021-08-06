import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit {
  className: string = '';
  constructor() {}

  ngOnInit(): void {}
  onClickChange() {
    if (this.className !== 'open') {
      this.className = 'open';
    } else {
      this.className = '';
    }
  }
}
