import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { TitleResponse, ArticleResponse } from '../models/response';


@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {
  }

  // send request to Guardian api for news titles
  getTitles(page: number = 2): Observable<Title[]> {
    const apiURL = `http://content.guardianapis.com/search?page=${page}&api-key=test`;


    return this.http.get<TitleResponse>(apiURL)
      .map(res => {
        const rest = res.response;
        const results = rest.results;
        const pages = rest.pages;
        return results.map(function (title: any) {
          return { name: title.webTitle, apiUrl: title.apiUrl, pages: pages };
        });
      })
      .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  // send request to Guardian api for text of news
  getArticle(apiUrl: string): Observable<Article> {
    const url = apiUrl + '?show-blocks=body&api-key=test';

    return this.http.get<ArticleResponse>(url)
      .map(res => {
        const content = res.response.content;
        const webUrl = content.webUrl;
        const text = content.blocks.body[0].bodyTextSummary;
        return { text: text, webUrl: webUrl };
      });
  }

  // create pagination
  getPager(currentPage: number, pageAmount: number) {

    // reduce number of pages and create array of page-numbers
    function createArray(first: number = 6) {
      const arr: any = [];
      for (let i = first - 5, k = 0; k < 10; k++ , i++) {
        arr.push(i);
      }
      return arr;
    }

    const totalPages: number = pageAmount;
    let startPage: number, endPage: number;
    let pages: any = [];

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
        pages = createArray(currentPage - 4);
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
