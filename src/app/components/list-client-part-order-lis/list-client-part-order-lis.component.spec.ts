import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientPartOrderLisComponent } from './list-client-part-order-lis.component';

describe('ListClientPartOrderLisComponent', () => {
  let component: ListClientPartOrderLisComponent;
  let fixture: ComponentFixture<ListClientPartOrderLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientPartOrderLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientPartOrderLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
