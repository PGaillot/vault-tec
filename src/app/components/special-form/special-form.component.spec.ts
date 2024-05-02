import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFormComponent } from './special-form.component';

describe('SpecialFormComponent', () => {
  let component: SpecialFormComponent;
  let fixture: ComponentFixture<SpecialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
