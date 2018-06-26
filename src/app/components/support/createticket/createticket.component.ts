import { Component, OnInit } from '@angular/core';
import { Misc, PersonalInfo } from '../../../services/data.service';
import { EventService } from '../../../services/event.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
import { SelectItem, Message } from 'primeng/primeng';
@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss']
})
export class CreateticketComponent implements OnInit {
  category:SelectItem[];
  ticketObject;
  msgs:Message[];
  spinner:boolean;
  constructor(
    private misc:Misc,
    private masterhttp:MasterHttpService,
    public event:EventService,
    public personalInfo: PersonalInfo
    ) { 
    }

  growlDisplay(sev,sum,det){
    this.msgs = [];
    this.msgs.push({severity:sev,summary:sum,detail:det});
  }
  ngOnInit() {
    this.misc.setCurrentRoute(["Support","Create Ticket"]);
    this.misc.setLocalRoute('account/support/createticket');
    this.category = [
      {label:'Subscription',value:'Subscription'},
      {label:'Result',value:'Result'},
      {label:'Tests',value:'Tests'},
      {label:'Profile',value:'Profile'},
      {label:'Others',value:'Others'},
      ];
    this.setTicketObj();
  }

  submitTicket(){
    this.spinner = true;
    this.masterhttp.raiseTicket(this.ticketObject).subscribe((data)=>{
      if(data['status']==200){
        this.growlDisplay('success','Success','Ticket Raised Successfully');
        this.setTicketObj();
        this.event.ticketRaised = true;
        this.event.showSpinner = true;
        this.spinner = false;
      }
      else{
        this.growlDisplay('error','Unable To Raise Ticket','Please Try Again');
        this.spinner = false;
      }
    },
    err=>{
        this.growlDisplay('error','Unable To Raise Ticket','Please Try Again');
        this.spinner = false;
    })
  }



  setTicketObj(){
    this.ticketObject = {
      contact_method:'web',
      subject:null,
      date:new Date(),
      detail:null,
      description:null,
      number:null,
      category:null,
    }
    
  }

  validator(){
    if(this.ticketObject.description==null||this.ticketObject.description==''){
      return true;
    }
    if(this.ticketObject.category==null||this.ticketObject.category==''){
      return true;
    }
    if(this.ticketObject.subject==null||this.ticketObject.subject==''){
      return true;
    }
    return false;
  }

}
