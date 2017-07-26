import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collages',
  templateUrl: './collages.component.html',
  styleUrls: ['./collages.component.css']
})
export class CollagesComponent implements OnInit {

		toggleShrink: boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
