import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomeroComponent } from './romero.component';

describe('RomeroComponent', () => {
  let component: RomeroComponent;
  let fixture: ComponentFixture<RomeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
