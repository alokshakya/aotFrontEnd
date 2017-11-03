import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result, SubjectInfo } from '../../../../services/data.service';
 
@Component({
  selector: 'app-result-math',
  templateUrl: './result-math.component.html',
  styleUrls: ['./result-math.component.scss']
})
export class ResultMathComponent implements OnInit {
chapterCols:any;
    selectedChapter:any;
    chapterwiseGraph:any;
    ChapterwiseGraphOptions:any;
    questionWiseGraph:any;
    questionWiseGraph2:any;
    questionWiseGraph3:any;


    testArray:any;
    selectedTest:any;
    selectedTest2:any;

    selectedAttempt:any;
    selectedAttemptObject:any;

    selectItem:SelectItem[]
    testCols:any;

    totalAttempts:number;

    resultObj:any;
    tu:boolean
    chapterArray:Array<any>=[];
    options:any;
    options2:any;
    resultSummary:any;
    testSummary:any;
    constructor(
        public misc:Misc,
        public result:Result,
        public subject:SubjectInfo){
    }

    ngOnInit(){
        this.makeGraph();
        this.misc.setCurrentRoute(["Mathematics","Result"]);
        this.misc.setLocalRoute('account/math/result');
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
            this.questionWiseGraph2.labels[i] = 'Attempt '+(parseInt(i)+1);
            this.questionWiseGraph2.datasets[0]['data'][i] = this.selectedTest['result'][this.selectItem[i]['value']]['correct']
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
                    borderColor: '#177DB6',
                    backgroundColor: '#177DB6'
                }
                ]
        }

        this.ChapterwiseGraphOptions = {
            scales:{yAxes: [{ticks: {stepSize:10,min:0}}]}
        }

        this.options = {
            scales: {
                yAxes: [{
                    ticks: {
                    max:4,
                    beginAtZero: true,
                    callback: function(value, index, values) {
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
                    })

                }
            }
        }

        this.questionWiseGraph2 = {
            labels: ['Attempt 1','Attempt 2', 'Attempt 3'],
            datasets: [
                {
                    label: 'Score',
                    data: [23,32,42],
                    fill: false,
                    borderColor: '#4BC0C0',
                    backgroundColor: '#4BC0C0'
                }
                ]
        }

        // this.options2 = {
        //     scales:{
        //         yAxes:[
        //         {ticks:{
        //             min:0,
        //             label:'Score'
        //         }}
        //         ]
        //     }
        // }

        this.options2 = {
            scales:{
                yAxes:[
                {ticks:{
                    min:0,
                    stepSize:1,
                },
            scaleLabel: {
        display: true,
        labelString: 'Score'
      }}
                ]
            }
        }
}
            

    setChapters(){
        for(let i in this.result.math.chapters){
            if(this.result.math.chapters[i].hasOwnProperty('tests')){
                this.chapterArray.push(this.result.math.chapters[i]);
                this.chapterwiseGraph.labels[i] = 'CH-'+(parseInt(i)+1);
                this.chapterwiseGraph.datasets[0]['data'][i] = this.result.math.chapters[i]['total_correct'];
            }
        }
        if(this.chapterArray.length==0){
            return false;
        }
        this.selectedChapter = []
        this.selectedChapter[0] = this.chapterArray[0]
        this.selectChapter();
    }

    selectChapter(e=null){
        let data;
        if(e==null){
            data = this.selectedChapter[0]
        }
        else{
            data = e.data
        }
        if(data.hasOwnProperty('tests')){
            this.totalAttempts = 0;
            this.testArray = data.tests;
            for(let i in this.testArray){
                this.totalAttempts += parseInt(this.testArray[i]['attempted'])
                if(this.testArray[i].attempted==0){
                    this.testArray.splice(i);
                }
            }
        }
        this.selectedTest2 = []
        this.selectedTest2[0] = data.tests[0]
        this.selectTest();
    }

    selectTest(e=null){
        setTimeout(()=>{
        this.selectedTest = this.selectedTest2[this.selectedTest2.length-1];
        if(this.selectedTest==null){
            this.tu=false
            return false;
        }
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
            this.multiSelectTest();
        },10)
    }

    multiSelectTest(){
        let data = [];
        let label = [];
        let color = {
            'Test 1':'#177DB6',
            'Test 2':'#FF6384',
            'Test 3':'#4BC0C0',
            'Test 4':'#FFCE56',
            'Test 5':'#B3B5C6',
        }
        // this.questionWiseGraph3 = {
        //     labels : ['Attempt 1', 'Attempt 2', 'Attempt 3'],
        //     datasets:[
        //     {
        //         label: '',
        //         data: [0,0,0],
        //         fill: false,
        //         borderColor: 'white',
        //         backgroundColor: 'white'
        //     },
        //     {
        //         label: '',
        //         data: [0,0,0],
        //         fill: false,
        //         borderColor: 'white',
        //         backgroundColor: 'white'
        //     },
        //     {
        //         label: '',
        //         data: [0,0,0],
        //         fill: false,
        //         borderColor: 'white',
        //         backgroundColor: 'white'
        //     },
        //     {
        //         label: '',
        //         data: [0,0,0],
        //         fill: false,
        //         borderColor: 'white',
        //         backgroundColor: 'white'
        //     },
        //     {
        //         label: '',
        //         data: [0,0,0],
        //         fill: false,
        //         borderColor: 'white',
        //         backgroundColor: 'white'
        //     }
        //     ]
        // }
            this.questionWiseGraph3 = {
                labels:[],
                datasets:[]
            }
            let labels = ['Attempt 1','Attempt 2', 'Attempt 3'];
            let datasets = [];
        for(let i in this.selectedTest2){
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_1')){
                // this.questionWiseGraph3.datasets[i]['data'][0] = this.selectedTest2[i]['result']['attempt_1']['correct'];
                // this.questionWiseGraph3.datasets[i]['label'] = this.selectedTest2[i]['name'];
                datasets.push({
                    label:this.selectedTest2[i]['name'],
                    data:[this.selectedTest2[i]['result']['attempt_1']['correct'],0,0],
                    borderColor:color[this.selectedTest2[i]['name']],
                    backgroundColor:color[this.selectedTest2[i]['name']],
                    fill:false
                })
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_2')){
                // this.questionWiseGraph3.datasets[i]['data'][1] = this.selectedTest2[i]['result']['attempt_2']['correct'];
                // this.questionWiseGraph3.datasets[i]['label'] = this.selectedTest2[i]['name'];
                datasets[i]['data'][1] = this.selectedTest2[i]['result']['attempt_2']['correct'];
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_3')){
                // this.questionWiseGraph3.datasets[i]['data'][2] = this.selectedTest2[i]['result']['attempt_3']['correct'];
                // this.questionWiseGraph3.datasets[i]['label'] = this.selectedTest2[i]['name'];
                datasets[i]['data'][2] = this.selectedTest2[i]['result']['attempt_3']['correct'];
            }
            // this.questionWiseGraph3.datasets[i]['backgroundColor'] = color[this.selectedTest2[i]['name']];
            // this.questionWiseGraph3.datasets[i]['borderColor'] = color[this.selectedTest2[i]['name']];

        }
        this.questionWiseGraph3.labels = labels;
        this.questionWiseGraph3.datasets = datasets;
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