import { Component, OnInit,ViewChild  } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource ,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormerService } from './../../pages/services/former/former.service';
import { FormerAuthService } from './../../pages/services/former/former-auth.service';
declare interface TableData {
  
  courses: string[][];
}
declare interface TableData1 {
  gouvernorat: string[];
  
  
}
declare interface TableData3 {
  slide: string[];
  courses: string[][];
}

@Component({
  selector: 'app-home-former',
  templateUrl: './home-former.component.html',
  styleUrls: ['./home-former.component.css']
})
export class HomeFormerComponent implements OnInit {

  opened=true;
showFiller = false;
  
showNavigationArrows = false;
showNavigationIndicators = false;
images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

selected = 0;
hovered = 0;
readonly = false;
public tableData1!: TableData;
public tableData2!: TableData1;

constructor(config: NgbCarouselConfig,public formerAuthService:FormerAuthService,public formerService:FormerService,) {
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
 }
 

ngOnInit(): void {
  this.tableData2={ gouvernorat: [ 'Ariana', 'Bèja', 'BenArous', 'Bizerte', 'Gabès',
  'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kébili',
  'Le Kef', 'Mahdia', 'La Manouba', 'Médenine', 'Monastir',
  'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse',
  'Tataouine', 'Tozeur', 'Tunis', 'Zaghouane']};
  this.tableData1 = {
   
    courses: [
        ['Français', 'Arabe', 'Dance', 'Yoga','Piano', 'Maths'],
         ['Anglais','Developpent', 'Tennis', 'Allemand', 'Peinture'],
         ['SVT', 'Chimie', 'Phylosophie'],
        
    ]
};
}
region= [
  {'id':1,'name':'Sousse','image':'../../../assets/img/sousse.jpg'},
  {'id':2,'name':'Monastir','image':'../../../assets/img/monastir.jpg'},
  {'id':3,'name':'Sfax','image':'../../../assets/img/sfax.jpg'},
  ]
course= [
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/angular.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/typescript.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/reactjs.jpg','linkpage':'allprof'},
],
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
]
]
paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
pauseOnFocus = true;

@ViewChild('carousel', { static: true })
carousel!: NgbCarousel;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (this.unpauseOnArrow && slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}



  
toggleSidebar(){
  this.opened=!this.opened;
}
public isLoggedInF() {
  return this.formerAuthService.isLoggedInF();
}

}
