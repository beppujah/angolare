import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealersComponent } from './healers.component';

describe('HealersComponent', () => {
  let component: HealersComponent;
  let fixture: ComponentFixture<HealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
