import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
	errorEvent:EventEmitter<boolean> = new EventEmitter();
	userInfoEvent: EventEmitter<boolean> = new EventEmitter();
    schoolEvent: EventEmitter<boolean> = new EventEmitter();
    testEvent: EventEmitter<boolean> = new EventEmitter();
    currentRoute: EventEmitter<[string]> = new EventEmitter();
    resultEvent: EventEmitter<boolean> = new EventEmitter();
    feeEvent: EventEmitter<boolean> = new EventEmitter();
    menuEvent: EventEmitter<number> = new EventEmitter();
    dataEvent:EventEmitter<number> = new EventEmitter();
    userVerifiedEvent: EventEmitter<number> = new EventEmitter();
    control:number=0;
    user:number=0;

	constructor() { }

	emitVerifiedUserEvent(){
		this.user+=1;;
	}

	emitDataEvent(){
		this.control+=1;
		this.dataEvent.emit(this.control);
	}

	emitErrEvent(){
		this.errorEvent.emit(true);
	}

	emitUserInfoEvent(){
		this.userInfoEvent.emit(true);
	}

	emitSchoolEvent(){
		this.schoolEvent.emit(true);
	}

	emitTestEvent(){
		this.testEvent.emit(true);
	} 

	emitCurrentRouteEvent(component){
		this.currentRoute.emit(component);
	}

	emitResultEvent(){
		this.resultEvent.emit(true);
	}

	emitFeeEvent(){
		this.feeEvent.emit(true);
	}

	emitMenuEvent(e){
		this.menuEvent.emit(e);
	}



}
