import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRealisationComponent } from './page-realisation/page-realisation.component';
import { PageRealisationsComponent } from './page-realisations/page-realisations.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: PageHomeComponent },
  { path: "realisations/:id", component: PageRealisationComponent },
  { path: "realisations", component: PageRealisationsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
