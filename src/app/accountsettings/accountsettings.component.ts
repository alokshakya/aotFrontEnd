import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {

  data: any = [

              {"Order ID":"OB26DF", "Subject":"Science", "Subscription Date":"23 March 2017", "Valid Till":"23 September 2017"},
              {"Order ID":"OBH8R3", "Subject":"Reasoning", "Subscription Date":"02 April 2017", "Valid Till":"02 October 2017"},
              {"Order ID":"OBTDE3", "Subject":"Mathematics", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018"}
  
              ]
  


  constructor() { }

  ngOnInit() {
  }

}
