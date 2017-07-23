import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodComponent } from './twod.component';

describe('TwodComponent', () => {
  let component: TwodComponent;
  let fixture: ComponentFixture<TwodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
