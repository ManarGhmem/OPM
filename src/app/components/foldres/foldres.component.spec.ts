import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldresComponent } from './foldres.component';

describe('FoldresComponent', () => {
  let component: FoldresComponent;
  let fixture: ComponentFixture<FoldresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
