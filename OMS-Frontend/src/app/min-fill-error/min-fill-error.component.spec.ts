import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinFillErrorComponent } from './min-fill-error.component';

describe('MinFillErrorComponent', () => {
  let component: MinFillErrorComponent;
  let fixture: ComponentFixture<MinFillErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinFillErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinFillErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
