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

  //object returned by getPage
  pager: Pager;


  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTitles().subscribe(data => {
      this.pagesAmount = data[0].pages;
      this.setPage(1, this.pagesAmount);
    });
  }

  //refresh list of titles
  refresh(): void {
    this.newsService.getTitles(this.pager.currentPage).subscribe(data => this.titles = data);
  }

  //create pagination
  setPage(page: number, pageAmount: number) {
    if (page < 1 || page > this.pagesAmount) {
      return;
    }

    this.pager = this.newsService.getPager(page, pageAmount);
    console.log(this.pager);
    this.newsService.getTitles(page).subscribe(data => this.titles = data);
    
    //get input field and set value for it
    const input: any = document.getElementById('input-page');
    console.log(input);
    input.value = page;
  }
}
