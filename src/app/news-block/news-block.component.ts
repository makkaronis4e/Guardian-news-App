import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { NewsService } from '../services/news-service.service';


@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.css'],
  providers: [NewsService]
})

export class NewsBlockComponent implements OnInit {

  @Input() title: Title;
  @Input() article: Article;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  // load article text "onclick"
  getArticle(apiUrl: string) {
    this.newsService.getArticle(apiUrl).subscribe(data => this.article = data);
  }
}
