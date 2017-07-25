import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentaxComponent } from './pentax.component';

describe('PentaxComponent', () => {
  let component: PentaxComponent;
  let fixture: ComponentFixture<PentaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
