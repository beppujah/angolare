import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedReferencesComponent } from './mixed-references.component';

describe('MixedReferencesComponent', () => {
  let component: MixedReferencesComponent;
  let fixture: ComponentFixture<MixedReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
