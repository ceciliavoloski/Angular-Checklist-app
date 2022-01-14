import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Cecilia', guid: 'aaa-bbb-ccc-ddd', cpf: 12312312312 },
  { name: 'Carlos', guid: 'aaa-bbb-ccc-ddd', cpf: 34534534534 },
  { name: 'Maria', guid: 'aaa-bbb-ccc-ddd', cpf: 67867867867 },
  { name: 'Ana', guid: 'aaa-bbb-ccc-ddd', cpf: 89089089089 },
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'cpf', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  // essa parte da interação só é feita após a criação de dialog, lembrar de mexer no construtor tambem
  public editCategory(category: Category) {
    console.log('edited category clicked');
  }

  //disableClose - vai impedir que a pessoa clicando fora da caixa a fara sumir
  public deleteCategory(category: Category) {
    this.dialog
      .open(DialogComponent, {
        disableClose: true,
        data: {
          dialogMsg: 'Você tem certeza que gostaria de apagar?',
          leftButtonLabel: 'Cancelar',
          rightButtonLabel: 'Sim',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          console.log('Categoria excluida com sucesso');
        } else {
          console.log('Categoria NÃO excluida');
        }
      });
  }

  public createNewCategory() {
    console.log('created new category clicked');
  }
}
