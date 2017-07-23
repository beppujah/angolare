import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLandscapeComponent } from './body-landscape.component';

describe('BodyLandscapeComponent', () => {
  let component: BodyLandscapeComponent;
  let fixture: ComponentFixture<BodyLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
