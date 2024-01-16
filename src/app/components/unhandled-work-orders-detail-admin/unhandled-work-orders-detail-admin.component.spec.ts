import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhandledWorkOrdersDetailAdminComponent } from './unhandled-work-orders-detail-admin.component';

describe('UnhandledWorkOrdersDetailAdminComponent', () => {
  let component: UnhandledWorkOrdersDetailAdminComponent;
  let fixture: ComponentFixture<UnhandledWorkOrdersDetailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhandledWorkOrdersDetailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhandledWorkOrdersDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
