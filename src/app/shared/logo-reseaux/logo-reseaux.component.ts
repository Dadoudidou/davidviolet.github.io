import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-reseaux',
  templateUrl: './logo-reseaux.component.html',
  styleUrls: ['./logo-reseaux.component.scss']
})
export class LogoReseauxComponent implements OnInit {

  @Input() invertedColor: boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

}
