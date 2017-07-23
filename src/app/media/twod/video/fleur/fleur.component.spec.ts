import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurComponent } from './fleur.component';

describe('FleurComponent', () => {
  let component: FleurComponent;
  let fixture: ComponentFixture<FleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
