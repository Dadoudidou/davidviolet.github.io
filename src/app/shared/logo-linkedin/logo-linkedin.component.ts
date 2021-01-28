import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-linkedin',
  templateUrl: './logo-linkedin.component.html',
  styleUrls: ['./logo-linkedin.component.scss']
})
export class LogoLinkedinComponent implements OnInit {

  @Input() invertedColor: boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

}
