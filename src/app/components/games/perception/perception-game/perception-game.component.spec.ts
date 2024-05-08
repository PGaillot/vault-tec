import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceptionGameComponent } from './perception-game.component';

describe('PerceptionGameComponent', () => {
  let component: PerceptionGameComponent;
  let fixture: ComponentFixture<PerceptionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerceptionGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerceptionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
