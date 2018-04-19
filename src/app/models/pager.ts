export class Pager {
    constructor(
        public currentPage: number,
        public startPage: number,
        public endPage: number,
        public totalPages: number,
        public pages: any) {
    }
}
