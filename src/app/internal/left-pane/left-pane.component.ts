import { Component, OnInit } from '@angular/core';
import * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {

  fa = {
    plus: fa.faPlus,
    barcode: fa.faBarcode,
    user: fa.faUser,
    lock: fa.faLock
  };
  page = 'dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
