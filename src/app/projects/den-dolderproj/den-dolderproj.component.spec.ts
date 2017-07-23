import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenDolderprojComponent } from './den-dolderproj.component';

describe('DenDolderprojComponent', () => {
  let component: DenDolderprojComponent;
  let fixture: ComponentFixture<DenDolderprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenDolderprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenDolderprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
