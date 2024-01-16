import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkorderComponent } from './tech-workorder.component';

describe('TechWorkorderComponent', () => {
  let component: TechWorkorderComponent;
  let fixture: ComponentFixture<TechWorkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
