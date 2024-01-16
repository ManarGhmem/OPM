import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUsersComponent } from './contract-users.component';

describe('ContractUsersComponent', () => {
  let component: ContractUsersComponent;
  let fixture: ComponentFixture<ContractUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
