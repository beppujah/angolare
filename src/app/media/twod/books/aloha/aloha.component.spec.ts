import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlohaComponent } from './aloha.component';

describe('AlohaComponent', () => {
  let component: AlohaComponent;
  let fixture: ComponentFixture<AlohaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlohaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlohaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
