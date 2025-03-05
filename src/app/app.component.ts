import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz.';
  imgUrl: string = 'assets/logo.jpg'; 
  url: string = 'https://www.bridgelabz.com'; 

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank'); 
  }
}


