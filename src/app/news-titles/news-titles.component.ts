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


  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTitles().subscribe(data => {
      this.pagesAmount = data[0].pages;
      this.setPage(2, this.pagesAmount);
    });
  }

  refresh(): void {
    this.newsService.getTitles(this.pager.currentPage).subscribe(data => this.titles = data);
  }

  setPage(page: number, pageAmount: number) {
    let input: any = document.getElementById("input-page");
    input.value = page
    console.log('-------', input);
    if (page < 1 || page > this.pagesAmount) {
      return;
    }

    this.pager = this.newsService.getPager(page, pageAmount);
    console.log(this.pager);
    this.newsService.getTitles(page).subscribe(data => this.titles = data);
    ;
  }
}