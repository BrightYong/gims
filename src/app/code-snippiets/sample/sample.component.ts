import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  dateObj = Date.now();

  // HTML template expression syntax using pipe operator (|)
  // {{ dateObj | date }}               // output is 'Jun 15, 2015'
  // {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
  // {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
  // {{ dateObj | date:'mm:ss' }}       // output is '43:11'

  // Using in component
  constructor(private datePipe: DatePipe) {
    console.log(datePipe.transform(Date.now(),'yyyy-MM-dd'));
    //2019-07-22
  }

  ngOnInit(): void {
  }

}
