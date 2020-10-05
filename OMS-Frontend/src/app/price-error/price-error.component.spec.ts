import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceErrorComponent } from './price-error.component';

describe('PriceErrorComponent', () => {
  let component: PriceErrorComponent;
  let fixture: ComponentFixture<PriceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
