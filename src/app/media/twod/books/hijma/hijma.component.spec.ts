import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijmaComponent } from './hijma.component';

describe('HijmaComponent', () => {
  let component: HijmaComponent;
  let fixture: ComponentFixture<HijmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
