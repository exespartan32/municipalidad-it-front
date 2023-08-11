import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicantComponent } from './dashboard-applicant.component';

describe('DashboardApplicantComponent', () => {
  let component: DashboardApplicantComponent;
  let fixture: ComponentFixture<DashboardApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
