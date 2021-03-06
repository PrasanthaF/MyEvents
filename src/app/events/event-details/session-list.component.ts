import { Component, OnInit, Input } from '@angular/core';
import { ISession } from "../../shared/event.model";

@Component({
  selector: 'todo-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[]

  constructor() { }

  ngOnInit() {
  }

}
