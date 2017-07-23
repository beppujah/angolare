import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoukComponent } from './anouk.component';

describe('AnoukComponent', () => {
  let component: AnoukComponent;
  let fixture: ComponentFixture<AnoukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
