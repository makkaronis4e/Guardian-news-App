import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';
import { NewsService } from '../services/news-service.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.css']
})
export class NewsBlockComponent implements OnInit {

  @Input() title: Title;
  @Input() article: Article;
  

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
  }

  getArticle(apiUrl: string) {
    this.NewsService.getArticle(apiUrl).subscribe(data => this.article = data);
    console.log(this.article);
  }
}
