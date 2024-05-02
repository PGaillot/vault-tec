import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPageComponent } from './special-page.component';

describe('SpecialPageComponent', () => {
  let component: SpecialPageComponent;
  let fixture: ComponentFixture<SpecialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
