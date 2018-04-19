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

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getTitles().subscribe(data => this.titles = data);
  }

  getArticle(apiUrl: string) {
    this.NewsService.getArticle(apiUrl).subscribe(data => this.article = data);
    console.log(this.article);
  }

  refresh() {
    this.titles = [];
    this.NewsService.getTitles().subscribe(data => this.titles = data);
  }
}
