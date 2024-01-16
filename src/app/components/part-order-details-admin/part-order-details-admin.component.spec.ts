import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrderDetailsAdminComponent } from './part-order-details-admin.component';

describe('PartOrderDetailsAdminComponent', () => {
  let component: PartOrderDetailsAdminComponent;
  let fixture: ComponentFixture<PartOrderDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOrderDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOrderDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
