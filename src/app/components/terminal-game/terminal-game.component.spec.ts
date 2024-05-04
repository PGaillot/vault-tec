import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalGameComponent } from './terminal-game.component';

describe('TerminalGameComponent', () => {
  let component: TerminalGameComponent;
  let fixture: ComponentFixture<TerminalGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminalGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
