import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRealisationsComponent } from './page-realisations/page-realisations.component';
import { SectionPresentationComponent } from './page-home/sections/section-presentation/section-presentation.component';
import { SectionAuditComponent } from './page-home/sections/section-audit/section-audit.component';
import { SectionConceptionComponent } from './page-home/sections/section-conception/section-conception.component';
import { SectionDeveloppementComponent } from './page-home/sections/section-developpement/section-developpement.component';
import { SectionAccompagnementComponent } from './page-home/sections/section-accompagnement/section-accompagnement.component';
import { SectionRealisationsComponent } from './page-home/sections/section-realisations/section-realisations.component';
import { SectionContactComponent } from './page-home/sections/section-contact/section-contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageRealisationsComponent,
    SectionPresentationComponent,
    SectionAuditComponent,
    SectionConceptionComponent,
    SectionDeveloppementComponent,
    SectionAccompagnementComponent,
    SectionRealisationsComponent,
    SectionContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
