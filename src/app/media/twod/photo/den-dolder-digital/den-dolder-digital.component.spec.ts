import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenDolderDigitalComponent } from './den-dolder-digital.component';

describe('DenDolderDigitalComponent', () => {
  let component: DenDolderDigitalComponent;
  let fixture: ComponentFixture<DenDolderDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenDolderDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenDolderDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
