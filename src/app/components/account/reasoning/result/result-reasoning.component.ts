import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result, SubjectInfo } from '../../../../services/data.service';


@Component({
  selector: 'app-result-reasoning',
  templateUrl: './result-reasoning.component.html',
  styleUrls: ['./result-reasoning.component.scss']
})
export class ResultReasoningComponent implements OnInit {
      buffer = {};
    chapterArray:Array<any>=[];
    chapterCols:any;
    chapterwiseGraph:any;
    ChapterwiseGraphOptions:any;
    combinedTests:any;
    demoTestArray:Array<any>;
    demoTestGraph:any;
    demoTestObject:any;
    firstDemoChange:boolean
    isDemoAttempted:boolean;
    options:any;
    options2:any;
    prevTabIndex:number = 0;
    testwiseGraph:any;
    resultObj:any;
    resultSummary:any;
    selectedAttempt:any;
    selectedAttemptObject:any;
    selectedChapter:any;
    selectedTest:any;
    selectedTestType:any;
    selectedTest2:any;
    selectItem:SelectItem[];
    testArray:any;
    testArray2=[];
    totalAttempts:number;
    tests:SelectItem[]
    testCols:any;
    testSummary:any;
    isTestSelected:boolean

    constructor(
        public misc:Misc,
        public result:Result,
        public subject:SubjectInfo){
    }

    ngOnInit(){
        this.makeGraph();
        this.misc.setCurrentRoute(["Reasoning","Result"]);
        this.misc.setLocalRoute('account/reasoning/result');
        this.chapterCols = [{header:'Chapter',field:'name'},{header:'Score',field:'total_correct'}];
        this.testCols = [
            {header:'Test',field:null},
            {header:'Attempted',field:'attempted'},
            {header:'Total Correct',field:'total_correct'},
            {header:'Total Incorrect',field:'total_incorrect'},
            {header:'Total Marked',field:'total_marked'},
            {header:'Score',field:'score'}
        ]
                this.setChapters();
        this.setTest('demo_test');
        this.setTestModule();
    }

    setTestModule(){
        this.tests = [{label:'Chapterwise Test',value:'c'}]
        if(this.isDemoAttempted){
            this.tests.push({label:'Demo Test',value:'d'})
        }
        this.selectedTestType = 'c';
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

        this.testwiseGraph = {
            labels:[],
            datasets:[]
        }

        this.demoTestGraph = {
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
        var cleanChapter = this.result.chapterwiseObject.selectiveChapters(this.result.reasoning.chapters);
        
        if(cleanChapter.chapters.length==0){
            return false;
        }
        this.chapterArray = cleanChapter.chapters;
        this.chapterwiseGraph.labels = cleanChapter.labels;
        this.chapterwiseGraph.datasets[0]['data'] = cleanChapter.datasets;
        this.selectedChapter = [];
        this.selectedChapter[0] = this.chapterArray[0];
        this.selectChapter();
    }

    onChapterUnselect(){
        this.isTestSelected = false;
        this.testArray = [];
        this.testArray2 = []
    }

    selectChapter(e=null){
        this.testArray2 = []
        let data;
        if(e==null){
            data = this.selectedChapter[0]
        }
        else{
            data = e.data
        }
        let testSelected:boolean;
        this.totalAttempts = 0;
        this.testArray = data.tests;
        for(let i=0;i<this.testArray.length;i++){
            this.totalAttempts+=parseInt(this.testArray[i]['attempted']);
            if(this.testArray[i]['attempted']>0){
                if(!testSelected){
                    this.selectedTest2 = []
                    this.selectedTest2[0] = this.testArray[i];
                    testSelected = true;
                }
                this.testArray2.push(this.testArray[i]);
                this.testArray2[this.testArray2.length-1]['index'] = i+1;
            }
        }
        this.selectTest();
    }

    selectTest(e=null){
        setTimeout(()=>{
            this.selectedTest = this.selectedTest2[this.selectedTest2.length-1];
            if(this.selectedTest==null){
                this.isTestSelected=false
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
            this.isTestSelected = true;
            this.multiSelectTest();
        },0)
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
            'Demo Test':'#177DB6'
        }
        this.testwiseGraph = {
            labels:[],
            datasets:[]
        }
        let labels = ['Attempt 1','Attempt 2', 'Attempt 3'];
        let datasets = [];
        for(let i in this.selectedTest2){
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_1')){
                datasets.push({
                    label:this.selectedTest2[i]['name'],
                    data:[this.selectedTest2[i]['result']['attempt_1']['score'],0,0],
                    borderColor:color[this.selectedTest2[i]['name']],
                    backgroundColor:color[this.selectedTest2[i]['name']],
                    fill:false
                })
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_2')){
                datasets[i]['data'][1] = this.selectedTest2[i]['result']['attempt_2']['score'];
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_3')){
                datasets[i]['data'][2] = this.selectedTest2[i]['result']['attempt_3']['score'];
            }
        }
        this.testwiseGraph.labels = labels;
        this.testwiseGraph.datasets = datasets;

        if(this.prevTabIndex===2){
            this.testwiseGraph.labels = ['Attempted'];
        }
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

    setTest(test){
        var object = {}
        var testArray = this.result.reasoning;
        var filteredArray = [];
        var labels = [];
        var datasets = [];
        if(testArray.hasOwnProperty(test)){
            object[test] = {};
            object[test] = {};

            object[test]['attempts'] = 0;
            object[test]['score'] = testArray[test]['score'];
            object[test]['total_correct'] = testArray[test]['total_correct'];
            object[test]['total_incorrect'] = testArray[test]['total_incorrect'];
            object[test]['total_marked'] = testArray[test]['total_marked'];
            object[test]['total_attempted'] = testArray[test]['total_marked']+testArray[test]['total_incorrect']+testArray[test]['total_correct']
            for(let i in testArray[test]['tests']){
                if(testArray[test]['tests'][i]['attempted']>0){
                    datasets.push(testArray[test]['tests'][i]['score']);
                    labels.push('Test '+(parseInt(i)+1));
                    object[test]['attempts'] += parseInt(testArray[test]['tests'][i]['attempted']);
                    filteredArray.push(testArray[test]['tests'][i]);
                    filteredArray[filteredArray.length-1]['testIndex'] = parseInt(i)+1;
                }
            }
            switch (test) {
                case "demo_test":
                    this.demoTestObject = object[test];
                    this.demoTestArray = filteredArray;
                    this.demoTestGraph.labels = labels;
                    this.demoTestGraph.datasets[0]['data'] = datasets;
                    if(this.demoTestArray.length>0){
                        this.isDemoAttempted = true;
                    }
                    break;
            }
        }
    }

    onTabChange(e){
        var val = e.value;
        var indexMap = {'s':1,'c':0,'m':2,'d':3}
        e = {};
        e['index'] = indexMap[val];
        this.buffer[this.prevTabIndex] = {}
        this.buffer[this.prevTabIndex]['selectedTest2'] = this.selectedTest2;
        this.selectedTest2 = [];

        this.testwiseGraph.datasets = [];
        if(e.index==0){
            this.selectedTest2 = this.buffer[e.index]['selectedTest2'];
            if(this.selectedTest2!=null){
                this.selectTest();
            }
        }
        if(e.index==1){
                this.selectedTest2 = this.buffer[e.index]['selectedTest2'];
                this.selectTest();
            }

        if(e.index==2){
                this.selectedTest2 = this.buffer[e.index]['selectedTest2'];
                this.selectTest();
        }

        if(e.index==3){
            if(!this.firstDemoChange){
                if(this.demoTestArray!=null){
                    this.selectedTest2[0] = this.demoTestArray[0];
                    if(this.selectedTest2!=null){
                        this.selectTest();
                    }
                }
                this.firstDemoChange = true;
            }
            else {
                this.selectedTest2 = this.buffer[e.index]['selectedTest2'];
                this.selectTest();
            }
        }
        this.prevTabIndex = e.index
    }

}