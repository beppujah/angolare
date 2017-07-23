import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkullComponent } from './skull.component';

describe('SkullComponent', () => {
  let component: SkullComponent;
  let fixture: ComponentFixture<SkullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
