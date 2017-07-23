import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitsComponent } from './portraits.component';

describe('PortraitsComponent', () => {
  let component: PortraitsComponent;
  let fixture: ComponentFixture<PortraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
