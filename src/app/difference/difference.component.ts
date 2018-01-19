import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  difference: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  find() {
    this.difference = this._dataService.findDifference();
  }

}
