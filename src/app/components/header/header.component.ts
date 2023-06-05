import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){
    this.browserWidth = window.innerWidth;
  }
  ngOnInt(){
    this.onResize();
  }
  browserWidth:number = 0;
  @HostListener('window:resize', ['$event'])
  onResize(){
    this.browserWidth = window.innerWidth;
    console.log(this.browserWidth);
  }
}
