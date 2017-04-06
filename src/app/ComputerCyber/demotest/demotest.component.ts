import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit() {
    this.data = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
  }

}
}