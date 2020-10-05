import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComponentComponent } from './time-component.component';

describe('TimeComponentComponent', () => {
  let component: TimeComponentComponent;
  let fixture: ComponentFixture<TimeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
