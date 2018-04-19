import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { Pager } from '../models/pager';
import { NewsService } from '../services/news-service.service';

@Component({
  selector: 'app-news-titles',
  templateUrl: './news-titles.component.html',
  styleUrls: ['./news-titles.component.css'],
  providers: [NewsService]
})

export class NewsTitlesComponent implements OnInit {

  titles: Title[] = [];
  article: Article;
  page: number;
  pageAmount: number;
  pager: Pager;
  

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getTitles().subscribe(data => {
      this.titles = data;
      this.pageAmount = data[0].pages;
      this.setPage(2, this.pageAmount);
    });
  }

  refresh() {
    this.NewsService.getTitles(this.page).subscribe(data => this.titles = data);
    console.log(this.pager)
  }
  
  setPage(page: number, pageAmount:number) {
    if (page < 1 || page > this.pageAmount) {
        return;
    }
    this.pager = this.NewsService.getPager(this.page, this.pageAmount);
  }
}
