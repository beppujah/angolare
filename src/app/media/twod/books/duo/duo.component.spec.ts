import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoComponent } from './duo.component';

describe('DuoComponent', () => {
  let component: DuoComponent;
  let fixture: ComponentFixture<DuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
