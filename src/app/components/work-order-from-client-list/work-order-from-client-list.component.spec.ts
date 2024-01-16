import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderFromClientListComponent } from './work-order-from-client-list.component';

describe('WorkOrderFromClientListComponent', () => {
  let component: WorkOrderFromClientListComponent;
  let fixture: ComponentFixture<WorkOrderFromClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderFromClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderFromClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
