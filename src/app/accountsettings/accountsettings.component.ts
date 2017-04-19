import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router'

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent  {

  subscriptionTableData: any;
  subscriptionTableHeaders: any;
  subjectsAndPrice:any;
  selectedPackage: Array<string> = [];
  
  constructor(private _router:Router) {

    var token = localStorage.getItem('session_token');
    if (token==''||token==null){
        this._router.navigate(['/login']); 
    }

    this.subscriptionTableData = [
                                    {"Order ID":"OB26DF", "Subject":"Science", "Subscription Date":"23 March 2017", "Valid Till":"23 September 2017", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBH8R3", "Subject":"Reasoning", "Subscription Date":"02 April 2017", "Valid Till":"02 October 2017", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBTDE4", "Subject":"Mathematics", "Subscription Date":"05 June 2017", "Valid Till":"05 December 2017", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBTDZ2", "Subject":"Mathematics", "Subscription Date":"05 June 2017", "Valid Till":"05 December 2017", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBDJJ4", "Subject":"English", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBSKD3", "Subject":"Reasoning", "Subscription Date":"05 March 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBKG33", "Subject":"General Knowledge", "Subscription Date":"05 April 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                                    {"Order ID":"OBHT45", "Subject":"Computer/Cyber", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                   
                                    ];

    this.subscriptionTableHeaders =  [
                                      {field: 'Order ID', header: 'Order ID'},
                                      {field: 'Subject', header: 'Subject'},
                                      {field: 'Subscription Date', header: 'Subscription Date'},
                                      {field: 'Valid Till', header: 'Valid Till'},
                                      {field: "Download Invoice", header: "Download Invoice"}
                                      ]                             


   
  

    this.subjectsAndPrice=[
                           {"subject":"Mathematics-Reasoning Essential", "price":" (599)"},
                           {"subject":"English-Mathematics Essential", "price":" (499)"},
                           {"subject":"Science-English Essential", "price":" (599)"},
                           {"subject":"Reasoning-GK Essential", "price":" (499)"},
                           ]
                }


}
