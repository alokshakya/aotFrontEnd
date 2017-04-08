import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.component.html',
  styleUrls: ['./mocktest.component.scss']
})
export class MocktestComponent implements OnInit {

  tabledata:any = [
                    {"Testnumber":"Mock Test 1", "Slot 1":"95 Percentile", "Slot 2":"NA" },
                    {"Testnumber":"Mock Test 2", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" },
                    {"Testnumber":"Mock Test 3", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" }
  
                  ]
  data:any;
  constructor() { }

  ngOnInit() {this.data = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [50, 150, 200],
                    backgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ],
                    hoverBackgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ]
                }]    
            };
  }

}
