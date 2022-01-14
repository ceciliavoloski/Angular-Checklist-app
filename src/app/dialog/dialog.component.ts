import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public dialogMsg = 'Deseja continuar com essa ação?';
  public letfButtonLabel = 'Cancelar';
  public rightButtonLabel = 'Ok';

  // lembrar de dentro do <> colocar o nome da classe
  // dialogRef - é para fechar a janela
  // Inject - injeta um serviço que foi solicitado
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.dialogMsg != null) {
      this.dialogMsg = data.dialogMsg;
    }
    if (data.letfButtonLabel != null) {
      this.letfButtonLabel = data.letfButtonLabel;
    }
    if (data.rightButtonLabel != null) {
      this.rightButtonLabel = data.rightButtonLabel;
    }
  }

  ngOnInit(): void {}

  public clickLeftButton() {
    this.dialogRef.close(false); // caso clique no botão, a janela não irá fechar
  }

  public clickRightButton() {
    this.dialogRef.close(true); // caso clique no botão, a janela irá fechar
  }
}
