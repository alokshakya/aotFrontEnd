var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
var PersonalInfo = (function () {
    function PersonalInfo() {
        this.userInfoEvent = new EventEmitter();
        this.schoolEvent = new EventEmitter();
        this.schoolInfo = { 'name': null, 'contact_person': null, 'contact_mobile': null };
        this.dummySchoolInfo = { 'school_id': null };
    }
    PersonalInfo.prototype.getUserTestimonials = function () {
        return this.userTestimonials;
    };
    PersonalInfo.prototype.setUserTestimonials = function (data) {
        this.userTestimonials = data;
    };
    PersonalInfo.prototype.setInfo = function (data) {
        this.userInfo = data['user_info'];
        this.classInfo = data['class_info'];
        this.studentInfo = data['student_info'];
        if (data['school_info'] != null) {
            for (var key in data['school_info']) {
                this.schoolInfo[key] = data['school_info'][key];
                this.dummySchoolInfo[key] = data['school_info'][key];
            }
        }
        this.userInfoEvent.emit(true);
    };
    PersonalInfo.prototype.setSchoolInfo = function (data) {
        for (var key in data['school_info']) {
            this.schoolInfo[key] = data['school_info'][key];
        }
        for (var key in data['complete_school_info']) {
            this.schoolInfo[key] = data['complete_school_info'][key];
        }
        this.schoolEvent.emit(true);
    };
    return PersonalInfo;
}());
PersonalInfo = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PersonalInfo);
export { PersonalInfo };
var SubjectInfo = (function () {
    function SubjectInfo() {
        this.subscribedSubjects = { "Computer-Cyber": true, "Science": true, "Mathematics": true, "English": true, "General-Knowledge": true, "Reasoning": true };
        this.attemptedDemo = { "Computer-Cyber": false, "Science": false, "Mathematics": false, "English": false, "General-Knowledge": false, "Reasoning": false };
    }
    // setSubjects(data){
    //     this.subjectList = []
    //     for(let i in data){
    //         this.subjectList.push(data[i][1])
    //     }
    // }
    SubjectInfo.prototype.setSyllabus = function (data) {
        this.subjectList = [];
        for (var i in data) {
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
    };
    SubjectInfo.prototype.setComputerChapters = function (data) {
        this.computerSyllabus = [];
        for (var i in data) {
            this.computerSyllabus.push(data[i][1]);
        }
    };
    SubjectInfo.prototype.setComputerTopics = function (data) {
        this.computerTopics = [];
        for (var i in data) {
            this.computerTopics.push(data[i][1]);
        }
    };
    return SubjectInfo;
}());
SubjectInfo = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], SubjectInfo);
export { SubjectInfo };
var chapterwiseTest = (function () {
    function chapterwiseTest() {
        this.testEvent = new EventEmitter();
    }
    chapterwiseTest.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    chapterwiseTest.prototype.activateTestRoute = function () {
        this.activateRoute = true;
    };
    chapterwiseTest.prototype.setTestDetails = function (data) {
        for (var i in data['generated']['subjects']) {
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
    };
    chapterwiseTest.prototype.setQuesAnswerSet = function (data) {
        this.qaSet = data['attempt']['question_answer_set'];
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
        };
    };
    chapterwiseTest.prototype.beginTest = function (data) {
    };
    return chapterwiseTest;
}());
chapterwiseTest = __decorate([
    Injectable()
], chapterwiseTest);
export { chapterwiseTest };
var Misc = (function () {
    function Misc() {
        this.currentRoute = new EventEmitter();
        this.userTestimonial = [
            "Lorem 11111111 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            "Lorem 22222222 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            "Lorem 33333333 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        ];
    }
    Misc.prototype.setCurrentRoute = function (component) {
        this.currentRoute.emit(component);
    };
    Misc.prototype.setLocalRoute = function (route) {
        sessionStorage.setItem('route', route);
    };
    Misc.prototype.logIn = function () {
        this.login = true;
    };
    Misc.prototype.setTestimonial = function (data) {
        this.testimonial = data;
    };
    Misc.prototype.setNotice = function (data) {
        this.notice = [];
        for (var i in data) {
            this.notice.push(data[i]);
        }
    };
    Misc.prototype.setFee = function (data) {
        this.fee = [];
        for (var i in data) {
            this.fee.push(data[i][2]);
        }
    };
    Misc.prototype.setTestDetails = function (data) {
        this.testDetails = data;
    };
    return Misc;
}());
Misc = __decorate([
    Injectable()
], Misc);
export { Misc };
var Result = (function () {
    function Result() {
        this.testSummary1 = {
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
        };
        this.resultSummary1 = {
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
            "General Knowledge": {
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
        };
        this.chapterwiseTestDetails = {
            "chapter 2 CC": {
                "Test 1": "10/15",
                "Test 2": "9/15",
                "Test 3": "Start",
                "Test 4": "13/15",
                "Test 5": "Resume"
            },
            "chapter 6 CC": {
                "Test 1": "13/15",
                "Test 2": "11/15",
                "Test 3": "Start",
                "Test 4": "Start",
                "Test 5": "10/15"
            },
            "chapter 8 CC": {
                "Test 1": "Start",
                "Test 2": "13/15",
                "Test 3": "11/15",
                "Test 4": "Start",
                "Test 5": "Resume"
            },
        };
        this.generatedTest = ["chapter 2 CC", "chapter 8 CC", "chapter 6 CC",];
        this.generatedTestData = [
            ["Chapter 2 CC", "04/15", "Start", "11/15", "Resume", "14/15"],
            ["Chapter 6 CC", "04/15", "Start", "11/15", "Resume", "14/15"],
            ["Chapter 8 CC", "04/15", "Start", "11/15", "Resume", "14/15"],
        ];
    }
    Result.prototype.setTestSummary = function () {
        this.testSummary = this.testSummary1;
    };
    Result.prototype.setResultSummary = function () {
        this.resultSummary = this.testSummary1;
    };
    return Result;
}());
Result = __decorate([
    Injectable()
], Result);
export { Result };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/services/data.service.js.map