import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { ConfirmationService } from 'primeng/primeng';
import { MasterHttpService } from '../../../../services/masterhttp.service';
import { SubjectInfo, chapterwiseTest, PersonalInfo } from '../../../../services/data.service'


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

    help:boolean;
    
    start:boolean;

    counter:number;
    
    clickListener:string;
    
    questionNumber:string;
    
    questionWindow:boolean;
    
    questionsPool:any;

    selectedQuestion:any;
    
    answer:string;
    
    response:any;
    
    questionStatus:any;
        
    hintDisplay:any;
    
    totalQuestions:number;
    
    correct:boolean;
    sessionToken:string;
    wrapper:any;
    totalQues:number;
    correctAnswer:number;
    attemptedQues:number = 0;

  constructor(
      public router: Router,
      public confirmservice: ConfirmationService,
      public masterhttp: MasterHttpService,
      public subjectInfo: SubjectInfo,
      public personalInfo:PersonalInfo,
      public chapterwiseTest: chapterwiseTest)
      
      {
      this.counter = 0;
      this.clickListener = '';
      this.test = "Demo Test"
      this.subject = "Computer/Cyber" 
      this.start = false;
      this.sec = 0;
      this.min = 0;
      this.hour = 0;
      this.hintDisplay = false;
      this.response = {};
      this.questionStatus = {};

      
      this.questionsPool = {
                          "Question1": {
                            "Question": "QUESTION STATEMENT--",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "DISPLAY HINT",
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
                          
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                            "Question": "QUESTION STATEMENT--",
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
                          "Question12": {
                            "Question": "QUESTION STATEMENT--",
                            "Options": {
                                "A": "3*10^8 m/s",
                                "B": "3*10^8 km/h",
                                "C": "3*10^6 m/s",
                                "D": "3*10^6 m/s"
                            },
                            "CorrectAnswer": "A" ,
                            "Explaination": "Speed of light (C) remains constant everywhere i.e 3*10^8",
                            "image": "asd"
                          },"Question13":"",
                          "Question14":"",
                          "Question15":"",
                          "Question16":"",
                          "Question17":"",
                          "Question18":"",
                          "Question19":"",
                          "Question20":"",
                          "Question21":"",
                          "Question22":"",
                          "Question23":"",
                          "Question24":"",
                          "Question25":"",
                          "Question26":"",
                          "Question27":"",
                          "Question28":"",
                          "Question29":"",
                          "Question30":"",
                          "Question31":"",
                          "Question32":"",
                          "Question33":"",
                          "Question34":"",
                          "Question35":"",
                          "Question36":"",
                          "Question37":"",
                          "Question38":"",
                          "Question39":"",
                          "Question40":"",
                          "Question41":"",
                          "Question42":"",
                          "Question43":"",
                          "Question44":"",
                          "Question45":"",
                          "Question46":"",
                          "Question47":"",
                          "Question48":"",
                          "Question49":"",
                          "Question50":"",

      }

      this.totalQuestions = Object.keys(this.questionsPool).length;
    }
  
  ngOnInit(){
      this.startTest();
      this.displayQuestion(0);
      this.wrapper = {'student_test_id':this.chapterwiseTest.attemptDetails['students_test_id'],}
      this.totalQues = this.chapterwiseTest.qaSet.length;
  }

//   getQuestions(){
//       this.sessionToken = localStorage.getItem('session_token')
//       this.demotest.getQuestionsSet()
//       .subscribe((data: Response) => {
//           data = data['resource'];
//           let k = 1
//           for(let i in data){
//               this.questionsPool['Question'+k]['Question'] = data[i]['questions_by_question_id']['question']
//               k=k+1;
//             }
//         })
//         this.help = true;
//         this.startTest();

//   }
  
  isLogin(token){
    //   if (token == null||token==''){
    //       this.router.navigate(['login']); 
    //   }else{ this.getQuestions() }
    // this.getQuestions();
  }
     

  redirect(){
      this.router.navigate(['account/dashboard']);
  }
  
  
  displayQuestion(index){  //questionDisplayed: KEY 
      this.answer = null;
      // this.selectedQuestion = this.questionsPool[questionDisplayed];
      // this.questionNumber = "Q" + questionNumber + ". ";
      // this.questionWindow = true;
      this.hintDisplay = false;
      this.clickListener = index;
      this.selectedQuestion = this.chapterwiseTest.qaSet[index];
    }

  radio(){
  }

  validateds(){
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

  validate(){
    for(let i in this.selectedQuestion['answers']){
      if(this.selectedQuestion['answers'][i]['id'] == this.selectedQuestion['correct_answer_id']){
        this.correctAnswer = this.selectedQuestion['answers'][i];
      }
    }
    this.attemptedQues += 1;
    this.counter = Math.ceil(this.attemptedQues*100/this.totalQues);


    this.wrapper['mark_for_review']="0";
    this.wrapper['question_id'] = this.selectedQuestion['id'];
    this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
    this.wrapper['attempted_answer'] = this.selectedQuestion['answers'][this.answer]['id'];
    this.masterhttp.nextQuestion(this.wrapper).subscribe((data)=>{
      if(data['status']==200){
      }
    })
    // this.counter+=Math.ceil(100/this.totalQues);
    if(this.selectedQuestion['correct_answer_id'] == this.selectedQuestion['answers'][this.answer]['id']){
      this.questionStatus[this.clickListener] = "Correct";
      this.correct=true;

    }
    else{
      this.correct=false;
      this.questionStatus[this.clickListener] = "Wrong";
    }
    this.hintDisplay = true;
    this.answer = null;
  }


  markForReview(){
    this.attemptedQues += 1;
    this.counter = Math.ceil(this.attemptedQues*100/this.totalQues);
    
    this.wrapper['mark_for_review']="1";
    this.wrapper['question_id'] = this.selectedQuestion['id'];
    this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
    this.wrapper['attempted_answer'] = "null";
    this.masterhttp.nextQuestion(this.wrapper).subscribe((data)=>{
      if(data['status']==200){
        this.updateView();
      }
    })
    this.answer = null;
  }

  nextQuestion(){
    if(this.answer==null){
      if(parseInt(this.clickListener) == this.totalQues-1){
      this.displayQuestion(0);
      }
      else{
        this.displayQuestion(parseInt(this.clickListener)+1)
      }
    }
    else{
     if(parseInt(this.clickListener) == this.totalQues-1){
      this.validate();
      this.displayQuestion(0);
      }
      else{
        this.validate();
        this.displayQuestion(parseInt(this.clickListener)+1)
      } 
    }
  }

    
  // next(){
  //     let b = this.clickListener;
  //     let a = 'Question'+(b+1);
  //     this.displayQuestion(a,b+1);
  //   }

  // previous(){
  //     let b = parseInt(this.clickListener)-1 
  //     let a = 'Question'+(b-1);
  //     this.displayQuestion(a, b)
  // }

  mark(){
    let q = this.clickListener;
    this.questionStatus[q]='Marked';
  }

  updateView(){
    let q = this.clickListener;
    this.questionStatus[q]='Marked';
  }


  startTest(){
      if(this.start==false){
          let timer = Observable.timer(0,1000); //initiate timer
          this.help=false;
          timer.subscribe(t=>{
              this.sec+=1;
              if(this.sec==60){this.sec=0;this.min+=1;}
              if(this.min==60){this.min=0;this.hour+=1;}
              if(this.hour==24){this.hour=0;}
            });
            // this.displayQuestion('Question1',1);
        }
    }
  



  validated(){
      if(this.questionStatus[this.clickListener]=="Correct"||this.questionStatus[this.clickListener]=="Wrong"||this.questionStatus[this.clickListener]=="Marked"){
          return true
      }
  }

  subscribed(sub){
      return true;
  }

  quit(){
     this.confirmservice.confirm({
            message: 'Are you sure you want to quit ?',
            accept: () => {
                this.router.navigate(['account/dashboard']);

            }
        });
    }


}

  
            
    


