import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.css']
})
export class TableMultiplicationComponent implements OnInit {

  tabChiffres: number[] = [1,2,3,4,5,6,7,8,9,10];
  @Input() nbUser!:number;

  constructor() { }

  ngOnInit(): void {
  }
} 