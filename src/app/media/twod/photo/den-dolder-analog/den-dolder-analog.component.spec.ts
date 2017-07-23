import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenDolderAnalogComponent } from './den-dolder-analog.component';

describe('DenDolderAnalogComponent', () => {
  let component: DenDolderAnalogComponent;
  let fixture: ComponentFixture<DenDolderAnalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenDolderAnalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenDolderAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
