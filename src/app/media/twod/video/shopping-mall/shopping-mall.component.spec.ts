import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMallComponent } from './shopping-mall.component';

describe('ShoppingMallComponent', () => {
  let component: ShoppingMallComponent;
  let fixture: ComponentFixture<ShoppingMallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingMallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
