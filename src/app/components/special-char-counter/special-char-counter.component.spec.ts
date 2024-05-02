import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCharCounterComponent } from './special-char-counter.component';

describe('SpecialCharCounterComponent', () => {
  let component: SpecialCharCounterComponent;
  let fixture: ComponentFixture<SpecialCharCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialCharCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialCharCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
