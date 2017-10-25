import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result } from '../../../../services/data.service';


@Component({
    selector: 'app-result-computers',
    // templateUrl: './result-computers.component.html',
    templateUrl: './test.html',

    styleUrls: ['./result-computers.component.scss']
})
export class ResultComputersComponent implements OnInit {
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

    attempt:Array<any>=[];
    attemptProgress:Array<any>=[];

    selectedAttempt:any;

    chapter: any;
    sample: any;
    mock: any;
    demo: any;

    currentChapter: string;
    currentTest: string;

    currentSample: string;
    currentMock: string;
    currentDemo: string;
    dummyData;
    dummyDataProgress;
    dummyDataComplete;
    options:any;
    options1:any;
    options2:any;
    activeIndex:number;

    display:boolean

    constructor(
        public misc:Misc,
        public Result:Result){
    }

    show(chapterId, testId) {
        let object;
        let chapter;
        let attempt:string;
        for(let i in this.Result.computers.chapters){
            if(this.Result.computers.chapters[i]['id']==chapterId){
                chapter = this.Result.computers.chapters[i];
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
    //     let obj = this.Result.computers['chapters'][i];
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
    //     let correct = this.Result.computers.chapters[chapter]['tests'][test]['result']['correct'];
    //     let incorrect = this.Result.computers.chapters[chapter]['tests'][test]['result']['incorrect'];
    //     let marked = this.Result.computers.chapters[chapter]['tests'][test]['result']['marked'];
    //     let total = this.Result.computers.chapters[chapter]['tests'][test]['total_no_question'];
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
        for(let i in this.Result.computers['chapters']){
            if(this.Result.computers['chapters'][i]['total_marked']+this.Result.computers['chapters'][i]['total_incorrect']+this.Result.computers['chapters'][i]['total_correct']!=0){
                a.push(this.Result.computers['chapters'][i]);
            }
        }
        return a
    }

    makeGraph(){
        this.dummyData = {
            labels: [''],
            datasets: [
                {
                    label: 'Chapter 1',
                    backgroundColor: 'green',
                    borderColor: '#1E88E5',
                    data: [40]
                },
                {
                    label: 'Chapter 2',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [28]
                },
                                    {
                    label: 'Chapter 3',
                    backgroundColor: 'yellow',
                    borderColor: '#1E88E5',
                    data: [22]
                }
            ]
        }

        this.dummyDataComplete = {
            labels: ['Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1','Chapter 1',],
            datasets: [
                {
                    label: 'Correct',
                    fill:false,
                    backgroundColor: 'green',
                    borderColor: '#1E88E5',
                    data: [40,21,32,12,31,12,32,12,32,34,12,32,21,12,31]
                },
                {
                    label: 'Incorrect',
                    fill:false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [28,12,32,12,32,12,21,34,45,2,34,23,54,1,1]
                },
                                    {
                    label: 'Marked',
                    fill:false,
                    backgroundColor: 'yellow',
                    borderColor: '#1E88E5',
                    data: [12,0,83,2,12,3,12,12,32,31,33,21,33,56,13]
                }
            ]
        }

        this.options = {
            title: {
                display: true,
                text: 'Most Correct',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.options1 = {
            title: {
                display: true,
                text: 'Most Incorrect',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        this.options2 = {
            title: {
                display: true,
                text: 'Most Marked',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };

        this.dummyDataProgress = {
            labels: ['Attempt 1', 'Attempt 2', 'Attempt 3'],
            datasets: [
                {
                    label: 'Correct',
                    fill: false,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    data: [5,10,12]
                },
                {
                    label: 'Incorrect',
                    fill: false,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: [8,3,0]
                },
                {
                    label: 'Marked',
                    fill: false,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    data: [2,2,3]
                },
            ]
        }


    }

    ngOnInit() {
        this.dummyData = {
            labels: ['CH-1'],
            datasets: [
                {
                    label: 'Correct',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65]
                }
            ]
        }
        this.selectedAttempt = 'attempt 1';
        this.attemptProgress.push({label:"Select Chapter",value:null});
        this.attempt.push({label:'1',value:'attempt 1'});
        this.attempt.push({label:'2',value:'attempt 2'});
        this.attempt.push({label:'3',value:'attempt 3'});
        this.misc.setCurrentRoute(["Computers","Result"]);
        this.misc.setLocalRoute('account/computers/result');
        this.showMark = true;
        this.resultPanel();
        this.makeGraph();
    }

}