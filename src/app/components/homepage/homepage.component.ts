import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  interval:any;
  wrap:any;
  keyboard:any;
  pauseOnHover:any;
  showNavigationArrows:any;
  showNavigationIndicators:any;
  constructor(config: NgbCarouselConfig) {
    // Customize default carousel options here
    config.interval = 2000;
    config.wrap = true; 
    config.keyboard = false; 
    config.pauseOnHover = true; 
    config.showNavigationArrows = false; 
    config.showNavigationIndicators = true; 
    //assign the values to the variables
    this.interval = config.interval;
    this.wrap = config.wrap;
    this.pauseOnHover = config.pauseOnHover;
    this.showNavigationArrows = config.showNavigationArrows;
    this.showNavigationIndicators = config.showNavigationIndicators;
    this.keyboard = config.keyboard;
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  cardItemsInfo = [
    {
      imageUrl:"https://cdn.shopify.com/s/files/1/0765/2350/3915/files/eecd8225-11c0-4ddf-9ff8-5fa645fa4f73.jpg?v=1684178391&width=713",
      description:"Bluetooth Earbuds for iPhone Samsung Android Wireless Waterproof Bluetooth Earbuds for iPhone Samsung Android Wireless Earphone Waterproof",
      price:"$55.72 USD"
    },
    {
      imageUrl:"https://cdn.shopify.com/s/files/1/0765/2350/3915/files/ed6b834c-dd6c-41fe-bc5f-27936fbdf94f.jpg?v=1684178099&width=360",
      description:"Bluetooth 5.0 Earbuds For Android Wireless Earphone",
      price:"$60.60 USD"
    },
    {
      imageUrl:"https://cdn.shopify.com/s/files/1/0765/2350/3915/files/1754881790538.jpg?v=1684178228&width=713",
      description:"Folding double head hanging neck fan",
      price:"$40.20 USD"
    },
    {
      imageUrl:"https://cdn.shopify.com/s/files/1/0765/2350/3915/files/1680757371258.jpg?v=1684168682&width=713",
      description:"Folding Retractable Clothes Rack",
      price:"$17.76 USD"
    }
  ]
  
}
