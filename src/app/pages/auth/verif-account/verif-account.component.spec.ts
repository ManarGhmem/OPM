import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifAccountComponent } from './verif-account.component';

describe('VerifAccountComponent', () => {
  let component: VerifAccountComponent;
  let fixture: ComponentFixture<VerifAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
