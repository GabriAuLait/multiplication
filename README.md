# Multiplication

**DEMAZEUX Gabriel**

[Enoncé du TP](https://slam-vinci-melun.github.io/sio22/phase2/TP-3.2-Angular-Multiplication.pdf)  
[Mon travail sur github](https://github.com/GabriAuLait/multiplication/)

## Première partie

Dans la première partie on affiche une table de multiplication a partir d'un formulaire.

![image](https://user-images.githubusercontent.com/41526050/142068991-13106cef-6c1c-4207-b8c1-13e7a7407306.png)

Le chiffre entré dans le formulaire determine la table affichée.
![image](https://user-images.githubusercontent.com/41526050/142069122-d03796a9-4f32-41f4-b4f5-6e29a33df52e.png)

Pour se faire un créer le formulaire dans app.component.html
```html
    <form [formGroup]="numberForm" (ngSubmit)="recupNb()">
      <div class="field">
          <label class="label">chiffre</label>
          <div class="control">
                  <input class="input is-success" formControlName="nombre" type="number" placeholder="Nombre :">
          </div>
      </div>
      <div class="field is-grouped">
          <div class="control">
              <button class="button is-link">Soumettre</button>
          </div>
      </div>
  </form>
```

et dans app.component.ts
```ts
export class AppComponent {
  title = 'table';
  numberForm= new FormGroup({
    nombre: new FormControl()
  });
  nbUser : number = 0;
    recupNb() {
    this.nbUser = this.numberForm.value.nombre;
  }
  ```
Ce formulaire est ensuite utiliser dans le composant table-multiplication grace à :
```html
  <app-table-multiplication [nbUser]='nbUser'></app-table-multiplication>
```

Il est ensuite récuperé dans table-multiplication.component.ts qui initialise les valeurs nécéssaire au calcul.
```ts
export class TableMultiplicationComponent implements OnInit {

  tabChiffres: number[] = [1,2,3,4,5,6,7,8,9,10];
  @Input() nbUser!:number;
```

Ceci est ensuite utilisé dans table-multiplication.component.html pour l'afficher 
```html
<table>
    <tr> Table de {{nbUser}}</tr>
    <tr>
    <p *ngFor="let chiffre of tabChiffres">{{nbUser}}*{{chiffre}}={{chiffre * nbUser}}</p>
    </tr>
</table>
```

## Deuxième partie

Dans la deuxième partie on affiche les table allant de la table de 1 jusqu'à le numéro de table fourni via un formulaire (10 par défaut).
![image](https://user-images.githubusercontent.com/41526050/142071456-303db685-6cd0-407d-9bc2-37ecc05a2e0f.png)

![image](https://user-images.githubusercontent.com/41526050/142071504-f0dc7b53-4018-4f05-9392-9ddb3e95ed1a.png)

Pour se faire nous avons un autre formulaire fonctionnnant pareil que le précédent
que se soit au niveau html:
```html
  <form [formGroup]="tableForm" (ngSubmit)="recupTab()">
    <div class="field">
        <label class="label">Table</label>
        <div class="control">
                <input class="input is-success" formControlName="table" type="number" placeholder="Nombre de tables:">
        </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Soumettre</button>
        </div>
    </div>
    </form>
```

Ou au niveau du ts:
```ts
  tableForm= new FormGroup({
    table: new FormControl()
  });
  
  nbTable : number = 10;
  
  recupTab() {
    this.nbTable = this.tableForm.value.table;
  }
```

Le formulaire est ensuite utiliser dans le composant tables-multiplication grace à :
```html
<app-tables-multiplication [nbTable]='nbTable'></app-tables-multiplication>
```

Pour afficher les tables de multiplication on utilise le composant table-multiplication dans tables-multiplication.
```html
<table>
    <tr>
<td *ngFor="let e of [].constructor(nbTable); let i = index">
    <app-table-multiplication [nbUser]='i+1'></app-table-multiplication>
</td>
</tr>
</table>
```
La valeur du nombre de table à afficher est récupère dans tables-multiplication.component.ts
```ts
@Input() nbTable!:number;
```

## UML

![image](https://user-images.githubusercontent.com/41526050/142072527-71b6940c-555a-4a2a-a069-649b85be2fbe.png)

```uml
@startuml
class AppComponent {
  -title : string
  -numberForm : FormGroup
  -tableForm : FormGroup
  -nbUser : int = 0
  -nbTable : int = 10
  +recupNb()
  +recupTab()
}

class TablesMultiplicationComponent {
  -nbTable : int
}

class TableMultiplicationComponent {
  -tabChiffres : int []
  -nbUser : int
}

AppComponent "1" -- "1" TablesMultiplicationComponent
AppComponent "1" -- "1" TableMultiplicationComponent

TableMultiplicationComponent "1..10" -- "1" TablesMultiplicationComponent :""
hide circle
@enduml
```
