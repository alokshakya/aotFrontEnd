import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-takedemotest',
  templateUrl: './takedemotest.component.html',
  styleUrls: ['./takedemotest.component.scss']
})
export class TakedemotestComponent implements OnInit {
  
  hour=0;
  min=0;
  sec=0;
  answers=[];
  answered:number=0;
  value:number=0;





  questions = [
                {"id":"1","question":"What is the capital of India?","options":["Delhi","Goa","Gujarat","Haryana"],"click":true,"seen":true, "answered":false},
                {"id":"2","question":"Who invented Alternating Current?","options":["Tesla","Einstein","Franceworth","Edison"],"click":false,"seen":false, "answered":false},
                {"id":"3","question":"What is X?","options":["12","3","12s","d"],"click":false,"seen":false, "answered":false},
                {"id":"4","question":"What is Cl? ","options":["Chlorine","Chloride","Chloro","Chlorene"],"click":false,"seen":false, "answered":false},
                {"id":"5","question":"Sun is _ ","options":["Star","Planet","X","Satellite"],"click":false,"seen":false, "answered":false},
                {"id":"6","question":"What is AQW","options":["AQ","BX","CC","CD"],"click":false,"seen":false, "answered":false},
                {"id":"7","question":"What is AXCS","options":["AQ","VB","CS","AD"],"click":false,"seen":false, "answered":false},
                {"id":"8","question":"What is KOC","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"9","question":"What is IKO","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"10","question":"What is POLS","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"11","question":"What is LSD","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"12","question":"What is TAYS","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"13","question":"What is SLLA","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"14","question":"What is SSAA","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
                {"id":"15","question":"What is CCC","options":["AQ","B","C","D"],"click":false,"seen":false, "answered":false},
              ];



  
  constructor() {}


  totalQuestions = this.questions.length;

  select(number){
      for(let i=0;i<this.questions.length;i++)  //hide every questions
          {         
            this.questions[i]['click']=false;        
          }
      this.questions[number-1]['click'] = true; //display clicked question
      this.questions[number-1]['seen'] = true;  
  }

  clear(qnumber){
    if(this.questions[qnumber]["answered"]){
      this.answered-=1;
      this.answers[qnumber]=null;
      this.questions[qnumber]["answered"]=false;
    }else{this.answers[qnumber]=null};
    this.value = Math.floor(this.answered*100/15)

  }

  save(qnumber){
    if(qnumber==14){
      this.answered+=1;
      this.questions[qnumber]['answered'] = true;
    }
    else {
          this.questions[qnumber]['answered'] = true;
          this.questions[qnumber]['click'] = false;
          this.questions[qnumber+1]['click'] = true;
          this.answered +=1;
         }
    this.value = Math.floor(this.answered*100/15)

  }
        


  ngOnInit() {
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>{
            this.sec+=1
            if(this.sec==60){this.sec=0;this.min+=1;}
            if(this.min==60){this.min=0;this.hour+=1;}
            if(this.hour==24){this.hour=0;}
            });
    
    }
            
    

}

