import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc, Result, SubjectInfo } from '../../../../services/data.service';
 
@Component({
  selector: 'app-result-math',
  templateUrl: './result-math.component.html',
  styleUrls: ['./result-math.component.scss']
})
export class ResultMathComponent implements OnInit {
    buffer = {};
    chapterArray:Array<any>=[];
    chapterCols:any;
    chapterwiseGraph:any;
    ChapterwiseGraphOptions:any;
    firstChange:boolean;
    options:any;
    options2:any;
    prevTabIndex:number = 0;
    testwiseGraph:any;
    resultObj:any;
    resultSummary:any;
    sampleTestArray:Array<any>;
    sampleTestGraph:any;
    sampleTestObject:any;
    selectedAttempt:any;
    selectedAttemptObject:any;
    selectedChapter:any;
    selectedSampleTest:Array<any>;
    selectedTest:any;
    selectedTest2:any;
    selectItem:SelectItem[]
    testArray:any;
    testArray2=[];
    totalAttempts:number;
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
        this.misc.setCurrentRoute(["Mathematics","Result"]);
        this.misc.setLocalRoute('account/math/result');
        this.chapterCols = [{header:'Chapter',field:'name'},{header:'Score',field:'total_correct'}];
        this.testCols = [
            {header:'Test',field:null},
            {header:'Attempted',field:'attempted'},
            {header:'Total Correct',field:'total_correct'},
            {header:'Total Incorrect',field:'total_incorrect'},
            {header:'Total Marked',field:'total_marked'},
            {header:'Score',field:'total_correct'}
        ]
        this.setChapters();
        this.setSampleTest();
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

        this.sampleTestGraph = {
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
        var cleanChapter = this.result.chapterwiseObject.selectiveChapters(this.result.math.chapters);
        
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

    selectTest(e=null,sample=false){
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
            'sample test 1':'#177DB6',
            'sample test 2':'#FF6384',
            'sample test 3':'#4BC0C0',
            'sample test 4':'#FFCE56',
            'sample test 5':'#B3B5C6',
            'sample test 6':'#573423',
            'sample test 7':'#57797D',
            'sample test 8':'#CBAC85',
            'sample test 9':'#B6D548',
            'sample test 10':'#CEC500',
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
                    data:[this.selectedTest2[i]['result']['attempt_1']['correct'],0,0],
                    borderColor:color[this.selectedTest2[i]['name']],
                    backgroundColor:color[this.selectedTest2[i]['name']],
                    fill:false
                })
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_2')){
                datasets[i]['data'][1] = this.selectedTest2[i]['result']['attempt_2']['correct'];
            }
            if(this.selectedTest2[i].result.hasOwnProperty('attempt_3')){
                datasets[i]['data'][2] = this.selectedTest2[i]['result']['attempt_3']['correct'];
            }
        }
        this.testwiseGraph.labels = labels;
        this.testwiseGraph.datasets = datasets;
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

    setSampleTest(){
        var testArray = this.result.math;
        var filteredArray = [];
        var labels = [];
        var datasets = [];
        if(testArray.hasOwnProperty('sample_test')){
            this.sampleTestObject = {};
            this.sampleTestObject['attempts'] = 0;
            this.sampleTestObject['score'] = testArray['sample_test']['score'];
            this.sampleTestObject['total_correct'] = testArray['sample_test']['total_correct'];
            this.sampleTestObject['total_incorrect'] = testArray['sample_test']['total_incorrect'];
            this.sampleTestObject['total_marked'] = testArray['sample_test']['total_marked'];
            this.sampleTestObject['total_attempted'] = testArray['sample_test']['total_marked']+testArray['sample_test']['total_incorrect']+testArray['sample_test']['total_correct']
            for(let i in testArray['sample_test']['tests']){
                if(testArray['sample_test']['tests'][i]['attempted']>0){
                    datasets.push(testArray['sample_test']['tests'][i]['score']);
                    labels.push('Test '+(parseInt(i)+1));
                    this.sampleTestObject['attempts'] += parseInt(testArray['sample_test']['tests'][i]['attempted']);
                    filteredArray.push(testArray['sample_test']['tests'][i]);
                    filteredArray[filteredArray.length-1]['testIndex'] = parseInt(i)+1;
                }
            }
        }
        if(filteredArray.length==0){
           return false; 
        }
        this.sampleTestArray = filteredArray;
        this.sampleTestGraph.labels = labels;
        this.sampleTestGraph.datasets[0]['data'] = datasets;
    }

    onTabChange(e){
        var localBuffer = {
            setObject:(index) =>{
                localBuffer[index] = {
                    selectedTest2: this.selectedTest2,
                    graph: {labels:this.testwiseGraph.labels,datasets:this.testwiseGraph.datasets},
                    selectedAttemptObject: this.selectedAttemptObject,
                    selectedAttempt: this.selectedAttempt,
                    selectedTest: this.selectedTest,
                }
                return localBuffer[index];
            },

            restore:(index)=>{
                this.selectedTest2 = this.buffer[index].selectedTest2;
                this.testwiseGraph.datasets = this.buffer[index].graph.datasets;
                this.testwiseGraph.labels = this.buffer[index].graph.labels;
                this.selectedAttemptObject = this.buffer[index].selectedAttemptObject;
                this.selectedAttempt = this.buffer[index].selectedAttempt;
                this.selectedTest = this.buffer[index].selectedTest;
            }
        };
        this.buffer[this.prevTabIndex] = localBuffer.setObject(this.prevTabIndex);
        this.selectedTest2 = [];
        this.testwiseGraph.datasets = [];
        this.testwiseGraph.label = [];
        this.selectedAttemptObject = null;
        this.selectedAttempt = null;
        this.selectedTest = null;
        if(!this.firstChange){
            if(e.index==1&&this.sampleTestArray.length>0){
                this.selectedTest2[0] = this.sampleTestArray[0];
                this.selectTest();
                this.firstChange = true;
            }
        }
        else localBuffer.restore(e.index);
        if(e.inced==1){
            this.isTestSelected = false;
        }
        this.prevTabIndex = e.index
    }

}