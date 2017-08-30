import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import {Message} from 'primeng/primeng';
import { Observable } from 'rxjs/Rx'
import { ConfirmationService } from 'primeng/primeng';
import { MasterHttpService } from '../../../../services/masterhttp.service';
import { SubjectInfo, Misc, chapterwiseTest, PersonalInfo } from '../../../../services/data.service';
import { ComponentCanDeactivate } from '../../../account.guard';
// import * as constants from '../../../../../config/constants'

@Component({
    selector: 'app-takedemotest',
    templateUrl: './takedemotest.component.html',
    styleUrls: ['./takedemotest.component.scss']
})
export class TakedemotestComponent implements OnInit, ComponentCanDeactivate {

    //header  
    test: string;
    subject: string;
    timer: number;
    sec: number;
    min: number;
    hour: number;

    help: boolean;

    start: boolean;

    counter: number;

    clickListener: string;

    questionNumber: string;

    questionWindow: boolean;

    questionsPool: any;

    selectedQuestion: any;

    answer: string;

    response: any;

    questionStatus: any;

    hintDisplay: any;

    totalQuestions: number;

    correct: boolean;
    sessionToken: string;
    wrapper: any;
    totalQues: number;
    correctAnswer: number;
    attemptedQues: number = 0;
    stopFlag:boolean;
    history:boolean;
    attemptHistory:any;

    lastQuestion:number;
    errMsg:Message[];
    imageUrl:string

    constructor(
        public router: Router,
        public confirmservice: ConfirmationService,
        public masterhttp: MasterHttpService,
        public subjectInfo: SubjectInfo,
        public personalInfo: PersonalInfo,
        public chapterwiseTest: chapterwiseTest,
        public misc:Misc ) {
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
        this.imageUrl = 'https://s3.ap-south-1.amazonaws.com/olympiadbox/oa-images/Data';
    }

    ngOnInit() {
        this.setResponse();
        this.startTest();
        this.displayQuestion(this.lastQuestion);
        this.wrapper = { 'student_test_id': this.chapterwiseTest.attemptDetails['students_test_id'], }
        this.totalQues = this.chapterwiseTest.qaSet.length;
        this.masterhttp.getTestDetails();
    }

    displayQuestion(index) {
        this.clickListener = index;
        this.selectedQuestion = this.chapterwiseTest.qaSet[index];
        this.answer = null;
        this.hintDisplay = false;
        this.history = false;
        this.setCorrectAnswer();
        this.showHint();
    }

    setResponse(){
        if(this.chapterwiseTest.attemptDetails['last_question']==0){
            this.lastQuestion = 0;
        }
        for (let i in this.chapterwiseTest.qaSet){
            if(this.chapterwiseTest.qaSet[i]['id']==this.chapterwiseTest.attemptDetails['last_question']){
                this.lastQuestion = parseInt(i);
            }
            switch (this.chapterwiseTest.qaSet[i]['state']) {
            case "correct":
                this.questionStatus[i] = "Correct";
                break;
            
            case "wrong":
                this.questionStatus[i] = "Wrong";
                break;

            case "marked":
                this.questionStatus[i] = "Marked"
                break;
            }
        }
    }

    setCorrectAnswer(){
        for (let i in this.selectedQuestion['answers']) {
            if (this.selectedQuestion['answers'][i]['id'] == this.selectedQuestion['correct_answer_id']) {
                this.correctAnswer = this.selectedQuestion['answers'][i];
                break;
            }
        }
    }

    validateds() {
        this.response[this.questionNumber] = this.answer[0];
        this.hintDisplay = true;
        this.counter += Math.ceil(100 / 11);
        if (this.answer[0] == this.selectedQuestion["CorrectAnswer"]) {
            this.correct = true;
            this.questionStatus[this.clickListener] = "Correct";
        }
        else {
            this.correct = false;
            this.questionStatus[this.clickListener] = "Wrong";
        }
    }

    validate() {
        this.response[this.clickListener] = this.selectedQuestion['answers'][this.answer];
        this.wrapper['mark_for_review'] = "0";
        this.wrapper['question_id'] = this.selectedQuestion['id'];
        this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
        this.wrapper['attempted_answer'] = this.selectedQuestion['answers'][this.answer]['id'];
        this.masterhttp.nextQuestion(this.wrapper).subscribe((data) => {
            if (data['status'] == 200) {       
                this.attemptedQues += 1;
                this.counter = Math.ceil(this.attemptedQues * 100 / this.totalQues);
                // this.counter+=Math.ceil(100/this.totalQues);
                if (this.selectedQuestion['correct_answer_id'] == this.selectedQuestion['answers'][this.answer]['id']) {
                    this.questionStatus[this.clickListener] = "Correct";
                    this.correct = true;
                }
                else {
                    this.correct = false;
                    this.questionStatus[this.clickListener] = "Wrong";
                }
                this.showHint();
            }
            else{
                this.errMsg = [];
                this.errMsg.push({severity:'error',summary:'Error',detail:'Error While Saving Response'});
            }
        },
        err=>{
                this.errMsg = [];
                this.errMsg.push({severity:'error',summary:'Error',detail:'Error While Saving Response'});
            })
    }


    markForReview() {
        this.wrapper['mark_for_review'] = "1";
        this.wrapper['question_id'] = this.selectedQuestion['id'];
        this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
        this.wrapper['attempted_answer'] = "0";
        this.masterhttp.nextQuestion(this.wrapper)
        .subscribe((data) => {
            if (data['status'] == 200) {             
                this.attemptedQues += 1;
                this.counter = Math.ceil(this.attemptedQues * 100 / this.totalQues);
                this.updateView();
                this.answer = null;
                this.correctAnswer = null;
            }
            else{
                this.errMsg = [];
                this.errMsg.push({severity:'error',summary:'Error',detail:'Error While Saving Response'});
            } 
            },
            err=>{
                this.errMsg = [];
                this.errMsg.push({severity:'error',summary:'Error',detail:'Error While Saving Response'});
            }
        )
    }

    nextQuestion() {
        if(parseInt(this.clickListener) == this.totalQues-1){
            this.displayQuestion(0);
        }
        else this.displayQuestion(this.clickListener+1);
    }

    showHint(){
        if(this.validated()){
            if(this.questionStatus[this.clickListener]=="Marked"){
                this.hintDisplay = false;
            }
            else if(this.questionStatus[this.clickListener]=="Correct"){
                this.correct = true;
                this.hintDisplay = true;  
            }
            else if(this.questionStatus[this.clickListener]=="Wrong"){
                this.correct = false;
                this.hintDisplay = true;
            }
        }
    }

    mark() {
        let q = this.clickListener;
        this.questionStatus[q] = 'Marked';
    }

    updateView() {
        let q = this.clickListener;
        this.questionStatus[q] = 'Marked';
    }


    startTest() {
        if (this.start == false) {
            let timer = Observable.timer(0, 1000); //initiate timer
            this.help = false;
            timer.subscribe(t => {
                this.sec += 1;
                if (this.sec == 60) { this.sec = 0; this.min += 1; }
                if (this.min == 60) { this.min = 0; this.hour += 1; }
                if (this.hour == 24) { this.hour = 0; }
            });
        }
    }

    validated() {
        if (this.questionStatus[this.clickListener] == "Correct" || this.questionStatus[this.clickListener] == "Wrong" || this.questionStatus[this.clickListener] == "Marked") {
            return true;
        }
        return false;
    }

    subscribed(sub) {
        return true;
    }

    quit() {
        this.stopFlag = true;
        this.confirmservice.confirm({
            message: 'Are you sure you want to quit ?',
            accept: () => {
                this.router.navigate([sessionStorage['route']]);
            },
            reject: () =>{
                this.stopFlag = false;
            }
        });
    }

    canDeactivate():Observable<boolean> | boolean{
        if(this.stopFlag){
            return true;
        }
        return false;
    }

    ngOnDestroy(){
        this.stopFlag = false;
        this.chapterwiseTest.activateRoute = false;
    }

}

