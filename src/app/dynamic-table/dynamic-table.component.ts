import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  @Input('dataSource') dataSource;
  @Input('displayedColumns') displayedColumns;
  constructor() {}

  ngOnInit(): void {}
}
