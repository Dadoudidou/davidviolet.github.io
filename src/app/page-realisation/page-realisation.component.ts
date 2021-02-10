import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { take } from 'rxjs/operators';
import { FileMD, FileSlide, Realisation } from '../models/realisation.model';
import { RealisationService } from '../services/realisation.service';
import { SlidesComponent } from '../shared/slides/slides.component';

@Component({
  selector: 'app-page-realisation',
  templateUrl: './page-realisation.component.html',
  styleUrls: ['./page-realisation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageRealisationComponent implements OnInit {

  loading: boolean = false;
  realisation: Realisation = undefined;
  folder: string = "";
  @ViewChild("content", { read: ViewContainerRef }) contentRef: ViewContainerRef

  constructor(
    private route: ActivatedRoute,
    private realisationsService: RealisationService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log("page realisation");
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
        this.initPage();
        
      });
    });
  }


  private SlideRegEx = /{{slide:(?<from>[\w\d\.\-\_]*):(?<to>[\w\d\.\-\_]*)}}/gm;

  createPageWithContent(content: string){
    let baseUrl = this.folder + this.realisation.tag + "/";
    let elements = [];

    //Slides
    let slide = this.SlideRegEx.exec(content);
    if(slide){
      elements.push({ type: "markdown", content: content.substring(0, slide.index) });
      elements.push({ type: "slide", content: slide });
      elements.push({ type: "markdown", content: content.substring(slide.index + slide[0].length) })
    } else {
      elements.push({ type: "markdown", content: content })
    }

    elements.forEach(elem => {
      switch(elem.type){
        case "markdown":
          {
            let cf = this.componentFactoryResolver.resolveComponentFactory(MarkdownComponent);
            let comp = this.contentRef.createComponent(cf);
            comp.instance.render(elem.content);
          }
          break;
        case "slide":
          {
            let from = parseInt((/(?<number>\d+)/g).exec(elem.content.groups.from as string).groups.number);
            let to = parseInt((/(?<number>\d+)/g).exec(elem.content.groups.to as string).groups.number);
            let template = (elem.content.groups.from as string).replace(from.toString(), "{{x}}");
            let _slides: string[] = [];
            for(let i=from; i<= to; i++) _slides.push(baseUrl + template.replace("{{x}}", i.toString()));

            let cf = this.componentFactoryResolver.resolveComponentFactory(SlidesComponent);
            let comp = this.contentRef.createComponent(cf);
            comp.instance.slides = _slides;

          }
          break;
      }
    });
  }




  initPage(){
    this.contentRef.clear();
    if(!this.realisation) return;
    let _file = this.realisation.file;
    let url: string = this.folder + this.realisation.tag + "/" + _file;
    this.http.get(url, { responseType: "text" }).pipe(take(1)).subscribe(content => {
      this.createPageWithContent(content);
    });
  }

}
