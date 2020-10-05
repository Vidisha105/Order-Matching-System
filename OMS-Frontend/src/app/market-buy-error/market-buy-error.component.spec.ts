import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBuyErrorComponent } from './market-buy-error.component';

describe('MarketBuyErrorComponent', () => {
  let component: MarketBuyErrorComponent;
  let fixture: ComponentFixture<MarketBuyErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBuyErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBuyErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
