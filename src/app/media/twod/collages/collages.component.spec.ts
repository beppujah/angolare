import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagesComponent } from './collages.component';

describe('CollagesComponent', () => {
  let component: CollagesComponent;
  let fixture: ComponentFixture<CollagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
