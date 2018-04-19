import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class NewsService {

  constructor(private http: Http) {
  }

  getTitles(page:number = 2): Observable<Title[]> {

    const apiURL = `http://content.guardianapis.com/search?page=${page}&api-key=test`;

    return this.http.get(apiURL).map(res => {
     
      const rest = res.json().response;
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

  getPager(currentPage: number, pageAmount: number)  {

    function createArray(first: number =6) {
      let arr:any = [];
      for (let i = first-5, k = 0; k<10; k++, i++) {
        arr.push(i);
     }
     return arr;
    }

    const totalPages: number = pageAmount;
    let startPage: number, endPage: number;
    let pages:any = [];
    if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
        pages = createArray(); 
    } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
            pages = createArray(); 
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
            pages = createArray(currentPage-4); 
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
            pages = createArray(currentPage); 
        }
    }

    return {
        currentPage: currentPage,
        startPage: startPage,
        endPage: endPage,
        totalPages: totalPages,
        pages: pages
    };
  }
}
