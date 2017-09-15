import { Injectable, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class PersonalInfo {
    userInfoEvent: EventEmitter<boolean> = new EventEmitter();
    schoolEvent: EventEmitter<boolean> = new EventEmitter();
    userInfo: any;
    classInfo: any;
    studentInfo: any;
    schoolInfo = { 'name': null, 'contact_person': null, 'contact_mobile': null };
    couponCode: string;
    userTestimonials:any;

    dummySchoolInfo = { 'school_id': null };

    getUserTestimonials():Observable<any>{
        return this.userTestimonials;
    }

    constructor() { }

    setUserTestimonials(data){
        this.userTestimonials = data;
    }

    setInfo(data) {
        this.userInfo = data['user_info'];
        this.classInfo = data['class_info'];
        this.studentInfo = data['student_info'];
        if (data['school_info'] != null) {
            for (let key in data['school_info']) {
                this.schoolInfo[key] = data['school_info'][key];
                this.dummySchoolInfo[key] = data['school_info'][key];
            }
        }
        this.userInfoEvent.emit(true);
    }

    setSchoolInfo(data) {
        for (let key in data['school_info']) {
            this.schoolInfo[key] = data['school_info'][key];
        }
        for (let key in data['complete_school_info']) {
            this.schoolInfo[key] = data['complete_school_info'][key]
        }
        this.schoolEvent.emit(true);
    }


}


@Injectable()
export class SubjectInfo {

    subjectList: Array<string>;

    computerSyllabus: Array<string>;
    computerTopics: Array<string>;

    computerChapters: Array<any>;
    englishChapters: Array<any>;
    reasoningChapters: Array<any>;
    scienceChapters: Array<any>;
    gkChapters: Array<any>;
    mathChapters: Array<any>;

    subscribedSubjects = { "Computer-Cyber": true, "Science": true, "Mathematics": true,
     "English": true, "General-Knowledge": true, "Reasoning": true }
    attemptedDemo = { "Computer-Cyber": false, "Science": false, "Mathematics": false, "English": false, "General-Knowledge": false, "Reasoning": false }

    constructor() { }

    // setSubjects(data){
    //     this.subjectList = []
    //     for(let i in data){
    //         this.subjectList.push(data[i][1])
    //     }
    // }

    setSyllabus(data) {
        this.subjectList = [];
        for (let i in data) {
            this.subjectList.push(data[i]['name']);
            switch (data[i]['name']) {
                case "Computer-Cyber":
                    this.computerChapters = data[i];
                    break;

                case "Science":
                    this.scienceChapters = data[i];
                    break;


                case "Mathematics":
                    this.mathChapters = data[i];
                    break;


                case "English":
                    this.englishChapters = data[i];
                    break;

                case "Reasoning":
                    this.reasoningChapters = data[i];
                    break;


                case "General-Knowledge":
                    this.gkChapters = data[i];
                    break;
            }

        }
    }

    setComputerChapters(data) {
        this.computerSyllabus = []
        for (let i in data) {
            this.computerSyllabus.push(data[i][1])
        }
    }

    setComputerTopics(data) {
        this.computerTopics = [];
        for (let i in data) {
            this.computerTopics.push(data[i][1])
        }
    }


}

@Injectable()
export class chapterwiseTest {
    testDetails: any;
    subject:string;
    computers: any;
    reasoning: any;
    math: any;
    gk: any;
    science: any;
    english: any;
    testEvent: EventEmitter<boolean> = new EventEmitter();
    qaSet: any;
    testHistory: any;
    attemptDetails: any;
    activateRoute:boolean;

    setSubject(subject){
        this.subject = subject; 
    }

    activateTestRoute(){
        this.activateRoute = true;
    }

    setTestDetails(data) {
        for (let i in data['generated']['subjects']) {
            switch (data['generated']['subjects'][i]['name']) {
                case "Computer-Cyber":
                    this.computers = data['generated']['subjects'][i];
                    break;

                case "Science":
                    this.science = data['generated']['subjects'][i];
                    break;

                case "General-Knowledge":
                    this.gk = data['generated']['subjects'][i];
                    break;

                case "Mathematics":
                    this.math = data['generated']['subjects'][i];
                    break;

                case "English":
                    this.english = data['generated']['subjects'][i];
                    break;

                case "Reasoning":
                    this.reasoning = data['generated']['subjects'][i];
                    break;
            }
        }
        this.testEvent.emit(true);
    }

    setQuesAnswerSet(data) {
        this.qaSet = data['attempt']['question_answer_set']
        if (data.hasOwnProperty('test_history')) {
            this.testHistory = data['test_history'];
        }
        this.attemptDetails = {
            'test_id': data['attempt']['id'],
            'name': data['attempt']['name'],
            'chapter_id': data['attempt']['chapter_id'],
            'total_no_questions': data['attempt']['total_no_question'],
            'total_marks': data['attempt']['total_marks'],
            'last_question': data['attempt']['last_question'],
            'students_test_id': data['attempt']['students_test_id'],
        }
    }



    beginTest(data) {

    }
}

@Injectable()
export class Misc {
    testimonial: any;
    notice: Array<any>;
    fee: Array<any>;
    syllabus: Array<any>;
    testDetails: any;
    login:boolean;
    currentRoute: EventEmitter<[string]> = new EventEmitter();

    setCurrentRoute(component){
        this.currentRoute.emit(component);
    }

    userTestimonial = [
        "Lorem 11111111 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        "Lorem 22222222 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        "Lorem 33333333 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    ]

    
    setLocalRoute(route){
        sessionStorage.setItem('route',route);
    }

    logIn(){
        this.login = true;
    }

    setTestimonial(data) {
        this.testimonial = data;
    }

    setNotice(data) {
        this.notice = [];
        for (let i in data) {
            this.notice.push(data[i])
        }
    }

    setFee(data) {
        this.fee = [];
        for (let i in data) {
            this.fee.push(data[i][2])
        }
    }

    setTestDetails(data) {
        this.testDetails = data;
    }


}

@Injectable()
export class Result {
    testSummary = {
        "Computer-Cyber": {
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
            "Demo Test": {
                "completed": 0,
                "notcompleted": 100,
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
            "Demo Test": {
                "completed": 0,
                "notcompleted": 100,
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
            "Demo Test": {
                "completed": 0,
                "notcompleted": 100,
            }
        },
        "General-Knowledge": {
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
            "Demo Test": {
                "completed": 0,
                "notcompleted": 100,
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
            "Demo Test": {
                "completed": 0,
                "notcompleted": 100,
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
            "Demo Test": {
                "completed": 100,
                "notcompleted": 0,
            }
        }
    }

    resultSummary = {
        "Computer-Cyber": {
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
        "General-Knowledge": {
            "Chapterwise Test": {
                "right": 48,
                "review": 20,
                "wrong": 32
            },
            "Sample Test": {
                "right": 12,
                "review": 5,
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
}