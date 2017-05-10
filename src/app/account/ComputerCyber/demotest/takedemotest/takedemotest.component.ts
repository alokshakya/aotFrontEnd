import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { SubjectService } from '../../../../services/subject.service'

@Component({
  selector: 'app-takedemotest',
  templateUrl: './takedemotest.component.html',
  styleUrls: ['./takedemotest.component.scss']
})
export class TakedemotestComponent implements OnInit {
    //header  
    test:string;
    subject:string; 
    timer:number;
    sec:number;
    min:number;
    hour:number;
    
    instructions:boolean;
    start:boolean;

    counter:number;
    
    clickListener:string;
    
    questionNumber:string;
    
    questionWindow:boolean;
    
    questionsPool:any;

    selectedQuestion:any;
    
    answer:Array<string>;
    
    response:any;
    
    questionStatus:any;
        
    hintDisplay:any;
    
    totalQuestions:number;
    
    correct:boolean;
    questionPool1:any;

  constructor(
      private router: Router,
      private demotest: SubjectService)
      
      {
      this.questionsPool = {
                          "Question1": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          },
                          "Question2": {
                            "Question": "Question 2 statement",
                            "Options": {
                                "A": "Option A",
                                "B": "Option B",
                                "C": "Option C",
                                "D": "Option D"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Explaination of answer",
                            "image": "asd"
                          },
                          "Question3": {
                          
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          
                          },
                          "Question4": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          },
                          "Question5": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          },
                          "Question6": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          },
                          "Question7": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8 m/s",
                            "image": "asd"
                          },
                          "Question8": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8",
                            "image": "asd"
                          },
                          "Question9": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8",
                            "image": "asd"
                          },
                          "Question10": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8",
                            "image": "asd"
                          },
                          "Question11": {
                            "Question": "What is the speed of light",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8",
                            "image": "asd"
                          },
      }

      this.totalQuestions = Object.keys(this.questionsPool).length;
    }
  
  ngOnInit(){
      var token=localStorage.getItem('session_token')
      if(token==''||token==null){
        this.router.navigate(['login']);
      }else{
      this.counter = 0;
      this.clickListener = '';
      this.test = "Demo Test"
      this.subject = "Computer/Cyber" 
      this.start = false;
      this.sec = 0;
      this.min = 0;
      this.hour = 0;
      this.instructions = true;
      this.hintDisplay = false;
      this.response = {};
      this.questionStatus = {};

      this.demotest.getQuestionsSet()
      .subscribe((data: Response) => {
          data = data['resource'];
          let k = 1
          for(let i in data){
            this.questionsPool['Question'+k]['Question'] = data[i]['questions_by_question_id']['question']
              k=k+1;
          }
      })
      }
}


     

  redirect(){
      this.router.navigate(['account/dashboard']);
  }
  
  
  displayQuestion(questionDisplayed,questionNumber){  //questionDisplayed: KEY 
      this.answer = null;
      this.selectedQuestion = this.questionsPool[questionDisplayed];
      this.questionNumber = "Q" + questionNumber + ". ";
      this.questionWindow = true;
      this.hintDisplay = false;
      this.clickListener = questionNumber;
    }

  validate(){
      this.response[this.questionNumber]=this.answer[0];
      this.hintDisplay=true;
      this.counter+= Math.ceil(100/11);
      if(this.answer[0]==this.selectedQuestion["CorrectAnswer"]){
          this.correct=true;
          this.questionStatus[this.clickListener] = "Correct";
        }
        else{
            this.correct = false;
            this.questionStatus[this.clickListener] = "Wrong";
        }
    }
    
  next(){
      var b = this.clickListener;
      var a = 'Question'+(b+1);
      this.displayQuestion(a,b+1);
    }

  mark(){
    var q = this.clickListener;
    this.questionStatus[q]='Marked';
  }

  startTest(){
      if(this.start==false){
          let timer = Observable.timer(0,1000); //initiate timer
          this.instructions=false;
          timer.subscribe(t=>{
              this.sec+=1;
              if(this.sec==60){this.sec=0;this.min+=1;}
              if(this.min==60){this.min=0;this.hour+=1;}
              if(this.hour==24){this.hour=0;}
            });
            this.displayQuestion('Question1',1);
        }
    }  

  validated(){
      if(this.questionStatus[this.clickListener]=="Correct"||this.questionStatus[this.clickListener]=="Wrong"){
          return true
      }
  }


}

  
            
    


