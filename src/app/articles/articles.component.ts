import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  // content foe articles component (ngFor loop)
  title:string = "Latest Articles";
  articlesContent:Array<any> = [
    {
      img:'./assets/images/image-currency.jpg',
      author:'By Claire Robinson',
      title:'Receive money in any currency with no fees',
      text:'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
      img:'./assets/images/image-restaurant.jpg',
      author:'By Wilson Hutton',
      title:'Treat yourself without worrying about money',
      text:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
      img:'./assets/images/image-plane.jpg',
      author:'By Wilson Hutton',
      title:'Take your Easybank card wherever you go',
      text:'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
      img:'./assets/images/image-confetti.jpg',
      author:'By Claire Robinson',
      title:'Our invite-only Beta accounts are now live!',
      text:'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
