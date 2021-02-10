import { Component, OnInit } from '@angular/core';
import { Realisation } from '../models/realisation.model';
import { RealisationService } from '../services/realisation.service';

@Component({
  selector: 'app-page-realisations',
  templateUrl: './page-realisations.component.html',
  styleUrls: ['./page-realisations.component.scss']
})
export class PageRealisationsComponent implements OnInit {

  realisations: Realisation[] = [];
  
  constructor(
    private realisationService: RealisationService
  ) { }

  ngOnInit(): void {
    this.realisationService.loadRealisations()
      .subscribe(x => {
        this.realisations = x;
      });
  }

}
