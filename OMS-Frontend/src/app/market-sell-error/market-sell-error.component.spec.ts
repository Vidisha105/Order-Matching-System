import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSellErrorComponent } from './market-sell-error.component';

describe('MarketSellErrorComponent', () => {
  let component: MarketSellErrorComponent;
  let fixture: ComponentFixture<MarketSellErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSellErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSellErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
