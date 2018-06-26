import { Component, OnInit } from '@angular/core';
import { Misc,PersonalInfo } from '../../../services/data.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
import { EventService } from '../../../services/event.service';


@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.scss']
})
export class ViewticketComponent implements OnInit {
	ticketCols;
	selectedTicket;
	constructor(
		private misc:Misc,
		public personalInfo:PersonalInfo,
		private masterhttp:MasterHttpService,
		public event:EventService
		) {
			this.event.showSpinner = true;
		 }
	ngOnInit() {
		this.misc.setCurrentRoute(["Support","View Ticket"]);
		this.misc.setLocalRoute('account/support/viewticket');
		this.ticketCols = [
			{header:'Case Id',field:'case_id'},
			{header:'Category',field:'category'},
			{header:'Subject',field:'subject'},
			]
			this.masterhttp.getTickets();
	}

	update(index,val){
		let wrapper = {ticket_id:this.personalInfo.ticketDetails[index]['ticket_id'],status:val};
		this.masterhttp.updateTicket(wrapper).subscribe((data)=>{
			if(data['status']==200){
				this.personalInfo.ticketDetails[index]['ticket_status'] = val;
			}
			else return 0;
		},
		err=>{
			return 0;
		})
	}

}
