import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result } from '../../../../services/data.service';

@Component({
  selector: 'app-result-english',
  templateUrl: './result-english.component.html',
  styleUrls: ['./result-english.component.scss']
})
export class ResultEnglishComponent implements OnInit {
detailedResult: any;
    resultSummary: any;
    chapterwiseSummary: any;

    testResponse: any;

    overview: any;
    organisation: SelectItem[];
    selectedOrg: string;
    showSample: boolean;
    showDemo: boolean;
    showMock: boolean;
    showResult: boolean;

    showMark: boolean;
    showMarkSample: boolean;
    showMarkMock: boolean;
    showMarkDemo: boolean;

    chapter: any;
    sample: any;
    mock: any;
    demo: any;

    currentChapter: string;
    currentTest: string;

    currentSample: string;
    currentMock: string;
    currentDemo: string;


    constructor(
        public misc:Misc,
        public Result:Result){
    }

    show(chapterId, testId) {
        let object;
        let chapter;
        let attempt:string;
        for(let i in this.Result.english.chapters){
            if(this.Result.english.chapters[i]['id']==chapterId){
                chapter = this.Result.english.chapters[i];
                break;
            }
        }
        for(let i in chapter['tests']){
            if(chapter['tests'][i]['id']==testId){
                object = chapter['tests'][i];
            }
        }
        switch (object['attempted']) {
            case "1":
                attempt = 'attempt_1'
                break;

            case "2":
                attempt = 'attempt_2'
                break;

            case "3":
                attempt = 'attempt_3'
                break;
        }
        this.currentChapter = chapter['name'];
        this.currentTest = object['name'];
        this.chapter = {
            Test:object['name'],
            'Total Questions':object['total_no_question'],
            'Attempted':object['result'][attempt]['total_attempted_questions'],
            'Correct':object['result'][attempt]['correct'],
            'Incorrect':object['result'][attempt]['incorrect'],
            'Marked':object['result'][attempt]['marked'],
            'Score':object['result'][attempt]['correct'],
        }
        this.showResult = true;
        this.resultSummary = object['result'][attempt]['response'];
    }

    sampleResult(s) {
        this.sample = {};
        this.sample = this.detailedResult['Sample Test'][s];
        this.currentSample = s;
        this.showSample = true;
    }

    demoResult(number) {
        this.demo = { number };
        this.demo = this.detailedResult['Demo Test'][number];
        this.currentDemo = number;
        this.showDemo = true;
    }

    mockResult(number) {
        this.mock = {};
        this.mock = this.detailedResult['Mock Test'][number];
        this.currentMock = number
        this.showMock = true;
    }

    close(e) {
        this.showResult = false;
        this.showDemo = false;
        this.showSample = false;
        this.showMock = false;
    }

    showPanel(e) {
    }

    // clubbedWidth(i,toggle=false){
    //     let obj = this.Result.english['chapters'][i];
    //     let correct = 0;
    //     let marked = 0;
    //     let incorrect = 0;
    //     if(obj.hasOwnProperty('tests')){
    //         for (let k in obj['tests']) {
    //             if(obj['tests'][k]['attempted']==1){
    //                 correct = correct + obj['tests'][k]['result']['attempt_1']['correct'];
    //                 marked = marked + obj['tests'][k]['result']['attempt_1']['marked'];
    //                 incorrect = incorrect + obj['tests'][k]['result']['attempt_1']['incorrect'];
    //             }
    //             else if(obj['tests'][k]['attempted']==2){
    //                 correct = correct + obj['tests'][k]['result']['attempt_2']['correct'];
    //                 marked = marked + obj['tests'][k]['result']['attempt_2']['marked'];
    //                 incorrect = incorrect + obj['tests'][k]['result']['attempt_2']['incorrect'];
    //             }
    //             else if(obj['tests'][k]['attempted']==2){
    //                 correct = correct + obj['tests'][k]['result']['attempt_3']['correct'];
    //                 marked = marked + obj['tests'][k]['result']['attempt_3']['marked'];
    //                 incorrect = incorrect + obj['tests'][k]['result']['attempt_3']['incorrect'];
    //             }
    //         }
    //     }
    //     let cor = correct*100/(marked+incorrect+correct);
    //     let inc = incorrect*100/(marked+incorrect+correct);
    //     let mar = marked*100/(marked+incorrect+correct);
    //     if(toggle){
    //         let cor = correct*100/(incorrect+correct);
    //         let inc = incorrect*100/(incorrect+correct);
    //         return [cor,inc];
    //     }
    //     return [cor,mar,inc];
    // }

    // width(chapter,test,toggle=false){
    //     let correct = this.Result.english.chapters[chapter]['tests'][test]['result']['correct'];
    //     let incorrect = this.Result.english.chapters[chapter]['tests'][test]['result']['incorrect'];
    //     let marked = this.Result.english.chapters[chapter]['tests'][test]['result']['marked'];
    //     let total = this.Result.english.chapters[chapter]['tests'][test]['total_no_question'];
    //     if(toggle){
    //         let cor = correct*100/(correct+incorrect);
    //         let inc = incorrect*100/(correct+incorrect);
    //         return [cor,inc];
    //     }
    //     let cor = correct*100/(marked+incorrect+correct);
    //     let inc = incorrect*100/(marked+incorrect+correct);
    //     let mar = marked*100/(marked+incorrect+correct);
    //     return [cor,mar,inc];
    // }

    headerWidth(total,correct,incorrect,marked,toggle=false){
        if(toggle){
            let cor = correct*100/(correct+incorrect);
            let inc = incorrect*100/(correct+incorrect);
            return [cor,inc];
        }
        let cor = correct*100/(marked+incorrect+correct);
        let inc = incorrect*100/(marked+incorrect+correct);
        let mar = marked*100/(marked+incorrect+correct);
        return [cor,mar,inc];
    }

    resultPanel(){
        let a = [];
        for(let i in this.Result.english['chapters']){
            if(this.Result.english['chapters'][i]['total_marked']+this.Result.english['chapters'][i]['total_incorrect']+this.Result.english['chapters'][i]['total_correct']!=0){
                a.push(this.Result.english['chapters'][i]);
            }
        }
        return a
    }


    ngOnInit() {
        this.misc.setCurrentRoute(["English","Result"]);
        this.misc.setLocalRoute('account/english/result');

        this.resultPanel();
        this.showMark = true;

    }

}