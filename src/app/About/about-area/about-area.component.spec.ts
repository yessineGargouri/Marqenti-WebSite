import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAreaComponent } from './about-area.component';

describe('AboutAreaComponent', () => {
  let component: AboutAreaComponent;
  let fixture: ComponentFixture<AboutAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
