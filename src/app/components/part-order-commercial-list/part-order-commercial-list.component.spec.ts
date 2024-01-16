import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrderCommercialListComponent } from './part-order-commercial-list.component';

describe('PartOrderCommercialListComponent', () => {
  let component: PartOrderCommercialListComponent;
  let fixture: ComponentFixture<PartOrderCommercialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOrderCommercialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOrderCommercialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
