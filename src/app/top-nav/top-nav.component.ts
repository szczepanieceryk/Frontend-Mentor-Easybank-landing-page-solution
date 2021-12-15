import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  // active flag for mobile menu
  public isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(){
    this.isActive = !this.isActive;
  }

}
