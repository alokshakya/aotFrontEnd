import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.scss']
})
export class SampletestComponent implements OnInit {

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
