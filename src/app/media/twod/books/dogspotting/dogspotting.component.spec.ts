import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogspottingComponent } from './dogspotting.component';

describe('DogspottingComponent', () => {
  let component: DogspottingComponent;
  let fixture: ComponentFixture<DogspottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogspottingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogspottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
