var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Misc } from '../../../services/data.service';
var ResultEnglishComponent = (function () {
    function ResultEnglishComponent(misc) {
        this.misc = misc;
        this.detailedResult = {
            "Chapterwise Test": {
                "Chapter 1": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "22-5-2017",
                        "Time Taken": "24 minutes",
                        "Total Questions": 15,
                        "Attempted": 15,
                        "Correct": 9,
                        "Wrong": 6,
                        "Marked": 0,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "15-01-2017",
                        "Time Taken": "50 minutes",
                        "Total Questions": 15,
                        "Attempted": 12,
                        "Correct": 6,
                        "Wrong": 6,
                        "Marked": 6,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "02-04-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 10,
                        "Correct": 6,
                        "Wrong": 4,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 2": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 3": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 4": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 5": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 6": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "22-5-2017",
                        "Time Taken": "24 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "15-01-2017",
                        "Time Taken": "50 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "02-04-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 7": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 8": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 9": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                },
                "Chapter 10": {
                    "Test 1": {
                        "Test": 1,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 2": {
                        "Test": 2,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 3": {
                        "Test": 3,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 4": {
                        "Test": 4,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    },
                    "Test 5": {
                        "Test": 5,
                        "Date": "12-4-2017",
                        "Time Taken": "35 minutes",
                        "Total Questions": 15,
                        "Attempted": 13,
                        "Correct": 9,
                        "Wrong": 3,
                        "Marked": 3,
                        "Score": 8
                    }
                }
            },
            "Sample Test": {
                "Sample Test 1": {
                    "Test": 1,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 2": {
                    "Test": 2,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 3": {
                    "Test": 3,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 4": {
                    "Test": 4,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 5": {
                    "Test": 5,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 6": {
                    "Test": 6,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 7": {
                    "Test": 7,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 8": {
                    "Test": 8,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 9": {
                    "Test": 9,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                },
                "Sample Test 10": {
                    "Test": 10,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                }
            },
            "Mock Test": {
                "Mock Test 1": {
                    "Test": 1,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 10,
                    "Wrong": 1,
                    "Marked": 4,
                    "Score": 10
                },
                "Mock Test 2": {
                    "Test": 2,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 15,
                    "Correct": 0,
                    "Wrong": 15,
                    "Marked": 0,
                    "Score": 8
                },
                "Mock Test 3": {
                    "Test": 3,
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 13,
                    "Correct": 9,
                    "Wrong": 3,
                    "Marked": 3,
                    "Score": 8
                }
            },
            "Demo Test": {
                "Demo Test 1": {
                    "Date": "12-4-2017",
                    "Time Taken": "35 minutes",
                    "Total Questions": 15,
                    "Attempted": 15,
                    "Correct": 7,
                    "Wrong": 3,
                    "Marked": 5,
                    "Score": 8
                }
            }
        };
        this.resultSummary = {
            "Chapterwise Test": {
                "Chapter 1": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 2": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 3": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 4": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 5": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 6": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 7": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 8": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 9": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
                "Chapter 10": {
                    "Test 1": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 2": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 3": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 4": { "Correct": 34, "Review": 45, "Wrong": 21 },
                    "Test 5": { "Correct": 34, "Review": 45, "Wrong": 21 }
                },
            }
        };
        this.overview = {
            "Chapter 1": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 2": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 3": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 4": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 5": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 6": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 7": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 8": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 9": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            },
            "Chapter 10": {
                "Correct": 25,
                "Review": 25,
                "Wrong": 50
            }
        };
        this.testResponse = {
            "test1": { "1": "correct", "2": "mark", "3": "wrong", "4": "correct", "5": "correct", "6": "wrong", "7": "correct", "8": "correct", "9": "mark", "10": "correct", "11": "wrong", "12": "correct", "13": "mark", "14": "correct", "15": "correct", }
        };
    }
    ResultEnglishComponent.prototype.show = function (i, j) {
        this.chapter = {};
        this.chapter = this.detailedResult['Chapterwise Test'][i][j];
        this.currentChapter = i;
        this.currentTest = j;
        this.showChapter = true;
    };
    ResultEnglishComponent.prototype.sampleResult = function (s) {
        this.sample = {};
        this.sample = this.detailedResult['Sample Test'][s];
        this.currentSample = s;
        this.showSample = true;
    };
    ResultEnglishComponent.prototype.demoResult = function (number) {
        this.demo = { number: number };
        this.demo = this.detailedResult['Demo Test'][number];
        this.currentDemo = number;
        this.showDemo = true;
    };
    ResultEnglishComponent.prototype.mockResult = function (number) {
        this.mock = {};
        this.mock = this.detailedResult['Mock Test'][number];
        this.currentMock = number;
        this.showMock = true;
    };
    ResultEnglishComponent.prototype.close = function (e) {
        this.showChapter = false;
        this.showDemo = false;
        this.showSample = false;
        this.showMock = false;
    };
    ResultEnglishComponent.prototype.showPanel = function (e) {
    };
    ResultEnglishComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["English", "Result"]);
        this.misc.setLocalRoute('account/english/result');
        this.organisation = [];
        this.organisation.push({ label: 'Select Organisation', value: 'null' });
    };
    return ResultEnglishComponent;
}());
ResultEnglishComponent = __decorate([
    Component({
        selector: 'app-result-english',
        templateUrl: './result-english.component.html',
        styleUrls: ['./result-english.component.scss']
    }),
    __metadata("design:paramtypes", [Misc])
], ResultEnglishComponent);
export { ResultEnglishComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/english/result-english/result-english.component.js.map