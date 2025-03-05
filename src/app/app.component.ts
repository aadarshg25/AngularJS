import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz.';
  imgUrl: string = 'assets/logo.jpg';
  url: string = 'https://www.bridgelabz.com';
  userName: string = '';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank');
  }
}
