import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrderClientListComponent } from './part-order-client-list.component';

describe('PartOrderClientListComponent', () => {
  let component: PartOrderClientListComponent;
  let fixture: ComponentFixture<PartOrderClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOrderClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOrderClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
