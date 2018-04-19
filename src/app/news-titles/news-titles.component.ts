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
  pagesAmount: number;
  pager: Pager;
  

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getTitles().subscribe(data => {
      this.titles = data;
      this.pagesAmount = data[0].pages;
      this.setPage(2, this.pagesAmount);
    });
  }

  refresh() {
    this.NewsService.getTitles(this.page).subscribe(data => this.titles = data);
  }
  
  setPage(page: number, pageAmount:number) {
    if (page < 1 || page > this.pagesAmount) {
        return;
    }
    this.pager = this.NewsService.getPager(page, pageAmount);
    console.log(this.pager);
  }
}
