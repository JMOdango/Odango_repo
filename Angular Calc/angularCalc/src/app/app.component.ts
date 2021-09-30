import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive Calculator';
  result = "";
  firstNum = 0;
  secondNum = 0;

addition(){
  var output = this.firstNum + this.secondNum;
  this.result = String(output);
  Number(output);
}

subtraction(){
  var output = this.firstNum - this.secondNum;
  this.result = String(output);
  Number(output);
}

division(){
  var output = this.firstNum / this.secondNum;
  this.result = String(output);
  Number(output);
}

multiplication(){
  var output = this.firstNum * this.secondNum;
  this.result = String(output);
  Number(output);
}


getFirst(value: string){
  const parsedInt = parseInt(value);
  if(!isNaN(parsedInt)){
    this.firstNum = parsedInt;
    console.log(this.firstNum);
  }
}

getSecond(value: string){
  const parsedInt = parseInt(value);
  if(!isNaN(parsedInt)){
    this.secondNum = parsedInt;
    console.log(this.secondNum);
  }
  
}

}