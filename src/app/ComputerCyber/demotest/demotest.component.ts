import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  data:any;

  topics:any=["Topic 1","Topic 2","Topic 3","Topic 4","Topic 5"];
  
  constructor() { }

  ngOnInit() {
    this.data = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [110, 90, 200],
                    backgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ]
                }]    
  }

}
}