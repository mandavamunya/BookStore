import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navLinks = [
    {
      label: 'Search',
      link: ['/search']
    },
    {
      label: 'Books',
      link: ['/books']
    }
  ];
  links = ['Search', 'Books'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
