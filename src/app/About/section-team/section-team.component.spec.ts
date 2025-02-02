import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeamComponent } from './section-team.component';

describe('SectionTeamComponent', () => {
  let component: SectionTeamComponent;
  let fixture: ComponentFixture<SectionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
