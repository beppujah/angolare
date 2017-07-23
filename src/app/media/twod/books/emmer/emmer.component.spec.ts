import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmerComponent } from './emmer.component';

describe('EmmerComponent', () => {
  let component: EmmerComponent;
  let fixture: ComponentFixture<EmmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
