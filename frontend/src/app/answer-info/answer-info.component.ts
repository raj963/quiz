import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-answer-info',
  templateUrl: './answer-info.component.html',
  styleUrls: ['./answer-info.component.css']
})
export class AnswerInfoComponent implements OnInit, OnChanges {
  tempanswer: string;
  answerRef: string;

  constructor() { }
  @Input() showAnswerView=true
  @Input() answer: any
  @Output() notifyParent = new EventEmitter<any>()
  ngOnInit(): void {
    this.reset()
   
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset()
    // changes.prop contains the old and the new value...
  }

  private setAnswerString(answer = this.answer) {

    Object.keys(answer).forEach((element, i) => {
      if (typeof (answer[element]) != 'object') {
        this.tempanswer += element + ':' + answer[element] + '\n';
      } else {
        this.tempanswer += element + ':' + '\t  \n';
        this.setAnswerString(answer[element])
      }


    });
    this.answerRef = this.tempanswer

  }

  reset() {
    this.tempanswer = '';
    this.setAnswerString()
  }

  submit() {
    let finalStr = this.tempanswer.replace(this.answerRef, '')
    this.notifyParent.emit(finalStr)
  }

}
