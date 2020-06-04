import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent implements OnInit {

  constructor() { }

  @Input() question:any
 

  ngOnInit(): void {

  }
 comparer(otherArray){
  // return function(current){
  //   return otherArray.filter((other,key){
  //     return other.value == current.value && other.display == current.display
  //   }).length == 0;
  // }
}
}
