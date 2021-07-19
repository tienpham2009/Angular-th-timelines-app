import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../sevices/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value: any): void {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


}
