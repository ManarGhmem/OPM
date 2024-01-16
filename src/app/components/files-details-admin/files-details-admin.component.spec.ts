import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDetailsAdminComponent } from './files-details-admin.component';

describe('FilesDetailsAdminComponent', () => {
  let component: FilesDetailsAdminComponent;
  let fixture: ComponentFixture<FilesDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
