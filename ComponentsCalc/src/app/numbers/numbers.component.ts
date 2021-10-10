import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Output() firstNumberEvent = new EventEmitter<string>();
  @Output() secondNumberEvent = new EventEmitter<string>();

  getFirstNumber(value: string){
    this.firstNumberEvent.emit(value);
  }

  getSecondNumber(value: string){
    this.secondNumberEvent.emit(value);
  }
   
  constructor() { }

  ngOnInit(): void {
    
  }


}
