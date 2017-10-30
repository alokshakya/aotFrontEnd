import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result, SubjectInfo } from '../../../../services/data.service';


@Component({
    selector: 'app-result-computers',
    // templateUrl: './result-computers.component.html',
    templateUrl: './test.html',

    styleUrls: ['./result-computers.component.scss']
})
export class ResultComputersComponent implements OnInit {
    chapterCols:any;
    selectedChapter:any;
    chapterwiseGraph:any;
    questionWiseGraph:any;
    testArray:any;
    selectedTest:any;
    selectedAttempt:any;
    selectedAttemptObject:any;

    selectItem:SelectItem[]
    testCols:any;

    totalAttempts:number;

    resultObj:any;
    tu:boolean
    chapterArray:Array<any>=[];
    options:any
    resultSummary:any;
    testSummary:any;
    constructor(
        public misc:Misc,
        public result:Result,
        public subject:SubjectInfo){
    }

    ngOnInit(){
        this.makeGraph();
        this.misc.setCurrentRoute(["Computers","Result"]);
        this.misc.setLocalRoute('account/computers/result');
        this.chapterCols = [{header:'Chapter',field:'name'},{header:'Score',field:'total_correct'}];
        this.testCols = [{
            header:'Test',field:null},
            {header:'Attempted',field:'attempted'},
            {header:'Total Correct',field:'total_correct'},
            {header:'Total Incorrect',field:'total_incorrect'},
            {header:'Total Marked',field:'total_marked'},
            {header:'Score',field:'total_correct'}
            ]
        this.setChapters();
    }

    makeQuestionWIseGraph(){
        let label = [];
        let data = [[],[],[]];
        for(let i in this.selectItem){
            let attemptArray = this.selectedTest['result'][this.selectItem[i]['value']]['response'];
            for(let j in attemptArray){
                if(i=='0'){
                    label.push('Q'+(parseInt(j)+1))
                }
                switch (attemptArray[j]['state']) {
                    case "m":
                        data[i].push(2)
                        break;
                    
                    case "i":
                        data[i].push(1)
                        break;
                    
                    case "c":
                        data[i].push(3)
                        break;

                    case "u":
                        data[i].push(0);
                }
            }
        }
        this.questionWiseGraph = {
            labels:label,
            datasets: [
                {
                    label: 'Attempt 1',
                    data: data[0],
                    fill: false,
                    borderColor: '#177DB6',
                    backgroundColor: '#177DB6'
                },
                {
                    label: 'Attempt 2',
                    data: data[1],
                    fill: false,
                    borderColor: '#A184F6',
                    backgroundColor: '#A184F6'
                },
                {
                    label: 'Attempt 3',
                    data: data[2],
                    fill: false,
                    borderColor: '#565656',
                    backgroundColor: '#565656'
                }
                ]
        }
        this.tu=true

    }


    makeGraph(){
        let ref = {0:'Unattempted',1:'Incorrect', 2:'Marked For Review', 3:'Correct'}
        this.chapterwiseGraph = {
            labels: [],
            datasets: [
                {
                    label: 'Score',
                    data: [],
                    fill: false,
                    borderColor: '#4BC0C0',
                    backgroundColor: '#4BC0C0'
                }
                ]
        }

        this.options = {
            scales: {
                yAxes: [{
                    ticks: {
                    max:4,
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        // console.log(index[value]);
                        return ref[value];
                    }
                }
            }
            ]
            },
            tooltips:{
                callbacks:{
                    title:((tooltipItem, data)=>{
                        return ref[tooltipItem[0]['yLabel']]
                    }),
                    label:((tooltipItem, data)=>{
                        // console.log(tooltipItem);
                    })

                }
            }
        }
}
            

    setChapters(){
        for(let i in this.result.computers.chapters){
            if(this.result.computers.chapters[i].hasOwnProperty('tests')){
                this.chapterArray.push(this.result.computers.chapters[i]);
                this.chapterwiseGraph.labels[i] = 'CH-'+(parseInt(i)+1);
                this.chapterwiseGraph.datasets[0]['data'][i] = this.result.computers.chapters[i]['total_correct'];
            }
        }
    }

    selectChapter(e){
        if(e.data.hasOwnProperty('tests')){
            this.totalAttempts = 0;
            this.testArray = e.data.tests;
            for(let i in this.testArray){
                this.totalAttempts += parseInt(this.testArray[i]['attempted'])
                if(this.testArray[i].attempted==0){
                    this.testArray.splice(i);
                }
            }
        }
    }

    selectTest(e){
        this.selectItem = [];
        if(this.selectedTest.result.hasOwnProperty('attempt_1')){
            this.selectItem.push({label:'Attempt 1',value:'attempt_1'});
        }
        if(this.selectedTest.result.hasOwnProperty('attempt_2')){
            this.selectItem.push({label:'Attempt 2',value:'attempt_2'});
        }
        if(this.selectedTest.result.hasOwnProperty('attempt_3')){
            this.selectItem.push({label:'Attempt 3',value:'attempt_3'});
        }
        this.chooseAttempt();
        this.selectedAttempt = 'attempt_1';
        this.makeQuestionWIseGraph();
        setTimeout(()=>{
            // console.log(this.selectedTest);
        },10)
    }


    shade(i){
        if(i%2!=0){
            return 'light';
        }
        return 'dark'
    }

    chooseAttempt(e=null){
        let attempt;
        if(e==null){
            attempt = this.selectItem[0].value
        }
        else{
            attempt = e.option.value;
        }
        let object = this.selectedTest['result'][attempt];
        this.selectedAttemptObject = object;
    }
}