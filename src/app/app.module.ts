import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
