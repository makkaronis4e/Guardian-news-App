import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsTitlesComponent } from './news-titles/news-titles.component';
import { SearchService } from './services/news-service.service';



@NgModule({
  declarations: [
    AppComponent,
    NewsTitlesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
