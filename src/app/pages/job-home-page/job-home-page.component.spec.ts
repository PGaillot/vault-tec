import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHomePageComponent } from './job-home-page.component';

describe('JobHomePageComponent', () => {
  let component: JobHomePageComponent;
  let fixture: ComponentFixture<JobHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
