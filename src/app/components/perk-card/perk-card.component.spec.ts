import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkCardComponent } from './perk-card.component';

describe('PerkCardComponent', () => {
  let component: PerkCardComponent;
  let fixture: ComponentFixture<PerkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerkCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
