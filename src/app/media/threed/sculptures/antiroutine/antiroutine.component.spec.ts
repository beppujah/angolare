import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiroutineComponent } from './antiroutine.component';

describe('AntiroutineComponent', () => {
  let component: AntiroutineComponent;
  let fixture: ComponentFixture<AntiroutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiroutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiroutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
