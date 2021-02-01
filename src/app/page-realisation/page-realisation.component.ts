import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../models/realisation.model';
import { RealisationService } from '../services/realisation.service';

@Component({
  selector: 'app-page-realisation',
  templateUrl: './page-realisation.component.html',
  styleUrls: ['./page-realisation.component.scss']
})
export class PageRealisationComponent implements OnInit {

  loading: boolean = false;
  realisation: Realisation = undefined;
  folder: string = "";

  constructor(
    private route: ActivatedRoute,
    private realisationsService: RealisationService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.folder = this.realisationsService.getFolder();
    this.route.params.subscribe(routeParams => { 
      let __id: string = routeParams["id"];
      if(!__id) {
        this.loading = false;
        return;
      }
      this.realisationsService.loadRealisations().subscribe(realisations => {
        this.loading = false;
        this.realisation = realisations.find(x => x.tag.toLowerCase() == __id.toLowerCase());
      });
    });
  }

}
