import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questionList = [];
  question: any;
  validateAnswer: boolean;
  showAnswer: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuestions()
    // this.questionList = [
    //   {
    //     "title": "Dictionary",
    //     "subText": "Add an additional property  <code>property2</code> and <code> value2</code>",
    //     "question": "Given a dictionary with the property <code>property1</code> and value <code>value1</code>. Add additional proper",
    //     "files": {
    //       "name": "test.yaml",
    //       "stage": {
    //         "property1": "value1"
    //       },
    //       "answers": {
    //         "property1": "value1",
    //         "property2": "value2"
    //       }
    //     }
    //   },
    //   {
    //     "title": "Dictionary in Dictionary",
    //     "subText": "<table><tr> <th>key/property</th><th>value</th></tr>  <tr><td>name</td> <td>john</td> </tr>  <tr>  <td>gender</td> <td>male</td>  </tr>  <tr><td>age</td><td>24</td>  </tr> </table>",
    //     "question": "a dictionary <code> employee</code> is given. Add the remaing properties to it using information from the subtext ",
    //     "files": {
    //       "name": "employee.yaml",
    //       "stage": {
    //         "eployee": {
    //           "name": "john"
    //         }
    //       },
    //       "answers": {
    //         "eployee": {
    //           "name": "john",
    //           "gender": "male",
    //           "age": 24
    //         }
    //       }
    //     }
    //   },
    //   {
    //     "title": "Dictionary",
    //     "subText": "<table><tr> <th>key/property</th><th>value</th></tr>  <tr><td>name</td> <td>apple</td> </tr>  <tr>  <td>color</td> <td>red</td>  </tr>  <tr><td>weight</td><td>90g</td>  </tr> </table>",
    //     "question": "Given a dictionary with the property <code>name</code> and value <code>apple</code>. Add additional proper",
    //     "files": {
    //       "name": "fruits.yaml",
    //       "stage": {
    //         "name": "apple"
    //       },
    //       "answers": {
    //         "name": "apple",
    //         "color": "red",
    //         "weight": "90g"
    //       }
    //     }
    //   }
    // ]
    
  }


  getAnswer($event) {    
    this.validateAnswer = true
    var properties = $event.replace('\n', ',').split(',');
    var obj = {}
    properties.forEach((property, i) => {
      var tup = property.split(':');
      obj[tup[0]] = tup[1];

    });
    let objKey = Object.keys(obj)
    let stage = this.question.files.stage
    let stageKey = Object.keys(stage)

    let answers = this.question.files.answers
    this.itrateAnswer(answers, stageKey, objKey);

  }


  // itrateover answers object and validate
  private itrateAnswer(answers: any, stageKey: string[], objKey: string[]) {
    for (let [key, value] of Object.entries(answers)) {
      console.log(`${key}: ${value}`);
      if (this.validateAnswer) {

        if (typeof (this.question.files.stage[key]) == 'object') {
          stageKey = stageKey.concat(Object.keys(this.question.files.stage[key]))
        }
        if (!stageKey.includes(key) && typeof (answers[key]) != 'object') {
          if (!objKey.includes(key)) {
            this.validateAnswer = false;
          }
          else if (objKey.includes(key) && !objKey[key] == value) {
            this.validateAnswer = false;
          }
        }
        else if (typeof (answers[key]) == 'object' && this.validateAnswer) {
          this.itrateAnswer(answers[key], stageKey, objKey);
        }
      }
    }

    if (this.validateAnswer) {
      alert("Answer is correct")
    } else {
      alert("Answer is wrong")
    }
  }



  next() {
    let index = this.questionList.indexOf(this.question);
    if (this.questionList[++index]) {
      this.question = this.questionList[index]
    }

  }

  pre() {
    let index = this.questionList.indexOf(this.question);
    if (this.questionList[--index]) {
      this.question = this.questionList[index]
    }

  }

  showHideAns() {
    this.showAnswer = !this.showAnswer
  }

  // make flask  server call 
  getQuestions() {
    return this.http.get<any>('http://127.0.0.1:8081/question').subscribe(response => {      
      this.questionList = response;
      this.question = this.questionList[0]
     });

    }
}
