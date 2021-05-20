import { Component, OnInit } from '@angular/core';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  fa = {
    ellipseV: faEllipsisV,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
