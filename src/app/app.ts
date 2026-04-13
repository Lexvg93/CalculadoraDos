import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  display:string = '';

  private firstValue: number | null = null;
  private operator: string | null = null;

  //Agregar numeros a la pantalla
  append(value: string){
    this.display += value;
  }

  //Elegir operacion
  chooseOp(op: string){
    this.firstValue = Number(this.display);
    this.operator = op;
    this.display = '';
  }

  //Caluclar resultado
  calculate(){
    const [a, op, b] = this.display.split(/([+\-*/])/);
    this.firstValue = Number(a);
    this.operator = op;
    const secondValue = Number(b);
    if( this.firstValue === null || this.operator === null) return;
    let result:number = 0;

    switch( this.operator){
      case '+': result = this.firstValue + secondValue; break;
      case '-': result = this.firstValue - secondValue; break;
      case '*': result = this.firstValue * secondValue; break;
      case '/': result = secondValue === 0 ? 0 : this.firstValue / secondValue; break;
    }

    this.display = result.toString();
    this.firstValue = null;
    this.operator = null;
  }

  //limpiar todo
  clear(){
    this.display = '';
    this.firstValue = null;
    this.operator = null;
  }
}
