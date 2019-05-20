import { Component, OnInit } from '@angular/core';
import { HttpGetService } from './httpget.service';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dataRows: any = [];

  dataObject: any = {};
  showModal: boolean = false;

  constructor(private httpService: HttpGetService) {}

  ngOnInit() {
    this.displayData();   // calling method to display dataRows on initial load
    this.getDataPeriodically();   // calling this method to get data from server after 10 second
  }

  getDataPeriodically() {
    setInterval(() => {
      this.displayData();
    }, 10000);
  }

  displayData() {
    this.httpService.getData().subscribe(response => {
      this.dataRows = response.hits; // set json in dataRows
    });
  }

  clickedOut(event) {
    if (event.target.className === 'modals') {
      this.showModal = false;
    }
  }

  viewRow(index) {
    this.showModal = true;
    this.dataObject = this.dataRows[index];
  }
}
