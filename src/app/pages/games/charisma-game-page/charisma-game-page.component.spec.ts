import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharismaGamePageComponent } from './charisma-game-page.component';

describe('CharismaGamePageComponent', () => {
  let component: CharismaGamePageComponent;
  let fixture: ComponentFixture<CharismaGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharismaGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharismaGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
