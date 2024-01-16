import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashClientJobComponent } from './dash-client-job.component';

describe('DashClientJobComponent', () => {
  let component: DashClientJobComponent;
  let fixture: ComponentFixture<DashClientJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashClientJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashClientJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
