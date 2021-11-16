import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  numberForm= new FormGroup({
    nombre: new FormControl()
  });
  tableForm= new FormGroup({
    table: new FormControl()
  });

  nbUser : number = 0;
  nbTable : number = 10;

  recupNb() {
    this.nbUser = this.numberForm.value.nombre;
  }
  recupTab() {
    this.nbTable = this.tableForm.value.table;
  }
}
