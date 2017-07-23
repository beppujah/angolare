import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfdeComponent } from './efde.component';

describe('EfdeComponent', () => {
  let component: EfdeComponent;
  let fixture: ComponentFixture<EfdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
