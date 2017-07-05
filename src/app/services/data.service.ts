import { Injectable, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class PersonalInfo{

    userInfo:any;
    classInfo:any;
    studentInfo:any;
    schoolInfo = {'name':null, 'contact_person':null, 'contact_mobile':null};
    couponCode:string;

    dummySchoolInfo = {'school_id':null};
    

    constructor() {}

    setInfo(data){
        this.userInfo = data['user_info'];
        this.classInfo = data['class_info'];
        this.studentInfo = data['student_info'];
        if(data['school_info']!=null){
            for(let key in data['school_info']){
                this.schoolInfo[key] = data['school_info'][key];
                this.dummySchoolInfo[key] = data['school_info'][key];
            }
        }
    }

    setSchoolInfo(data){
        for(let key in data['school_info']){
            this.schoolInfo[key] = data['school_info'][key];
        }
        for(let key in data['complete_school_info']){
            this.schoolInfo[key] = data['complete_school_info'][key]
        }
    }


}


@Injectable()
export class SubjectInfo{

    subjectList:Array<string>;

    computerSyllabus:Array<string>;
    computerTopics:Array<string>;

    subscribedSubjects = {"Computer/Cyber":true, "Science":false, "Mathematics":true, "English":true, "General Knowledge":false,"Reasoning":true}
    attemptedDemo = {"Computer/Cyber":false, "Science":true, "Mathematics":true, "English":false, "General Knowledge":false,"Reasoning":true}

    constructor(){}

    setSubjects(data){
        this.subjectList = []
        for(let i in data){
            this.subjectList.push(data[i][1])
        }
    }

    setComputerChapters(data){
        this.computerSyllabus = []
        for(let i in data){
            this.computerSyllabus.push(data[i][1])
        }
    }

    setComputerTopics(data){
        this.computerTopics = [];
        for(let i in data){
            this.computerTopics.push(data[i][1])
        }
    }


}

@Injectable()
export class Misc{
    testimonial:Array<any>;
    notice:Array<any>;
    fee:Array<any>;

    userTestimonial = [
                        "Lorem 11111111 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        "Lorem 22222222 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        "Lorem 33333333 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    ]
    
    setTestimonial(data){
        this.testimonial = [];
        for (let i in data){
            this.testimonial.push(data[i][1])
        }
    }

    setNotice(data){
        this.notice = [];
        for(let i in data){
            this.notice.push(data[i])
        }
    }

    setFee(data){
        this.fee = [];
        for(let i in data){
            this.fee.push(data[i][2])
        }
    }


}

@Injectable()
export class Result{

    testSummary = {
                            "Computer/Cyber": {
                                "Chapterwise Test": {
                                    "completed": 34,
                                    "generated": 44,
                                    "notcompleted": 22
                                },
                                "Sample Test": {
                                    "completed": 35,
                                    "notcompleted": 65
                                },
                                "Mock Test": {
                                    "completed": 74,
                                    "notcompleted": 26
                                },
                                "Demo Test":{
                                    "completed":0,
                                    "notcompleted":100,
                                }
                            },
                            "Science": {
                                "Chapterwise Test": {
                                    "completed": 74,
                                    "generated": 13,
                                    "notcompleted": 13
                                },
                                "Sample Test": {
                                    "completed": 60,
                                    "notcompleted": 40
                                },
                                "Mock Test": {
                                    "completed": 34,
                                    "notcompleted": 66
                                },
                                "Demo Test":{
                                    "completed":0,
                                    "notcompleted":100,
                                }
                            },
                            "Mathematics": {
                                "Chapterwise Test": {
                                    "completed": 44,
                                    "generated": 36,
                                    "notcompleted": 20
                                },
                                "Sample Test": {
                                    "completed": 42,
                                    "notcompleted": 58
                                },
                                "Mock Test": {
                                    "completed": 69,
                                    "notcompleted": 31
                                },
                                "Demo Test":{
                                    "completed":0,
                                    "notcompleted":100,
                                }
                            },
                            "General Knowledge": {
                                "Chapterwise Test": {
                                    "completed": 48,
                                    "generated": 20,
                                    "notcompleted": 32
                                },
                                "Sample Test": {
                                    "completed": 12,
                                    "notcompleted": 88
                                },
                                "Mock Test": {
                                    "completed": 45,
                                    "notcompleted": 55
                                },
                                "Demo Test":{
                                    "completed":0,
                                    "notcompleted":100,
                                }
                            },
                            "English": {
                                "Chapterwise Test": {
                                    "completed": 85,
                                    "generated": 15,
                                    "notcompleted": 0
                                },
                                "Sample Test": {
                                    "completed": 45,
                                    "notcompleted": 55
                                },
                                "Mock Test": {
                                    "completed": 13,
                                    "notcompleted": 87
                                },
                                "Demo Test":{
                                    "completed":0,
                                    "notcompleted":100,
                                }

                            },
                            "Reasoning": {
                                "Chapterwise Test": {
                                    "completed": 0,
                                    "generated": 0,
                                    "notcompleted": 100
                                },
                                "Sample Test": {
                                    "completed": 0,
                                    "notcompleted": 100
                                },
                                "Mock Test": {
                                    "completed": 54,
                                    "notcompleted": 46
                                },
                                "Demo Test":{
                                    "completed":100,
                                    "notcompleted":0,
                                }
                            }
    }

    resultSummary = {
                            "Computer/Cyber": {
                                "Chapterwise Test": {
                                    "right": 34,
                                    "review": 44,
                                    "wrong": 22
                                },
                                "Sample Test": {
                                    "right": 35,
                                    "review": 34,
                                    "wrong": 31
                                },
                                "Mock Test": {
                                    "right": 74,
                                    "review": 22,
                                    "wrong": 4
                                },
                                "Demo Test": {
                                    "right": 34,
                                    "review": 44,
                                    "wrong": 22
                                }
                            },
                            "Science": {
                                "Chapterwise Test": {
                                    "right": 74,
                                    "review": 13,
                                    "wrong": 13
                                },
                                "Sample Test": {
                                    "right": 60,
                                    "review": 34,
                                    "wrong": 6
                                },
                                "Mock Test": {
                                    "right": 34,
                                    "review": 32,
                                    "wrong": 34
                                },
                                "Demo Test": {
                                    "right": 67,
                                    "review": 23,
                                    "wrong": 10
                                }
                            },
                            "Mathematics": {
                                "Chapterwise Test": {
                                    "right": 44,
                                    "review": 36,
                                    "wrong": 20
                                },
                                "Sample Test": {
                                    "right": 42,
                                    "review": 42,
                                    "wrong": 14
                                },
                                "Mock Test": {
                                    "right": 69,
                                    "review": 9,
                                    "wrong": 22
                                },
                                "Demo Test": {
                                    "right": 100,
                                    "review": 0,
                                    "wrong": 0
                                }
                            },
                            "General Knowledge": {
                                "Chapterwise Test": {
                                    "right": 48,
                                    "review": 20,
                                    "wrong": 32
                                },
                                "Sample Test": {
                                    "right": 12,
                                    "review":5,
                                    "wrong": 83
                                },
                                "Mock Test": {
                                    "right": 45,
                                    "review": 15,
                                    "wrong": 40
                                },
                                "Demo Test": {
                                    "right": 100,
                                    "review": 0,
                                    "wrong": 0
                                }
                            },
                            "English": {
                                "Chapterwise Test": {
                                    "right": 85,
                                    "review": 15,
                                    "wrong": 0
                                },
                                "Sample Test": {
                                    "right": 45,
                                    "review": 25,
                                    "wrong": 30
                                },
                                "Mock Test": {
                                    "right": 13,
                                    "review": 2,
                                    "wrong": 85
                                },
                                "Demo Test": {
                                    "right": 0,
                                    "review": 100,
                                    "wrong": 0
                                }
                            },
                            "Reasoning": {
                                "Chapterwise Test": {
                                    "right": 0,
                                    "review": 0,
                                    "wrong": 100
                                },
                                "Sample Test": {
                                    "right": 0,
                                    "review": 100,
                                    "wrong": 0
                                },
                                "Mock Test": {
                                    "right": 54,
                                    "review": 21,
                                    "wrong": 25
                                },
                                "Demo Test": {
                                    "right": 34,
                                    "review": 44,
                                    "wrong": 22
                                }
                            }

    }

    chapterwiseTestDetails = {
              "chapter 2 CC":
              {
                  "Test 1":"10/15",
                  "Test 2":"9/15", 
                  "Test 3":"Start", 
                  "Test 4":"13/15", 
                  "Test 5":"Resume"
                },
              "chapter 6 CC":
              {
                  "Test 1":"13/15",
                  "Test 2":"11/15", 
                  "Test 3":"Start", 
                  "Test 4":"Start", 
                  "Test 5":"10/15"
                },
              "chapter 8 CC":
              {
                  "Test 1":"Start", 
                  "Test 2":"13/15",
                  "Test 3":"11/15",  
                  "Test 4":"Start",
                  "Test 5":"Resume"
                },
    }

    generatedTest = ["chapter 2 CC", "chapter 8 CC", "chapter 6 CC",];
    generatedTestData = [
                        ["Chapter 2 CC", "04/15","Start","11/15","Resume","14/15"],
                        ["Chapter 6 CC", "04/15","Start","11/15","Resume","14/15"],
                        ["Chapter 8 CC", "04/15","Start","11/15","Resume","14/15"],
                        ]
}