import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CramerComponent } from './cramer.component';

describe('CramerComponent', () => {
  let component: CramerComponent;
  let fixture: ComponentFixture<CramerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CramerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CramerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
