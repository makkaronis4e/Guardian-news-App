import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { SearchService } from '../services/news-service.service';

@Component({
  selector: 'app-news-titles',
  templateUrl: './news-titles.component.html',
  styleUrls: ['./news-titles.component.css'],
  providers: [SearchService]
})

export class NewsTitlesComponent implements OnInit {

  titles: Title[] = [];
  article: Article;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getTitles().subscribe(data => this.titles = data);
    this.Refresh();
  }

  GetArticle(apiUrl: string) {

    this.searchService.getArticle(apiUrl).subscribe(data => this.article = data);
    console.log(this.article);

  }

  Refresh() {
    this.searchService.getTitles().subscribe(data => this.titles = data);
  }
}
