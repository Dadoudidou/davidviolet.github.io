import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRealisationsComponent } from './page-realisations/page-realisations.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: PageHomeComponent },
  { path: "realisations", component: PageRealisationsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
