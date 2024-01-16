import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WODTComponent } from './wodt.component';

describe('WODTComponent', () => {
  let component: WODTComponent;
  let fixture: ComponentFixture<WODTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WODTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WODTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
