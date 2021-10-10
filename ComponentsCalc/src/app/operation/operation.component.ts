import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() operationEvent = new EventEmitter<string>();

  operator = '';

  addition(){
    this.operationEvent.emit('+');
  }

  subtraction(){
    this.operationEvent.emit('-');
  }

  multiplication(){
    this.operationEvent.emit('*');
  }

  division(){
    this.operationEvent.emit('/');
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
