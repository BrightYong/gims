import {Component, OnInit} from '@angular/core';
import {faPlus, faEllipsisV, faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mid-content',
  templateUrl: './mid-content.component.html',
  styleUrls: ['./mid-content.component.css']
})
export class MidContentComponent implements OnInit {

  fa = {
    plus: faPlus,
    ellipseV: faEllipsisV,
    eye: faEye
  }
  page = {
    overview: true,
    products: false
  }

  constructor() {
  }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(pageNum: number) {
    switch(pageNum) {
      case 1:
        this.page.overview = true;
        this.page.products = false;
        break;
      case 2:
        this.page.overview = false;
        this.page.products = true;
    }
  }
}
