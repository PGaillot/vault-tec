import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialHomePageComponent } from './special-home-page.component';

describe('SpecialHomePageComponent', () => {
  let component: SpecialHomePageComponent;
  let fixture: ComponentFixture<SpecialHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
