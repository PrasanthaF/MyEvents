import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();


  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  getStartTimeClass(): any {
    if (this.event && this.event.time === '8:00 am')
      return 'green bold';
    return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
