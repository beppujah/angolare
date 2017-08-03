import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
 

@Component({
  selector: 'app-collages',
  templateUrl: './collages.component.html',
  styleUrls: ['./collages.component.css'],

})
export class CollagesComponent implements OnInit{



	toggleShrink1: boolean=false;
  toggleShrink2: boolean=false;
  toggleShrink3: boolean=false;
  toggleShrink4: boolean=false;
  toggleShrink5: boolean=false;
  toggleShrink6: boolean=false;
  toggleShrink7: boolean=false;

  constructor(private scrollService: ScrollToService) { }


  ngOnInit() {
  	
  }
scrollTo(element) {
        this.scrollService.scrollTo(element);
       
    }


}
