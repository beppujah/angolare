import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomehowPurechanceComponent } from './somehow-purechance.component';

describe('SomehowPurechanceComponent', () => {
  let component: SomehowPurechanceComponent;
  let fixture: ComponentFixture<SomehowPurechanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomehowPurechanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomehowPurechanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
