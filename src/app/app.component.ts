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
  title: string = 'Hello from BridgeLabz';
  imgUrl: string = 'assets/logo.jpg';
  url: string = 'https://www.bridgelabz.com';
  userName: string = '';
  nameError: string = '';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank');
  }

  onInput(event: Event): void {
    console.log('Change Event Occurred!', (event.target as HTMLInputElement).value);
    const nameRegex = new RegExp(/^[A-Z][a-zA-Z\s]{2,}$/); 

    if (nameRegex.test(this.userName)) {
      this.nameError = ''; 
    } else {
      this.nameError = 'Name is Incorrect!'; 
    }
  }
}
