import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileApplicantComponent } from './my-profile-applicant.component';

describe('MyProfileApplicantComponent', () => {
  let component: MyProfileApplicantComponent;
  let fixture: ComponentFixture<MyProfileApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
