import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthGamePageComponent } from './strength-game-page.component';

describe('StrengthGamePageComponent', () => {
  let component: StrengthGamePageComponent;
  let fixture: ComponentFixture<StrengthGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
