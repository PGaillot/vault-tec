import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceptionGamePageComponent } from './perception-game-page.component';

describe('PerceptionGamePageComponent', () => {
  let component: PerceptionGamePageComponent;
  let fixture: ComponentFixture<PerceptionGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerceptionGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerceptionGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
