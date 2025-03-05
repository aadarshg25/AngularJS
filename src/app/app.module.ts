import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Routing module (if needed)

@NgModule({
  declarations: [
    AppComponent // Declaring the main component
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule // Importing routing module
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrapping the main component
})
export class AppModule { }
