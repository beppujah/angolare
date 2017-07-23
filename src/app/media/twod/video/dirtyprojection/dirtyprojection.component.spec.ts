import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyprojectionComponent } from './dirtyprojection.component';

describe('DirtyprojectionComponent', () => {
  let component: DirtyprojectionComponent;
  let fixture: ComponentFixture<DirtyprojectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyprojectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
