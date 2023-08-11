import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApplicantComponent } from './details-applicant.component';

describe('DetailsApplicantComponent', () => {
  let component: DetailsApplicantComponent;
  let fixture: ComponentFixture<DetailsApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
