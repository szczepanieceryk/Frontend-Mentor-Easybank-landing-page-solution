import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(){
    this.isActive = !this.isActive;
  
      // document.getElementById('header-wrapper')!.style.backgroundColor = 'rgba(0,0,0,.8)'
    
    
  }

}
