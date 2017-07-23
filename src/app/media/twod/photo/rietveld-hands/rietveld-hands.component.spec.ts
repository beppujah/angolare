import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RietveldHandsComponent } from './rietveld-hands.component';

describe('RietveldHandsComponent', () => {
  let component: RietveldHandsComponent;
  let fixture: ComponentFixture<RietveldHandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RietveldHandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RietveldHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
