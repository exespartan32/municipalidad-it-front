import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOffersCompanyComponent } from './my-offers-company.component';

describe('MyOffersCompanyComponent', () => {
  let component: MyOffersCompanyComponent;
  let fixture: ComponentFixture<MyOffersCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOffersCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOffersCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
