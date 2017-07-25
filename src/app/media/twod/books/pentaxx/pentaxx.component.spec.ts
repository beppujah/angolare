import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentaxxComponent } from './pentaxx.component';

describe('PentaxxComponent', () => {
  let component: PentaxxComponent;
  let fixture: ComponentFixture<PentaxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentaxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentaxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
