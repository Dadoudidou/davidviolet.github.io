import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Realisation } from 'src/app/models/realisation.model';
import { RealisationService } from 'src/app/services/realisation.service';

@Component({
  selector: 'app-section-realisations',
  templateUrl: './section-realisations.component.html',
  styleUrls: ['./section-realisations.component.scss']
})
export class SectionRealisationsComponent implements OnInit {

  realisations: Realisation[] = [].fill(undefined);

  constructor(
    private realisationService: RealisationService
  ) { }

  ngOnInit(): void {
    this.realisationService.loadRealisations()
      .pipe( map(r => r.slice(0, 6)))
      .subscribe(x => {
        // toujours 6 éléments
        this.realisations = x.concat(new Array(6)).slice(0, 6);
      });
  }

}
