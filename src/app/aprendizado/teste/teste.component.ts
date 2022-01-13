import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  public stringInterpolation = 'Esse é um teste';
  public isDisabled = false;
  public myBindingProperty : string = '';
  public showTitle = false; /* coloquei falso, para que quando a pagina carregar, não aparecerá titulo, e quando clicar no botão apareça o titulo */

  public items = [
    {description: 'Item 1', id: 1},
    {description: 'Item 2', id: 2},
    {description: 'Item 3', id: 3},
    {description: 'Item 4', id: 4}
  ];

  constructor() { }

  ngOnInit() {
  }

  public disableButton(){
    if (this.isDisabled) this.isDisabled = false;
    else this.isDisabled = true;
  }

  public processClick(input : string) {
    console.log('this button was clicked!!', input);
  }

  public changeTitleDisplayStatus(){
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }

}
