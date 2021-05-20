import { Component, OnInit } from '@angular/core';
import {faPlus, faEllipsisV, faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {

  fa = {
    plus: faPlus,
    ellipseV: faEllipsisV,
    eye: faEye
  }
  constructor() { }

  ngOnInit(): void {
  }

}
