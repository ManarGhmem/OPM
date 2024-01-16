import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderDetailsAdminComponent } from './work-order-details-admin.component';

describe('WorkOrderDetailsAdminComponent', () => {
  let component: WorkOrderDetailsAdminComponent;
  let fixture: ComponentFixture<WorkOrderDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
