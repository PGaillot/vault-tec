import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurenceGamePageComponent } from './endurence-game-page.component';

describe('EndurenceGamePageComponent', () => {
  let component: EndurenceGamePageComponent;
  let fixture: ComponentFixture<EndurenceGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndurenceGamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndurenceGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
