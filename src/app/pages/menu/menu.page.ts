import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'First page with Tabs',
      url: 'menu/first'
    },
    {
      title: 'Second page with blank',
      url: 'menu/second'
    }
  ];
  private selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
        console.log(this.selectedPath);
      }
    });
  }

  ngOnInit() {
  }

  onItemClick(url: string) {
   this.router.navigate([url]);
   console.log(url);
  }
}
