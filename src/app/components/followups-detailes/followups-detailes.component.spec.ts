import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupsDetailesComponent } from './followups-detailes.component';

describe('FollowupsDetailesComponent', () => {
  let component: FollowupsDetailesComponent;
  let fixture: ComponentFixture<FollowupsDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupsDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupsDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
