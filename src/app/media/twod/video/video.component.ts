import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {



	toggleModal3: boolean=false;

  constructor() { }

  ngOnInit() {}
  

@ViewChild('videoFleur') videoFleur: any;

toggleVideo(event: any) {
    
    this.videoFleur.nativeElement.paused ? this.videoFleur.nativeElement.play() : this.videoFleur.nativeElement.pause();
}

stopVideo(event: any) {

	this.videoFleur.nativeElement.pause();
  
}


}
