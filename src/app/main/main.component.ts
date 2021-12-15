import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    // content for main wrapper title and main text
    title:string = 'Why choose Easybank?';
    maintext:string = 'We leverage Open Banking to turn your bank account into your financial hub. Controlyour finances like never before.';

    // content for main-component ngFor loop
    mainContent:Array<any> = [
    {
      img:'../../assets/images/icon-online.svg',
      title:'Online Banking',
      description:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      img:'../../assets/images/icon-budgeting.svg',
      title:'Simple Budgeting',
      description:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
      img:'../../assets/images/icon-onboarding.svg',
      title:'Fast Onboarding',
      description:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      img:'../../assets/images/icon-api.svg',
      title:'Open API',
      description:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
