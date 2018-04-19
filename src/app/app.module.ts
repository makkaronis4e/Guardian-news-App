import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsTitlesComponent } from './news-titles/news-titles.component';
import { NewsService } from './services/news-service.service';
import { NewsBlockComponent } from './news-block/news-block.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsTitlesComponent,
    NewsBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
