import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompanyComponent } from './details-company.component';

describe('DetailsCompanyComponent', () => {
  let component: DetailsCompanyComponent;
  let fixture: ComponentFixture<DetailsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
