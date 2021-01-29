import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Realisation } from '../models/realisation.model';
import { map, shareReplay, take } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class RealisationService {

  constructor(
    private http: HttpClient
  ) { }

  getFolder(){
    return "/assets/realisations/";
  }

  loadRealisations(){
    return this.http.get<Realisation[]>("assets/realisations/realisations.json")
      .pipe(
        take(1),
        map(results => results.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())),
        shareReplay(1)
      );
  }
}
