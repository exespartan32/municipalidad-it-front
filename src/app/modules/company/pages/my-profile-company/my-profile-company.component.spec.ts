import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileCompanyComponent } from './my-profile-company.component';

describe('MyProfileCompanyComponent', () => {
  let component: MyProfileCompanyComponent;
  let fixture: ComponentFixture<MyProfileCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
