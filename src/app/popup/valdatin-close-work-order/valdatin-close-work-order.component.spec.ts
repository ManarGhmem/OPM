import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdatinCloseWorkOrderComponent } from './valdatin-close-work-order.component';

describe('ValdatinCloseWorkOrderComponent', () => {
  let component: ValdatinCloseWorkOrderComponent;
  let fixture: ComponentFixture<ValdatinCloseWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValdatinCloseWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdatinCloseWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
