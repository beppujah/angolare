import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenDolderComponent } from './den-dolder.component';

describe('DenDolderComponent', () => {
  let component: DenDolderComponent;
  let fixture: ComponentFixture<DenDolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenDolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenDolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
