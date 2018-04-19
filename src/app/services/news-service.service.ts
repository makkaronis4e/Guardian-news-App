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

  getTitles(page:number = 2): Observable<Title[]> {

    const apiURL = `http://content.guardianapis.com/search?page=${page}&api-key=test`;

    return this.http.get(apiURL).map(res => {
     
      const rest = res.json().response;
      console.log(rest);
      const results = rest.results;
      return results.map(function (title: any) {
        const pages = rest.pages;
        return { name: title.webTitle, apiUrl: title.apiUrl, pages: pages};
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

  getPager(pageNumber: number, currentPage: number = 2) {

    let startPage: number, endPage: number;
    if (pageNumber <= 10) {
        startPage = 1;
        endPage = pageNumber;
    } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= pageNumber) {
            startPage = pageNumber - 9;
            endPage = pageNumber;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    return {
        currentPage: currentPage,
        pageNumber: pageNumber,
        startPage: startPage,
        endPage: endPage,
    };
  }
}
