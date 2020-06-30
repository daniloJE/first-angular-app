import {Component, OnInit, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
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
    if (page < 1 && page > 8) {
      return;
    }
    if (page === 1) {
      this.pages.push(page, page + 1, this.stringy, 8);
    } else if (page > 1 && page < Math.round(this.totalPages / 2)) {
      if (page === 2) {
        this.pages.push(page - 1, page, page + 1, this.stringy, this.totalPages);
      } else if (page === 3) {
        this.pages.push(1, page - 1, page, page + 1, this.stringy, this.totalPages);
      }
    } else if (page === 4) {
      this.pages.push(1, this.stringy, page, page + 1, page + 2, this.stringy, this.totalPages);
    } else if (page > Math.round(this.totalPages / 2) && page < this.totalPages) {
      if (page + 1 === this.totalPages) {
        this.pages.push(1, this.stringy, page - 1, page, page + 1);
      } else {
        this.pages.push(1,this.stringy, page - 1, page, page + 1, this.stringy, this.totalPages);
      }
    }
    if (page === this.totalPages) {
      this.pages.push(1,this.stringy, page - 1, this.totalPages);
    }
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
