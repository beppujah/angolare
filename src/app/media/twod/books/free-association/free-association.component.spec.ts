import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAssociationComponent } from './free-association.component';

describe('FreeAssociationComponent', () => {
  let component: FreeAssociationComponent;
  let fixture: ComponentFixture<FreeAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
