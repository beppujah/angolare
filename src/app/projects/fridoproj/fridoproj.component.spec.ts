import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridoprojComponent } from './fridoproj.component';

describe('FridoprojComponent', () => {
  let component: FridoprojComponent;
  let fixture: ComponentFixture<FridoprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridoprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridoprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
