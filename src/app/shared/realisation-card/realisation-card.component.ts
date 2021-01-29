import { Component, Input, OnInit } from '@angular/core';
import { Realisation } from 'src/app/models/realisation.model';
import { RealisationService } from 'src/app/services/realisation.service';

@Component({
  selector: 'app-realisation-card',
  templateUrl: './realisation-card.component.html',
  styleUrls: ['./realisation-card.component.scss']
})
export class RealisationCardComponent implements OnInit {

  @Input() realisation: Realisation = undefined;
  folder: string = ""

  constructor(
    private realisationService: RealisationService
  ) { }

  ngOnInit(): void {
    this.folder = this.realisationService.getFolder();
  }

}
