import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';
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
  

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getTitles().subscribe(data => {
      this.titles = data;
      this.page = 5;
      this.pageAmount = data[0].pages;
    });
  }

  refresh() {
    this.NewsService.getTitles(this.page).subscribe(data => this.titles = data);
  }
}
