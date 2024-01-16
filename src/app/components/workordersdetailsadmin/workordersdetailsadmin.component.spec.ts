import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkordersdetailsadminComponent } from './workordersdetailsadmin.component';

describe('WorkordersdetailsadminComponent', () => {
  let component: WorkordersdetailsadminComponent;
  let fixture: ComponentFixture<WorkordersdetailsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkordersdetailsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkordersdetailsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
