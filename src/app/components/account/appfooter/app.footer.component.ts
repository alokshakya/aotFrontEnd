import { Component, Inject, forwardRef } from '@angular/core';
import { EventService } from '../../../services/event.service';
@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrls: ['./app.footer.component.scss']
})
export class AppFooter {
	menuFlag:boolean;
	constructor(public event: EventService){}
	ngOnInit(){
		this.eventListener()
	}

	eventListener(){
		this.event.menuEvent.subscribe((data)=>{
			if(data==0){
				this.menuFlag = true;
			}
			else this.menuFlag = false;
		})
	}

	isDesktop() {
        return window.innerWidth > 1024;
    }
}