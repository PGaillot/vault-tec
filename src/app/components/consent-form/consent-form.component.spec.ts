import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormComponent } from './consent-form.component';

describe('ConsentFormComponent', () => {
  let component: ConsentFormComponent;
  let fixture: ComponentFixture<ConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
