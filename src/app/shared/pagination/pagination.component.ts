import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()currentPage = 1;
  @Input()totalPages;
  @Output()changePage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    this.currentPage += 1;
    this.changePage.emit(this.currentPage);
  }
  previousPage(){
    if (this.currentPage < 2){
      return;
    }else{
      this.currentPage -= 1;
    }
    this.changePage.emit(this.currentPage);
  }
}
