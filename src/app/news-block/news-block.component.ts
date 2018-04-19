import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../models/title';
import { Article } from '../models/article';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.css']
})
export class NewsBlockComponent implements OnInit {

  @Input() title: Title;
  @Input() article: Article;
  

  constructor() { }

  ngOnInit() {
  }

}
