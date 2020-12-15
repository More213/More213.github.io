import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25];
  constructor() { }

  ngOnInit(): void {
  }

}
