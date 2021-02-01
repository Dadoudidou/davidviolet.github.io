import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http"

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
import { LogoLinkedinComponent } from './shared/logo-linkedin/logo-linkedin.component';
import { LogoDribbbleComponent } from './shared/logo-dribbble/logo-dribbble.component';
import { IllustrationPresentationComponent } from './shared/illustration-presentation/illustration-presentation.component';
import { IllustrationAuditComponent } from './shared/illustration-audit/illustration-audit.component';
import { IllustrationConceptionComponent } from './shared/illustration-conception/illustration-conception.component';
import { IllustrationDeveloppementComponent } from './shared/illustration-developpement/illustration-developpement.component';
import { IllustrationAccompagnementComponent } from './shared/illustration-accompagnement/illustration-accompagnement.component';
import { LogoReseauxComponent } from './shared/logo-reseaux/logo-reseaux.component';
import { RealisationCardComponent } from './shared/realisation-card/realisation-card.component';
import { MarkdownModule } from 'ngx-markdown';
import { PageRealisationComponent } from './page-realisation/page-realisation.component';

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
    LogoLinkedinComponent,
    LogoDribbbleComponent,
    IllustrationPresentationComponent,
    IllustrationAuditComponent,
    IllustrationConceptionComponent,
    IllustrationDeveloppementComponent,
    IllustrationAccompagnementComponent,
    LogoReseauxComponent,
    RealisationCardComponent,
    PageRealisationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
