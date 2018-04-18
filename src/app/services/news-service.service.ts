import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }

  getTitles(): Observable<Title[]> {

    const apiURL = `http://content.guardianapis.com/search?api-key=test`;

    return this.http.get(apiURL).map(res => {
      const results = res.json().response.results;
      return results.map(function (title: any) {
        return { name: title.webTitle, apiUrl: title.apiUrl };
      });
    });
  }


  getArticle(apiUrl: string): Observable<Article> {
    const url = apiUrl + '?show-blocks=body&api-key=test';
    return this.http.get(url).map(res => {
      const response = res.json().response.content;
      const webUrl = response.webUrl;
      const text = response.blocks.body[0].bodyTextSummary;

      return { text: text, webUrl: webUrl };

    });
  }
}
