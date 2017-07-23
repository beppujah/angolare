import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationsComponent } from './installations.component';

describe('InstallationsComponent', () => {
  let component: InstallationsComponent;
  let fixture: ComponentFixture<InstallationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
