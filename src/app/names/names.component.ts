import { Component, OnInit } from '@angular/core';

import { Person } from '../Person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: Person[]

  constructor() {}

  ngOnInit() {
    this.names = PEOPLE;
  }
}
