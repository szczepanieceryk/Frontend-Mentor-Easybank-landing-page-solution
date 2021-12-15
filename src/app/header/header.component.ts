import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // content for title and span text
   title:string = 'Next generation digital banking';
   textContent:string = ' Take your financial life online. Your Easybank account will be a one-stop-shopfor spending, saving, budgeting, investing, and much more.';

  constructor() { }

  ngOnInit(): void {
  }

}
