import { Component, OnInit } from '@angular/core';
import {faPlus, faEllipsisV, faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.css']
})
export class MostViewedComponent implements OnInit {

  fa = {
    plus: faPlus,
    ellipseV: faEllipsisV,
    eye: faEye
  }
  constructor() { }

  ngOnInit(): void {
  }

}
