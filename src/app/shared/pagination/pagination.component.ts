import {Component, OnInit, EventEmitter, Input, Output, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage = 1;
  @Input() totalPages;
  @Input() halfOfTotalPages: number = Math.round(this.totalPages / 2);
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  total: number[] = [];
  isDisabled: boolean;
  stringy = '...';
  pagesLength;
  pages: any[] = [];
  str;
  i = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.whichNumber(this.currentPage);
  }

  totalNumber(total) {
    for (this.i; this.i <= this.totalPages; this.i++) {
      this.total.push(this.i);
    }
    this.pagesLength = this.total.length;
    return this.total;
  }

  whichNumber(page) {
    this.pages = [];
    if (page === 1) {
      this.pages.push(page + 1, this.stringy);
    } else if (page > 1 && page < 4) {
      if (page === 3) {
        this.pages.push(page - 1, page, page + 1, this.stringy);
      } else {
        this.pages.push(page, page + 1, this.stringy);
      }
    } else if (page >= 4 && page < this.totalPages - 2) {
      this.pages.push(this.stringy, page - 1, page, page + 1, this.stringy);
    } else if (page >= this.totalPages - 2) {
      if (page === this.totalPages - 1) {
        this.pages.push(this.stringy, page);
      } else if (page === this.totalPages) {
        this.pages.push(this.stringy, page - 1);
      } else if (page === this.totalPages - 2) {
        this.pages.push(this.stringy, page - 1, page, page + 1);
      } else {
        this.pages.push(this.stringy, page - 1, page, this.stringy);
      }
    }

    if (!this.pages.includes(1) && !this.pages.includes(this.totalPages)) {
      this.pages.unshift(1);
      this.pages.push(this.totalPages);
    }
    return this.pages;
  }


  // nextPage() {
  //   if (this.currentPage >= this.totalPages) {
  //     return;
  //   } else {
  //     this.currentPage += 1;
  //     this.changePage.emit(this.currentPage);
  //   }
  // }

  toThePage(page) {
    this.currentPage = page;
    this.whichNumber(this.currentPage);
    this.changePage.emit(this.currentPage);
  }

  // previousPage() {
  //   if (this.currentPage < 2) {
  //     return;
  //   } else {
  //     this.currentPage -= 1;
  //   }
  //   this.changePage.emit(this.currentPage);
  // }
}
