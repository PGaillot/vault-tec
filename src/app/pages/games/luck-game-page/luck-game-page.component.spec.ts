import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckGamePageComponent } from './luck-game-page.component';

describe('LuckGamePageComponent', () => {
  let component: LuckGamePageComponent;
  let fixture: ComponentFixture<LuckGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuckGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
