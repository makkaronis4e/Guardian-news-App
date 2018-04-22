webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "header {\n    height: 120px;\n    background-color: #b70b39;\n}\n\n.title {\n    margin: auto;\n    width: 290px;\n    color: wheat;\n    font-size: 36px;\n    padding-top: 35px;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"title\">Guardian News</div>\n</header>\n<app-news-titles></app-news-titles>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_titles_news_titles_component__ = __webpack_require__("./src/app/news-titles/news-titles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_news_service_service__ = __webpack_require__("./src/app/services/news-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_block_news_block_component__ = __webpack_require__("./src/app/news-block/news-block.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__news_titles_news_titles_component__["a" /* NewsTitlesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__news_block_news_block_component__["a" /* NewsBlockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_news_service_service__["a" /* NewsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(text, webUrl) {
        this.text = text;
        this.webUrl = webUrl;
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/models/title.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title; });
var Title = /** @class */ (function () {
    function Title(name, apiUrl, pages) {
        this.name = name;
        this.apiUrl = apiUrl;
        this.pages = pages;
    }
    return Title;
}());



/***/ }),

/***/ "./src/app/news-block/news-block.component.css":
/***/ (function(module, exports) {

module.exports = "  .transition, div, li i:before, li i:after {\n    -webkit-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out;\n  }\n  \n  .flipIn,li {\n    -webkit-animation: flipdown 0.5s ease both;\n            animation: flipdown 0.5s ease both;\n  }\n  \n  .no-select, h2 {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  h2 {\n    font-size: 18px;\n    line-height: 34px;\n    font-weight: 300;\n    letter-spacing: 1px;\n    display: block;\n    background-color: #fefffa;\n    margin: 0;\n    cursor: pointer;\n    color: #b70b39;\n  }\n  \n  div {\n    color: rgba(48, 69, 92, 0.8);\n    font-size: 16px;\n    line-height: 26px;\n    letter-spacing: 1px;\n    position: relative;\n    max-height: 100px;\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    margin-top: 14px;\n    z-index: 2;\n  }\n  \n  .block {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: 74px;\n  }\n  \n  li {\n    position: relative;\n    padding: 0;\n    margin: auto;\n    width: 900px;\n    padding-bottom: 12px;\n    padding-top: 18px;\n    border-top: 1px dotted #dce7eb;\n  }\n  \n  li i {\n    position: absolute;\n    -webkit-transform: translate(-6px, 0);\n            transform: translate(-6px, 0);\n    margin-top: 16px;\n    right: 0;\n  }\n  \n  li i:before, li i:after {\n    content: \"\";\n    position: absolute;\n    background-color: #ff6873;\n    width: 3px;\n    height: 9px;\n  }\n  \n  li i:before {\n    -webkit-transform: translate(-2px, 0) rotate(45deg);\n            transform: translate(-2px, 0) rotate(45deg);\n  }\n  \n  li i:after {\n    -webkit-transform: translate(2px, 0) rotate(-45deg);\n            transform: translate(2px, 0) rotate(-45deg);\n  }\n  \n  li input[type=checkbox] {\n    position: absolute;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0;\n  }\n  \n  li input[type=checkbox]:checked ~ div {\n    margin-top: 0;\n    max-height: 0;\n    opacity: 0;\n    font-size: 0;\n    -webkit-transform: translate(0, 50%);\n            transform: translate(0, 50%);\n  }\n  \n  li input[type=checkbox]:checked ~ i:before {\n    -webkit-transform: translate(2px, 0) rotate(45deg);\n            transform: translate(2px, 0) rotate(45deg);\n  }\n  \n  li input[type=checkbox]:checked ~ i:after {\n    -webkit-transform: translate(-2px, 0) rotate(-45deg);\n            transform: translate(-2px, 0) rotate(-45deg);\n  }\n  \n  @-webkit-keyframes flipdown {\n    0% {\n      opacity: 0;\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      -webkit-transform: rotateX(-90deg);\n              transform: rotateX(-90deg);\n    }\n    5% {\n      opacity: 1;\n    }\n    80% {\n      -webkit-transform: rotateX(8deg);\n              transform: rotateX(8deg);\n    }\n    83% {\n      -webkit-transform: rotateX(6deg);\n              transform: rotateX(6deg);\n    }\n    92% {\n      -webkit-transform: rotateX(-3deg);\n              transform: rotateX(-3deg);\n    }\n    100% {\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      -webkit-transform: rotateX(0deg);\n              transform: rotateX(0deg);\n    }\n  }\n  \n  @keyframes flipdown {\n    0% {\n      opacity: 0;\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      -webkit-transform: rotateX(-90deg);\n              transform: rotateX(-90deg);\n    }\n    5% {\n      opacity: 1;\n    }\n    80% {\n      -webkit-transform: rotateX(8deg);\n              transform: rotateX(8deg);\n    }\n    83% {\n      -webkit-transform: rotateX(6deg);\n              transform: rotateX(6deg);\n    }\n    92% {\n      -webkit-transform: rotateX(-3deg);\n              transform: rotateX(-3deg);\n    }\n    100% {\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      -webkit-transform: rotateX(0deg);\n              transform: rotateX(0deg);\n    }\n  }\n"

/***/ }),

/***/ "./src/app/news-block/news-block.component.html":
/***/ (function(module, exports) {

module.exports = "<li (click)=\"getArticle(title.apiUrl)\">\n  <input type=\"checkbox\" checked>\n  <i></i>\n  <h2>{{ title.name }}</h2>\n  <div *ngIf=\"article\">\n    <p class=\"block\">{{ article.text }}</p>\n    <a [href]=article.webUrl>Read full news</a>\n  </div>\n</li>"

/***/ }),

/***/ "./src/app/news-block/news-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_title__ = __webpack_require__("./src/app/models/title.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_article__ = __webpack_require__("./src/app/models/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service_service__ = __webpack_require__("./src/app/services/news-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsBlockComponent = /** @class */ (function () {
    function NewsBlockComponent(newsService) {
        this.newsService = newsService;
    }
    NewsBlockComponent.prototype.ngOnInit = function () {
    };
    // load article text "onclick"
    NewsBlockComponent.prototype.getArticle = function (apiUrl) {
        var _this = this;
        this.newsService.getArticle(apiUrl).subscribe(function (data) { return _this.article = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_title__["a" /* Title */])
    ], NewsBlockComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* Article */])
    ], NewsBlockComponent.prototype, "article", void 0);
    NewsBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-news-block',
            template: __webpack_require__("./src/app/news-block/news-block.component.html"),
            styles: [__webpack_require__("./src/app/news-block/news-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_news_service_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_news_service_service__["a" /* NewsService */]])
    ], NewsBlockComponent);
    return NewsBlockComponent;
}());



/***/ }),

/***/ "./src/app/news-titles/news-titles.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\n  position: relative;\n  height: 60px;\n  width: 120px;\n  border-radius: 6px;\n  cursor: pointer;\n  background-color: wheat;\n  margin: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.button:hover {\n  background: #d8e6e8;\n  text-decoration: none;\n}\n\n.button:active {\n\tposition: relative;\n\ttop: 2px;\n}\n\n.button:hover .img-refresh {\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n  -webkit-transform: rotate(280deg);\n          transform: rotate(280deg);\n}\n\n.img-refresh {\n  position:absolute;\n  left: 35px;\n  top: 4px;\n}\n\n.spinner {\n  width: 300px;\n  margin: auto;\n}\n\nul {\n  list-style: none;\n  -webkit-perspective: 900;\n          perspective: 900;\n  padding: 0;\n  margin: 0;\n}\n\n.container {\n  width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.pagination {\n  text-align: center;\n}\n\nul > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  border: 1px solid rgb(92, 89, 89);\n  margin-left: 5px;\n  border-radius: 4px;\n}\n\nul > li:hover {\n  background: #d8e6e8;\n}\n\nul > li > a {\n  display: block;\n  margin: auto;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.active {\n  color: #b70b39;\n  background-color: wheat;\n}\n\n.input {\n  width: 220px;\n  margin: auto;\n  margin-top: 10px;\n  font-size: 18px;\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\ninput, textarea {\n  margin: auto;\n  width: 80px;\n  height: 28px;\n  font-size: 18px;\n  background-color: #fefffa;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n"

/***/ }),

/***/ "./src/app/news-titles/news-titles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n  <div class=\"button\" (click)=\"refresh()\">\n    <img class=\"img-refresh\" src=\"http://www.myiconfinder.com/uploads/iconsets/128-128-76912453c14fc15ed016df244ce34b54.png\" width=\"50\" height=\"50\"\n      alt=\"refresh\" />\n  </div>\n  <div class=\"spinner\" *ngIf=\"loading\">\n      <img src=\"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif\" alt=\"loading\" />\n  </div>\n  <ul *ngIf=\"!loading\" >\n    <app-news-block *ngFor=\"let title of titles\" [title]=title></app-news-block>\n  </ul>\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\" class=\"str-buttons\">First</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\" class=\"str-buttons\">Previous</a>\n        </li>\n        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-button\">\n          <a (click)=\"setPage(page, pagesAmount)\">{{ page }}</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\" class=\"str-buttons\">Next</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pagesAmount, pagesAmount)\" class=\"str-buttons\">Last</a>\n        </li>\n      </ul>\n      <div class=\"input\">\n        <label for=\"input\">Page&nbsp;\n          <input name=\"input\" id=\"input-page\" type=\"number\" min=\"1\" [max]=\"pagesAmount\" [ngModel]=\"pager.currentPage\" (ngModelChange)=\"setPage($event, pagesAmount)\"\n          /> &nbsp;of {{ pagesAmount }} </label>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news-titles/news-titles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsTitlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service_service__ = __webpack_require__("./src/app/services/news-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsTitlesComponent = /** @class */ (function () {
    function NewsTitlesComponent(newsService) {
        this.newsService = newsService;
        this.titles = [];
        this.loading = true;
    }
    NewsTitlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getTitles()
            .subscribe(function (data) {
            _this.pagesAmount = data[0].pages;
            _this.setPage(1, _this.pagesAmount);
        }, function (error) {
            _this.titles = error;
            _this.loading = false;
        });
    };
    // refresh list of titles
    NewsTitlesComponent.prototype.refresh = function () {
        var _this = this;
        this.loading = true;
        this.newsService.getTitles(this.pager.currentPage)
            .subscribe(function (data) {
            _this.loading = false;
            _this.titles = data;
        }, function (error) {
            _this.titles = error;
            _this.loading = false;
        });
    };
    // create pagination
    NewsTitlesComponent.prototype.setPage = function (page, pageAmount) {
        var _this = this;
        if (page < 1 || page > this.pagesAmount) {
            return;
        }
        this.loading = true;
        this.pager = this.newsService.getPager(page, pageAmount);
        console.log(this.pager);
        this.newsService.getTitles(page)
            .subscribe(function (data) {
            _this.loading = false;
            _this.titles = data;
        }, function (error) {
            _this.titles = error;
            _this.loading = false;
        });
    };
    NewsTitlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-news-titles',
            template: __webpack_require__("./src/app/news-titles/news-titles.component.html"),
            styles: [__webpack_require__("./src/app/news-titles/news-titles.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_news_service_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service_service__["a" /* NewsService */]])
    ], NewsTitlesComponent);
    return NewsTitlesComponent;
}());



/***/ }),

/***/ "./src/app/services/news-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    // send request to Guardian api for news titles
    NewsService.prototype.getTitles = function (page) {
        if (page === void 0) { page = 2; }
        var apiURL = "http://content.guardianapis.com/search?page=" + page + "&api-key=test";
        return this.http.get(apiURL)
            .map(function (res) {
            var rest = res.response;
            var results = rest.results;
            var pages = rest.pages;
            return results.map(function (title) {
                return { name: title.webTitle, apiUrl: title.apiUrl, pages: pages };
            });
        })
            .catch(this.errorHandler);
    };
    NewsService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw([{ name: 'Sorry we couldn\'t find news for you. Try another page', apiUrl: null, pages: null }]);
    };
    // send request to Guardian api for text of news
    NewsService.prototype.getArticle = function (apiUrl) {
        var url = apiUrl + '?show-blocks=body&api-key=test';
        return this.http.get(url)
            .map(function (res) {
            var content = res.response.content;
            var webUrl = content.webUrl;
            var text = content.blocks.body[0].bodyTextSummary;
            return { text: text, webUrl: webUrl };
        });
    };
    // create pagination
    NewsService.prototype.getPager = function (currentPage, pageAmount) {
        // reduce number of pages and create array of page-numbers
        function createArray(first) {
            if (first === void 0) { first = 6; }
            var arr = [];
            for (var i = first - 5, k = 0; k < 10; k++, i++) {
                arr.push(i);
            }
            return arr;
        }
        var totalPages = pageAmount;
        var startPage, endPage;
        var pages = [];
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
            pages = createArray();
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
                pages = createArray();
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
                pages = createArray(currentPage - 4);
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
                pages = createArray(currentPage);
            }
        }
        return {
            currentPage: currentPage,
            startPage: startPage,
            endPage: endPage,
            totalPages: totalPages,
            pages: pages
        };
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map