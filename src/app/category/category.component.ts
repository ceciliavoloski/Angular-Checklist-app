import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Cecilia', guid: 'aaa-bbb-ccc-ddd', cpf: '12312312312' },
  { name: 'Carlos', guid: 'aaa-bbb-ccc-ddd', cpf: '34534534534' },
  { name: 'Maria', guid: 'aaa-bbb-ccc-ddd', cpf: '67867867867' },
  { name: 'Ana', guid: 'aaa-bbb-ccc-ddd', cpf: '89089089089' },
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'cpf', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor() {}

  ngOnInit() {}

  public editCategory(category: Category) {
    console.log('edited category clicked');
  }

  public deleteCategory(category: Category) {
    console.log('deleted category clicked');
  }

  public createNewCategory() {
    console.log('created new category clicked');
  }
}
