import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart, SelectItem } from 'primeng/primeng';
import { Misc,Result } from '../../../services/data.service';
@Component({
  selector: 'app-result-science',
  templateUrl: './result-science.component.html',
  styleUrls: ['./result-science.component.scss']
})
export class ResultScienceComponent implements OnInit {
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
    showChapter: boolean;

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

    show(i, j) {
        let object = this.Result.science.chapters[i]['tests'][j];
        this.currentChapter = this.Result.science.chapters[i]['name'];
        this.currentTest = object['name'];
        this.chapter = {
            Test:object['name'],
            'Total Questions':object['total_no_question'],
            'Attempted':object['result']['total_attempted_questions'],
            'Correct':object['result']['correct'],
            'Incorrect':object['result']['incorrect'],
            'Marked':object['result']['marked'],
            'Score':object['result']['correct'],
        }
        this.showChapter = true;
        this.resultSummary = object;
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
        this.showChapter = false;
        this.showDemo = false;
        this.showSample = false;
        this.showMock = false;
    }

    showPanel(e) {
    }

    clubbedWidth(i,toggle=false){
        let obj = this.Result.science['chapters'][i];
        let correct = 0;
        let marked = 0;
        let incorrect = 0;
        if(obj.hasOwnProperty('tests')){
            for (let k in obj['tests']) {
                if(obj['tests'][k]['attempted']==1){
                    correct = correct + obj['tests'][k]['result']['correct'];
                    marked = marked + obj['tests'][k]['result']['marked'];
                    incorrect = incorrect + obj['tests'][k]['result']['incorrect'];
                }
            }
        }
        let cor = correct*100/(marked+incorrect+correct);
        let inc = incorrect*100/(marked+incorrect+correct);
        let mar = marked*100/(marked+incorrect+correct);
        if(toggle){
            let cor = correct*100/(incorrect+correct);
            let inc = incorrect*100/(incorrect+correct);
            return [cor+'%',inc+'%'];
        }
        return [cor+'%',mar+'%',inc+'%'];
    }

    width(chapter,test,toggle=false){
        let correct = this.Result.science.chapters[chapter]['tests'][test]['result']['correct'];
        let incorrect = this.Result.science.chapters[chapter]['tests'][test]['result']['incorrect'];
        let marked = this.Result.science.chapters[chapter]['tests'][test]['result']['marked'];
        let total = this.Result.science.chapters[chapter]['tests'][test]['total_no_question'];
        if(toggle){
            let cor = correct*100/(correct+incorrect);
            let inc = incorrect*100/(correct+incorrect);
            return [cor+'%',inc+'%'];
        }
        let cor = correct*100/(marked+incorrect+correct);
        let inc = incorrect*100/(marked+incorrect+correct);
        let mar = marked*100/(marked+incorrect+correct);
        return [cor+'%',mar+'%',inc+'%'];
    }

    resultPanel(){
        let a = [];
        for(let i in this.Result.science['chapters']){
            if(this.Result.science['chapters'][i].hasOwnProperty('tests')){
                a.push(this.Result.science['chapters'][i]);
            }
        }
        return a;
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Science","Result"]);
        this.misc.setLocalRoute('account/science/result');

        this.resultPanel()


        this.organisation = [];
        this.organisation.push({ label: 'Select Organisation', value: 'null' })
    }

}