import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentsCalc';

  firstNumber = 0;
  secondNumber = 0;
  operation = ''
  
  getFirst(newFirstNum: string) {
    this.firstNumber = Number(newFirstNum);
  }

  getSecond(newSecondNum: string) {
    this.secondNumber = Number(newSecondNum);
  }

  getOperation(value: string){
    this.operation = value;
  }


}
