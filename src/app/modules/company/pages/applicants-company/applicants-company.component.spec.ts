import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsCompanyComponent } from './applicants-company.component';

describe('ApplicantsCompanyComponent', () => {
  let component: ApplicantsCompanyComponent;
  let fixture: ComponentFixture<ApplicantsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
