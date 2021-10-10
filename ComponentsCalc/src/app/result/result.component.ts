import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() firstNum = 0;
  @Input() secondNum = 0;
  @Input() operation = '';

  result = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.doOperation();
  }

  doOperation(){
    switch(this.operation){
      case '+': 
      var output = this.firstNum + this.secondNum; 
      this.result = String(output); 
      break;
      case '-': 
      var output = this.firstNum - this.secondNum; 
      this.result = String(output); 
      break;
      case '*': 
      var output = this.firstNum * this.secondNum; 
      this.result = String(output); 
      break;
      case '/': 
      var output = this.firstNum / this.secondNum; 
      this.result = String(output); 
      break;
    }
  }
}
