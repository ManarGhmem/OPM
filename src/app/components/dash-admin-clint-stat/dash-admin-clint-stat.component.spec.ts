import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminClintStatComponent } from './dash-admin-clint-stat.component';

describe('DashAdminClintStatComponent', () => {
  let component: DashAdminClintStatComponent;
  let fixture: ComponentFixture<DashAdminClintStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAdminClintStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdminClintStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
