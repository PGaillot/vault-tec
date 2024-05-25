import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultHomePageComponent } from './vault-home-page.component';

describe('VaultHomePageComponent', () => {
  let component: VaultHomePageComponent;
  let fixture: ComponentFixture<VaultHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaultHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
