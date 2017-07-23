import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirasComponent } from './kiras.component';

describe('KirasComponent', () => {
  let component: KirasComponent;
  let fixture: ComponentFixture<KirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
