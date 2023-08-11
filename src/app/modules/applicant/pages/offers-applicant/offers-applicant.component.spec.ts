import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersApplicantComponent } from './offers-applicant.component';

describe('OffersApplicantComponent', () => {
  let component: OffersApplicantComponent;
  let fixture: ComponentFixture<OffersApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
