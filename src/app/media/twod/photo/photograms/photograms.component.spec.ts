import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogramsComponent } from './photograms.component';

describe('PhotogramsComponent', () => {
  let component: PhotogramsComponent;
  let fixture: ComponentFixture<PhotogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
