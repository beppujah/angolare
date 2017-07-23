import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridoComponent } from './frido.component';

describe('FridoComponent', () => {
  let component: FridoComponent;
  let fixture: ComponentFixture<FridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
