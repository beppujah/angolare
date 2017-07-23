import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebubblesComponent } from './firebubbles.component';

describe('FirebubblesComponent', () => {
  let component: FirebubblesComponent;
  let fixture: ComponentFixture<FirebubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
