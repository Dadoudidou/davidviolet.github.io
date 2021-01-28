import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-dribbble',
  templateUrl: './logo-dribbble.component.html',
  styleUrls: ['./logo-dribbble.component.scss']
})
export class LogoDribbbleComponent implements OnInit {

  @Input() invertedColor: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
