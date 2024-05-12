import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilityGamePageComponent } from './agility-game-page.component';

describe('AgilityGamePageComponent', () => {
  let component: AgilityGamePageComponent;
  let fixture: ComponentFixture<AgilityGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgilityGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgilityGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
